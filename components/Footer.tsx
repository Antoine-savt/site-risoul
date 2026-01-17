import React from 'react';
import { MountainSnow, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chalet-warm text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-sm backdrop-blur-md">
              <MountainSnow className="h-10 w-10 text-white" />
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight">Chalet Risoul</span>
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-chalet-gold transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-chalet-gold transition-colors duration-300"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-chalet-gold transition-colors duration-300"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Chalet Risoul. Tous droits réservés.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors duration-300">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;