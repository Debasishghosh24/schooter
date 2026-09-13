import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Models', href: '#models' },
  { name: 'Charging', href: '#charging' },
  { name: 'Technology', href: '#technology' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Support', href: '#support' },
];

export default function Navbar({ onBookTestRide }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-[18px] border-b border-gray-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col z-50 group">
          <span className="text-2xl font-bold tracking-tight text-brand-text flex items-center gap-2">
            <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            ZapOrbit
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-brand-text-muted hover:text-brand-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="p-2 text-brand-text-muted hover:text-brand-text transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          <a href="#contact" className="text-sm font-semibold text-brand-text-muted hover:text-brand-text transition-colors">
            Dealer Locator
          </a>

          <button onClick={onBookTestRide} className="btn-primary px-6 py-2.5 text-sm">
            Book a Test Ride
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <button
            className="text-brand-text transition-colors"
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
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, idx) => (
               <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-semibold text-brand-text tracking-wide hover:text-brand-green transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-brand-text-muted hover:text-brand-text transition-colors mt-4"
            >
              Dealer Locator
            </motion.a>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onBookTestRide) onBookTestRide();
              }}
              className="btn-primary mt-8 px-8 py-4 text-lg"
            >
              Book a Test Ride
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
