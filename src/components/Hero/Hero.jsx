import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Wifi, ShieldCheck, Play, ArrowRight } from 'lucide-react';

const stats = [
  { icon: <Zap className="w-5 h-5 text-[#0071e3] dark:text-white/70" />, label: 'Real World Range', value: '150+ km' },
  { icon: <Battery className="w-5 h-5 text-[#0071e3] dark:text-white/70" />, label: '0-80% in 45 mins', value: 'Fast Charging' },
  { icon: <Wifi className="w-5 h-5 text-[#0071e3] dark:text-white/70" />, label: 'Always in Control', value: 'Connected' },
  { icon: <ShieldCheck className="w-5 h-5 text-[#0071e3] dark:text-white/70" />, label: 'ABS + Traction', value: 'Smart Safety' },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden transition-colors duration-700">
      
      {/* Dynamic Background Gradients */}
      {/* Light Theme: Ivory -> Pale Blue-Gray -> Soft Warm Neutral */}
      <div className="absolute inset-0 bg-[#F4F5F0] dark:bg-transparent -z-20 transition-colors duration-700" />
      {/* Dark Theme: Deep Blue -> Indigo -> Soft Violet */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071A2B] via-[#102A43] to-[#1E3A5F] hidden dark:block -z-20 transition-opacity duration-700" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/40 dark:bg-[#312E81]/30 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/60 dark:bg-[#1E3A5F]/40 rounded-full blur-[120px] -z-10 pointer-events-none transition-colors" />

      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F5F0] via-[#F4F5F0]/60 dark:from-black/90 dark:via-black/50 to-transparent z-10 transition-colors duration-700 w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F5F0] via-transparent to-transparent dark:from-black/50 dark:to-black z-10 transition-colors duration-700" />
        
        <img
          src="/images/hero_scooter.jpg"
          alt="Premium EV Scooter"
          className="w-full h-full object-cover object-center opacity-100 dark:opacity-80 transition-opacity duration-700"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-start justify-center h-full pt-20 pb-32">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#899296] dark:text-white/60 text-sm font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            All Electric. All You.
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#182333] dark:text-white leading-[1.05] transition-colors"
          >
            Move Beyond <br />
            The Ordinary.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-[#647078] dark:text-white/70 max-w-md font-light mt-4 transition-colors"
          >
            Performance, technology and intelligent design for the next generation of urban mobility.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
          >
            <button className="bg-[#182333] dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-semibold hover:bg-[#263444] dark:hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-sm shadow-[0_4px_12px_rgba(24,35,51,0.15)] hover:shadow-[0_6px_20px_rgba(24,35,51,0.2)] dark:shadow-white/10 hover:-translate-y-0.5">
              Explore Scooters <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-[rgba(246,247,243,0.78)] dark:bg-black/40 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold text-[#182333] dark:text-white hover:bg-[#F9FAF6] dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-sm border border-[rgba(30,50,60,0.08)] dark:border-white/20 shadow-[0_4px_12px_rgba(30,50,60,0.03)] hover:shadow-[0_8px_16px_rgba(30,50,60,0.06)] hover:-translate-y-0.5">
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
          {/* Stats Container (Floating) */}
          <div className="flex flex-wrap md:flex-nowrap items-center bg-transparent border-transparent p-4 md:px-0 md:py-4 shadow-none transition-colors duration-700">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 px-4 md:px-6 first:pl-0 last:pr-2">
                  <div className="text-[#182333] dark:text-white/70 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#182333] dark:text-white font-semibold text-sm transition-colors">{stat.value}</span>
                    <span className="text-[#899296] dark:text-white/50 text-xs transition-colors">{stat.label}</span>
                  </div>
                </div>
                {/* Separator */}
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-[rgba(30,50,60,0.15)] dark:bg-white/10 transition-colors" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* 360 Indicator */}
          <div className="hidden md:flex flex-col items-center gap-2 mt-6 md:mt-0">
            <div className="text-[#182333] dark:text-white flex flex-col items-center transition-colors">
              <span className="text-xs text-[#899296] dark:text-white/50 tracking-widest mb-1">^</span>
              <span className="font-semibold tracking-wider">360°</span>
              <span className="text-[10px] text-[#899296] dark:text-white/50 tracking-widest uppercase mt-1">Drag to rotate</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
