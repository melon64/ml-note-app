//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Signup from './pages/signup';
import JoinGroup from './pages/joingroup';
import Groups from './pages/groups';
import Documents from './pages/docs';
import Upload from './pages/upload';
import Login from './pages/login';
import { setAuthToken } from './utils/auth';

function App() {

  const token = localStorage.getItem("token");
  if(token !== null) {
    console.log("logged in")
    console.log(token)
    setAuthToken(token);
  }else{
    console.log("no token, please login")
  }
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/joingroup" element={<JoinGroup />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/docs" element={<Documents />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Router>
    
  );
}

export default App;
