import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function ProductHotspots({ hotspots, onSelect }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 max-w-[1000px] mx-auto">
      {hotspots.map((spot) => (
        <motion.div
          key={spot.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + Math.random() * 0.5, type: 'spring' }}
          style={{ top: spot.position.top, left: spot.position.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
        >
          <button
            onClick={() => onSelect(spot)}
            className="group relative flex items-center justify-center"
          >
            {/* Outer animated ring */}
            <div className="absolute w-12 h-12 rounded-full border border-ev-cyan/40 scale-100 group-hover:scale-150 group-hover:border-ev-cyan/80 transition-all duration-500 shadow-[0_0_20px_rgba(0,229,255,0.2)]" />

            {/* Inner button */}
            <div className="w-8 h-8 rounded-full bg-ev-cyan/10 border border-ev-cyan/30 text-ev-cyan backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)] transform group-hover:scale-110 group-hover:bg-ev-cyan group-hover:text-[#0A192F] transition-all duration-300">
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </div>

            {/* Hover Tooltip (Desktop only) */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block whitespace-nowrap pointer-events-none z-40">
              <div className="bg-[#0A192F]/90 backdrop-blur-md border border-ev-cyan/30 px-4 py-2 rounded-lg text-left shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="text-[10px] text-white/50 block mb-1">{spot.number}</span>
                <span className="text-sm text-white font-medium">{spot.title}</span>
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
