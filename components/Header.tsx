import React, { useState, useEffect } from 'react';
import { Menu, X, MountainSnow } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className={`p-1.5 rounded-sm transition-colors ${isScrolled ? 'bg-chalet-warm text-white' : 'bg-white/10 backdrop-blur-md text-white group-hover:bg-white group-hover:text-chalet-warm'}`}>
            <MountainSnow className="h-7 w-7" />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Chalet Risoul
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.25em] font-bold hover:text-chalet-warm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              } ${item.label === 'Réserver' ? 'hidden' : 'block'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-8 py-2.5 rounded-sm font-serif font-bold text-sm tracking-wide transition-all ${
              isScrolled 
                ? 'bg-chalet-warm text-white hover:bg-black shadow-md' 
                : 'bg-white text-chalet-warm hover:bg-chalet-gold hover:text-white'
            }`}
          >
            Réserver
          </a>
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col items-center py-12 gap-8 border-t border-chalet-soft">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-900 text-xl font-serif font-bold hover:text-chalet-warm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-12 py-4 bg-chalet-warm text-white rounded-sm font-serif font-bold shadow-lg uppercase tracking-widest text-sm"
          >
            Vérifier Disponibilités
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;