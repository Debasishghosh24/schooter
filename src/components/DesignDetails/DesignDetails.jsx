import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const details = [
  { id: 1, x: '25%', y: '30%', title: 'LED Headlight', desc: 'Adaptive matrix LED technology for maximum visibility.' },
  { id: 2, x: '75%', y: '45%', title: 'Smart Dashboard', desc: '7" TFT display with turn-by-turn navigation.' },
  { id: 3, x: '40%', y: '60%', title: 'Premium Seat', desc: 'Ergonomically designed for long-distance comfort.' },
  { id: 4, x: '80%', y: '80%', title: 'Alloy Wheels', desc: 'Lightweight forged wheels for agile handling.' },
];

export default function DesignDetails() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section className="py-24 bg-ev-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          >
            Obsessive Detail
          </motion.h2>
        </div>

        <div className="relative w-full aspect-square md:aspect-[16/9] rounded-3xl overflow-hidden glass-card flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2000&auto=format&fit=crop"
            alt="Scooter Details"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Hotspots */}
          {details.map((detail) => (
            <div 
              key={detail.id} 
              className="absolute z-20 flex flex-col items-center"
              style={{ left: detail.x, top: detail.y }}
              onMouseEnter={() => setActiveHotspot(detail.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === detail.id ? null : detail.id)}
            >
              <button 
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center relative cursor-pointer group"
                aria-label={detail.title}
              >
                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full transition-transform group-hover:scale-150" />
                
                {/* Ping animation */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {activeHotspot === detail.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 glass px-5 py-4 rounded-2xl w-48 md:w-64 pointer-events-none"
                  >
                    <h4 className="text-white font-semibold text-sm md:text-base mb-1">{detail.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm">{detail.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
