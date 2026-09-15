import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Battery, Clock, Gauge } from 'lucide-react';

const stats = [
  { icon: <Gauge className="w-5 h-5 text-brand-green" />, label: '120 KM', sub: 'True Range' },
  { icon: <Zap className="w-5 h-5 text-brand-green" />, label: '80 KM/H', sub: 'Top Speed' },
  { icon: <Battery className="w-5 h-5 text-brand-green" />, label: '3.5 KWH', sub: 'Battery' },
  { icon: <Clock className="w-5 h-5 text-brand-green" />, label: '4-5 HRS', sub: 'Charging' },
];

const carouselImages = [
  { desktop: '/images/carousel/img1.png', mobile: '/images/carousel/mobile1.png' },
  { desktop: '/images/carousel/img2.png', mobile: '/images/carousel/mobile2.png' },
  { desktop: '/images/carousel/img3.png', mobile: '/images/carousel/mobile3.png' },
  { desktop: '/images/carousel/img4.png', mobile: '/images/carousel/mobile4.png' },
  { desktop: '/images/carousel/img5.png', mobile: '/images/carousel/mobile1.png' }
];

export default function Hero({ onBookTestRide }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-brand-light">

      {/* Background Layer */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* Gradients tailored to ensure text legibility on the left, without washing out the scooter */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent z-10 md:hidden h-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden md:block md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent z-10 opacity-70" />

        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={carouselImages[currentImageIndex].mobile} />
              <img
                src={carouselImages[currentImageIndex].desktop}
                alt={`ZapOrbit Scooters Premium ${currentImageIndex + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full flex flex-col items-start justify-center h-full pt-8 pb-52 md:pb-0">

        {/* Left Content */}
        <div className="w-full md:w-[60%] flex flex-col items-start space-y-6 z-30 mt-16 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-black md:text-brand-text-muted text-sm font-bold tracking-[0.1em] uppercase flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-brand-green"></span>
            ELECTRIC MOBILITY, REFINED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-black md:text-brand-text leading-[1.05]"
          >
            Ride Beyond <br />
            The Ordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-black font-medium md:font-light md:text-brand-text-muted max-w-xl mt-4"
          >
            Smart electric mobility engineered for modern India.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-black font-medium md:font-light md:text-brand-text-muted max-w-xl mt-4"
          >
            Experience smarter rides, effortless performance, and cleaner journeys—designed for the way India moves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
          >
            <a href="#models" className="btn-primary px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Explore Models
            </a>
            <button onClick={onBookTestRide} className="btn-secondary px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Book a Test Ride <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Floating Performance Stats positioned at bottom */}
      <div className="absolute bottom-6 md:bottom-10 left-4 right-4 md:left-6 md:right-6 lg:left-12 lg:right-12 z-30">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto md:mx-0">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                className="group flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/80 shadow-sm flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-bold text-brand-text leading-tight">{stat.label}</span>
                  <span className="text-[10px] md:text-xs text-brand-text-muted font-bold uppercase tracking-wider mt-0.5">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
