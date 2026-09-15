import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { X, Battery, Zap, Gauge, Clock } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { specifications } from '../../data/scooters';

function Real360Viewer({ image, cssFilter }) {
  const containerRef = useRef(null);
  const dragX = useMotionValue(0);
  const smoothX = useSpring(dragX, { damping: 20, stiffness: 90 });
  const rotateY = useTransform(smoothX, [-300, 300], [15, -15]);
  const translateX = useTransform(smoothX, [-300, 300], [20, -20]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden bg-brand-surface rounded-3xl cursor-grab active:cursor-grabbing">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.1}
        style={{ x: dragX }}
        className="absolute inset-0 z-20 pointer-events-auto opacity-0"
      />
      <motion.div
        style={{ rotateY, x: translateX }}
        className="relative w-full max-w-[800px] h-full flex items-center justify-center z-10 pointer-events-none perspective-1000"
      >
        <ImageWithFallback
          src={image}
          fallbackSrc="/images/scooter_white.jpg"
          alt="360 View"
          className="w-full h-full object-contain mix-blend-multiply"
          style={{ filter: cssFilter }}
        />
      </motion.div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 z-0 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] text-brand-text uppercase font-bold">Drag to Explore</span>
        <div className="w-12 h-[2px] bg-brand-text/20 mt-3" />
      </div>
    </div>
  );
}

export default function ModelDetailsModal({ isOpen, onClose, scooter, onBookTestRide }) {
  if (!scooter) return null;
  
  // Use technical specifications if available based on scooter name/category
  const specs = specifications[scooter.name] || specifications['Z4 PRO'] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-brand-text">{scooter.name}</h2>
            <div className="flex flex-row items-center gap-4">
               <button 
                 onClick={() => { onClose(); onBookTestRide(); }} 
                 className="hidden sm:block btn-primary px-6 py-2 text-sm"
               >
                 Book a Test Ride
               </button>
               <button
                 onClick={onClose}
                 className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-text-muted hover:bg-gray-100 hover:text-brand-text transition-colors"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: 360 Viewer */}
            <div className="w-full lg:w-1/2">
               <Real360Viewer image={scooter.image} cssFilter={scooter.cssFilter} />
            </div>

            {/* Right: Details & Specs */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-brand-green text-xs font-bold tracking-[0.2em] uppercase mb-4">{scooter.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">{scooter.name}</h1>
              <p className="text-xl text-brand-text-muted mb-10">{scooter.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                  <div className="flex flex-col">
                    <Battery className="w-6 h-6 text-brand-green mb-3" />
                    <span className="text-2xl font-bold text-brand-text">{scooter.battery}</span>
                    <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mt-1">Battery</span>
                  </div>
                  <div className="flex flex-col">
                    <Zap className="w-6 h-6 text-brand-green mb-3" />
                    <span className="text-2xl font-bold text-brand-text">{scooter.range}</span>
                    <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mt-1">Range</span>
                  </div>
                  <div className="flex flex-col">
                    <Gauge className="w-6 h-6 text-brand-green mb-3" />
                    <span className="text-2xl font-bold text-brand-text">{scooter.topSpeed}</span>
                    <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mt-1">Top Speed</span>
                  </div>
                  <div className="flex flex-col">
                    <Clock className="w-6 h-6 text-brand-green mb-3" />
                    <span className="text-2xl font-bold text-brand-text">{scooter.chargingTime}</span>
                    <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mt-1">Charge Time</span>
                  </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl mb-12">
                 <button onClick={() => { onClose(); onBookTestRide(); }} className="w-full btn-primary py-4 text-lg sm:hidden">
                   Book a Test Ride
                 </button>
              </div>

              {/* Technical Specifications from Data */}
              {specs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {specs.map((item, idx) => (
                      <div key={idx} className="border-b border-gray-100 pb-3 flex justify-between items-end">
                        <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">{item.label}</span>
                        <span className="text-sm font-bold text-brand-text text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
