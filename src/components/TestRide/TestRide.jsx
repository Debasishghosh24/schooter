import React from 'react';
import { motion } from 'framer-motion';

export default function TestRide() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ev-accent rounded-full blur-[150px] mix-blend-screen translate-x-1/2 -translate-y-1/2 opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6"
        >
          Ready to Ride?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70 font-light mb-12"
        >
          Experience the next generation of electric mobility.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors">
            Book a Test Ride
          </button>
          <button className="w-full sm:w-auto glass px-10 py-5 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-colors">
            Find a Dealer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
