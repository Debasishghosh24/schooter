import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Zap } from 'lucide-react';

const chargers = [
  {
    icon: <Plug className="w-6 h-6 text-brand-green" />,
    title: 'ZapOrbit Home Charger',
    description: 'Perfect for overnight charging in your garage or parking spot.',
    specs: {
      'Charging Power': '3.3 kW',
      'Voltage': '230V AC Single Phase',
      'Current': '15A',
      'Connector': 'Standard 3-Pin / Type 2',
      'Efficiency': '> 95%',
      'Display': 'LED Status Indicators',
      'Communication': 'Bluetooth / Wi-Fi',
      'Protection': 'Over-voltage, Short Circuit',
      'Installation': 'Wall-mounted'
    }
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-green" />,
    title: 'ZapOrbit Fast Charger',
    description: 'Commercial grade charging for long trips and quick top-ups.',
    specs: {
      'Charging Power': '7.2 kW / 11 kW',
      'Voltage': '415V AC Three Phase',
      'Current': '32A',
      'Connector': 'Type 2 / CCS2',
      'Efficiency': '> 96%',
      'Display': '4.3" LCD Screen',
      'Communication': '4G / Wi-Fi / RFID',
      'Protection': 'IP65 Weatherproof',
      'Installation': 'Pedestal / Wall-mounted'
    }
  }
];

export default function ChargingSolutions() {
  return (
    <section id="charging" className="py-24 relative overflow-hidden bg-brand-surface border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
            >
              Charging Infrastructure
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-6 leading-tight"
            >
              Powering Your Journey.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-muted text-lg max-w-md md:text-right"
          >
            Intelligent charging solutions designed for Indian homes and commercial spaces.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x snap-mandatory">
          {chargers.map((charger, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="min-w-[85vw] md:min-w-[600px] bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12 snap-center flex flex-col xl:flex-row gap-12"
            >
              <div className="w-full xl:w-1/3 flex flex-col">
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-6">
                  {charger.icon}
                </div>
                <h3 className="text-3xl font-bold text-brand-text mb-4 leading-tight">{charger.title}</h3>
                <p className="text-brand-text-muted text-lg leading-relaxed">{charger.description}</p>
              </div>
              
              <div className="w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {Object.entries(charger.specs).map(([key, value], i) => (
                  <div key={i} className="flex flex-col border-b border-gray-100 pb-3">
                    <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">{key}</span>
                    <span className="text-brand-text font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
