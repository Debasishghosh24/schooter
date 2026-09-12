import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const technologies = [
  {
    id: 'battery',
    title: 'Advanced Battery',
    description: 'Longer range, faster charging.',
    image: '/images/gallery_dashboard.jpg', // Placeholder for battery image
  },
  {
    id: 'display',
    title: 'Smart Display',
    description: 'Real-time ride insights.',
    image: '/images/gallery_dashboard.jpg',
  },
  {
    id: 'app',
    title: 'Connected App',
    description: 'Your ride, your way.',
    image: '/images/gallery_dashboard.jpg', // Placeholder for app image
  },
  {
    id: 'braking',
    title: 'Regenerative Braking',
    description: 'More range, less impact.',
    image: '/images/gallery_dashboard.jpg', // Placeholder for motor image
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden transition-colors duration-700">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#122A4E]/50 -z-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1688F5]/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-stretch">
          
          {/* Left Text Block */}
          <div className="w-full xl:w-1/3 flex flex-col items-start justify-center text-left xl:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
            >
              BUILT FOR A SMARTER TOMORROW
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 drop-shadow-md leading-tight"
            >
              Technology That <br className="hidden md:block" /> Moves You Forward
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-sm max-w-md font-light mb-8 drop-shadow-md leading-relaxed"
            >
              Pure intelligent battery system to a connected riding experience, every detail is designed to take you further.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="btn-secondary px-6 py-3 flex items-center gap-2 text-sm"
            >
              Explore Technology <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right Cards Block */}
          <div className="w-full xl:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 xl:mt-0">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col border border-white/10 hover:border-ev-cyan/30"
              >
                {/* Image Area */}
                <div className="w-full pt-8 px-4 flex-1 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent relative">
                   <div className="absolute inset-0 bg-ev-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ImageWithFallback
                    src={tech.image}
                    fallbackSrc="/images/gallery_dashboard.jpg"
                    alt={tech.title}
                    className="w-full h-auto object-contain max-h-32 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Text Area */}
                <div className="p-5 flex flex-col justify-end bg-gradient-to-t from-[#061121] to-transparent">
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-ev-cyan transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-white/50 text-[11px] font-medium transition-colors">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
