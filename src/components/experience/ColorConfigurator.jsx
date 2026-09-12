import React from 'react';

export default function ColorConfigurator({ colors, activeColor, onSelect }) {
  return (
    <div className="flex flex-col items-end z-30">
      <div className="flex flex-col gap-4">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color)}
            className="group flex items-center justify-end gap-4"
          >
            <span className={`text-sm transition-opacity duration-300 drop-shadow-md ${activeColor.id === color.id ? 'opacity-100 text-white font-medium' : 'opacity-60 text-white group-hover:opacity-100'}`}>
              {color.name}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeColor.id === color.id ? 'border border-white scale-110' : 'border border-transparent hover:border-white/50'}`}>
              <div
                className="w-6 h-6 rounded-full shadow-inner border border-white/20"
                style={{ backgroundColor: color.cssFilter.includes('hue-rotate') || color.id === 'white' ? color.id === 'white' ? '#F5F5F5' : color.id === 'black' ? '#333333' : color.id === 'blue' ? '#1688F5' : '#CC0000' : '#888' }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
