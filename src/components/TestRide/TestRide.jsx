import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../common/ImageWithFallback';

export default function TestRide({ onBookTestRide }) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden border-t border-gray-100 bg-brand-light">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="/images/gallery_landscape.jpg" 
          fallbackSrc="/images/hero_scooter.jpg"
          alt="Test Ride Background" 
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-2/3 lg:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent sm:hidden" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4 drop-shadow-sm"
        >
          The Future Is Electric
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-text mb-6 drop-shadow-sm leading-tight"
        >
          Ready to Ride <br /> the Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-text-muted font-medium mb-12 max-w-md text-sm md:text-lg leading-relaxed"
        >
          Book a test ride today and discover the next generation of premium electric mobility for yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button onClick={onBookTestRide} className="w-full sm:w-auto bg-brand-text text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-text-muted transition-colors shadow-md">
            Book a Test Ride
          </button>
          <button className="w-full sm:w-auto bg-white text-brand-text border border-gray-200 px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:border-brand-green hover:text-brand-green transition-all shadow-sm">
            Find a Dealer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
