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
    <section id="gallery" className="py-24 relative border-t border-white/5 overflow-hidden transition-colors duration-700 bg-transparent">

      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F] to-[#0A192F] -z-20 transition-opacity duration-700" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-start md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
            >
              EDITORIAL GALLERY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2"
            >
              A Closer Look At A <br /> Brighter Tomorrow.
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#gallery"
            className="group flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1"
          >
            View Gallery
            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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
              className="relative group cursor-pointer overflow-hidden rounded-[24px] glass-card hover:-translate-y-2 transition-all duration-500 h-[350px] xl:h-auto"
              onClick={() => openLightbox(index)}
            >
              <ImageWithFallback
                src={img.src}
                fallbackSrc="/images/hero_scooter.jpg"
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] opacity-80 group-hover:opacity-100 mix-blend-screen"
                loading="lazy"
              />

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent pointer-events-none opacity-80" />

              {/* Title and Counter at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end pointer-events-none">
                <span className="text-white font-semibold text-xl mb-1">{img.title}</span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">
                  0{index + 1}
                </span>
              </div>
              
              {/* Top Right Arrow on hover */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A192F]/95 backdrop-blur-xl"
          >
            {/* Controls Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
              <span className="text-sm font-medium tracking-[0.2em] text-ev-cyan/50">
                0{selectedIndex + 1} / 0{galleryImages.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full border border-ev-cyan/30 bg-ev-cyan/5 flex items-center justify-center text-ev-cyan hover:bg-ev-cyan hover:text-[#0A192F] transition-colors"
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
                className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,229,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-ev-cyan/30 bg-ev-cyan/5 flex items-center justify-center text-ev-cyan hover:bg-ev-cyan hover:text-[#0A192F] transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8 mr-1" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-ev-cyan/30 bg-ev-cyan/5 flex items-center justify-center text-ev-cyan hover:bg-ev-cyan hover:text-[#0A192F] transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
