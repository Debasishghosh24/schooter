import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function DetailModal({ detail, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-[#0A192F] border-l border-white/10 p-8 flex flex-col glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 rounded-full border border-ev-cyan/40 bg-ev-cyan/10 flex items-center justify-center text-ev-cyan hover:bg-ev-cyan hover:text-[#0A192F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mt-16 flex flex-col h-full">
          <span className="text-ev-cyan text-sm font-medium mb-2">{detail.number}</span>
          <h3 className="text-3xl font-semibold text-white mb-6 leading-tight">{detail.title}</h3>

          <div className="aspect-video w-full rounded-xl overflow-hidden mb-8 border border-white/5 bg-transparent">
            <ImageWithFallback
              src="/images/gallery_dashboard.jpg" // Ideally we'd map this to a specific asset per detail, using dashboard as a reliable fallback
              fallbackSrc="/images/gallery_dashboard.jpg"
              alt={detail.title}
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            {detail.description}
          </p>

          <div className="mt-auto pt-8 border-t border-white/10">
            <span className="text-xs text-white/40 uppercase tracking-widest block mb-4">Component Specs</span>
            <div className="flex justify-between items-center text-sm text-white">
              <span>Status</span>
              <span className="text-white/60">Standard Equipment</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
