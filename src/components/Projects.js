import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Project data - typically this would come from your data source
  const projects = [
    {
      id: 1,
      title: "Admin Website for Company Profile",
      description: "A CodeIgniter-based CRUD system that allows administrators to manage and update company profile information efficiently.",
      image: "/assets/thumbnailAdminPms.PNG",
      tags: ["Php", "Codeigniter", "MySQL"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A React.js-powered personal website designed to showcase projects, skills, and work experience.",
      image: "/assets/PROJECT.PNG",
      tags: ["React js", "Html", "Css"]
    },
    {
      id: 3,
      title: "Parking Gate Monitoring Website",
      description: "A Laravel-based web application integrated with IoT devices to monitor parking gate activity in real-time.",
      image: "/assets/thumbnailDasboardSmartGate.PNG",
      tags: ["Laravel", "Firebase", "Bootstrap"]
    },
    {
      id: 4,
      title: "Bootcamp Website with AI Recommendation",
      description: "A Laravel-based bootcamp management platform featuring AI-driven recommendations for personalized learning.",
      image: "/assets/thumbnailBootcampWeb.PNG",
      tags: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
      id: 5,
      title: "Dashboard for Monitoring PPE Violation Detection",
      description: "A real-time dashboard that monitors PPE violations using YOLOv5 and CCTV integration, automatically updating detected incidents and providing risk profiling. Built with Flask (Python) for efficient processing.",
      image: "/assets/thumbnailApdDashboard.PNG",
      tags: ["Flask", "Python", "css", "html"]
    },
    // {
    //   id: 5,
    //   title: "Boarding House Management Platform",
    //   description: "A web-based platform for listing and managing boarding houses in specific areas with booking features.",
    //   image: "/assets/project6.jpg",
    //   tags: ["Laravel", "MySQL", "Vuejs"]
    // },
  ];

  // State for animation
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const projectRefs = useRef([]);

  // Observer for scroll animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
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
    
    // Store current refs in a variable to avoid the ESLint warning
    const currentRefs = projectRefs.current;
    
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Use the stored refs in the cleanup function
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="relative py-16 overflow-hidden bg-black">
      {/* Minimized background with fewer divs */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            My
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mb-4"></div>
          <p className="text-gray-300 text-base text-center max-w-2xl">
            Showcasing my expertise through web applications and digital solutions.
          </p>
        </div>

        {/* Projects Grid - Using CSS Grid for better performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-id={project.id}
              className={`group relative bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
                isVisible[project.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeCard === project.id ? 'ring-2 ring-violet-500/50' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Project Image - Optimized with object-cover */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image || `https://picsum.photos/400/300?random=${project.id}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Simple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              </div>

              {/* Project Content - Simplified */}
              <div className="p-5 relative">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Tags - Simplified */}
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
                  className="inline-flex items-center text-sm font-medium text-violet-300 hover:text-white transition-colors duration-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Interactive corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-violet-500/20 to-transparent transform -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;