import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Battery, Clock, Zap, Gauge, Users } from 'lucide-react';
import { scooters } from '../../data/scooters';
import ImageWithFallback from '../common/ImageWithFallback';
import ModelDetailsModal from './ModelDetailsModal';
import { Link } from 'react-router-dom';

const categories = ['All Models', 'City', 'Performance', 'High Range'];

export default function Models({ onBookTestRide, limit, showViewAll }) {
  const [activeCategory, setActiveCategory] = useState('All Models');
  const [selectedScooter, setSelectedScooter] = useState(null);

  let filteredScooters = activeCategory === 'All Models'
    ? scooters
    : scooters.filter(s => s.category === activeCategory);
    
  if (limit) {
    filteredScooters = filteredScooters.slice(0, limit);
  }

  return (
    <section id="models" className="py-24 bg-brand-light relative border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Our Scooters
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text mb-4 leading-tight"
            >
              Electric Scooters for a Cleaner India
            </motion.h2>
            <p className="text-brand-text-muted text-lg font-medium tracking-wide">Premium design meets intelligent technology.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mt-8 xl:mt-0"
          >
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 xl:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border shadow-sm ${activeCategory === cat
                      ? 'bg-brand-text text-white border-brand-text'
                      : 'bg-white text-brand-text-muted border-gray-200 hover:border-gray-300 hover:text-brand-text'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredScooters.map((scooter) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={scooter.id}
                className={`group relative overflow-hidden glass-card flex flex-col justify-between`}
              >
                {/* Scooter Image Container */}
                <div className="aspect-[4/3] w-full p-6 flex flex-col items-center justify-center bg-transparent overflow-hidden">
                  <ImageWithFallback
                    src={scooter.image}
                    fallbackSrc="/images/scooter_white.jpg"
                    alt={scooter.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ filter: scooter.cssFilter }}
                  />
                </div>
                
                <div className="px-6 pb-2 text-center w-full">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-text group-hover:text-brand-green transition-colors">
                    {scooter.name}
                  </h3>
                  <p className="text-brand-text-muted text-xs mt-1 font-bold uppercase tracking-wider">{scooter.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 px-6 py-4 mt-2">
                  <div className="flex flex-col items-center text-center">
                    <Battery className="w-4 h-4 text-brand-green mb-1" />
                    <span className="text-sm font-semibold text-brand-text">{scooter.battery}</span>
                    <span className="text-[10px] text-brand-text-muted uppercase tracking-wider">Battery</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Zap className="w-4 h-4 text-brand-green mb-1" />
                    <span className="text-sm font-semibold text-brand-text">{scooter.range}</span>
                    <span className="text-[10px] text-brand-text-muted uppercase tracking-wider">Range</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Gauge className="w-4 h-4 text-brand-green mb-1" />
                    <span className="text-sm font-semibold text-brand-text">{scooter.topSpeed}</span>
                    <span className="text-[10px] text-brand-text-muted uppercase tracking-wider">Top Speed</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-4 h-4 text-brand-green mb-1" />
                    <span className="text-sm font-semibold text-brand-text">{scooter.chargingTime}</span>
                    <span className="text-[10px] text-brand-text-muted uppercase tracking-wider">Charge Time</span>
                  </div>
                </div>

                {/* Bottom Price Container */}
                <div className="px-6 py-5 border-t border-gray-100 flex justify-end items-center bg-gray-50/50">
                  <button 
                    onClick={() => setSelectedScooter(scooter)}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-text hover:text-brand-green transition-colors group/btn"
                  >
                    View Details
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover/btn:bg-brand-green group-hover/btn:text-white group-hover/btn:border-brand-green transition-all shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link to="/all-models" className="btn-secondary px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Show All Models <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>

      <ModelDetailsModal 
        isOpen={!!selectedScooter} 
        onClose={() => setSelectedScooter(null)} 
        scooter={selectedScooter} 
        onBookTestRide={onBookTestRide}
      />
    </section>
  );
}
