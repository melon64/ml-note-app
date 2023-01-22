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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/joingroup" element={<JoinGroup />} />
        <Route exact path="/groups" element={<Groups />} />
        <Route exact path="/groups/:_id" element={<SpecGroups />} />
        <Route exact path="/docs" element={<Documents />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </Router>
    
  );
}

export default App;
