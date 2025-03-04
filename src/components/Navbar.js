import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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
  }, [isDetailPage, location, navItems]); // navItems is now memoized so it won't cause re-renders

  // Handle navigation with improved logic
  const handleNavigation = (e, path, id) => {
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
            }}
          >
            <h1 className="text-3xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Dief
              </span>
              <span className="text-white ml-1">.dev</span>
            </h1>
          </Link>

          {/* Navigation with Advanced Hover Effects */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.id)}
                className={`relative group transition-all duration-300 ${
                  activeSection === item.id
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;