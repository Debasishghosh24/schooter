import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Models from './components/Models/Models'
import ExperienceContainer from './components/experience/ExperienceContainer'
import VideoStory from './components/VideoStory/VideoStory'
import Technology from './components/Technology/Technology'
import Performance from './components/Performance/Performance'
import Specifications from './components/Specifications/Specifications'
import Gallery from './components/Gallery/Gallery'
import DesignDetails from './components/DesignDetails/DesignDetails'
import TestRide from './components/TestRide/TestRide'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="bg-ev-darker min-h-screen text-ev-light">
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
  )
}

export default App
