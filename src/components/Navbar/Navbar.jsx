import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Models', href: '#models' },
  { name: 'Technology', href: '#technology' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Support', href: '#support' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[rgba(246,247,243,0.78)] dark:bg-black/40 backdrop-blur-[18px] border-b border-[rgba(30,50,60,0.08)] dark:border-white/10 py-4 shadow-[0_4px_12px_rgba(30,50,60,0.03)] dark:shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-[#182333] dark:text-white z-50 transition-colors">
          AERO<span className="text-[#0071e3]">EV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#647078] dark:text-white/70 hover:text-[#0071e3] dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          {/* Premium Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-[#F9FAF6] dark:bg-white/10 border border-[rgba(30,50,60,0.08)] dark:border-white/20 p-1 flex items-center justify-between shadow-[inset_0_2px_4px_rgba(30,50,60,0.02)] transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            <div className="flex justify-center items-center w-6 h-6 z-10 text-[#899296] dark:text-slate-500">
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div className="flex justify-center items-center w-6 h-6 z-10 text-[#899296] dark:text-white/50">
              <Moon className="w-3.5 h-3.5" />
            </div>
            {/* Sliding Pill Indicator */}
            <motion.div
              initial={false}
              animate={{
                x: theme === 'dark' ? 32 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-1 w-6 h-6 bg-white dark:bg-[#1E3A5F] rounded-full shadow-[0_2px_8px_rgba(40,55,60,0.12)] dark:shadow-sm flex items-center justify-center z-20"
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-white" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[#182333]" />
              )}
            </motion.div>
          </button>
          
          <button className="p-2 text-[#647078] dark:text-white/70 hover:text-[#182333] dark:hover:text-white transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="bg-[#182333] dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#263444] dark:hover:bg-white/90 transition-colors shadow-[0_4px_12px_rgba(24,35,51,0.15)] dark:shadow-none hover:-translate-y-0.5">
            Book a Test Ride
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-[#F9FAF6] dark:bg-white/10 border border-[rgba(30,50,60,0.08)] dark:border-white/20 p-1 flex items-center justify-between shadow-[inset_0_2px_4px_rgba(30,50,60,0.02)] transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            <div className="flex justify-center items-center w-5 h-5 z-10 text-[#899296] dark:text-slate-500">
              <Sun className="w-3 h-3" />
            </div>
            <div className="flex justify-center items-center w-5 h-5 z-10 text-[#899296] dark:text-white/50">
              <Moon className="w-3 h-3" />
            </div>
            <motion.div
              initial={false}
              animate={{
                x: theme === 'dark' ? 28 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-1 w-5 h-5 bg-white dark:bg-[#1E3A5F] rounded-full shadow-[0_2px_8px_rgba(40,55,60,0.12)] dark:shadow-sm flex items-center justify-center z-20"
            >
              {theme === 'dark' ? (
                <Moon className="w-3 h-3 text-white" />
              ) : (
                <Sun className="w-3 h-3 text-[#182333]" />
              )}
            </motion.div>
          </button>
          <button
            className="text-[#182333] dark:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-slate-900 dark:text-white tracking-wide hover:text-ev-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold"
            >
              Book a Test Ride
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

