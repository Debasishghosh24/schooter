import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Models from './components/Models/Models';
import ExperienceContainer from './components/experience/ExperienceContainer';
import VideoStory from './components/VideoStory/VideoStory';
import Technology from './components/Technology/Technology';
import Performance from './components/Performance/Performance';
import Specifications from './components/Specifications/Specifications';
import DesignDetails from './components/DesignDetails/DesignDetails';
import Gallery from './components/Gallery/Gallery';
import TestRide from './components/TestRide/TestRide';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-transparent min-h-screen text-slate-900 dark:text-white transition-colors duration-700 ease-in-out">
          <Navbar />
          <main>
            <Hero />
            <Models />
            <ExperienceContainer />
            <VideoStory />
            <Technology />
            <Performance />
            <Specifications />
            <DesignDetails />
            <Gallery />
            <TestRide />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
