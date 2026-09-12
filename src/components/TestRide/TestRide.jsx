import React from 'react';
import { motion } from 'framer-motion';

export default function TestRide() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-white/5">

      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[150px] mix-blend-screen translate-x-1/3 -translate-y-1/2" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1688F5]/10 rounded-full blur-[150px] mix-blend-screen -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 drop-shadow-lg"
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
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className="w-full sm:w-auto btn-primary px-10 py-5 rounded-full font-semibold text-lg">
            Book a Test Ride
          </button>
          <button className="w-full sm:w-auto btn-secondary px-10 py-5 rounded-full font-semibold text-lg">
            Find a Dealer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
