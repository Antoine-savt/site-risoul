import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import GalleryManager from './GalleryManager';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'gallery' | 'testimonials'>('gallery');

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                navigate('/admin/login');
            } else {
                setUser(user);
            }
            setLoading(false);
        };
        checkUser();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Chargement...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
                    <p className="text-xs text-gray-500 mt-0.5">Chalet Risoul</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{user?.email}</span>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:text-red-700 font-semibold hover:underline transition"
                    >
                        Déconnexion
                    </button>
                </div>
            </nav>

            <main className="p-8 max-w-7xl mx-auto">
                {/* Tabs */}
                <div className="mb-8 border-b border-gray-200">
                    <div className="flex gap-6">
                        <button
                            onClick={() => setActiveTab('gallery')}
                            className={`pb-4 px-2 font-semibold transition-all border-b-2 ${activeTab === 'gallery'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Gestion de la Galerie
                        </button>
                        <button
                            onClick={() => setActiveTab('testimonials')}
                            className={`pb-4 px-2 font-semibold transition-all border-b-2 ${activeTab === 'testimonials'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Gestion des Témoignages
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl shadow-sm border p-8">
                    {activeTab === 'gallery' && <GalleryManager />}

                    {activeTab === 'testimonials' && (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-lg font-medium">Gestion des témoignages</p>
                            <p className="text-sm mt-2">Cette fonctionnalité sera disponible prochainement</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

