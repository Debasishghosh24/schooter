import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { id: 'white', name: 'Pearl White', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1620054790100-344440fa4153?q=80&w=1200&auto=format&fit=crop' },
  { id: 'black', name: 'Midnight Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop' },
  { id: 'blue', name: 'Electric Blue', hex: '#0071E3', image: 'https://images.unsplash.com/photo-1596541603598-a25e6e3d231e?q=80&w=1200&auto=format&fit=crop' },
  { id: 'red', name: 'Crimson Red', hex: '#CC0000', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce87?q=80&w=1200&auto=format&fit=crop' }
];

export default function Viewer3D() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section id="experience" className="py-24 bg-ev-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          >
            Experience Every Angle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Customize your ride and explore the details.
          </motion.p>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass-card flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={activeColor.id}
              src={activeColor.image}
              alt={`Scooter in ${activeColor.name}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
            />
          </AnimatePresence>
          
          {/* Controls UI overlay */}
          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center space-y-6 z-20">
            {/* Color Selector */}
            <div className="glass px-6 py-3 rounded-full flex items-center space-x-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setActiveColor(color)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                    activeColor.id === color.id ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
            
            <p className="text-white font-medium tracking-wide">
              {activeColor.name}
            </p>
          </div>
          
          {/* Side Controls */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-4 z-20">
            {['360°', 'Front', 'Side', 'Rear'].map((view) => (
              <button key={view} className="text-sm font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest text-left">
                {view}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
