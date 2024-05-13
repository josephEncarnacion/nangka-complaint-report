import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComplaintReport from './pages/ComplaintReport';
import EmergencyReport from './pages/EmergencyReport'
import Login from  './pages/login';
import Register from './pages/register';

const App = () => {
  const getData = async (url) =>{
    const newData = await fetch(url,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
  }
  
  getData('/api');
  
  return (
    <div>
      <Login/>
      <Register/>
    <Router>
            <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="ComplaintReport" element={<ComplaintReport />} />
        <Route path="EmergencyReport" element={<EmergencyReport />}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
