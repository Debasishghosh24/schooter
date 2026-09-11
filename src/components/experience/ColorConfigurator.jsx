import React from 'react';
import { motion } from 'framer-motion';

export default function ColorConfigurator({ colors, activeColor, onSelect }) {
  return (
    <div className="absolute top-0 right-0 p-6 flex flex-col items-end pointer-events-auto z-30 hidden md:flex">
      <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase mb-4">Choose Your Finish</span>
      <div className="flex flex-col gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color)}
            className="group flex items-center justify-end gap-4"
          >
            <span className={`text-xs transition-opacity duration-300 ${activeColor.id === color.id ? 'opacity-100 text-white font-medium' : 'opacity-0 text-white/50 group-hover:opacity-100'}`}>
              {color.name}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeColor.id === color.id ? 'border border-white/50 scale-110' : 'border border-transparent'}`}>
              <div 
                className="w-6 h-6 rounded-full shadow-inner border border-white/10"
                style={{ backgroundColor: color.cssFilter.includes('hue-rotate') || color.id === 'white' ? color.id === 'white' ? '#FFFFFF' : color.id === 'black' ? '#111111' : color.id === 'blue' ? '#0071E3' : '#CC0000' : '#333' }}
              />
            </div>
          </button>
        ))}
      </div>
      <span className="text-[10px] text-white/30 tracking-wider mt-4">4 EXTERIOR COLOURS</span>
    </div>
  );
}
