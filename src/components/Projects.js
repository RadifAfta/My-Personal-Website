import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  const categories = ['All', 'Laravel', 'React', 'Python', 'Other'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const projectRefs = useRef([]);

  const allProjects = projectsData;
  const filteredProjects = activeFilter === 'All'
    ? (showMore ? allProjects : allProjects.slice(0, 6))
    : allProjects.filter(p => p.category === activeFilter);

  const getTotalCount = (cat) => {
    return cat === 'All' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
  };

  const getCategoryCount = (cat) => {
    if (cat === 'All') {
      return showMore ? allProjects.length : Math.min(6, allProjects.length);
    }
    return getTotalCount(cat);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
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
  }, [activeFilter, showMore]);

  return (
    <div id="projects" className="col-span-12 border-r border-b border-neutral-900 bg-[#080809] p-8 md:p-12 group relative">
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-10 border-b border-neutral-900 pb-6">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ PROJECT_PORTFOLIO // WORK"}
          </h2>
          <p className="text-white font-extrabold text-2xl uppercase tracking-tighter">
            Digital Engineering Outputs
          </p>
        </div>
        <p className="text-neutral-500 text-xs font-mono max-w-sm mt-2 md:mt-0 leading-normal">
          Compiled system directories, production-ready source code, and cloud integrations.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-start mb-8 font-mono text-xs overflow-x-auto pb-2 scrollbar-none">
        <div className="flex gap-1.5 border border-neutral-900 p-0.5 bg-[#0A0A0B]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setIsVisible({});
              }}
              className={`px-4 py-2 uppercase tracking-wider transition-mechanical border ${
                activeFilter === cat
                  ? 'bg-neutral-950 text-white border-neutral-800 font-bold border-b-2 border-b-safety'
                  : 'text-neutral-500 border-transparent hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat} [{getCategoryCount(cat)}]
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
            className={`group/card border border-neutral-900 hover:border-safety bg-[#0A0A0B] overflow-hidden transition-mechanical flex flex-col justify-between h-[360px] ${
              isVisible[project.id] ? 'opacity-100' : 'opacity-20'
            }`}
          >
            {/* Image & Header */}
            <div>
              <div className="relative h-40 w-full overflow-hidden bg-neutral-950 border-b border-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover/card:grayscale-0 group-hover/card:scale-105 transition-mechanical"
                />
                
                {/* Meta details */}
                <div className="absolute top-2.5 left-2.5 flex gap-1 font-mono text-[9px]">
                  <span className="px-2 py-0.5 bg-[#080809]/95 text-neutral-300 border border-neutral-800">
                    {project.category.toUpperCase()}
                  </span>
                  {project.isLegacy && (
                    <span className="px-2 py-0.5 bg-neutral-950 text-amber-500 border border-amber-950">
                      EARLIER_WORK
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-neutral-500 bg-[#080809]/80 px-2 py-0.5 border border-neutral-800">
                  SYS_ID: {String(project.id).padStart(2, '0')}
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight group-hover/card:text-safety transition-mechanical mb-2 line-clamp-1">
                  {project.title}
                </h4>
                <p className="text-neutral-400 font-sans text-xs md:text-sm line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech details and Links */}
            <div className="p-5 pt-0">
              <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[9px] mb-4 text-neutral-600">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span key={idx}>
                    [{tag}]
                  </span>
                ))}
                {project.tags.length > 4 && <span>[+ {project.tags.length - 4}]</span>}
              </div>

              <Link
                to={`/project/${project.id}`}
                className="w-full flex items-center justify-between font-mono text-xs py-2 border border-neutral-900 hover:border-white text-neutral-400 hover:text-white bg-[#080809] hover:bg-neutral-900/40 text-center px-4 transition-mechanical"
              >
                <span>OPEN_DIRECTORY</span>
                <span>-&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See More Projects button */}
      {activeFilter === 'All' && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setShowMore(!showMore);
              setIsVisible({});
            }}
            className="px-6 py-3 border border-neutral-800 bg-[#0A0A0B] text-neutral-400 font-mono text-xs uppercase tracking-wider font-bold hover:border-safety hover:text-white transition-mechanical"
          >
            {showMore ? '[Collapse Records]' : `[LOAD ALL PROJECTS (+${allProjects.length - 6})]`}
          </button>
        </div>
      )}

      {/* GitHub Contributions widget */}
      <div className="mt-16 pt-12 border-t border-neutral-900 font-mono">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-safety rounded-sm" />
            <div>
              <h3 className="text-xs uppercase text-white font-bold tracking-wider">{"✦ GITHUB_CONTRIBUTIONS // HISTORY"}</h3>
              <p className="text-[10px] text-neutral-500 uppercase mt-0.5">Real-time open source system activity logs</p>
            </div>
          </div>
          
          <a
            href="https://github.com/RadifAfta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-800 bg-[#0A0A0B] hover:border-safety text-neutral-400 hover:text-white transition-mechanical text-xs"
          >
            [OPEN_GITHUB_PROFILE ↗]
          </a>
        </div>

        {/* Calendar Chart wrapper */}
        <div className="w-full border border-neutral-900 bg-neutral-950 p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-800">
          <img
            src="https://ghchart.rshah.org/ea5100/RadifAfta"
            alt="RadifAfta's Github Contributions"
            className="w-full min-w-[700px] opacity-80 hover:opacity-100 transition-mechanical"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-8 text-neutral-600 text-[10px] font-mono">
        {"✦ SECTION_06 // PROJECTS_REPOSITORY"}
      </div>
    </div>
  );
};

export default Projects;