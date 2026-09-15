import React from 'react';
import Hero from '../components/Hero/Hero';
import Models from '../components/Models/Models';
import ChargingSolutions from '../components/ChargingSolutions/ChargingSolutions';
import VideoStory from '../components/VideoStory/VideoStory';
import Performance from '../components/Performance/Performance';
import IndianUrbanMobility from '../components/IndianUrbanMobility/IndianUrbanMobility';
import Specifications from '../components/Specifications/Specifications';
import Gallery from '../components/Gallery/Gallery';
import WhyZapOrbit from '../components/WhyZapOrbit/WhyZapOrbit';
import TestRide from '../components/TestRide/TestRide';
import SavingsCalculator from '../components/SavingsCalculator/SavingsCalculator';
import DealerLocator from '../components/DealerLocator/DealerLocator';
import FAQ from '../components/FAQ/FAQ';

export default function Home({ onBookTestRide }) {
  return (
    <main>
      <Hero onBookTestRide={onBookTestRide} />
      <Models onBookTestRide={onBookTestRide} limit={4} showViewAll={true} />
      <SavingsCalculator />
      <WhyZapOrbit />
      <VideoStory />
      <ChargingSolutions />
      <IndianUrbanMobility />
      <Performance />
      <Specifications />
      <Gallery />
      <DealerLocator />
      <FAQ />
      <TestRide onBookTestRide={onBookTestRide} />
    </main>
  );
}
