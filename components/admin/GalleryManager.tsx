import React, { useState, useEffect } from 'react';
import { Upload, X, Loader, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import { uploadImage, deleteImage, getGalleryImages, GalleryImage } from '../../lib/galleryService';

const GalleryManager: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        setLoading(true);
        const result = await getGalleryImages();
        if (result.success && result.images) {
            setImages(result.images);
        } else {
            setError(result.error || 'Erreur lors du chargement des images');
        }
        setLoading(false);
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        setError(null);
        setSuccess(null);

        const file = files[0];

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Le fichier doit être une image');
            setUploading(false);
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError('L\'image ne doit pas dépasser 5MB');
            setUploading(false);
            return;
        }

        const result = await uploadImage(file);

        if (result.success && result.image) {
            setImages([...images, result.image]);
            setSuccess('Image ajoutée avec succès !');
            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(null), 3000);
        } else {
            setError(result.error || 'Erreur lors de l\'upload');
        }

        setUploading(false);
        // Reset file input
        e.target.value = '';
    };

    const handleDelete = async (image: GalleryImage) => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) {
            return;
        }

        setError(null);
        const result = await deleteImage(image.id, image.storage_path);

        if (result.success) {
            setImages(images.filter(img => img.id !== image.id));
            setSuccess('Image supprimée avec succès !');
            setTimeout(() => setSuccess(null), 3000);
        } else {
            setError(result.error || 'Erreur lors de la suppression');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader className="animate-spin text-blue-600" size={32} />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Gestion de la Galerie</h2>
                    <p className="text-sm text-gray-500 mt-1">{images.length} image(s) dans la galerie</p>
                </div>

                {/* Upload Button */}
                <label className="relative cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        disabled={uploading}
                        className="hidden"
                    />
                    <div className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all ${uploading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                        }`}>
                        {uploading ? (
                            <>
                                <Loader className="animate-spin" size={20} />
                                <span>Upload en cours...</span>
                            </>
                        ) : (
                            <>
                                <Upload size={20} />
                                <span>Ajouter une image</span>
                            </>
                        )}
                    </div>
                </label>
            </div>

            {/* Error/Success Messages */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                    <button onClick={() => setError(null)} className="ml-auto">
                        <X size={18} />
                    </button>
                </div>
            )}

            {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span>{success}</span>
                    <button onClick={() => setSuccess(null)} className="ml-auto">
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="relative group aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                        <img
                            src={image.url}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay with delete button */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center">
                            <button
                                onClick={() => handleDelete(image)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white p-3 rounded-full hover:bg-red-700 shadow-lg"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>

                        {/* Order badge */}
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-bold">
                            #{image.display_order + 1}
                        </div>
                    </div>
                ))}

                {/* Empty state */}
                {images.length === 0 && (
                    <div className="col-span-full text-center py-16 text-gray-400">
                        <Upload size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">Aucune image dans la galerie</p>
                        <p className="text-sm mt-1">Cliquez sur "Ajouter une image" pour commencer</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryManager;
