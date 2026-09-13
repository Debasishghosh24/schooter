import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

export default function TestRideModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Test Ride Booked:', data);
    alert('Thank you! Your test ride request has been submitted.');
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-text/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-text-muted hover:bg-gray-100 hover:text-brand-text transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-brand-text mb-2">Book a Test Ride</h2>
              <p className="text-brand-text-muted">Experience the future of mobility. Fill in your details below.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Full Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full bg-brand-light border ${errors.name ? 'border-red-500' : 'border-gray-200'} text-brand-text rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Phone Number</label>
                <input
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit number'
                    }
                  })}
                  type="tel"
                  placeholder="9876543210"
                  className={`w-full bg-brand-light border ${errors.phone ? 'border-red-500' : 'border-gray-200'} text-brand-text rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">City</label>
                <input
                  {...register('city', { required: 'City is required' })}
                  type="text"
                  placeholder="e.g. Mumbai"
                  className={`w-full bg-brand-light border ${errors.city ? 'border-red-500' : 'border-gray-200'} text-brand-text rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* Model selection */}
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Preferred Model</label>
                <select
                  {...register('model')}
                  className="w-full bg-brand-light border border-gray-200 text-brand-text rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all appearance-none"
                >
                  <option value="S-Pro">S-Pro (Top End)</option>
                  <option value="S-City">S-City (Standard)</option>
                  <option value="Not Sure">Not Sure Yet</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-brand-text text-white rounded-xl py-4 font-bold text-sm tracking-wide mt-4 hover:bg-brand-text-muted transition-colors shadow-md"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
