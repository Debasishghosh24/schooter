import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scooters } from '../../data/scooters';
import ImageWithFallback from '../common/ImageWithFallback';

const categories = ['All', 'City', 'Performance', 'Premium', 'Long Range'];

export default function Models() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredScooters = activeCategory === 'All' 
    ? scooters 
    : scooters.filter(s => s.category === activeCategory);

  return (
    <section id="models" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 text-xs tracking-[0.2em] uppercase font-semibold mb-2"
            >
              OUR MODELS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
            >
              Find Your Perfect Ride
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mt-8 md:mt-0"
          >
            <p className="text-white/40 text-xs hidden lg:block">Different journeys. A cleaner tomorrow.</p>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    activeCategory === cat 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button className="px-5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap text-white hover:text-ev-accent transition-colors flex items-center gap-1 ml-4">
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredScooters.map((scooter, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={scooter.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'ring-1 ring-white/20 shadow-2xl' : ''
                }`}
              >
                {/* Scooter Image Container */}
                <div className="aspect-[4/3] w-full p-6 flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#111] overflow-hidden">
                  <ImageWithFallback 
                    src={scooter.image} 
                    fallbackSrc="/images/scooter_white.jpg"
                    alt={scooter.name}
                    className="w-full h-full object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ filter: scooter.cssFilter }}
                  />
                </div>
                
                {/* Details Container */}
                <div className="p-6 pt-0 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-ev-accent transition-colors">
                      {scooter.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-1 mb-6">{scooter.description}</p>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex gap-6">
                        <div>
                          <p className="font-semibold text-sm text-white">{scooter.range}</p>
                          <p className="text-white/40 text-[10px] uppercase tracking-wider">Range</p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-white">{scooter.topSpeed}</p>
                          <p className="text-white/40 text-[10px] uppercase tracking-wider">Top Speed</p>
                        </div>
                      </div>
                      
                      <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="flex gap-2 mt-6">
                    {scooter.colors && scooter.colors.map((color, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full border border-white/20 ${i === 0 && idx === 0 ? 'ring-1 ring-offset-2 ring-offset-[#111] ring-white' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
