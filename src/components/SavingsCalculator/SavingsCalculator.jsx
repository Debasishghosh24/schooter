import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, TrendingUp, IndianRupee } from 'lucide-react';

export default function SavingsCalculator() {
  const [dailyDistance, setDailyDistance] = useState(30);

  // Constants for calculation
  const petrolCostPerLiter = 100;
  const petrolMileage = 40;
  const evCostPerCharge = 15; // Approximate cost for full charge
  const evRangePerCharge = 100; // Approximate range on full charge
  const daysInYear = 365;
  const daysInMonth = 30;

  // Calculations
  const petrolCostPerKm = petrolCostPerLiter / petrolMileage;
  const evCostPerKm = evCostPerCharge / evRangePerCharge;

  const monthlyPetrolCost = Math.round(dailyDistance * petrolCostPerKm * daysInMonth);
  const monthlyEVCost = Math.round(dailyDistance * evCostPerKm * daysInMonth);
  const monthlySavings = monthlyPetrolCost - monthlyEVCost;
  
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
          >
            Calculate Your Savings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-6"
          >
            Why Switch to ZapOrbit?
          </motion.h2>
          <p className="text-brand-text-muted text-lg">
            See how much you could save by switching to an electric scooter. The numbers speak for themselves.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-brand-light rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          
          {/* Slider Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <div>
              <label className="text-lg font-bold text-brand-text flex justify-between mb-4">
                Daily Travel Distance
                <span className="text-brand-green">{dailyDistance} KM</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={dailyDistance}
                onChange={(e) => setDailyDistance(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
              <div className="flex justify-between text-xs text-brand-text-muted font-medium mt-2">
                <span>10 KM</span>
                <span>100 KM</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                 <Droplets className="w-8 h-8 text-brand-text-muted mb-3" />
                 <p className="text-sm font-semibold text-brand-text-muted mb-1">Petrol Scooter</p>
                 <p className="text-2xl font-bold text-brand-text">₹{monthlyPetrolCost.toLocaleString()}</p>
                 <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mt-1">Per Month</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-brand-green/20 shadow-[0_4px_20px_rgba(0,200,83,0.1)] flex flex-col items-center text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-brand-green"></div>
                 <Leaf className="w-8 h-8 text-brand-green mb-3" />
                 <p className="text-sm font-semibold text-brand-text-muted mb-1">ZapOrbit EV</p>
                 <p className="text-2xl font-bold text-brand-green">₹{monthlyEVCost.toLocaleString()}</p>
                 <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mt-1">Per Month</p>
               </div>
            </div>
          </div>

          {/* Savings Result */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
             <motion.div 
               key={yearlySavings}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="bg-brand-text rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl"
             >
               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                 <TrendingUp className="w-48 h-48" />
               </div>
               <p className="text-white/80 font-medium text-sm tracking-widest uppercase mb-4">Estimated Yearly Savings</p>
               <div className="flex items-baseline gap-2 mb-6">
                 <span className="text-5xl lg:text-7xl font-bold tracking-tighter text-brand-green">
                   ₹{yearlySavings.toLocaleString()}
                 </span>
               </div>
               
               <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                 <div>
                   <p className="text-white/60 text-xs tracking-wider uppercase mb-1">Monthly Savings</p>
                   <p className="text-2xl font-semibold">₹{monthlySavings.toLocaleString()}</p>
                 </div>
                 <IndianRupee className="w-10 h-10 text-white/20" />
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
