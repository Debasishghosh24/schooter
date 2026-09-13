import React from 'react';
import { ArrowRight, MessageSquare, Share2, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    Brand: ['About Us', 'Sustainability', 'Careers', 'Newsroom'],
    Models: ['Z4 MAX', 'Z4 PRO', 'Z4 LITE', 'Compare'],
    Support: ['Help Center', 'Warranty', 'Manuals', 'Contact Us'],
  };

  return (
    <footer className="bg-brand-light border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Left: Brand & Socials */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-brand-text mb-6">
                Zap<span className="text-brand-green">Orbit</span>
              </h3>
              <p className="text-brand-text-muted text-sm max-w-xs mb-8 leading-relaxed">
                Designing the future of Indian urban mobility with intelligent, high-performance electric vehicles.
              </p>
            </div>
            <div className="flex gap-4 text-brand-text-muted">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-text hover:text-white hover:border-brand-text transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-text hover:text-white hover:border-brand-text transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-text hover:text-white hover:border-brand-text transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-text hover:text-white hover:border-brand-text transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-brand-text font-bold mb-6 tracking-widest text-xs uppercase">{title}</h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-brand-text-muted hover:text-brand-green transition-colors text-sm font-medium">
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
            <h4 className="text-brand-text font-bold mb-6 tracking-widest text-xs uppercase">Stay In Motion</h4>
            <p className="text-brand-text-muted text-sm mb-6">
              Subscribe to our newsletter to receive the latest news, updates, and exclusive offers.
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-green/10 border border-brand-green/30 hover:bg-brand-green hover:text-white text-brand-green rounded-lg px-4 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-4">
          <p className="text-brand-text-muted text-xs tracking-wider font-medium">
            © 2024 ZapOrbit Mobility. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-text-muted tracking-wider font-medium">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-text transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
