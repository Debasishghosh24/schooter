import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { specifications } from '../../data/scooters';
import ImageWithFallback from '../common/ImageWithFallback';

const tabs = Object.keys(specifications);

export default function Specifications() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D213F] via-[#0A192F] to-[#0A192F] -z-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row gap-12">
        
        {/* Left/Center Content */}
        <div className="w-full xl:w-[65%] flex flex-col pt-12">
          
          {/* Header */}
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
            >
              PERFORMANCE MEETS PURPOSE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-lg"
            >
              Technical Specifications
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
            {/* Tabs */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto hide-scrollbar gap-2 md:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-4 text-left font-semibold text-sm transition-colors whitespace-nowrap md:whitespace-normal md:border-l-[3px] rounded-r-xl rounded-l-sm ${activeTab === tab
                      ? 'glass-card border-ev-cyan text-white shadow-[0_0_15px_rgba(0,229,255,0.1)]'
                      : 'text-white/40 hover:bg-white/5 hover:text-white/80 border-transparent'
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 w-full min-h-[300px]"
                >
                  {specifications[activeTab].slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-end border-b border-white/10 pb-4">
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2">{item.label}</p>
                      <p className="text-2xl font-bold text-white">
                        {/* Try to split number and unit for better styling if it contains spaces */}
                        {item.value.split(' ')[0]} <span className="text-base font-medium">{item.value.split(' ').slice(1).join(' ')}</span>
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full xl:w-[35%] h-[400px] xl:h-auto relative hidden xl:block">
          <div className="absolute inset-0">
             {/* Using a placeholder from existing assets since we don't have the exact headlight image */}
             <ImageWithFallback 
                src="/images/gallery_dashboard.jpg" 
                fallbackSrc="/images/hero_scooter.jpg"
                alt="Scooter Details" 
                className="w-full h-full object-cover rounded-[32px] opacity-80 mix-blend-screen"
             />
             <div className="absolute inset-0 rounded-[32px] border border-white/10 shadow-[inset_0_0_50px_rgba(0,229,255,0.2)]" />
             <div className="absolute inset-0 rounded-[32px] bg-gradient-to-l from-transparent to-[#0A192F]" />
          </div>
        </div>

      </div>
    </section>
  );
}
