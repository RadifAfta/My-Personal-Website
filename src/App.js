import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/Projects-detail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white font-sans">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/project/:id" element={
            <>
              <Navbar />
              <ProjectDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;