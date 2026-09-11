import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Wifi, ShieldCheck, Play } from 'lucide-react';

const stats = [
  { icon: <Zap className="w-5 h-5 text-white/70" />, label: 'Real World Range', value: '150+ km' },
  { icon: <Battery className="w-5 h-5 text-white/70" />, label: '0-80% in 45 mins', value: 'Fast Charging' },
  { icon: <Wifi className="w-5 h-5 text-white/70" />, label: 'Always in Control', value: 'Connected' },
  { icon: <ShieldCheck className="w-5 h-5 text-white/70" />, label: 'ABS + Traction', value: 'Smart Safety' },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10" />
        <img
          src="/images/hero_scooter.jpg"
          alt="Premium EV Scooter"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-start justify-center h-full pt-20 pb-32">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            All Electric. All You.
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05]"
          >
            Move Beyond <br />
            The Ordinary.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 max-w-md font-light mt-4"
          >
            Performance, technology and intelligent design for the next generation of urban mobility.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
          >
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-sm">
              Explore Scooters <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="glass px-8 py-3.5 rounded-full font-semibold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-3 text-sm border border-white/20">
              <Play className="w-4 h-4" /> Watch Film
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 z-20 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center">
          {/* Stats */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {stat.icon}
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">{stat.value}</span>
                  <span className="text-white/50 text-xs">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* 360 Indicator */}
          <div className="hidden md:flex flex-col items-center gap-2 mt-6 md:mt-0">
            <div className="text-white flex flex-col items-center">
              <span className="text-xs text-white/50 tracking-widest mb-1">^</span>
              <span className="font-semibold tracking-wider">360°</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase mt-1">Drag to rotate</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
