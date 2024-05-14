import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComplaintReport from './pages/ComplaintReport';
import EmergencyReport from './pages/EmergencyReport'
import Login from  './pages/login';
import Register from './pages/register';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

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
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="ComplaintReport" element={<ProtectedRoute element={<ComplaintReport />} />} />
        <Route path="EmergencyReport" element={<ProtectedRoute element={<EmergencyReport />} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;
