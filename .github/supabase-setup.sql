-- Supabase Database Setup for Gallery Images
-- Run this script in your Supabase SQL Editor

-- 1. Create the gallery_images table
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    url TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create an index on display_order for faster queries
CREATE INDEX IF NOT EXISTS idx_gallery_images_order ON public.gallery_images(display_order);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- 4. Create policies for public read access
CREATE POLICY "Public can view gallery images"
ON public.gallery_images
FOR SELECT
TO public
USING (true);

-- 5. Create policies for authenticated users (admins) to insert
CREATE POLICY "Authenticated users can insert gallery images"
ON public.gallery_images
FOR INSERT
TO authenticated
WITH CHECK (true);

-- 6. Create policies for authenticated users (admins) to delete
CREATE POLICY "Authenticated users can delete gallery images"
ON public.gallery_images
FOR DELETE
TO authenticated
USING (true);

-- 7. Create policies for authenticated users (admins) to update
CREATE POLICY "Authenticated users can update gallery images"
ON public.gallery_images
FOR UPDATE
TO authenticated
USING (true);

-- 8. Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery-images', 'gallery-images', true)
ON CONFLICT (id) DO NOTHING;

-- 9. Create storage policies for public read
CREATE POLICY "Public can view gallery images in storage"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'gallery-images');

-- 10. Create storage policies for authenticated users to upload
CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery-images');

-- 11. Create storage policies for authenticated users to delete
CREATE POLICY "Authenticated users can delete gallery images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'gallery-images');

-- 12. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 13. Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_gallery_images_updated_at ON public.gallery_images;
CREATE TRIGGER update_gallery_images_updated_at
    BEFORE UPDATE ON public.gallery_images
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Gallery images table and storage bucket setup completed successfully!';
END $$;
