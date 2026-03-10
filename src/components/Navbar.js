import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the detail page
  const isDetailPage = location.pathname.includes('/project/');

  // Use useMemo to prevent recreation of navItems on every render
  const navItems = useMemo(() => [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/#about', label: 'About' },
    { id: 'projects', path: '/#projects', label: 'Projects' },
    { id: 'contact', path: '/#contact', label: 'Contact' }
  ], []); // Empty dependency array means this will only be created once

  // Use a ref to track mobile menu state inside scroll handler without causing re-renders
  const mobileMenuRef = React.useRef(isMobileMenuOpen);
  React.useEffect(() => {
    mobileMenuRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Close mobile menu on scroll (using ref to avoid dependency cycle)
      if (mobileMenuRef.current) {
        setIsMobileMenuOpen(false);
      }

      // Only determine active section if we're on the home page
      if (!isDetailPage) {
        // Get section IDs directly from navItems for consistency
        const sections = navItems.map(item => item.id).filter(id => id !== 'home');
        const scrollPosition = window.scrollY;

        // Find the current active section
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop - 100; // Add offset for better UX
            const height = element.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break; // Exit loop once we find the active section
            }
          }
        }

        // If we're at the top of the page, set home as active
        if (scrollPosition < 100) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize active section
    if (isDetailPage) {
      setActiveSection('projects');
    } else if (location.hash) {
      // If there's a hash in the URL, set active section based on it (without the #)
      setActiveSection(location.hash.substring(1));
    } else {
      // Default to home if no hash
      setActiveSection('home');
    }

    // Run initial scroll check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage, location, navItems]);

  // Handle navigation with improved logic
  const handleNavigation = (e, path, id) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);

    if (isDetailPage) {
      // If we're on detail page, simply navigate to the specified path
      if (id === 'home') {
        // Don't store any scroll target for home
        return true;
      } else {
        // Store the target section in sessionStorage to scroll to after navigation
        sessionStorage.setItem('scrollTarget', id);
        return true;
      }
    } else if (location.pathname === '/') {
      // We're already on the home page
      e.preventDefault();

      if (id === 'home') {
        // Scroll to the top of the page for Home
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update URL without hash
        window.history.pushState(null, '', '/');
        setActiveSection('home');
      } else {
        // Scroll to the section for other nav items
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL with hash
          window.history.pushState(null, '', `/#${id}`);
          setActiveSection(id);
        }
      }
    }
  };

  // Check for stored scroll target on initial render
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(scrollTarget);
        }
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo with Modern Gradient */}
          <Link
            to="/"
            className="relative group"
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
            <h1 className="text-3xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                radif
              </span>
              <span className="text-white ml-1">.io</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.id)}
                className={`relative group transition-all duration-300 ${activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-400'
                  }`}
              >
                <span className="relative z-10 text-sm uppercase tracking-wider font-medium">
                  {item.label}
                </span>

                {/* Underline Effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5">
                  <div className={`absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 transform origin-left 
                    ${activeSection === item.id
                      ? 'scale-x-100'
                      : 'scale-x-0'} 
                    group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </div>
              </Link>
            ))}
          </nav>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => handleNavigation(e, item.path, item.id)}
              className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-300 ${activeSection === item.id
                ? 'text-white bg-gradient-to-r from-violet-600/20 to-fuchsia-500/20 border-l-2 border-violet-500'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
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
