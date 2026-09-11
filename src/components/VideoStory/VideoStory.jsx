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
    <section ref={containerRef} className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#111] border border-white/10 group shadow-2xl"
        >
          {/* Background Video / Fallback Image */}
          {!videoError ? (
            <video
              ref={videoRef}
              src="/assets/videos/cityscape-scooter-sunset.mp4"
              poster="/images/cityscape-scooter-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out mix-blend-screen opacity-80"
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
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out mix-blend-screen opacity-80"
            />
          )}

          {/* Dark Gradients for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
            
            {/* Left Text */}
            <div className="w-full md:w-1/3 text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-lg"
              >
                A Smarter <br /> Way to Move
              </motion.h2>
            </div>
            
            {/* Center Play Button */}
            <div className="w-full md:w-1/3 flex justify-center my-8 md:my-0">
              <motion.button 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenModal}
                className="flex flex-col items-center gap-4 cursor-pointer group/btn"
              >
                <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-white bg-black/40 backdrop-blur-md group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <span className="text-xs tracking-[0.2em] font-medium text-white uppercase group-hover/btn:text-white/80 transition-colors">
                  Watch Our Story
                </span>
              </motion.button>
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/3 flex justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col text-right space-y-2 drop-shadow-md"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">CLEANER AIR</span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">GREENER CITIES</span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">HAPPIER PEOPLE</span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div 
              className="relative w-full max-w-7xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
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
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={togglePlayModal} className="text-white hover:text-ev-accent transition-colors p-2">
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <div className="flex-1 px-4">
                  {/* Pseudo progress bar */}
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-1/3 rounded-full" />
                  </div>
                </div>
                <button onClick={toggleMuteModal} className="text-white hover:text-ev-accent transition-colors p-2">
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
