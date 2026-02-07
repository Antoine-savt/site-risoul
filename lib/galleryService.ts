import { supabase } from './supabaseClient';

export interface GalleryImage {
    id: string;
    url: string;
    storage_path: string;
    display_order: number;
    created_at: string;
}

const BUCKET_NAME = 'gallery-images';

/**
 * Upload an image to Supabase Storage and save metadata to database
 */
export async function uploadImage(file: File): Promise<{ success: boolean; error?: string; image?: GalleryImage }> {
    try {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        // Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (uploadError) {
            console.error('Upload error:', uploadError);
            return { success: false, error: uploadError.message };
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(filePath);

        // Get current max order
        const { data: maxOrderData } = await supabase
            .from('gallery_images')
            .select('display_order')
            .order('display_order', { ascending: false })
            .limit(1)
            .single();

        const nextOrder = maxOrderData ? maxOrderData.display_order + 1 : 0;

        // Save metadata to database
        const { data: imageData, error: dbError } = await supabase
            .from('gallery_images')
            .insert({
                url: publicUrl,
                storage_path: filePath,
                display_order: nextOrder
            })
            .select()
            .single();

        if (dbError) {
            // Rollback: delete uploaded file
            await supabase.storage.from(BUCKET_NAME).remove([filePath]);
            console.error('Database error:', dbError);
            return { success: false, error: dbError.message };
        }

        return { success: true, image: imageData };
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return { success: false, error: error.message || 'Une erreur inattendue est survenue' };
    }
}

/**
 * Delete an image from storage and database
 */
export async function deleteImage(imageId: string, storagePath: string): Promise<{ success: boolean; error?: string }> {
    try {
        // Delete from database first
        const { error: dbError } = await supabase
            .from('gallery_images')
            .delete()
            .eq('id', imageId);

        if (dbError) {
            console.error('Database delete error:', dbError);
            return { success: false, error: dbError.message };
        }

        // Delete from storage
        const { error: storageError } = await supabase.storage
            .from(BUCKET_NAME)
            .remove([storagePath]);

        if (storageError) {
            console.error('Storage delete error:', storageError);
            // Don't return error since DB record is already deleted
        }

        return { success: true };
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return { success: false, error: error.message || 'Une erreur inattendue est survenue' };
    }
}

/**
 * Get all gallery images from database
 */
export async function getGalleryImages(): Promise<{ success: boolean; images?: GalleryImage[]; error?: string }> {
    try {
        const { data, error } = await supabase
            .from('gallery_images')
            .select('*')
            .order('display_order', { ascending: true });

        if (error) {
            console.error('Fetch error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, images: data || [] };
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return { success: false, error: error.message || 'Une erreur inattendue est survenue' };
    }
}

/**
 * Update image display order
 */
export async function updateImageOrder(imageId: string, newOrder: number): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await supabase
            .from('gallery_images')
            .update({ display_order: newOrder })
            .eq('id', imageId);

        if (error) {
            console.error('Update error:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return { success: false, error: error.message || 'Une erreur inattendue est survenue' };
    }
}
