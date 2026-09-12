import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScooterViewer from './ScooterViewer';
import ColorConfigurator from './ColorConfigurator';
import ProductHotspots from './ProductHotspots';
import DetailModal from './DetailModal';
import { experienceColors, experienceHotspots } from '../../data/scooterExperience';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ExperienceContainer() {
  const [activeColor, setActiveColor] = useState(experienceColors[0]);
  const [activeDetail, setActiveDetail] = useState(null);

  const thumbnails = [
    '/images/scooter_white.jpg',
    '/images/hero_scooter.jpg',
    '/images/scooter_white.jpg'
  ];

  return (
    <section id="experience" className="relative min-h-[80vh] bg-transparent border-t border-white/5 py-24 overflow-hidden transition-colors duration-700">

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F] to-[#0D213F] -z-20" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-8 h-full">

        {/* LEFT COLUMN: Title & Thumbnails */}
        <div className="w-full xl:w-[25%] flex flex-col justify-start xl:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
          >
            EXPLORE EVERY DETAIL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-lg"
          >
            Designed To Be <br /> Seen From Every Side.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm mt-6 mb-12 max-w-sm drop-shadow-md leading-relaxed"
          >
            Interact, rotate and explore the details that make AEROEV different.
          </motion.p>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {thumbnails.map((thumb, i) => (
              <div key={i} className={`w-16 h-16 md:w-20 md:h-20 rounded-xl glass-card overflow-hidden cursor-pointer hover:border-ev-cyan/50 transition-colors ${i === 0 ? 'border-ev-cyan/50 bg-[#1688F5]/10' : ''}`}>
                <ImageWithFallback src={thumb} fallbackSrc="/images/scooter_white.jpg" alt={`Thumbnail ${i}`} className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CENTER COLUMN: Main Product Viewer Area */}
        <div className="relative w-full xl:w-[50%] h-[50vh] md:h-[60vh] flex flex-col items-center justify-center">

          {/* Glowing Pedestal */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[150px] border-2 border-ev-cyan/30 rounded-[100%] drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] pointer-events-none -z-10 bg-gradient-to-b from-transparent to-[#00E5FF]/10" style={{ transform: 'translateX(-50%) rotateX(75deg)' }} />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-[180px] border border-white/10 rounded-[100%] pointer-events-none -z-10" style={{ transform: 'translateX(-50%) rotateX(75deg)' }} />

          <div className="absolute inset-0 flex items-center justify-center">
            <ScooterViewer activeColor={activeColor} />
            <ProductHotspots
              hotspots={experienceHotspots}
              onSelect={setActiveDetail}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Color Configurator */}
        <div className="w-full xl:w-[25%] flex flex-col justify-center xl:pt-24 items-center xl:items-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full flex flex-col items-end mb-16"
          >
            <h3 className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase mb-6 drop-shadow-md">Choose Your Finish</h3>
            
            <ColorConfigurator
              colors={experienceColors}
              activeColor={activeColor}
              onSelect={setActiveColor}
              layout="vertical"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-white flex flex-col items-center relative drop-shadow-md">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/50 rounded-full" style={{borderTopColor: 'transparent', transform: 'translate(-50%, -50%) rotate(-45deg)'}}></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/50 rounded-full" style={{borderBottomColor: 'transparent', transform: 'translate(-50%, -50%) rotate(-45deg)'}}></div>
              <span className="font-semibold tracking-wider text-sm mt-3">360°</span>
              <span className="text-[9px] text-white/70 tracking-widest uppercase mt-3">Drag to rotate</span>
            </div>
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
