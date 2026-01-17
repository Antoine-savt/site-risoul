import React from 'react';
import SectionHeading from './SectionHeading';
import { Bus, Mountain, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2">
            <SectionHeading title="Un Cocon de Chaleur" subtitle="Bienvenue chez vous" />
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Situé dans le village authentique de <span className="font-bold text-chalet-warm">Risoul</span>, notre chalet neuf a été pensé comme un refuge accueillant. 
              Le mélange subtil de <span className="font-bold">bois noble</span>, de pierre et de matières chaleureuses crée une atmosphère propice à la détente après une journée sur les pistes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex gap-5 group">
                <div className="bg-chalet-soft p-3.5 rounded-lg h-fit group-hover:bg-chalet-warm group-hover:text-white transition-all duration-300">
                  <Bus className="text-chalet-warm group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Station à 15min</h4>
                  <p className="text-sm text-gray-500 leading-snug">Navette gratuite à 200m pour un accès sans stress au front de neige.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="bg-chalet-soft p-3.5 rounded-lg h-fit group-hover:bg-chalet-warm group-hover:text-white transition-all duration-300">
                  <Mountain className="text-chalet-warm group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Forêt Blanche</h4>
                  <p className="text-sm text-gray-500 leading-snug">L'un des plus beaux domaines des Alpes du Sud, entre Vars et Risoul.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="bg-chalet-soft p-3.5 rounded-lg h-fit group-hover:bg-chalet-warm group-hover:text-white transition-all duration-300">
                  <Users className="text-chalet-warm group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Espace & Confort</h4>
                  <p className="text-sm text-gray-500 leading-snug">6 chambres spacieuses conçues pour accueillir sereinement 12 personnes.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="bg-chalet-soft p-3.5 rounded-lg h-fit group-hover:bg-chalet-warm group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="text-chalet-warm group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ambiance Cosy</h4>
                  <p className="text-sm text-gray-500 leading-snug">Poêle à granulés, chauffage au sol et décoration soignée.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  {/* Utilisation des photos réelles fournies */}
                  <img src="https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/cd742723.jpg?impolicy=resizecrop&rw=600&ra=fit" alt="Extérieur Chalet Risoul" className="rounded-sm shadow-lg w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500" />
                  <img src="https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/ff1b3580.jpg?impolicy=resizecrop&rw=600&ra=fit" alt="Intérieur bois et escalier" className="rounded-sm shadow-lg w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-500" />
               </div>
               <div className="pt-12">
                  <img src="https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/a3da0875.jpg?impolicy=resizecrop&rw=600&ra=fit" alt="Vue sur les montagnes enneigées" className="rounded-sm shadow-lg w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-chalet-gold/30 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;