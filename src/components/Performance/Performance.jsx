import React from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '150', suffix: '+', label: 'KM RANGE' },
  { value: '4.2', suffix: 's', label: '0–40 KM/H' },
  { value: '80', suffix: '%', label: 'CHARGE IN 45 MIN' },
  { value: '120', suffix: '', label: 'KM/H TOP SPEED' },
];

function AnimatedCounter({ value, suffix }) {
  // A real implementation would use useSpring and useTransform to animate the number.
  // For simplicity and performance, we'll use a staggered fade up for the number itself,
  // or a lightweight CSS approach. Here we just display it with Framer Motion.
  return (
    <div className="flex items-baseline justify-center">
      <span className="text-6xl md:text-8xl font-medium tracking-tighter">{value}</span>
      <span className="text-2xl md:text-4xl text-ev-accent ml-1 font-semibold">{suffix}</span>
    </div>
  );
}

export default function Performance() {
  return (
    <section className="py-24 bg-ev-dark relative overflow-hidden">
      
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2938&auto=format&fit=crop" 
          alt="Performance Background" 
          loading="lazy"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ev-dark via-transparent to-ev-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-sm md:text-base font-semibold tracking-widest text-white/50 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
