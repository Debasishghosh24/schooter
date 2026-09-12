import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { specifications } from '../../data/scooters';

const tabs = Object.keys(specifications);

export default function Specifications() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white"
          >
            Technical Specifications
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

          {/* Tabs */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto hide-scrollbar gap-2 md:gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-4 text-left font-medium transition-colors whitespace-nowrap md:whitespace-normal md:border-l-2 ${activeTab === tab
                    ? 'text-white border-ev-cyan md:bg-ev-cyan/5'
                    : 'text-white/40 border-transparent hover:text-white/80 md:hover:bg-white/5'
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-ev-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)] hidden md:block"
                  />
                )}
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8"
              >
                {specifications[activeTab].map((item, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4">
                    <p className="text-ev-cyan/70 text-sm tracking-wider uppercase mb-2">{item.label}</p>
                    <p className="text-xl font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
