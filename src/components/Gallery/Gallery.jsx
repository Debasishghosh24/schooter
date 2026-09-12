import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery_landscape.jpg',
    alt: 'Electric Scooter Front 3/4 Architectural',
    gridClass: 'md:col-span-2 xl:col-span-3 xl:row-span-1'
  },
  {
    id: 2,
    src: '/images/gallery_portrait.jpg',
    alt: 'Electric Scooter Side Rear Studio',
    gridClass: 'md:col-span-2 xl:col-span-1 xl:row-span-2'
  },
  {
    id: 3,
    src: '/images/hero_scooter.jpg',
    alt: 'Electric Scooter Close Up',
    gridClass: 'md:col-span-1 xl:col-span-1 xl:row-span-1 aspect-square xl:aspect-auto'
  },
  {
    id: 4,
    src: '/images/gallery_night.jpg',
    alt: 'Electric Scooter Night Urban Ride',
    gridClass: 'md:col-span-1 xl:col-span-1 xl:row-span-1 aspect-square xl:aspect-auto'
  },
  {
    id: 5,
    src: '/images/gallery_dashboard.jpg',
    alt: 'Electric Scooter Dashboard Detail',
    gridClass: 'md:col-span-2 xl:col-span-1 xl:row-span-1 aspect-video xl:aspect-auto'
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
    <section id="gallery" className="py-24 relative border-t border-[rgba(30,50,60,0.08)] dark:border-white/10 overflow-hidden transition-colors duration-700">
      
      {/* Dynamic Background Gradients */}
      {/* Light Theme: Soft Ivory -> Sage -> Mint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F5F0] via-[#E8F0EA] to-[#E7F1EC] dark:hidden -z-20 transition-opacity duration-700" />
      {/* Dark Theme: Deep Navy -> Indigo -> Royal Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172554] via-[#1D4ED8] to-[#4C1D95] hidden dark:block -z-20 transition-opacity duration-700" />
      
      {/* Rich Glowing Accents */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[#EAF0F4]/40 dark:bg-[#3730A3]/50 rounded-full blur-[120px] -z-10 pointer-events-none transition-colors" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#EEF1EC]/50 dark:bg-[#6D28D9]/40 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Editorial Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-start md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-[#182333] dark:text-white mb-2 transition-colors"
            >
              Editorial Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#647078] dark:text-white/50 text-sm md:text-base font-light tracking-wide transition-colors"
            >
              Designed to be seen from every angle.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase text-[#899296] dark:text-white/30 hidden md:block transition-colors"
          >
            05 Images
          </motion.div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:auto-rows-[400px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className={`relative group cursor-pointer overflow-hidden rounded-[20px] bg-[#F9FAF6] dark:bg-[#111] border border-[rgba(30,50,60,0.07)] dark:border-white/5 shadow-[0_12px_35px_rgba(40,55,60,0.07)] dark:shadow-none hover:shadow-[0_16px_40px_rgba(40,55,60,0.1)] hover:-translate-y-1 transition-all duration-700 ${img.gridClass}`}
              onClick={() => openLightbox(index)}
            >
              <ImageWithFallback
                src={img.src}
                fallbackSrc="/images/hero_scooter.jpg"
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

              {/* Image Counter & View Indicator */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium text-white drop-shadow-md">
                    0{index + 1} / 05
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            {/* Controls Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
              <span className="text-sm font-medium tracking-[0.2em] text-white/50">
                0{selectedIndex + 1} / 0{galleryImages.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-[90vw] h-[85vh] flex items-center justify-center" onClick={closeLightbox}>
              <motion.img
                key={selectedIndex} // Forces re-animation on index change
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8 mr-1" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
