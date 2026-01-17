import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAllGrid, setShowAllGrid] = useState(false);

  const images = [
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/cd742723.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/a3da0875.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/ad17a490.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/f8b95074.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/e2a844d8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/ff1b3580.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/d67b739f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478343/96082d8b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/f768b511.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/f253f1e5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/b72ca857.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/bfd574a0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/f70dc784.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/71a5d0d0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/00b77836.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/c2a1b135.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/f05b949a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/8bee1399.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/00ee00df.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/611e5c1d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/1d7da87e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/004c5916.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/2941a37d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/21cad870.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/6c656385.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/94c3fb3c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/76597ada.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/2ceb22ed.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/224015a1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/3d5c8a0a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/be038a82.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/7b3cb53c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/5fdba22e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/9e56fcd8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/90-919d0569.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/3542d8b4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/90-8d5c710b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/827d7953.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    "https://media.vrbo.com/lodging/34000000/33480000/33478400/33478343/3cef364d.jpg?impolicy=resizecrop&rw=1200&ra=fit"
  ];

  // Empêcher le scroll quand un overlay est ouvert
  useEffect(() => {
    if (showAllGrid || lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showAllGrid, lightboxIndex]);

  const toggleAllGrid = () => setShowAllGrid(!showAllGrid);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <SectionHeading title="En Images" subtitle="Découvrir le chalet" />
          <button 
            onClick={toggleAllGrid}
            className="hidden md:flex items-center gap-2 border border-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-gray-50 transition-all mb-12"
          >
            <LayoutGrid size={18} />
            Afficher les {images.length} photos
          </button>
        </div>

        {/* Grille principale interactive */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[500px] rounded-sm overflow-hidden shadow-2xl">
          <div className="md:col-span-2 md:row-span-2 relative cursor-pointer group overflow-hidden" onClick={() => openLightbox(0)}>
            <img src={images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt="Façade chalet" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          <div className="hidden md:block relative cursor-pointer group overflow-hidden" onClick={() => openLightbox(37)}>
            <img src={images[37]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Salon" />
          </div>
          
          <div className="hidden md:block relative cursor-pointer group overflow-hidden" onClick={() => openLightbox(1)}>
            <img src={images[1]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Vue montagne" />
          </div>

          <div className="hidden md:block relative cursor-pointer group overflow-hidden" onClick={() => openLightbox(13)}>
            <img src={images[13]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Chambre" />
          </div>

          <div className="hidden md:block relative cursor-pointer group overflow-hidden" onClick={toggleAllGrid}>
            <img src={images[4]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Intérieur" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
               <div className="text-white text-center">
                  <span className="text-2xl font-bold">+{images.length - 5}</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Photos</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY 1: GRILLE COMPLÈTE */}
      {showAllGrid && (
        <div className="fixed inset-0 z-[1000] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
           <div className="sticky top-0 bg-white/95 backdrop-blur-md z-[1010] border-b border-gray-100 py-6 px-8 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">Toutes les photos</h3>
                <p className="text-xs text-chalet-warm uppercase tracking-widest font-bold">{images.length} photos du chalet</p>
              </div>
              <button onClick={toggleAllGrid} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-900">
                <X size={24} />
              </button>
           </div>
           
           <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {images.map((img, index) => (
                   <div key={index} className="aspect-video cursor-pointer overflow-hidden rounded-sm group relative" onClick={() => openLightbox(index)}>
                     <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )}

      {/* OVERLAY 2: VISIONNEUSE (LIGHTBOX) - Z-INDEX SUPÉRIEUR À TOUT */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => closeLightbox()}
        >
           {/* Bouton Fermer Lightbox */}
           <button 
             className="absolute top-6 right-6 text-white hover:text-chalet-gold transition-colors z-[10000] p-3 bg-white/10 rounded-full backdrop-blur-md"
             onClick={(e) => closeLightbox(e)}
           >
             <X size={32} />
           </button>

           {/* Zone Image */}
           <div className="relative w-full max-w-6xl h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <img 
               src={images[lightboxIndex]} 
               className="max-w-full max-h-[90vh] object-contain shadow-2xl animate-in zoom-in-95 duration-300" 
               alt={`Photo du chalet ${lightboxIndex + 1}`}
             />

             {/* Navigation Flèches */}
             <button 
               onClick={prevImage}
               className="absolute left-0 md:-left-20 text-white p-4 bg-white/10 rounded-full hover:bg-white/30 transition-all border border-white/20"
             >
               <ChevronLeft size={40} />
             </button>
             <button 
               onClick={nextImage}
               className="absolute right-0 md:-right-20 text-white p-4 bg-white/10 rounded-full hover:bg-white/30 transition-all border border-white/20"
             >
               <ChevronRight size={40} />
             </button>
           </div>

           {/* Compteur d'images */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold text-sm tracking-widest">
             {lightboxIndex + 1} / {images.length}
           </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;