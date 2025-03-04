import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useSpring, animated, config } from '@react-spring/web';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverViewProjects, setHoverViewProjects] = useState(false);
  const [hoverGetInTouch, setHoverGetInTouch] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation for name and description with scaling and fade-in effect
  const nameAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    config: { tension: 250, friction: 20 },
  });

  const descAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    delay: 200,
    config: { tension: 250, friction: 20 },
  });

  // Parallax effect for background shapes based on mouse movement
  const bg1Animation = useSpring({
    transform: isVisible 
      ? `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px) scale(1.05)`
      : 'translate(0px, 0px) scale(1)',
    config: config.gentle
  });

  const bg2Animation = useSpring({
    transform: isVisible 
      ? `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(1.05)`
      : 'translate(0px, 0px) scale(1)',
    config: config.gentle
  });

  // Subtle float animation for hero content
  const floatAnimation = useSpring({
    transform: isVisible ? 'translateY(-10px)' : 'translateY(0px)',
    loop: { reverse: true },
    config: { duration: 3000 },
  });

  // FIXED: Button hover animations - removed boxShadow animation which was causing issues
  const viewProjectsAnimation = useSpring({
    transform: hoverViewProjects ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 20 }
  });

  const getInTouchAnimation = useSpring({
    transform: hoverGetInTouch ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 20 }
  });

  const ctaButtonsAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    delay: 400,
    config: { tension: 250, friction: 20 },
  });

  // Simple fade animation for scroll indicator
  const scrollIndicatorAnimation = useSpring({
    opacity: isVisible ? 0.7 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    delay: 600,
    config: { tension: 250, friction: 20 },
  });

  // Particle effect
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated background shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <animated.div style={bg1Animation} className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <animated.div style={bg2Animation} className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl" />
        
        {/* Additional glowing orbs */}
        <animated.div style={bg1Animation} className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
        <animated.div style={bg2Animation} className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-fuchsia-600/5 rounded-full blur-3xl" />
      </div>
      
      {/* Floating particles */}
      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.5 + 0.1;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const animDuration = Math.random() * 15 + 10;
        
        return (
          <div 
            key={index}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              opacity,
              animation: `floatParticle ${animDuration}s infinite ease-in-out`,
            }}
          />
        );
      })}

      {/* Main content with floating animation */}
      <animated.div style={floatAnimation} className="container mx-auto relative text-center max-w-4xl">
        
        {/* Name and title container */}
        <div className="mb-12">
          <animated.h2 style={nameAnimation} className="text-6xl md:text-7xl font-black mb-8 relative">
            Radif
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Aftamaulana</span>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-violet-500/30 rounded-tl-lg opacity-70" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-fuchsia-500/30 rounded-br-lg opacity-70" />
          </animated.h2>

          {/* Typing effect for description with enhanced styling */}
          <animated.div style={descAnimation} className="relative">
            <div className="text-2xl md:text-3xl font-light text-gray-300 tracking-wide">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Front-end and Back-end Developer",
                    "Creating Digital Experiences",
                    "Turning Ideas into Reality"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 30,
                }}
              />
            </div>
            {/* Subtle underline effect */}
            <div className="h-0.5 w-48 bg-gradient-to-r from-violet-600/50 to-fuchsia-500/50 mx-auto mt-4 rounded-full" />
          </animated.div>
        </div>

        {/* CTA Buttons with enhanced hover effects - using CSS transitions instead of react-spring for the shadow */}
        <animated.div style={ctaButtonsAnimation} className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <animated.a 
            href="#projects" 
            style={viewProjectsAnimation}
            onMouseEnter={() => setHoverViewProjects(true)}
            onMouseLeave={() => setHoverViewProjects(false)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-xl md:text-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/30"
          >
            <span className="relative z-10">View Projects</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Animated glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
          </animated.a>

          <animated.a 
            href="#contact" 
            style={getInTouchAnimation}
            onMouseEnter={() => setHoverGetInTouch(true)}
            onMouseLeave={() => setHoverGetInTouch(false)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-xl md:text-2xl border border-white/20 rounded-lg overflow-hidden transition-all duration-300 bg-black/40 backdrop-blur-lg hover:shadow-lg hover:shadow-fuchsia-600/30"
          >
            <span className="relative z-10">Get in Touch</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Animated hover border effect */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-opacity duration-300" />
          </animated.a>
        </animated.div>
      </animated.div>
      
      {/* Repositioned Scroll indicator with fixed animation */}
      <animated.div 
        style={scrollIndicatorAnimation} 
        className="fixed bottom-8 right-8 flex flex-col items-center hover:opacity-100 transition-opacity cursor-pointer z-20"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </animated.div>
      
      {/* Add keyframes for floating particles */}
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-100px) translateX(50px); }
          50% { transform: translateY(-50px) translateX(100px); }
          75% { transform: translateY(100px) translateX(50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;