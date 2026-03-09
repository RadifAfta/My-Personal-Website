import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GitlabCalendar from './GitlabCalendar';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard for Monitoring PPE Violation Detection",
      description: "A real-time dashboard that monitors PPE violations using YOLOv5 and CCTV integration, automatically updating detected incidents and providing risk profiling. Built with Flask (Python) for efficient processing.",
      image: "/assets/thumbnailApdDashboard.PNG",
      tags: ["Flask", "Python", "css", "html"],
      category: "Python"
    },
    {
      id: 2,
      title: "Rintisar – Startup Hub Booking Platform",
      description: "A Laravel-based platform for startup founders to book meeting spaces using Flip payments (QRIS & bank), Google login, and geolocation-based search.",
      image: "/assets/thumbnail/rintisar_thumbnail.PNG",
      tags: ["Laravel", "PHP", "MySQL"],
      category: "Laravel"
    },
    {
      id: 3,
      title: "Diserasi – AI-Powered Dating App",
      description: "Laravel-based dating platform with Google login, AI-powered matchmaking, geolocation, and payment system integration via Flip.",
      image: "/assets/thumbnail/diserasi_thumbnail.PNG",
      tags: ["Laravel", "PHP", "AI", "OAuth", "Geolocation", "Flip"],
      category: "Laravel"
    },
    {
      id: 4,
      title: "JTV Attendance System – IoT Integrated",
      description: "An IoT-based attendance system with QR check-in, Flutter frontend, and Express.js backend.",
      image: "/assets/thumbnail/jtv_thumbnail.PNG",
      tags: ["Express.js", "Flutter", "MySQL", "IoT"],
      category: "Other"
    },
    {
      id: 5,
      title: "Inventory Management System",
      description: "A web-based system for managing inventory, tracking stock levels, and optimizing supply chain operations. Built with React and Node.js.",
      image: "/assets/thumbnail/inventory-management-thumbnail.png",
      tags: ["React", "Node.js", "Express.js", "MySQL", "REST API"],
      category: "React"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A React.js-powered personal website designed to showcase projects, skills, and work experience.",
      image: "/assets/PROJECT.PNG",
      tags: ["React js", "Html", "Css"],
      category: "React"
    },
    {
      id: 7,
      title: "Parking Gate Monitoring Website",
      description: "A Laravel-based web application integrated with IoT devices to monitor parking gate activity in real-time.",
      image: "/assets/thumbnailDasboardSmartGate.PNG",
      tags: ["Laravel", "Firebase", "Bootstrap"],
      category: "Laravel"
    },
    {
      id: 8,
      title: "Bootcamp Website with AI Recommendation",
      description: "A Laravel-based bootcamp management platform featuring AI-driven recommendations for personalized learning.",
      image: "/assets/thumbnailBootcampWeb.PNG",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      category: "Laravel"
    },
    {
      id: 9,
      title: "Admin Website for Company Profile",
      description: "A CodeIgniter-based CRUD system that allows administrators to manage and update company profile information efficiently.",
      image: "/assets/thumbnailAdminPms.PNG",
      tags: ["PHP", "CodeIgniter", "MySQL"],
      category: "Other"
    },
  ];

  const categories = ['All', 'Laravel', 'React', 'Python', 'Other'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const projectRefs = useRef([]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Observer for scroll animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const currentRefs = projectRefs.current;

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl" />

      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58,11.73-114.16,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V27.35C1146.53,46.06,1070.36,60.7,985.66,92.83Z" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            My
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mb-4"></div>
          <p className="text-gray-300 text-base text-center max-w-2xl">
            Showcasing my expertise through web applications and digital solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setIsVisible({});
                }}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFilter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${activeFilter === cat ? 'text-white/70' : 'text-gray-600'}`}>
                  ({cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-id={project.id}
              className={`group relative bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-500 ${isVisible[project.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${activeCard === project.id ? 'ring-2 ring-violet-500/50 scale-[1.02]' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image || `https://picsum.photos/400/300?random=${project.id}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 text-violet-300 rounded-md">
                  {project.category}
                </div>

                {/* Number */}
                <div className="absolute top-3 right-3 text-xs font-mono text-white/30 font-bold">
                  {String(project.id).padStart(2, '0')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 relative">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-violet-300 hover:text-white transition-colors duration-300 group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Interactive corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-500/20 to-transparent transform -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* GitHub & GitLab Activity Widget at the bottom of Projects */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all duration-300 shadow-xl shadow-black/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex gap-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <title>GitHub</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <svg className="w-6 h-6 text-[#FC6D26]" fill="currentColor" viewBox="0 0 512 512">
                    <title>GitLab</title>
                    <path d="M29.782 199.732 256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h150.81zM256 493.714l27.843-85.273c5.15-15.667 16.612-28.573 31.039-36.924H197.118c14.427 8.351 25.888 21.257 31.039 36.924zM482.218 199.732 256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993l-28.849-87.974zM406.813 24.926c-3.141-8.854-15.709-8.854-18.851 0l-56.555 174.806h150.81z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contributions</h3>
                  <p className="text-gray-400 text-sm mt-1">My open source activity over the last year</p>
                </div>
              </div>
              <div className="flex gap-3">
                  <a href="https://github.com/RadifAfta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-lg hover:bg-violet-500/20 hover:text-white transition-all duration-300">
                    <span className="text-sm font-medium">GitHub</span>
                    <span className="text-xs">↗</span>
                  </a>
                  <a href="https://gitlab.com/yuzucungwa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FC6D26]/10 border border-[#FC6D26]/20 text-[#FC6D26] rounded-lg hover:bg-[#FC6D26]/20 hover:text-white transition-all duration-300">
                    <span className="text-sm font-medium">GitLab</span>
                    <span className="text-xs">↗</span>
                  </a>
              </div>
            </div>
            
            <div className="space-y-8">
                <div>
                    <h4 className="text-violet-300 font-medium mb-3 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </h4>
                    <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-violet-500/20 scrollbar-track-white/5 rounded-lg border border-white/5 p-4 bg-white/[0.02]">
                    <img
                        src="https://ghchart.rshah.org/8b5cf6/RadifAfta"
                        alt="RadifAfta's Github Chart"
                        className="w-full min-w-[700px] opacity-90 hover:opacity-100 transition-opacity drop-shadow-md"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.1))' }}
                        loading="lazy"
                    />
                    </div>
                </div>

                <div>
                    <h4 className="text-[#FC6D26] font-medium mb-3 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512"><path d="M29.782 199.732 256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h150.81zM256 493.714l27.843-85.273c5.15-15.667 16.612-28.573 31.039-36.924H197.118c14.427 8.351 25.888 21.257 31.039 36.924zM482.218 199.732 256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993l-28.849-87.974zM406.813 24.926c-3.141-8.854-15.709-8.854-18.851 0l-56.555 174.806h150.81z"/></svg>
                        GitLab
                    </h4>
                    <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#FC6D26]/20 scrollbar-track-white/5 rounded-lg border border-white/5 p-4 bg-white/[0.02]">
                        <div className="min-w-[700px]">
                            <GitlabCalendar username="yuzucungwa" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;