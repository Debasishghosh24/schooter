import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScooterViewer from './ScooterViewer';
import ColorConfigurator from './ColorConfigurator';
import ProductHotspots from './ProductHotspots';
import DetailModal from './DetailModal';
import ProductSpecs from './ProductSpecs';
import { experienceColors, experienceHotspots, experienceSpecs } from '../../data/scooterExperience';

export default function ExperienceContainer() {
  const [activeColor, setActiveColor] = useState(experienceColors[0]);
  const [activeDetail, setActiveDetail] = useState(null);

  return (
    <section id="experience" className="bg-[#050505] relative min-h-screen border-t border-white/5 py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Intro */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ev-accent text-xs tracking-[0.2em] uppercase font-semibold mb-4"
          >
            EXPERIENCE EVERY ANGLE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
          >
            Designed To Be <br /> Seen From Every Side.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm md:text-base max-w-lg mx-auto mt-6"
          >
            Explore every detail of our electric scooter — from its signature lighting to its intelligent cockpit.
          </motion.p>
        </div>

        {/* Main Product Viewer Area */}
        <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center my-12">
          
          <ScooterViewer activeColor={activeColor} />
          
          <ProductHotspots 
            hotspots={experienceHotspots} 
            onSelect={setActiveDetail} 
          />

          <ColorConfigurator 
            colors={experienceColors} 
            activeColor={activeColor} 
            onSelect={setActiveColor} 
          />
          
        </div>

        {/* Specifications Bar */}
        <ProductSpecs specs={experienceSpecs} />

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
