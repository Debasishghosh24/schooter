import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Wrench, Smartphone, Battery, Navigation } from 'lucide-react';

const reasons = [
  {
    icon: <Navigation className="w-6 h-6 text-brand-green" />,
    title: 'Smooth Control',
    description: 'Precision engineering delivers seamless handling and balance for Indian city traffic.'
  },
  {
    icon: <Battery className="w-6 h-6 text-brand-green" />,
    title: 'Range Confidence',
    description: 'Advanced battery management system ensures you never have to worry about the distance.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
    title: 'Built Tough',
    description: 'High-tensile steel frame designed to withstand the toughest road conditions.'
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-green" />,
    title: 'Daily Comfort',
    description: 'Ergonomic seating and advanced suspension for a fatigue-free daily commute.'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-green" />,
    title: 'Smart Connectivity',
    description: 'Stay connected with GPS, ride analytics, and anti-theft features via our app.'
  },
  {
    icon: <Wrench className="w-6 h-6 text-brand-green" />,
    title: 'Service Network',
    description: 'Reliable pan-India service network with doorstep assistance and genuine parts.'
  }
];

export default function WhyZapOrbit() {
  return (
    <section id="why-zaporbit" className="py-24 relative overflow-hidden bg-brand-surface">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-blue-soft opacity-30 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
          >
            The ZapOrbit Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-4"
          >
            Engineered for Excellence
          </motion.h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Every ZapOrbit scooter is crafted with precision to deliver a superior riding experience, uncompromising safety, and long-lasting reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green/10 transition-transform border border-gray-100">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-green transition-colors">{reason.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
