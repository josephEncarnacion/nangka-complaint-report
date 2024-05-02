import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComplaintReport from './pages/ComplaintReport';
import EmergencyReport from './pages/EmergencyReport'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="ComplaintReport" element={<ComplaintReport />} />
        <Route path="EmergencyReport" element={<EmergencyReport />}/>
      </Routes>
    </Router>
  );
};

export default App;
