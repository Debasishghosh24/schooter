import React, { useState, useRef, useEffect, useCallback } from 'react';
import ImageWithFallback from '../common/ImageWithFallback';

const scooter360Frames = [
  // Add real 360° frames here later
  // '/360/scooter-01.webp',
  // ...
];

export default function ThreeSixtyViewer({ 
  activeColor, 
  fallbackSrc = '/images/scooter_white.jpg',
  frames = scooter360Frames,
  sensitivity = 10 
}) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const frameRef = useRef(0);
  const totalFrames = frames.length;
  const isEnabled = totalFrames > 1;

  // Preload images if frames exist
  useEffect(() => {
    if (totalFrames > 0) {
      let loaded = 0;
      frames.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loaded++;
          setLoadedImages(loaded);
        };
      });
    }
  }, [frames, totalFrames]);

  const handlePointerDown = (e) => {
    setHasInteracted(true);
    if (!isEnabled) return;
    
    setIsDragging(true);
    startXRef.current = e.clientX;
    frameRef.current = currentFrame;
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !isEnabled) return;
    const deltaX = e.clientX - startXRef.current;
    
    let frameOffset = Math.floor(deltaX / sensitivity);
    
    let nextFrame = (frameRef.current - frameOffset) % totalFrames;
    if (nextFrame < 0) {
      nextFrame += totalFrames;
    }
    
    setCurrentFrame(nextFrame);
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
        setIsDragging(false);
        e.target.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (!isEnabled) return;
    if (e.key === 'ArrowLeft') {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
      setHasInteracted(true);
    } else if (e.key === 'ArrowRight') {
      setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
      setHasInteracted(true);
    }
  }, [isEnabled, totalFrames]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Interaction Area */}
      <div
        ref={containerRef}
        className={`absolute inset-0 z-20 select-none outline-none touch-none pointer-events-auto ${isEnabled ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={isEnabled ? 0 : -1}
      />
      
      {/* Image Container */}
      <div className="relative w-full max-w-[1000px] h-full flex items-center justify-center z-10 pointer-events-none">
        {isEnabled && loadedImages < totalFrames && (
            <div className="absolute top-4 right-4 text-[10px] tracking-widest font-bold text-[#182333] dark:text-white z-30 opacity-50 uppercase">
                LOADING 360°...
            </div>
        )}
        
        {totalFrames > 0 ? (
          <img
            src={frames[currentFrame]}
            alt="360 Viewer Frame"
            className="w-full h-full object-contain mix-blend-screen transition-none pointer-events-none"
            style={{ filter: activeColor?.cssFilter }}
            draggable="false"
          />
        ) : (
          <ImageWithFallback
            src={fallbackSrc}
            fallbackSrc={fallbackSrc}
            alt="Electric Scooter Fallback View"
            className="w-full h-full object-contain mix-blend-screen transition-all duration-700 ease-in-out pointer-events-none"
            style={{ filter: activeColor?.cssFilter }}
            draggable="false"
          />
        )}
      </div>

      {/* Drag Indicator Label */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 transition-opacity duration-1000 ${hasInteracted ? 'opacity-0' : 'opacity-50'}`}>
        <span className="text-[10px] tracking-[0.3em] text-[#182333] dark:text-white uppercase font-bold text-center">360°</span>
        <span className="text-[10px] tracking-[0.3em] text-[#182333] dark:text-white uppercase text-center mt-1">Drag to Rotate</span>
        <div className="w-12 h-[1px] bg-[#182333]/20 dark:bg-white/20 mt-3" />
      </div>
    </div>
  );
}
