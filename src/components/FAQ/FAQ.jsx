import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the real-world range of ZapOrbit scooters?",
    answer: "Our top-end models offer a certified range of 160+ km on a single charge. However, real-world range depends on riding style, payload, and traffic conditions. Most users comfortably achieve 130-140 km in standard city riding conditions."
  },
  {
    question: "How long does it take to charge the battery?",
    answer: "Using our standard home charger, it takes about 3-4 hours for a full 0-100% charge. With the optional fast charger, you can reach 80% charge in just 45 minutes."
  },
  {
    question: "What is the warranty period?",
    answer: "We offer an industry-leading 3-year or 50,000 km warranty (whichever comes first) on both the battery pack and the electric motor, giving you complete peace of mind."
  },
  {
    question: "Is financing available for purchasing?",
    answer: "Yes, we have partnered with major banks and NBFCs to offer easy EMI options with low down payments and attractive interest rates. You can check your eligibility instantly at any of our experience centers."
  },
  {
    question: "Do I need a license to ride a ZapOrbit scooter?",
    answer: "Yes. Since our scooters exceed the 25km/h speed limit and 250W power threshold, they require standard RTO registration and the rider must hold a valid two-wheeler driving license."
  },
  {
    question: "How often does the scooter need servicing?",
    answer: "Electric scooters require significantly less maintenance than petrol scooters. We recommend a general check-up every 5,000 km or 6 months, primarily to inspect brakes, tires, and suspension."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green text-xs tracking-[0.2em] uppercase font-bold mb-4"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Everything you need to know about ZapOrbit and our electric scooters.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (index * 0.05) }}
              className="bg-brand-light border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-lg text-brand-text pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-brand-green text-white' : 'bg-white border border-gray-200 text-brand-text'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-brand-text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
