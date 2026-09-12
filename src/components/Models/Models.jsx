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
    <section id="models" className="py-24 bg-[#F4F5F0] dark:bg-[#0a0a0a] relative border-t border-[rgba(30,50,60,0.05)] dark:border-white/5 transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#899296] dark:text-white/50 text-xs tracking-[0.2em] uppercase font-semibold mb-2 transition-colors"
            >
              OUR MODELS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-[#182333] dark:text-white transition-colors mb-2"
            >
              Find Your Perfect Ride
            </motion.h2>
            <p className="text-[#647078] dark:text-white/40 text-sm mt-1 mb-6 transition-colors">Different journeys. A cleaner tomorrow.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mt-4 md:mt-6"
          >
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                    activeCategory === cat 
                      ? 'bg-[#182333] text-white border-transparent dark:bg-white dark:text-black dark:border-white' 
                      : 'bg-white text-[#647078] border-[rgba(30,50,60,0.08)] hover:border-[rgba(30,50,60,0.2)] dark:bg-transparent dark:text-white/60 dark:border-white/10 dark:hover:border-white/30 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button className="px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap text-[#182333] hover:text-[#0071e3] dark:text-white dark:hover:text-ev-accent transition-colors flex items-center gap-1 ml-4">
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
                className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-[#111] border border-[rgba(30,50,60,0.06)] dark:border-white/5 hover:border-[rgba(30,50,60,0.15)] dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'ring-1 ring-[rgba(30,50,60,0.05)] dark:ring-white/20 shadow-lg dark:shadow-2xl' : 'shadow-sm'
                }`}
              >
                {scooter.name === 'AERO V1 Lite' && (
                  <div className="absolute top-4 right-4 bg-[#60A5FA] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                    Most Popular
                  </div>
                )}
                {/* Scooter Image Container */}
                <div className="aspect-[4/3] w-full p-8 flex items-center justify-center bg-transparent dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#111] overflow-hidden transition-colors duration-700">
                  <ImageWithFallback 
                    src={scooter.image} 
                    fallbackSrc="/images/scooter_white.jpg"
                    alt={scooter.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-100 dark:opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ filter: scooter.cssFilter }}
                  />
                </div>
                
                {/* Details Container */}
                <div className="p-6 pt-2 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#182333] dark:text-white group-hover:text-[#0071e3] dark:group-hover:text-ev-accent transition-colors">
                      {scooter.name}
                    </h3>
                    <p className="text-[#647078] dark:text-white/50 text-xs mt-1 mb-6 font-medium transition-colors">{scooter.description}</p>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex gap-6">
                        <div>
                          <p className="font-bold text-sm text-[#182333] dark:text-white transition-colors">{scooter.range}</p>
                          <p className="text-[#899296] dark:text-white/40 text-[10px] font-semibold uppercase tracking-wider transition-colors">Range</p>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-[#182333] dark:text-white transition-colors">{scooter.topSpeed}</p>
                          <p className="text-[#899296] dark:text-white/40 text-[10px] font-semibold uppercase tracking-wider transition-colors">Top Speed</p>
                        </div>
                      </div>
                      
                      <button className="w-8 h-8 rounded-full bg-[#EAF0F4] text-[#0071e3] border-transparent hover:bg-[#0071e3] hover:text-white dark:border dark:border-white/20 dark:bg-transparent flex items-center justify-center dark:text-white dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="flex gap-2 mt-6">
                    {scooter.colors && scooter.colors.map((color, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full border border-[rgba(30,50,60,0.1)] dark:border-white/20 ${i === 0 && idx === 0 ? 'ring-1 ring-offset-2 ring-offset-white dark:ring-offset-[#111] ring-[#182333] dark:ring-white' : ''}`}
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
