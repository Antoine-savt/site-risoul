import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Utilisation du lien fourni : Vue du salon avec le poêle à granulés */}
        <img 
          src="https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/827d7953.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
          alt="Intérieur chaleureux du Chalet Risoul" 
          className="w-full h-full object-cover scale-100"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
        <h1 className="text-6xl md:text-8xl font-serif text-white font-bold mb-4 tracking-tight drop-shadow-lg">
          Chalet Risoul
        </h1>
        <p className="text-xl md:text-2xl text-white font-light mb-10 max-w-xl mx-auto border-t border-b border-white/30 py-4 italic tracking-wide">
          Risoul Village | Grand Confort | 12 Personnes
        </p>
        
        <div className="flex justify-center">
          <Button 
            variant="white" 
            onClick={scrollToContact}
            className="px-12 py-5 text-sm uppercase tracking-[0.2em]"
          >
            Découvrir & Réserver
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;