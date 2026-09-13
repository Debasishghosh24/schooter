import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudRain, ShieldAlert } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const features = [
  {
    icon: <CloudRain className="w-8 h-8 text-brand-green" />,
    title: 'Monsoon Ready',
    description: 'IP67 rated battery and motor. Built to withstand Indian monsoons and waterlogged streets.'
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-brand-green" />,
    title: 'Pothole Proof',
    description: 'Advanced dual suspension and high ground clearance designed specifically for Indian roads.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
    title: 'Thermal Management',
    description: 'Advanced battery cooling systems that perform optimally even in extreme 45°C summer heat.'
  }
];

export default function IndianUrbanMobility() {
  return (
    <section id="mobility" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Made for India
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-text mb-6 leading-tight"
            >
              Engineered for <br className="hidden lg:block"/> Indian Roads.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text-muted text-lg mb-10 leading-relaxed"
            >
              We understand the unique challenges of Indian urban mobility. From extreme temperatures to unpredictable road conditions, ZapOrbit is built tough to handle it all without compromising on style or performance.
            </motion.p>
            
            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light flex flex-shrink-0 items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:border-brand-green/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-green transition-colors">{feature.title}</h3>
                    <p className="text-brand-text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-[600px] mx-auto rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="absolute inset-0 bg-brand-text/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <ImageWithFallback 
                src="/images/gallery_urban.jpg"
                fallbackSrc="/images/hero_scooter.jpg"
                alt="ZapOrbit in Indian City"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
