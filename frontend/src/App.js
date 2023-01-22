//import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Signup from './pages/signup';
import JoinGroup from './pages/joingroup';
import Groups from './pages/groups';
import Documents from './pages/docs';
import Upload from './pages/upload';

function App() {
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
      </Routes>

    </Router>
    
  );
}

export default App;
