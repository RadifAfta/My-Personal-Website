import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoError(false);
    setIsVideoPlaying(false);
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeImageModal();
      }
    };

    if (showImageModal) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showImageModal]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
              setVideoError(false);
            })
            .catch(error => {
              console.error("Video playback failed:", error);
              setVideoError(true);
              setIsVideoPlaying(false);
            });
        } else {
          setIsVideoPlaying(true);
        }
      }
    }
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080809] font-mono text-xs">
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="w-1.5 h-1.5 bg-safety animate-pulse rounded-sm" />
          <span>LOADING_DIRECTORY...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#080809] text-center px-4 font-mono text-xs">
        <div className="border border-neutral-900 bg-[#0A0A0B] p-8 max-w-md w-full">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2">ERROR // DIRECTORY_NOT_FOUND</h2>
          <p className="text-neutral-500 mb-6 uppercase">The specified system node could not be located.</p>
          <Link
            to="/#projects"
            className="inline-block px-5 py-2.5 border border-neutral-700 bg-neutral-900 hover:border-safety hover:text-white transition-mechanical text-neutral-400"
          >
            [RETURN_TO_PORTFOLIO]
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080809] text-[#94A3B8] pb-16 blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 hover:text-white transition-mechanical"
          >
            <span>[← RETURN_TO_SYSTEM_REPOSITORY]</span>
          </Link>
        </div>

        {/* Outer Bento wrapper for Project Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-neutral-900 bg-[#080809]">
          
          {/* Header Block - spans 12 cols */}
          <div className="col-span-12 border-r border-b border-neutral-900 bg-[#0A0A0B] p-8">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white uppercase">
                {project.title}
              </h1>
              <span className="font-mono text-xs text-safety tracking-wider">
                SYS_YEAR // {project.year}
              </span>
            </div>
            
            {/* Monospace tags */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-neutral-500 mb-6">
              {project.tags.map((tag, idx) => (
                <span key={idx}>
                  [{tag.toUpperCase()}]
                </span>
              ))}
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-4xl">{project.description}</p>
          </div>

          {/* Media Player Cell - spans 8 cols */}
          <div className="col-span-12 lg:col-span-8 border-r border-b border-neutral-900 bg-[#080809] p-6 flex flex-col justify-center">
            <div className="relative w-full aspect-video border border-neutral-900 overflow-hidden bg-neutral-950 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-contain grayscale brightness-75 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'} absolute inset-0`}
              />

              {project.video && !videoError ? (
                <>
                  <video
                    ref={videoRef}
                    src={project.video}
                    className={`w-full h-full object-contain transition-opacity duration-300 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
                    onEnded={() => setIsVideoPlaying(false)}
                    onClick={toggleVideo}
                    onError={() => setVideoError(true)}
                    muted
                  />

                  {/* Mechanical Overlay Play Button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 group/video"
                    onClick={toggleVideo}
                  >
                    <button
                      className="w-16 h-16 bg-[#080809]/90 border border-neutral-800 text-white flex items-center justify-center hover:border-safety transition-mechanical"
                    >
                      {isVideoPlaying ? (
                        <svg className="w-5 h-5 text-safety" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    
                    <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-neutral-400 bg-[#080809]/90 py-1.5 px-3 border border-neutral-800 flex justify-between">
                      <span>{isVideoPlaying ? 'SYS_PLAYING' : 'SYS_READY'} {"// " + project.title}</span>
                      <span>CLICK TO {isVideoPlaying ? 'PAUSE' : 'PLAY'} DEMO</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#080809]/90 border border-neutral-800 font-mono text-[9px] text-neutral-500">
                  {videoError ? 'DEMO_VIDEO: UNAVAILABLE' : 'MEDIA: PREVIEW_IMAGE'}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Info & Controls - spans 4 cols */}
          <div className="col-span-12 lg:col-span-4 border-r border-b border-neutral-900 bg-[#0A0A0B] p-6 md:p-8 flex flex-col justify-between font-mono text-xs">
            <div>
              <h3 className="text-xs uppercase text-white font-bold mb-4 tracking-wider">{"✦ SYSTEM_DIRECTORY"}</h3>
              
              <div className="space-y-4 border-b border-neutral-900 pb-6 mb-6">
                <div>
                  <span className="text-neutral-500 block mb-1">NODE_ID</span>
                  <p className="text-white">PROJECT_REF_{String(project.id).padStart(2, '0')}</p>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">DEPLOYMENT_YEAR</span>
                  <p className="text-white">{project.year}</p>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">ACCESSIBLE_ENVIRONMENT</span>
                  <p className="text-white uppercase">{project.tags[0]}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {project.video && !videoError && (
                <button
                  onClick={toggleVideo}
                  className="w-full py-3 text-center border border-safety bg-transparent text-safety uppercase font-bold hover:bg-safety hover:text-white transition-mechanical"
                >
                  {isVideoPlaying ? '[PAUSE_SYSTEM_DEMO]' : '[PLAY_SYSTEM_DEMO]'}
                </button>
              )}

              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 text-center border border-white bg-white text-black uppercase font-bold hover:bg-transparent hover:text-white transition-mechanical"
              >
                [GET_SOURCE_CODE ↗]
              </a>
            </div>
          </div>

          {/* Left Details Block - spans 8 cols */}
          <div className="col-span-12 lg:col-span-8 border-r border-b border-neutral-900 bg-[#080809] p-8 space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
                {"✦ OVERVIEW // TECHNICAL DETAILS"}
              </h3>
              <div className="border-l border-neutral-800 pl-4">
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans">{project.fullDescription}</p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
                {"✦ KEY_ATTRIBUTES // PARAMETERS"}
              </h3>
              <ul className="space-y-2 text-xs text-neutral-400 font-mono">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-safety">&gt;</span>
                    <span>{feature.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
                {"✦ STACK_INFRASTRUCTURE // STABILITY"}
              </h3>
              <div className="border-l border-neutral-800 pl-4">
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans">{project.technologies}</p>
              </div>
            </div>
          </div>

          {/* Right Gallery Block - spans 4 cols */}
          <div className="col-span-12 lg:col-span-4 border-r border-b border-neutral-900 bg-[#0A0A0B] p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
                {"✦ VISUAL_LOGS // SCREENSHOTS"}
              </h3>
              
              {project.images && project.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative border border-neutral-850 hover:border-safety bg-neutral-950 overflow-hidden cursor-pointer aspect-video"
                      onClick={() => openImageModal(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-mechanical"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-mono text-[11px] text-neutral-600 uppercase">NO SCREENSHOTS LOGGED FOR THIS NODE.</p>
              )}
            </div>

            <div className="mt-8 font-mono text-[10px] text-neutral-600">
              {"PROJECT_SYS_REF_" + String(project.id).padStart(2, '0') + " // OK"}
            </div>
          </div>

        </div>

      </div>

      {/* Screenshot Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-[#080809]/95 z-[9999] flex items-center justify-center p-4 cursor-pointer"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full border border-neutral-800 bg-neutral-950 p-2">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 font-mono text-xs text-neutral-400 hover:text-white uppercase"
            >
              [CLOSE_WINDOW]
            </button>
            <img
              src={selectedImage}
              alt="System Screenshot Max"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;