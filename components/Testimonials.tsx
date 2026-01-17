import React from 'react';
import SectionHeading from './SectionHeading';
import { REVIEWS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-chalet-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Paroles de Voyageurs" subtitle="Avis Authentiques" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-8 text-chalet-gold/20 group-hover:text-chalet-gold/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-chalet-gold text-chalet-gold" />
                ))}
              </div>

              <h4 className="font-bold text-gray-900 mb-2 italic">"{review.title}"</h4>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow italic">
                {review.comment}
              </p>

              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-chalet-gold font-medium uppercase tracking-wider">{review.date}</span>
                  <span className="text-xs text-gray-400 font-medium">{review.stay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">Retrouvez l'intégralité de nos 39 avis vérifiés sur nos plateformes de réservation.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;