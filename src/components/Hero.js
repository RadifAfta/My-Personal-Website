import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useSpring, animated, config } from '@react-spring/web';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 80);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Interactive canvas — constellation network that reacts to mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: 0, y: 0 };
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const handleCanvasMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleCanvasMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse repel effect
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.08 * (1 - dist2 / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleCanvasMouseMove);
    };
  }, []);

  // Animations
  const fadeUp1 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 200, friction: 24 },
  });

  const fadeUp2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    delay: 150,
    config: { tension: 200, friction: 24 },
  });

  const fadeUp3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    delay: 300,
    config: { tension: 200, friction: 24 },
  });

  const fadeUp4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    delay: 500,
    config: { tension: 200, friction: 24 },
  });

  // Subtle parallax on the glow orb
  const orbAnimation = useSpring({
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
    config: config.gentle,
  });

  const scrollIndicatorAnim = useSpring({
    opacity: showScrollIndicator ? 0.6 : 0,
    transform: showScrollIndicator ? 'translateY(0)' : 'translateY(15px)',
    config: { tension: 250, friction: 22 },
  });

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive constellation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Glow orb — follows mouse */}
      <animated.div
        style={orbAnimation}
        className="absolute w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Small greeting */}
        <animated.p style={fadeUp1} className="text-sm tracking-[0.3em] uppercase text-violet-400 mb-6 font-medium">
          Hello, I'm
        </animated.p>

        {/* Name with shimmer */}
        <animated.h1 style={fadeUp2} className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 relative">
          <span className="text-white">Radif</span>
          <br />
          <span className="hero-shimmer bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent bg-[length:200%_auto]">
            Aftamaulana
          </span>
        </animated.h1>

        {/* Typewriter */}
        <animated.div style={fadeUp3} className="mb-10">
          <div className="text-lg md:text-xl text-gray-500 font-light">
            <Typewriter
              options={{
                strings: [
                  "Backend Software Engineer",
                  "Certified Cloud Associate",
                  "Laravel, Node.js, & Go Developer",
                  "Building Scalable Backend Systems",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </div>
        </animated.div>

        {/* Buttons */}
        <animated.div style={fadeUp4} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group px-7 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
          >
            View Projects
            <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="../assets/CV/CV_Muhammad Radif A_English.pdf"
            target="_blank"
            download="CV_Muhammad Radif A_English.pdf"
            className="group px-7 py-3 border border-violet-500/30 bg-violet-500/10 rounded-full text-violet-300 font-medium transition-all duration-300 hover:border-violet-500 hover:text-white hover:bg-violet-500/20 hover:scale-105 backdrop-blur-sm flex items-center gap-2"
          >
            Download CV
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a
            href="#contact"
            className="group px-7 py-3 border border-white/15 rounded-full text-gray-300 font-medium transition-all duration-300 hover:border-white/30 hover:text-white hover:scale-105 bg-white/[0.03] backdrop-blur-sm"
          >
            Get in Touch
            <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </animated.div>
      </div>

      {/* Scroll indicator */}
      <animated.div
        style={scrollIndicatorAnim}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs tracking-widest uppercase text-gray-600 mb-2">Scroll</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
        </div>
      </animated.div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hero-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;