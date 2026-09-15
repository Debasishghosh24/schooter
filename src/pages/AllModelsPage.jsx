import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Models from '../components/Models/Models';

export default function AllModelsPage({ onBookTestRide }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-brand-light">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-green font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      <Models onBookTestRide={onBookTestRide} />
    </main>
  );
}
