import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThreeSixtyViewer from './ThreeSixtyViewer';
import ColorConfigurator from './ColorConfigurator';
import ProductHotspots from './ProductHotspots';
import DetailModal from './DetailModal';
import { experienceColors, experienceHotspots, experienceSpecs } from '../../data/scooterExperience';

const tabs = ['Performance', 'Battery', 'Features', 'Safety'];

export default function ExperienceContainer() {
  const [activeColor, setActiveColor] = useState(experienceColors[0]);
  const [activeDetail, setActiveDetail] = useState(null);
  const [activeTab, setActiveTab] = useState('Performance');

  return (
    <section id="experience" className="relative min-h-[90vh] bg-[#F4F5F0] dark:bg-[#050505] border-t border-[rgba(30,50,60,0.05)] dark:border-white/5 py-24 overflow-hidden transition-colors duration-700">
      
      {/* Background radial glow matching the mockup in light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-transparent via-[#d7ebf0]/60 to-[#c8e2eb]/40 dark:via-[#1e3a5f]/20 rounded-full blur-[100px] pointer-events-none -z-10 transition-colors duration-700" />
      
      <div className="max-w-[1500px] mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-8">
        
        {/* LEFT COLUMN: Title & Tabs */}
        <div className="w-full xl:w-[28%] flex flex-col justify-start xl:pt-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0071e3] dark:text-ev-accent text-[10px] tracking-[0.25em] uppercase font-bold mb-4 transition-colors"
          >
            EXPERIENCE EVERY ANGLE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#182333] dark:text-white leading-[1.1] transition-colors"
          >
            Designed To Be <br /> Seen From Every Side.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#647078] dark:text-white/50 text-sm mt-4 mb-10 transition-colors max-w-sm"
          >
            Explore every detail of our electric scooter — from its signature lighting to its intelligent cockpit.
          </motion.p>
          
          {/* Vertical Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-1 w-[85%]"
          >
             {tabs.map((tab, i) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-6 py-4 rounded-r-xl rounded-l-sm font-bold text-[15px] transition-all relative ${
                    activeTab === tab 
                      ? 'bg-white text-[#182333] shadow-[0_4px_20px_rgba(30,50,60,0.05)] border-l-[3px] border-[#0071e3] dark:bg-[#111] dark:text-white dark:border-ev-accent' 
                      : 'text-[#647078] hover:bg-white/50 dark:text-white/40 dark:hover:bg-white/5 border-l-[3px] border-transparent'
                  }`}
                >
                  {tab}
                </button>
             ))}
          </motion.div>
        </div>

        {/* CENTER COLUMN: Main Product Viewer Area */}
        <div className="relative w-full xl:w-[45%] h-[50vh] md:h-[65vh] flex flex-col items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-center">
            <ThreeSixtyViewer activeColor={activeColor} />
            
            <ProductHotspots 
              hotspots={experienceHotspots} 
              onSelect={setActiveDetail} 
            />
          </div>

          {/* Color Configurator pushed to bottom */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-20">
            <ColorConfigurator 
              colors={experienceColors} 
              activeColor={activeColor} 
              onSelect={setActiveColor} 
            />
          </div>
          
        </div>

        {/* RIGHT COLUMN: Technical Specs Card */}
        <div className="w-full xl:w-[27%] flex flex-col justify-center xl:pt-24 items-center xl:items-end">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-[#111] p-8 rounded-[24px] border border-[rgba(30,50,60,0.06)] dark:border-white/5 shadow-[0_20px_50px_rgba(30,50,60,0.08)] dark:shadow-2xl w-full max-w-[340px] flex flex-col gap-6 transition-colors duration-700"
          >
            <h3 className="text-[#182333] dark:text-white font-bold text-lg mb-2 transition-colors">Technical Specifications</h3>
            
            <div className="flex flex-col gap-5">
               {experienceSpecs.slice(0, 4).map((spec, idx) => (
                 <div key={idx} className="flex flex-col border-b border-[rgba(30,50,60,0.05)] dark:border-white/10 pb-3 last:border-0 last:pb-0">
                   <p className="text-[10px] text-[#899296] dark:text-white/40 uppercase tracking-widest font-bold mb-1 transition-colors">{spec.label}</p>
                   <p className="text-xl font-bold text-[#182333] dark:text-white transition-colors">
                     {spec.value} {spec.unit && <span className="text-sm font-medium">{spec.unit}</span>}
                   </p>
                 </div>
               ))}
            </div>
            
            <button className="mt-2 w-full px-6 py-4 rounded-full bg-white dark:bg-[#1a1a1a] text-[#182333] dark:text-white text-sm font-bold border border-[rgba(30,50,60,0.1)] dark:border-white/10 hover:bg-[#F9FAF6] hover:border-[rgba(30,50,60,0.2)] dark:hover:bg-white/5 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
              View Full Specs <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {activeDetail && (
            <DetailModal 
              detail={activeDetail} 
              onClose={() => setActiveDetail(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
