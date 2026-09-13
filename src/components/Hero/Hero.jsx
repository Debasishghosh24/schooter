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
  '/images/carousel/img1.png',
  '/images/carousel/img2.png',
  '/images/carousel/img3.png',
  '/images/carousel/img4.png'
];

export default function Hero({ onBookTestRide }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // 10 seconds

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
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10 w-full md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent z-10 opacity-70" />

        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={carouselImages[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt={`ZapOrbit Scooters Premium ${currentImageIndex + 1}`}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>
      </motion.div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full flex flex-col items-start justify-center h-full pt-20">

        {/* Left Content */}
        <div className="w-full md:w-[60%] flex flex-col items-start space-y-6 z-30 mt-16 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-brand-text-muted text-sm font-bold tracking-[0.1em] uppercase flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-brand-green"></span>
            The Future of Urban Mobility
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-brand-text leading-[1.05]"
          >
            Power Meets <br />
            <span className="text-brand-green">Elegance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-brand-text-muted max-w-xl font-light mt-4"
          >
            Experience the ultimate ride with uncompromising range, intelligent features, and a design that turns heads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
          >
            <button onClick={onBookTestRide} className="btn-primary px-8 py-4 flex items-center justify-center gap-2 text-lg">
              Book a Test Ride <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary px-8 py-4 flex items-center justify-center gap-3 text-lg">
              Explore Z4 PRO
            </button>
          </motion.div>
        </div>

      </div>

      {/* Floating Performance Stats positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-6 right-6 lg:left-12 lg:right-12 z-30 hidden md:block"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="glass-card max-w-4xl px-8 py-6 flex justify-between items-center rounded-2xl mx-auto md:mx-0">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-brand-text">{stat.label}</span>
                  <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider">{stat.sub}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-[1px] h-10 bg-gray-200 ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
