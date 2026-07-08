import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-900 bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          {/* Logo/Brand Section */}
          <div className="font-mono">
            <h3 className="text-xs uppercase tracking-wider text-white font-bold mb-3">
              RADIF_AFTA // <span className="text-safety">ENG</span>
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Architecting high-performance systems and bespoke minimalist UIs. Focused on workflow automation and reliable cloud deployments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="font-mono text-xs">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">Navigation</h3>
            <ul className="space-y-1.5">
              <li><a href="#about" className="text-neutral-500 hover:text-white transition-mechanical">_About</a></li>
              <li><a href="#projects" className="text-neutral-500 hover:text-white transition-mechanical">_Projects</a></li>
              <li><a href="#contact" className="text-neutral-500 hover:text-white transition-mechanical">_Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="font-mono text-xs">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">Connect</h3>
            <div className="flex space-x-3">
              <a href="https://github.com/RadifAfta" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-safety transition-mechanical">
                [GitHub]
              </a>
              <a href="https://www.linkedin.com/in/radifaftamaulana/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-safety transition-mechanical">
                [LinkedIn]
              </a>
              <a href="https://www.instagram.com/radifaftamaulana/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-safety transition-mechanical">
                [Instagram]
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-900/60 font-mono text-[10px] text-neutral-600 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>&copy; {currentYear} RADIF.IO. ALL RIGHTS RESERVED.</span>
          <span>LATENCY: ZERO // REDESIGN: V2</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;