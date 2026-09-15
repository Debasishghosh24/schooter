import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ScooterViewer({ activeColor }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Visual Scooter Container */}
      <motion.div
        className="relative w-full max-w-[1000px] h-full flex items-center justify-center pointer-events-none"
      >
        <ImageWithFallback
          src="/images/scooter_white.jpg"
          fallbackSrc="/images/scooter_white.jpg"
          alt="Electric Scooter View"
          className="w-full h-full object-contain mix-blend-screen transition-all duration-700 ease-in-out"
          style={{ filter: activeColor.cssFilter }}
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
