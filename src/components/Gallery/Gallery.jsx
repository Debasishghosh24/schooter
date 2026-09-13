import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery_landscape.jpg',
    alt: 'Electric Scooter Front 3/4 Architectural',
    title: 'Urban Elegance',
  },
  {
    id: 2,
    src: '/images/gallery_portrait.jpg',
    alt: 'Electric Scooter Side Rear Studio',
    title: 'Design Details',
  },
  {
    id: 3,
    src: '/images/hero_scooter.jpg',
    alt: 'Electric Scooter Close Up',
    title: 'Aerodynamic Form',
  },
  {
    id: 4,
    src: '/images/gallery_night.jpg',
    alt: 'Electric Scooter Night Urban Ride',
    title: 'Night Visibility',
  }
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-white border-t border-gray-100">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-start md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Editorial Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text mb-2"
            >
              A Closer Look At A <br /> Brighter Tomorrow.
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#gallery"
            className="group flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-text transition-colors border-b border-brand-green/20 hover:border-brand-text pb-1"
          >
            View Full Gallery
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* Gallery Grid (4 equal horizontal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:auto-rows-[450px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-brand-light hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-[350px] xl:h-auto border border-gray-100"
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-brand-text/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <ImageWithFallback
                src={img.src}
                fallbackSrc="/images/hero_scooter.jpg"
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Title and Counter at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end pointer-events-none z-20 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white font-bold text-xl mb-1">{img.title}</span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/70 uppercase">
                  0{index + 1}
                </span>
              </div>
              
              {/* Top Right Arrow on hover */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-text opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl"
          >
            {/* Controls Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
              <span className="text-sm font-bold tracking-[0.2em] text-brand-text">
                0{selectedIndex + 1} / 0{galleryImages.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-brand-text hover:bg-gray-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-[90vw] h-[85vh] flex items-center justify-center" onClick={closeLightbox}>
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-brand-text hover:bg-gray-50 transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8 mr-1" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-brand-text hover:bg-gray-50 transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
