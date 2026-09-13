import React from 'react';
import { motion } from 'framer-motion';
import { Home, MapPin, Zap } from 'lucide-react';

const solutions = [
  {
    icon: <Home className="w-8 h-8 text-brand-green" />,
    title: 'Home Charging',
    description: 'Plug into any standard 15A wall socket. Wake up to a full charge every morning.',
    stat: '3-4 Hours',
    statLabel: 'Full Charge'
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-green" />,
    title: 'Fast Charging',
    description: 'Specialized fast chargers available as an add-on for those who need quick top-ups.',
    stat: '45 Mins',
    statLabel: '0-80% Charge'
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-green" />,
    title: 'Public Network',
    description: 'Access to a growing network of public charging stations across major Indian cities.',
    stat: '1000+',
    statLabel: 'Stations Nationwide'
  }
];

export default function ChargingSolutions() {
  return (
    <section id="charging" className="py-24 relative overflow-hidden bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
          >
            Power Up Anywhere
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-6"
          >
            Convenient Charging Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-muted text-lg max-w-2xl mx-auto"
          >
            We've made charging your ZapOrbit scooter as easy as charging your phone. No complex installations required.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light p-8 rounded-3xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">{solution.title}</h3>
              <p className="text-brand-text-muted text-sm mb-8 flex-grow leading-relaxed">{solution.description}</p>
              
              <div className="border-t border-gray-200 w-full pt-6">
                <p className="text-3xl font-bold text-brand-text">{solution.stat}</p>
                <p className="text-brand-green text-xs font-bold uppercase tracking-wider mt-1">{solution.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
