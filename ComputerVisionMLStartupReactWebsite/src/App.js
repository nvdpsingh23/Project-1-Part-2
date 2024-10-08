import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer.jsx';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About.jsx';
import Contact from './components/pages/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
