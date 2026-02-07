import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Dashboard: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                window.location.href = '/admin/login';
            } else {
                setUser(user);
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin/login';
    };

    if (loading) return <div className="p-8">Chargement...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b px-8 py-4 flex justify-between items-center text-black">
                <h1 className="text-xl font-bold ">Dashboard Admin</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{user?.email}</span>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:underline"
                    >
                        Déconnexion
                    </button>
                </div>
            </nav>

            <main className="p-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h2 className="text-lg font-bold mb-4 text-black">Gestion des Témoignages</h2>
                        <p className="text-gray-500 text-sm mb-4">Ajoutez ou modifiez les avis clients de la page d'accueil.</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Gérer</button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border text-black">
                        <h2 className="text-lg font-bold mb-4 ">Gestion de la Galerie</h2>
                        <p className="text-gray-500 text-sm mb-4">Téléchargez de nouvelles photos du chalet.</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Gérer</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
