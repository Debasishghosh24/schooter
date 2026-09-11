import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ScooterViewer({ activeColor }) {
  const containerRef = useRef(null);
  const dragX = useMotionValue(0);
  
  // Smooth the drag value for a premium inertia feel
  const smoothX = useSpring(dragX, { damping: 20, stiffness: 90 });
  
  // Map horizontal drag to pseudo-3D rotation (Y-axis)
  const rotateY = useTransform(smoothX, [-300, 300], [15, -15]);
  
  // Map horizontal drag to subtle X-axis translation for parallax depth
  const translateX = useTransform(smoothX, [-300, 300], [20, -20]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      {/* Interactive Drag Area (pointer-events-auto allows dragging while parent is none) */}
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.1}
        style={{ x: dragX }}
        className="absolute inset-0 z-20 pointer-events-auto cursor-grab active:cursor-grabbing opacity-0"
      />

      {/* Visual Scooter Container with Pseudo-3D Transforms */}
      <motion.div 
        style={{ rotateY, x: translateX }}
        className="relative w-full max-w-[1000px] h-full flex items-center justify-center will-change-transform perspective-1000 z-10 pointer-events-none"
      >
        <ImageWithFallback
          src="/images/scooter_white.jpg"
          fallbackSrc="/images/scooter_white.jpg"
          alt="Electric Scooter 360 View"
          className="w-full h-full object-contain mix-blend-screen transition-all duration-700 ease-in-out"
          style={{ filter: activeColor.cssFilter }}
          draggable="false"
        />
      </motion.div>

      {/* Drag Indicator Label */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-0">
        <span className="text-[10px] tracking-[0.3em] text-white uppercase">Drag to Explore</span>
        <div className="w-12 h-[1px] bg-white/20 mt-3" />
      </div>

    </div>
  );
}
