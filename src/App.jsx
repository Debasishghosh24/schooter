import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Models from './components/Models/Models';
import ChargingSolutions from './components/ChargingSolutions/ChargingSolutions';
import ExperienceContainer from './components/experience/ExperienceContainer';
import VideoStory from './components/VideoStory/VideoStory';
import Technology from './components/Technology/Technology';
import Performance from './components/Performance/Performance';
import IndianUrbanMobility from './components/IndianUrbanMobility/IndianUrbanMobility';
import Specifications from './components/Specifications/Specifications';
import Gallery from './components/Gallery/Gallery';
import WhyZapOrbit from './components/WhyZapOrbit/WhyZapOrbit';
import TestRide from './components/TestRide/TestRide';
import Footer from './components/Footer/Footer';
import SavingsCalculator from './components/SavingsCalculator/SavingsCalculator';
import DealerLocator from './components/DealerLocator/DealerLocator';
import FAQ from './components/FAQ/FAQ';
import TestRideModal from './components/TestRideModal/TestRideModal';

function App() {
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);

  const handleOpenTestRide = () => setIsTestRideModalOpen(true);
  const handleCloseTestRide = () => setIsTestRideModalOpen(false);

  return (
    <Router>
      <div className="w-full relative overflow-x-hidden font-sans">
        <Navbar onBookTestRide={handleOpenTestRide} />
        <main>
          <Hero onBookTestRide={handleOpenTestRide} />
          <Models onBookTestRide={handleOpenTestRide} />
          <SavingsCalculator />
          <WhyZapOrbit />
          <ExperienceContainer />
          <VideoStory />
          <Technology />
          <ChargingSolutions />
          <IndianUrbanMobility />
          <Performance />
          <Specifications />
          <Gallery />
          <DealerLocator />
          <FAQ />
          <TestRide onBookTestRide={handleOpenTestRide} />
        </main>
        <Footer />
        
        <TestRideModal isOpen={isTestRideModalOpen} onClose={handleCloseTestRide} />
      </div>
    </Router>
  );
}

export default App;
