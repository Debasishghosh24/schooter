import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, Search, Map as MapIcon } from 'lucide-react';

const dealers = [
  {
    id: 1,
    name: 'ZapOrbit Experience Center - Mumbai',
    address: '14, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    phone: '+91 98765 43210',
    distance: '2.4 km',
    city: 'Mumbai',
    status: 'Open Now'
  },
  {
    id: 2,
    name: 'ZapOrbit Hub - Andheri',
    address: 'Link Road, Andheri West, Mumbai, Maharashtra 400053',
    phone: '+91 98765 43211',
    distance: '5.1 km',
    city: 'Mumbai',
    status: 'Closes at 8 PM'
  },

];

export default function DealerLocator() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDealers = dealers.filter(dealer =>
    dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dealer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="dealers" className="py-24 bg-brand-surface relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Text & Search */}
          <div className="w-full lg:w-1/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Find a Dealer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-6 leading-tight"
            >
              Experience ZapOrbit <br className="hidden lg:block" /> Near You.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text-muted text-lg mb-8 leading-relaxed"
            >
              Visit our state-of-the-art experience centers for a test ride and discover the future of urban mobility.
            </motion.p>

            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter City or Pincode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 text-brand-text rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all shadow-sm"
              />
            </div>

            <button className="w-full bg-brand-text text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-brand-text/90 transition-colors shadow-md">
              <MapIcon className="w-5 h-5" />
              Use Current Location
            </button>
          </div>

          {/* Right Cards list */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px] overflow-y-auto pr-2 custom-scrollbar content-start">
              {filteredDealers.map((dealer, idx) => (
                <motion.div
                  key={dealer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-brand-text w-3/4">{dealer.name}</h3>
                      <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        {dealer.distance}
                      </span>
                    </div>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                      {dealer.address}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-brand-text-muted">
                      <Phone className="w-4 h-4 text-brand-green" />
                      {dealer.phone}
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-2 flex justify-between items-center">
                      <span className="text-xs font-semibold text-brand-text/70">{dealer.status}</span>
                      <a href="#" className="flex items-center gap-1 text-sm font-bold text-brand-green hover:text-brand-green/80 transition-colors">
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredDealers.length === 0 && (
                <div className="col-span-full h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">No Dealers Found</h3>
                  <p className="text-brand-text-muted">We couldn't find any dealers matching your search. Please try a different city or pincode.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
