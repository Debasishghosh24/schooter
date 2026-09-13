import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const technologies = [
  {
    id: 'battery',
    title: 'Advanced Battery System',
    description: 'Our proprietary high-density battery cells deliver longer range and faster charging, ensuring you spend more time on the road.',
    image: '/images/gallery_dashboard.jpg',
  },
  {
    id: 'display',
    title: 'Smart TFT Display',
    description: 'Get real-time ride insights, navigation, and seamless Bluetooth connectivity right at your fingertips.',
    image: '/images/gallery_dashboard.jpg',
  },
  {
    id: 'app',
    title: 'Connected App Experience',
    description: 'Control your scooter remotely, track rides, monitor battery health, and secure your vehicle—all from your smartphone.',
    image: '/images/gallery_dashboard.jpg',
  },
  {
    id: 'braking',
    title: 'Regenerative Braking',
    description: 'Recover energy every time you brake. Our intelligent system extends your range while providing smoother, safer stops.',
    image: '/images/gallery_dashboard.jpg',
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 relative bg-brand-light overflow-hidden border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-start md:flex-row md:items-end justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Intelligent Design
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text mb-6 leading-tight"
            >
              Technology <br />
              in Motion.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text-muted text-lg"
            >
              Every ZapOrbit scooter is packed with cutting-edge innovations designed to elevate your ride.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-sm font-semibold text-brand-text hover:text-brand-green transition-colors group/btn"
          >
             Explore Tech
             <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover/btn:bg-brand-green group-hover/btn:text-white group-hover/btn:border-brand-green transition-all shadow-sm">
               <ArrowRight className="w-4 h-4" />
             </div>
           </motion.button>
        </div>

        {/* Grid / Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-12 gap-6 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (index * 0.1) }}
              className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-auto shrink-0 snap-start bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface mb-6 relative group">
                 <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                 <img 
                   src={tech.image} 
                   alt={tech.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" 
                 />
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-xl lg:text-2xl font-bold text-brand-text mb-3">
                  {tech.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed text-sm lg:text-base">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
