import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-chalet-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading title="Réserver votre séjour" subtitle="Disponibilités & Tarifs" />
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Pour consulter le calendrier à jour, les tarifs selon vos dates et finaliser votre réservation en toute sécurité, merci de passer par nos plateformes partenaires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a 
            href="https://www.abritel.fr/location-vacances/p1072763" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <ExternalLink className="text-blue-600 group-hover:text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Réserver sur Abritel</h3>
              <p className="text-sm text-gray-500 font-medium italic">Annonce n°1072763</p>
            </div>
            <span className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold">Voir l'annonce</span>
          </a>

          <a 
            href="https://www.leboncoin.fr/ad/locations_saisonnieres/2029837926" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <ExternalLink className="text-orange-500 group-hover:text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Voir sur Le Bon Coin</h3>
              <p className="text-sm text-gray-500 font-medium italic">Propriétaire vérifié</p>
            </div>
            <span className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-bold">Voir l'annonce</span>
          </a>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={20} className="text-chalet-green" />
            <span className="font-medium">Risoul Village (05600)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Users size={20} className="text-chalet-green" />
            <span className="font-medium">Capacité 12 personnes</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar size={20} className="text-chalet-green" />
            <span className="font-medium">Ouvert toute l'année</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Users = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Contact;