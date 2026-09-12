import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Wifi, ShieldCheck, Play, ArrowRight } from 'lucide-react';

const stats = [
  { icon: <Zap className="w-5 h-5 text-ev-cyan" />, label: 'Real World Range', value: '150+ km' },
  { icon: <Battery className="w-5 h-5 text-ev-cyan" />, label: '0-80% in 45 mins', value: 'Fast Charging' },
  { icon: <Wifi className="w-5 h-5 text-ev-cyan" />, label: 'Always in Control', value: 'Connected' },
  { icon: <ShieldCheck className="w-5 h-5 text-ev-cyan" />, label: 'ABS + Traction', value: 'Smart Safety' },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden transition-colors duration-700">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/60 to-transparent z-10 transition-colors duration-700 w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent z-10 transition-colors duration-700" />

        <img
          src="/images/hero_scooter.jpg"
          alt="Premium EV Scooter in City"
          className="w-full h-full object-cover object-center transition-opacity duration-700"
        />
      </motion.div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between h-full pt-20 pb-32">

        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 z-30">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            All Electric. All You.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-white leading-[1.05] transition-colors shadow-black/50 drop-shadow-xl"
          >
            Move Beyond <br />
            The Ordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-white/80 max-w-md font-light mt-4 transition-colors drop-shadow-md"
          >
            Performance, technology and intelligent design for the next generation of urban mobility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
          >
            <button className="btn-primary px-8 py-3.5 flex items-center justify-center gap-2">
              Explore Scooters <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary px-8 py-3.5 flex items-center justify-center gap-3">
              <Play className="w-4 h-4 fill-white" /> Watch Film
            </button>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="hidden md:flex w-full md:w-1/2 h-full flex-col items-end justify-center pt-24 pr-12 z-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="flex flex-col items-end text-right space-y-2 mb-16"
          >
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Cleaner Air</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Greener Cities</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Happier People</span>
          </motion.div>

          {/* 360 Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-2 mt-auto mb-32"
          >
            <div className="text-white flex flex-col items-center transition-colors relative drop-shadow-md">
               {/* 360 Ring */}
               <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/50 rounded-full" style={{borderTopColor: 'transparent', transform: 'translate(-50%, -50%) rotate(-45deg)'}}></div>
               <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/50 rounded-full" style={{borderBottomColor: 'transparent', transform: 'translate(-50%, -50%) rotate(-45deg)'}}></div>
              
              <span className="font-semibold tracking-wider text-sm mt-3">360°</span>
              <span className="text-[9px] text-white/70 tracking-widest uppercase mt-3">Drag to rotate</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Floating Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 z-30 px-6 lg:px-12"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-start items-center">
          {/* Stats Container */}
          <div className="flex flex-wrap md:flex-nowrap items-center bg-transparent p-4 md:px-0 md:py-4">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-4 px-4 md:px-6 first:pl-0 last:pr-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm drop-shadow-md">{stat.value}</span>
                    <span className="text-white/70 text-xs drop-shadow-md">{stat.label}</span>
                  </div>
                </div>
                {/* Separator */}
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
