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
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

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
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-violet-600/30">
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