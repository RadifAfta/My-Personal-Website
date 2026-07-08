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
    <div className="min-h-screen bg-[#080809] text-[#94A3B8] flex flex-col pt-20">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-neutral-900 bg-[#080809] blueprint-grid">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen bg-[#080809] text-[#94A3B8] font-sans selection:bg-safety/20 selection:text-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/project/:id" element={
            <div className="min-h-screen bg-[#080809] text-[#94A3B8]">
              <Navbar />
              <ProjectDetail />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;