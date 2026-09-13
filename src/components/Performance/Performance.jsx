import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '160', suffix: '+', label: 'KM RANGE' },
  { value: '4.2', suffix: 's', label: '0–40 KM/H' },
  { value: '45', suffix: 'm', label: 'FAST CHARGE 0-80%' },
  { value: '80', suffix: '', label: 'KM/H TOP SPEED' },
];

function AnimatedCounter({ value, suffix }) {
  return (
    <div className="flex items-baseline justify-center text-brand-text">
      <span className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-sm">{value}</span>
      <span className="text-2xl md:text-4xl text-brand-green ml-1 font-bold">{suffix}</span>
    </div>
  );
}

export default function Performance() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Graphic Element */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[120%] h-[120%] border-[200px] border-brand-green/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
          >
            Uncompromising Performance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text mb-6"
          >
            Power that Excites.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-muted text-lg max-w-2xl mx-auto"
          >
            Experience instant torque and thrilling acceleration without a drop of fuel.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center p-8 bg-brand-light rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-6 text-xs md:text-sm font-bold tracking-[0.15em] text-brand-text-muted uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
