import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BatteryCharging, Zap, Smartphone } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const technologies = [
  {
    id: 'display',
    title: 'Smart Display',
    label: 'INTELLIGENT COCKPIT',
    description: 'A brilliant 7-inch TFT display providing real-time ride metrics, navigation, and seamless smartphone integration right at your fingertips.',
    stat: '7" HD TFT',
    icon: <Cpu className="w-5 h-5 text-ev-accent" />,
    image: '/images/gallery_dashboard.jpg', // Guaranteed scooter dashboard
    reverse: false
  },
  {
    id: 'battery',
    title: 'Advanced Battery',
    label: 'ENERGY DYNAMICS',
    description: 'High-density lithium-ion core placed perfectly within the chassis for optimal center of gravity, delivering unmatched range and performance.',
    stat: '5.2 kWh',
    icon: <BatteryCharging className="w-5 h-5 text-ev-accent" />,
    image: '/images/scooter_white.jpg', // Guaranteed scooter asset
    reverse: true
  },
  {
    id: 'charging',
    title: 'Fast Charging',
    label: 'RAPID RECOVERY',
    description: 'Engineered for the urban pace. Our proprietary charging system gets you back on the road with minimal downtime.',
    stat: '0-80% in 45m',
    icon: <Zap className="w-5 h-5 text-ev-accent" />,
    image: '/images/hero_scooter.jpg', // Guaranteed scooter asset
    reverse: false
  },
  {
    id: 'app',
    title: 'Connected App',
    label: 'DIGITAL ECOSYSTEM',
    description: 'Total control from your pocket. Track location, monitor battery health, and customize ride modes before you even step on.',
    stat: '4G LTE GPS',
    icon: <Smartphone className="w-5 h-5 text-ev-accent" />,
    image: '/images/scooter_white.jpg', // Guaranteed scooter asset
    reverse: true
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-16 md:py-24 bg-gradient-to-br from-[#EAF0F4] to-[#F4F5F0] dark:from-[#0a0a0a] dark:to-[#0a0a0a] border-t border-[rgba(30,50,60,0.08)] dark:border-white/5 relative overflow-hidden transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-[#182333] dark:text-white mb-3 transition-colors"
          >
            Technology That Moves You Forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[#647078] dark:text-white/50 text-sm max-w-lg mx-auto font-light transition-colors"
          >
            Engineered from the ground up to redefine urban mobility.
          </motion.p>
        </div>

        {/* Alternating Layout */}
        <div className="flex flex-col gap-16 md:gap-20">
          {technologies.map((tech, idx) => (
            <div 
              key={tech.id}
              className={`flex flex-col ${tech.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}
            >
              
              {/* Image Area */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.97, x: tech.reverse ? 20 : -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#F9FAF6] dark:bg-[#111] border border-[rgba(30,50,60,0.07)] dark:border-white/5 shadow-[0_12px_35px_rgba(40,55,60,0.07)] dark:shadow-none transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,55,60,0.1)]">
                  <ImageWithFallback
                    src={tech.image}
                    fallbackSrc="/images/scooter_white.jpg"
                    alt={tech.title}
                    className="w-full h-full object-cover opacity-95 dark:opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out mix-blend-multiply dark:mix-blend-screen"
                    loading="lazy"
                  />
                  {/* Subtle lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(244,245,240,0.5)] dark:from-black/60 to-transparent pointer-events-none transition-colors" />
                </div>
              </motion.div>

              {/* Text Area */}
              <motion.div 
                initial={{ opacity: 0, x: tech.reverse ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col items-start text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#0071e3]/10 dark:bg-ev-accent/10 border border-[#0071e3]/20 dark:border-ev-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#0071e3] dark:text-ev-accent">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-[10px] text-[#899296] dark:text-white/50 uppercase tracking-[0.2em] font-medium transition-colors">
                    {tech.label}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold text-[#182333] dark:text-white mb-3 tracking-tight transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-[#647078] dark:text-white/60 text-sm md:text-base leading-relaxed font-light mb-6 transition-colors">
                  {tech.description}
                </p>

                <div className="inline-flex items-baseline gap-2 border-b border-[rgba(30,50,60,0.15)] dark:border-white/10 pb-1 transition-colors">
                  <span className="text-lg font-medium text-[#182333] dark:text-white transition-colors">{tech.stat}</span>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
