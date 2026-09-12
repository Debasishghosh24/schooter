import React from 'react';
import { ArrowRight, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const links = {
    Brand: ['About Us', 'Sustainability', 'Careers', 'Newsroom'],
    Models: ['AERO V1', 'AERO V1 Pro', 'URBAN X', 'Compare'],
    Support: ['Help Center', 'Warranty', 'Manuals', 'Contact Us'],
  };

  return (
    <footer className="bg-[#0A192F] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Left: Brand & Socials */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">
                AERO<span className="text-ev-cyan">EV</span>
              </h3>
              <p className="text-white/50 text-sm max-w-xs mb-8 leading-relaxed">
                Designing the future of urban mobility with intelligent, high-performance electric vehicles.
              </p>
            </div>
            <div className="flex gap-4 text-white/50">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">{title}</h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/50 hover:text-ev-cyan transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">Stay In Motion</h4>
            <p className="text-white/50 text-sm mb-6">
              Subscribe to our newsletter to receive the latest news, updates, and exclusive offers.
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ev-cyan/50 focus:bg-white/10 transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-ev-cyan/10 border border-ev-cyan/30 hover:bg-ev-cyan hover:text-[#0A192F] text-ev-cyan rounded-lg px-4 py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-white/40 text-xs tracking-wider">
            © 2026 AERO EV. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
