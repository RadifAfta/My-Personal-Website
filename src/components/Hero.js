import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [showCvDropdown, setShowCvDropdown] = useState(false);
  const cvDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(e.target)) {
        setShowCvDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* CELL 1: HERO & BRAND INFO (Spans 8 columns) */}
      <div className="col-span-12 lg:col-span-8 border-r border-b border-neutral-900 bg-[#080809] p-8 md:p-12 flex flex-col justify-between min-h-[420px] relative group">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        
        <div>
          {/* Small greeting */}
          <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            Muhammad Radif Aftamaulana // Portfolio
          </div>

          {/* Name - Stark structural typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none mb-6">
            Radif
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #ffffff' }}>Aftamaulana</span>
          </h1>

          {/* Monospace Technical Role readout */}
          <div className="font-mono text-xs md:text-sm text-neutral-400 bg-neutral-950/50 border border-neutral-900 py-3 px-4 inline-block w-full max-w-lg mb-8">
            <span className="text-safety">&gt;</span> ROLE: <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Fullstack & Backend Developer",
                  "Certified Cloud Practitioner",
                  "Building Scalable Software Solutions"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
                wrapperClassName: "text-white font-bold",
                cursorClassName: "text-safety"
              }}
            />
          </div>
        </div>

        {/* Buttons - Monospace & Inverting Mechanical triggers */}
        <div className="flex flex-wrap gap-4 z-10 font-mono text-xs">
          <a
            href="#projects"
            className="px-6 py-3 border border-white bg-white text-black uppercase tracking-wider font-bold hover:bg-transparent hover:text-white transition-mechanical"
          >
            [View Projects]
          </a>
          
          <div className="relative" ref={cvDropdownRef}>
            <button
              onClick={() => setShowCvDropdown(!showCvDropdown)}
              className="px-6 py-3 border border-neutral-700 bg-transparent text-neutral-300 uppercase tracking-wider font-bold hover:border-safety hover:text-white transition-mechanical flex items-center gap-2"
            >
              [Get Resume]
              <svg className={`w-3.5 h-3.5 transition-mechanical ${showCvDropdown ? 'rotate-180 text-safety' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Monospace Dropdown Menu */}
            {showCvDropdown && (
              <div className="absolute top-full mt-2 left-0 w-56 bg-[#0A0A0B] border border-neutral-800 shadow-2xl z-50">
                <a
                  href="/assets/CV/CV_Muhammad Radif A_English.pdf"
                  target="_blank"
                  download="CV_Muhammad Radif A_English.pdf"
                  onClick={() => setShowCvDropdown(false)}
                  className="flex items-center justify-between px-4 py-3 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-mechanical border-b border-neutral-900"
                >
                  <span>English CV (PDF)</span>
                  <span className="text-[10px] text-safety font-bold">EN</span>
                </a>
                <a
                  href="/assets/CV/CV_Muhammad Radif A_Indonesia.pdf"
                  target="_blank"
                  download="CV_Muhammad Radif A_Indonesia.pdf"
                  onClick={() => setShowCvDropdown(false)}
                  className="flex items-center justify-between px-4 py-3 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-mechanical"
                >
                  <span>Indonesian CV (PDF)</span>
                  <span className="text-[10px] text-neutral-500">ID</span>
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-700 bg-[#0A0A0B]/50 text-neutral-400 uppercase tracking-wider font-bold hover:border-white hover:text-white transition-mechanical"
          >
            [Get In Touch]
          </a>
        </div>
      </div>

      {/* CELL 2: PORTRAIT & SYSTEM STATS (Spans 4 columns) */}
      <div className="col-span-12 lg:col-span-4 border-r border-b border-neutral-900 bg-[#0A0A0B] p-6 flex flex-col justify-between group overflow-hidden relative">
        <div className="relative aspect-square w-full border border-neutral-800 overflow-hidden bg-neutral-950">
          <img
            src="/assets/hero/radifhima.JPG"
            alt="Muhammad Radif Aftamaulana"
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-[1.03] transition-mechanical"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 font-mono text-[9px] bg-[#080809]/90 border border-neutral-800 text-neutral-400 tracking-wider">
            PORTRAIT_SYS
          </div>
        </div>

        {/* Stats Matrix */}
        <div className="grid grid-cols-2 gap-2 mt-4 font-mono">
          <div className="border border-neutral-900 bg-[#080809] p-3 text-left hover:border-neutral-700 transition-mechanical">
            <div className="text-[9px] uppercase text-neutral-500 tracking-wider">Experience</div>
            <div className="text-sm font-bold text-white mt-1">2+ YEARS</div>
          </div>
          <div className="border border-neutral-900 bg-[#080809] p-3 text-left hover:border-neutral-700 transition-mechanical">
            <div className="text-[9px] uppercase text-neutral-500 tracking-wider">Status</div>
            <div className="text-sm font-bold text-safety mt-1">AVAILABLE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;