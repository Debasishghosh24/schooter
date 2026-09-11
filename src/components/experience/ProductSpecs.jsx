import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecs({ specs }) {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 border-t border-white/10 pt-8 z-20 relative px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center border-r border-white/5 last:border-0"
          >
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl md:text-4xl font-light text-white tracking-tight">
                {spec.value}
              </span>
              {spec.unit && (
                <span className="text-sm text-white/50">{spec.unit}</span>
              )}
            </div>
            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
              {spec.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
