import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../common/ImageWithFallback';

export default function TestRide() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden border-t border-white/5">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="/images/gallery_landscape.jpg" 
          fallbackSrc="/images/hero_scooter.jpg"
          alt="Test Ride Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
        >
          SAME JOURNEY. A CLEANER TOMORROW.
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 drop-shadow-lg leading-tight"
        >
          Ready to <br /> Experience It?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 font-light mb-12 max-w-md text-sm md:text-base leading-relaxed"
        >
          Book a test ride today and discover the next generation of electric mobility for yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto btn-primary px-10 py-4 rounded-full font-semibold text-sm tracking-wide">
            Book a Test Ride
          </button>
          <button className="w-full sm:w-auto btn-secondary px-10 py-4 rounded-full font-semibold text-sm tracking-wide">
            Find a Dealer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
