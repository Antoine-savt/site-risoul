import React from 'react';
import SectionHeading from './SectionHeading';
import { SEASONS } from '../constants';
import { Check } from 'lucide-react';

const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-20 bg-chalet-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Tarifs" subtitle="Saison 2024-2025" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {SEASONS.map((season, idx) => (
            <div 
              key={season.name}
              className={`bg-white p-8 rounded-sm flex flex-col ${
                idx === 1 ? 'border-2 border-chalet-green shadow-lg relative' : 'border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-serif font-bold text-gray-900">{season.name}</h3>
              <p className="text-sm text-gray-500 mb-4 mt-1">{season.period}</p>
              
              <div className="py-4 border-t border-b border-gray-100 mb-6">
                <span className="text-2xl font-bold text-chalet-green">{season.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {season.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-chalet-green mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-chalet-green font-bold underline hover:text-chalet-gold transition-colors"
          >
            Voir les disponibilités complètes pour vos dates →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rates;