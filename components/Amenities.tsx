import React from 'react';
import SectionHeading from './SectionHeading';
import { 
  Bed, 
  Bath, 
  Home, 
  UtensilsCrossed, 
  Wifi,
  MapPin,
  Flame,
  Users,
  Maximize,
  WashingMachine,
  Calendar,
  ExternalLink,
  Utensils,
  Train
} from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-chalet-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionHeading title="Confort & Équipements" subtitle="L'art de recevoir" />

        <div className="mb-16 bg-white p-10 rounded-sm shadow-sm border border-chalet-soft">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="bg-chalet-soft p-4 rounded-full">
                <Home className="w-6 h-6 text-chalet-warm" />
              </div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em]">6 chambres</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="bg-chalet-soft p-4 rounded-full">
                <Bath className="w-6 h-6 text-chalet-warm" />
              </div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em]">3 salles de bain</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="bg-chalet-soft p-4 rounded-full">
                <UsersIcon size={24} className="text-chalet-warm" />
              </div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em]">12 voyageurs</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="bg-chalet-soft p-4 rounded-full">
                <Maximize className="w-6 h-6 text-chalet-warm" />
              </div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em]">135 m² d'espace</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3 space-y-16">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-chalet-warm pl-6">Le Chalet en détail</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="flex items-center gap-4 text-gray-700">
                  <UtensilsCrossed className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Cuisine d'exception équipée</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <WashingMachine className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Buanderie complète</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Home className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Grand balcon & Terrasse sud</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <ParkingCircle className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Parking privé & garage</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Flame className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Poêle à granulés scandinave</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Wifi className="w-5 h-5 text-chalet-gold" /> <span className="text-sm font-medium">Fibre Optique & Espace Travail</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-chalet-soft">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-chalet-warm pl-6">Localisation : Risoul Village</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 h-56 bg-white border-2 border-chalet-soft p-1 rounded-sm shadow-sm overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.23456789!2d6.63!3d44.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb72390885e33d%3A0x642436f5628b0312!2sRisoul!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                    style={{ border: 0 }}
                    allowFullScreen
                    className="contrast-110"
                  ></iframe>
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                  <div className="flex justify-between items-center text-sm pb-3 border-b border-chalet-soft">
                    <div className="flex items-center gap-3">
                      <Utensils size={18} className="text-chalet-warm" />
                      <span className="font-bold">Pizza 05</span>
                    </div>
                    <span className="text-gray-500 italic">7 min en voiture</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-3 border-b border-chalet-soft">
                    <div className="flex items-center gap-3">
                      <Train size={18} className="text-chalet-warm" />
                      <span className="font-bold">Gare de Saint-Clément</span>
                    </div>
                    <span className="text-gray-500 italic">12 min en voiture</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-chalet-warm" />
                      <span className="font-bold">Station Risoul 1800</span>
                    </div>
                    <span className="text-gray-500 italic">12 min en voiture</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-chalet-soft">
               <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-chalet-warm pl-6">Espaces Nuit</h2>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div className="bg-white p-5 rounded-sm border border-chalet-soft shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-widest text-chalet-warm mb-3">Chambre 1</p>
                    <Bed className="w-6 h-6 text-gray-400 mb-2" />
                    <p className="text-xs text-gray-600 italic">Lit double Queen Size</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm border border-chalet-soft shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-widest text-chalet-warm mb-3">Chambre 2</p>
                    <Bed className="w-6 h-6 text-gray-400 mb-2" />
                    <p className="text-xs text-gray-600 italic">Lit double Queen Size</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm border border-chalet-soft shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-widest text-chalet-warm mb-3">Chambre 3</p>
                    <Bed className="w-6 h-6 text-gray-400 mb-2" />
                    <p className="text-xs text-gray-600 italic">Lit double Queen Size</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm border border-chalet-soft shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-widest text-chalet-warm mb-3">Chambre 4</p>
                    <div className="flex gap-1 mb-2">
                      <Bed className="w-6 h-6 text-gray-400"/>
                      <Bed className="w-4 h-4 text-gray-300 mt-1"/>
                    </div>
                    <p className="text-xs text-gray-600 italic">1 lit double + 1 simple</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm border border-chalet-soft shadow-sm">
                    <p className="font-bold text-xs uppercase tracking-widest text-chalet-warm mb-3">Chambre 5</p>
                    <div className="flex flex-col gap-1 mb-2">
                      <div className="w-6 h-0.5 bg-gray-400 rounded-full"/>
                      <div className="w-6 h-0.5 bg-gray-400 rounded-full"/>
                    </div>
                    <p className="text-xs text-gray-600 italic">Lits superposés</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28 p-10 bg-white border border-chalet-soft rounded-sm shadow-2xl space-y-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900">Réservation</h3>
              
              <div className="space-y-5">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  Nos calendriers sont mis à jour en temps réel sur les plateformes officielles. 
                </p>
                
                <a 
                  href="https://www.abritel.fr/location-vacances/p1072763" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-5 border border-chalet-soft rounded-sm hover:border-chalet-warm hover:bg-chalet-soft transition-all group"
                >
                  <span className="font-bold text-gray-800 uppercase text-xs tracking-widest">Abritel</span>
                  <ExternalLink size={16} className="text-chalet-warm opacity-40 group-hover:opacity-100" />
                </a>

                <a 
                  href="https://www.leboncoin.fr/ad/locations_saisonnieres/2029837926" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-5 border border-chalet-soft rounded-sm hover:border-chalet-warm hover:bg-chalet-soft transition-all group"
                >
                  <span className="font-bold text-gray-800 uppercase text-xs tracking-widest">Le Bon Coin</span>
                  <ExternalLink size={16} className="text-chalet-warm opacity-40 group-hover:opacity-100" />
                </a>
              </div>

              <div className="pt-8 border-t border-chalet-soft">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-8 uppercase tracking-[0.2em]">
                   <Calendar size={16} className="text-chalet-gold" />
                   <span>Ouvert été & hiver</span>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-5 bg-chalet-warm text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl"
                >
                  Contacter l'hôte
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ParkingCircle = ({ className, size = 20 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
);

const UsersIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Amenities;