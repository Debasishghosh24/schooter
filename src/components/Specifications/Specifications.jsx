import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { specifications } from '../../data/scooters';
import ImageWithFallback from '../common/ImageWithFallback';

const tabs = Object.keys(specifications);

export default function Specifications() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden border-t border-gray-100">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-20">
        
        {/* Left/Center Content */}
        <div className="w-full xl:w-1/2 flex flex-col pt-12">
          
          {/* Header */}
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Performance Meets Purpose
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text"
            >
              Technical Specifications
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full">
            {/* Tabs */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto hide-scrollbar gap-3 md:gap-4 pb-4 md:pb-0 border-b md:border-b-0 md:border-r border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 md:px-6 py-4 text-left font-bold text-sm md:text-base transition-all whitespace-nowrap md:whitespace-normal rounded-xl md:rounded-l-xl md:rounded-r-none ${activeTab === tab
                      ? 'bg-white shadow-sm border border-gray-100 text-brand-green md:-mr-[1px] md:border-r-white z-10'
                      : 'text-brand-text-muted hover:bg-white/50 hover:text-brand-text border border-transparent'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content (Specs Grid) */}
            <div className="w-full md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full min-h-[320px]"
                >
                  {specifications[activeTab].slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-end border-b border-gray-100 pb-4">
                      <p className="text-[10px] text-brand-text-muted uppercase tracking-widest font-bold mb-2">{item.label}</p>
                      <p className="text-3xl font-bold text-brand-text">
                        {/* Try to split number and unit for better styling if it contains spaces */}
                        {item.value.split(' ')[0]} <span className="text-base font-medium text-brand-text-muted">{item.value.split(' ').slice(1).join(' ')}</span>
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full xl:w-1/2 h-[500px] xl:h-auto relative hidden xl:block rounded-3xl overflow-hidden shadow-xl">
           <ImageWithFallback 
              src="/images/gallery_landscape.jpg" 
              fallbackSrc="/images/hero_scooter.jpg"
              alt="Scooter Specifications" 
              className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}
