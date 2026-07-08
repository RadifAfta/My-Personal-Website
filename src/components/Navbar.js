import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDetailPage = location.pathname.includes('/project/');

  const navItems = useMemo(() => [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/#about', label: 'About' },
    { id: 'projects', path: '/#projects', label: 'Projects' },
    { id: 'contact', path: '/#contact', label: 'Contact' }
  ], []);

  const mobileMenuRef = React.useRef(isMobileMenuOpen);
  React.useEffect(() => {
    mobileMenuRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuRef.current) {
        setIsMobileMenuOpen(false);
      }

      if (!isDetailPage) {
        const sections = navItems.map(item => item.id).filter(id => id !== 'home');
        const scrollPosition = window.scrollY;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop - 120;
            const height = element.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }

        if (scrollPosition < 100) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (isDetailPage) {
      setActiveSection('projects');
    } else if (location.hash) {
      setActiveSection(location.hash.substring(1));
    } else {
      setActiveSection('home');
    }

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage, location, navItems]);

  const handleNavigation = (e, path, id) => {
    setIsMobileMenuOpen(false);

    if (isDetailPage) {
      if (id === 'home') {
        return true;
      } else {
        sessionStorage.setItem('scrollTarget', id);
        return true;
      }
    } else if (location.pathname === '/') {
      e.preventDefault();

      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('home');
      } else {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          window.history.pushState(null, '', `/#${id}`);
          setActiveSection(id);
        }
      }
    }
  };

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          setActiveSection(scrollTarget);
        }
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-mechanical border-b border-neutral-900 bg-[#080809]/90 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-5">
          <Link
            to="/"
            className="font-mono text-sm tracking-widest text-white uppercase font-bold"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
                setActiveSection('home');
              }
              setIsMobileMenuOpen(false);
            }}
          >
            RADIF_AFTA // <span className="text-safety">ENG</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 border border-neutral-900 p-0.5 bg-[#0A0A0B]">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.id)}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-mechanical border-b-2 ${
                  activeSection === item.id
                    ? 'bg-neutral-900 text-white border-safety'
                    : 'text-neutral-400 border-transparent hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 border border-neutral-900 bg-[#0A0A0B] rounded-sm hover:border-safety transition-mechanical"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-0.5 bg-white transition-mechanical ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-mechanical ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-mechanical ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-mechanical overflow-hidden border-b border-neutral-900 bg-[#080809] ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-1 bg-[#0A0A0B]">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => handleNavigation(e, item.path, item.id)}
              className={`block px-4 py-2 font-mono text-xs uppercase tracking-wider border-b border-neutral-900 transition-mechanical ${
                activeSection === item.id
                  ? 'bg-neutral-900 text-white border-l-2 border-safety'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
