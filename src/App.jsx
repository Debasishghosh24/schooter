import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TestRideModal from './components/TestRideModal/TestRideModal';
import Home from './pages/Home';
import AllModelsPage from './pages/AllModelsPage';

function App() {
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);

  const handleOpenTestRide = () => setIsTestRideModalOpen(true);
  const handleCloseTestRide = () => setIsTestRideModalOpen(false);

  return (
    <Router>
      <div className="w-full relative overflow-x-hidden font-sans">
        <Navbar onBookTestRide={handleOpenTestRide} />
        <Routes>
          <Route path="/" element={<Home onBookTestRide={handleOpenTestRide} />} />
          <Route path="/all-models" element={<AllModelsPage onBookTestRide={handleOpenTestRide} />} />
        </Routes>
        <Footer />
        
        <TestRideModal isOpen={isTestRideModalOpen} onClose={handleCloseTestRide} />
      </div>
    </Router>
  );
}

export default App;
