import React from 'react';

export default function Footer() {
  const links = {
    Brand: ['About Us', 'Sustainability', 'Careers', 'Newsroom'],
    Models: ['AERO V1', 'AERO V1 Pro', 'URBAN X', 'Compare'],
    Support: ['Help Center', 'Warranty', 'Manuals', 'Contact Us'],
  };

  return (
    <footer className="bg-ev-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">
              AERO<span className="text-ev-accent">EV</span>
            </h3>
            <p className="text-white/50 text-sm max-w-xs">
              Designing the future of urban mobility with intelligent, high-performance electric vehicles.
            </p>
          </div>
          
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 AERO EV. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
