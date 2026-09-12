import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Pause } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function VideoStory() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  // Intersection Observer for autoplay/pause on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isModalOpen) {
            videoRef.current?.play().catch(() => {
              // Ignore play interruption errors
            });
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMuted(false); // Unmute for full experience
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsMuted(true); // Return to muted for background
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const togglePlayModal = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMuteModal = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-[600px] md:h-[800px] overflow-hidden border-t border-white/5">
      {/* Background Video / Fallback Image */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/assets/videos/cityscape-scooter-sunset.mp4"
            poster="/images/cityscape-scooter-poster.jpg"
            className="w-full h-full object-cover mix-blend-screen opacity-80"
            muted={isMuted}
            loop
            playsInline
            onError={() => setVideoError(true)}
          />
        ) : (
          <ImageWithFallback
            src="/images/cityscape-scooter-poster.jpg"
            fallbackSrc="/images/hero_scooter.jpg"
            alt="Electric Scooter at Sunset"
            className="w-full h-full object-cover mix-blend-screen opacity-80"
          />
        )}
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/60 to-[#0A192F]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col md:flex-row items-center justify-between py-24">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left h-full justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold mb-4 drop-shadow-md"
          >
            EXPERIENCE EVERY ANGLE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight drop-shadow-lg mb-6"
          >
            A Smarter <br /> Way to Move
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-sm md:text-base max-w-md font-light mb-8 drop-shadow-md leading-relaxed"
          >
            Cities are changing. So are we. Experience how AEROEV is designed for a cleaner, smarter and brighter tomorrow.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={handleOpenModal}
            className="flex items-center gap-4 cursor-pointer group/btn"
          >
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-[#0A192F] transition-all duration-300">
              <Play className="w-4 h-4 ml-1 fill-current" />
            </div>
            <span className="text-sm font-semibold text-white group-hover/btn:text-ev-cyan transition-colors">
              Watch Our Story
            </span>
          </motion.button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-end justify-between py-12 pointer-events-none">
          {/* Top Right: Cleaner Air */}
          <div className="flex flex-col items-end text-right space-y-2 mt-auto mb-16 md:mb-0 md:mt-24">
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">CLEANER AIR</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">GREENER CITIES</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">HAPPIER PEOPLE</span>
          </div>
          
          {/* Bottom Right: Scroll indicator */}
          <div className="flex flex-col items-center mt-auto">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 relative mb-3">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
            <span className="text-[9px] text-white/50 tracking-widest uppercase">Scroll to explore</span>
          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A192F]/90 backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full border border-ev-cyan/40 bg-ev-cyan/10 flex items-center justify-center text-ev-cyan hover:bg-ev-cyan hover:text-[#0A192F] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div
              className="relative w-full max-w-7xl aspect-video glass-card rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.2)]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
            >
              {!videoError ? (
                <video
                  src="/assets/videos/cityscape-scooter-sunset.mp4"
                  poster="/images/cityscape-scooter-poster.jpg"
                  className="w-full h-full object-cover"
                  autoPlay
                  controls={false} // Custom controls overlay
                  muted={isMuted}
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              ) : (
                <ImageWithFallback
                  src="/images/cityscape-scooter-poster.jpg"
                  fallbackSrc="/images/hero_scooter.jpg"
                  alt="Video Fallback Image"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Custom Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A192F]/90 to-transparent flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={togglePlayModal} className="text-ev-cyan hover:text-white transition-colors p-2">
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <div className="flex-1 px-4">
                  {/* Pseudo progress bar */}
                  <div className="h-1 w-full bg-ev-cyan/20 rounded-full overflow-hidden">
                    <div className="h-full bg-ev-cyan w-1/3 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                  </div>
                </div>
                <button onClick={toggleMuteModal} className="text-ev-cyan hover:text-white transition-colors p-2">
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
