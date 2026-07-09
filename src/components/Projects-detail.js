import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
  {
    id: 13,
    title: "OrderX – AI WhatsApp Customer Service Bot",
    description: "Automated WhatsApp sales assistant powered by BullMQ, Redis, and Groq Cloud (LLaMA-3.1), with automated Google Sheets rekap.",
    fullDescription: "OrderX is an AI-powered WhatsApp customer service bot designed to automate e-commerce order recapitulation, client relations, and operational databases 24/7. It integrates modern backend paradigms like message queuing (BullMQ + Redis) to handle traffic spikes under rate limits, AI intent classification via Groq Cloud (LLaMA-3.1), and an interactive multi-turn state machine via Redis. OrderX classifies user intents (e.g., placing orders, checking stock, complaints) before storage, filters typos automatically to match the seller's catalog, interactively requests shipping details (Name & Address), and logs completed order details instantly to Google Sheets. Natural 'typing...' simulation status is preserved for human-like WhatsApp interaction.",
    image: "/assets/thumbnail/OrderX.png",
    tags: ["TypeScript", "Node.js", "Redis", "BullMQ", "Groq Cloud", "Google Sheets"],
    video: "/assets/demo/demoOrderX.mp4",
    features: [
      "AI Intent Classifier (Classifies and filters Order, Ask Stock, Complaint, and Smalltalk)",
      "Typo-Tolerant Product Matching (Resolves typos like 'sate kambenk 2' to catalog products like 'Sate Kambing')",
      "Multi-Turn State Machine (Redis session state management with a 15-minute TTL lock)",
      "Automated Order Rekap (Interactively collects Name & Address, then commits details and totals to Google Sheets)",
      "BullMQ + Redis Message Queue (Implements concurrency 1 processing and Exponential Backoff Retry)",
      "Humanized WhatsApp Flow (Natural 'typing...' status simulation)"
    ],
    technologies: "Built with Node.js and TypeScript. Implements BullMQ + Redis for asynchronous queueing and retry strategies. Leverages Groq Cloud (LLaMA-3.1) for NLP classifications. Manages customer chat state sessions via Redis key-value storage. Adopts the Provider Pattern to decouple business logic, making the system ready to transition from whatsapp-web.js to the Official WhatsApp Cloud API.",
    codeLink: "https://github.com/RadifAfta/orderx-whatsapp-bot",
    year: 2026
  },
  {
    id: 12,
    title: "Amora MES – Manufacturing Execution System",
    description: "Enterprise MES built with Laravel, Alpine.js, and Docker, automating workflow tracking on private Linux NAS servers.",
    fullDescription: "Amora MES is a proprietary, internal Manufacturing Execution System (MES) engineered to digitize and automate the entire edible bird's nest production cycle at PT Amora Walet Indonesia. The platform features end-to-end processing tracking (raw bird nest washing, quality grading, processing, and packaging), automated real-time inventory adjustments, and quality control (QC) check gates to eliminate operational manual errors and maintain compliance. Containerized using Docker, it is deployed on on-premise Linux NAS servers for local reliability and offline resilience.",
    image: "/assets/thumbnail/awi_mes_thumbnail.jpeg",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL", "Docker", "Linux", "NAS Server"],
    features: [
      "End-to-End Bird Nest Production Workflow Tracking",
      "Process stages: Washing, Quality Grading, Sorting & Packaging",
      "Real-time Inventory Control & Dynamic Stock Auditing",
      "Quality Control Gate Checks to Minimize Human Error",
      "Comprehensive Production Reports & Efficiency Analytics"
    ],
    technologies: "Designed with a robust Service Layer pattern on Laravel to isolate complex business logistics, coupled with Alpine.js and Tailwind CSS for a reactive, light-weight user interface. Database persistence is handled by a highly-optimized MySQL schema. System is containerized with Docker and deployed on local Linux NAS servers.",
    codeLink: "https://github.com/radifafta/amora-mes-internal",
    year: 2026
  },
  {
    id: 1,
    title: "TSI Inventory – Warehouse Management System",
    description: "Industrial-grade inventory system for PT Multi Spunindo Jaya Tbk, optimizing real-time stock tracking and complex reporting.",
    fullDescription: "Developed during my internship at PT Multi Spunindo Jaya Tbk, this system solves critical stock tracking issues for industrial manufacturing. It manages thousands of items, handles flexible stock opname sessions, and automates management reporting using a robust Service Layer pattern.",
    image: "/assets/thumbnail/tsiinventory-thumbnail.png",
    tags: ["Laravel", "PHP", "MySQL", "Service Layer"],
    video: "/assets/demo/demo_tsiinventory.mp4",
    features: [
      "Real-time Stock Tracking & Monitoring",
      "Flexible Stock Opname Logic (High Frequency)",
      "Automated Transaction Reporting",
      "Minimal Stock Threshold Alerts"
    ],
    technologies: "Built with Laravel 10 and MySQL. I implemented a Service Layer architecture to ensure the backend is scalable, maintainable, and separates business logic from controllers.",
    codeLink: "https://github.com/radifafta/tsi-inventory-internal",
    year: 2026
  },
  {
    id: 2,
    title: "Lifepath – AI Personal Assistant Bot",
    description: "Automated personal assistant bot integrated with Telegram, deployed on GCP with Supabase for data persistence.",
    fullDescription: "Lifepath is an AI-powered assistant deployed on Google Cloud Platform (GCP). It utilizes Node.js for backend logic, Supabase for cloud database management, and PM2 for ensuring 24/7 continuous uptime on a Linux server.",
    image: "/assets/thumbnail/lifepath-thumbnail.jpg",
    tags: ["Node.js", "GCP", "Supabase", "PM2", "Telegram API"],
    video: "/assets/demo/demo_lifepath.mp4",
    features: [
      "24/7 Cloud Deployment on GCP",
      "Automated Task Scheduling & Reminders",
      "Secure Data Storage with Supabase",
      "Real-time Telegram API Integration"
    ],
    technologies: "Developed with Node.js and Express.js. Data persistence is handled by Supabase (PostgreSQL), and the bot is managed using PM2 on a GCP Compute Engine instance.",
    codeLink: "https://github.com/radifafta/lifepath-bot",
    year: 2026
  },
  {
    id: 3,
    title: "Dashboard for Monitoring PPE Violation Detection",
    description: "AI-based real-time monitoring dashboard detecting safety violations using YOLOv5 and CCTV integration.",
    fullDescription: "This project is a real-time monitoring dashboard designed to detect Personal Protective Equipment (PPE) violations using YOLOv5 and CCTV integration. The system automatically captures and logs violations when workers are detected without proper safety gear.",
    image: "/assets/thumbnailApdDashboard.PNG",
    tags: ["Flask", "Python", "YOLOv5", "Computer Vision"],
    video: "/assets/DemoApdDashboard.mp4",
    features: [
      "Real-time AI Violation Detection (87% Accuracy)",
      "Automatic Incident Risk Profiling",
      "CCTV Integration & Auto-log System",
      "Responsive Monitoring Dashboard"
    ],
    technologies: "The backend is built using Flask (Python) for fast processing. The YOLOv5 deep learning model is utilized for accurate PPE detection, integrated with CCTV via OpenCV.",
    codeLink: "https://github.com/RadifAfta/Dashboard-Monitoring-PPE-Violations",
    year: 2024
  },
  {
    id: 4,
    title: "Rintisar – Startup Hub Booking Platform",
    description: "Startup founder platform for booking spaces with Flip payments, Google OAuth, and Geolocation search.",
    fullDescription: "Rintisar is a digital platform designed for startup founders to book meeting rooms or co-working spaces. It features Google OAuth for authentication, Geolocation API for finding nearby hubs, and Flip payment integration.",
    image: "/assets/thumbnail/rintisar_thumbnail.PNG",
    video: "/assets/demo/demo_rintisar.mp4",
    tags: ["Laravel", "PHP", "Flip API", "OAuth", "Geolocation"],
    features: [
      "Google OAuth 2.0 Authentication",
      "Geolocation-based Search Engine",
      "Integrated Flip Payment (QRIS/Bank)",
      "Real-time Reservation Management"
    ],
    technologies: "Developed using Laravel (backend), MySQL (database), and React (frontend). Payment processing is handled via Flip API, supporting QRIS and bank transfers.",
    codeLink: "https://github.com/radifafta/rintisar-hub",
    year: 2025
  },
  {
    id: 5,
    title: "Diserasi – AI-Powered Dating App",
    description: "Matchmaking platform with AI compatibility scoring, geolocation matching, and Flip payment integration.",
    fullDescription: "Diserasi is a smart dating platform built with Laravel and MySQL. It offers Google OAuth for seamless login, proximity-based matching via Geolocation API, and premium matchmaking logic.",
    image: "/assets/thumbnail/diserasi_thumbnail.PNG",
    images: [
      "/assets/gallery/admin_dashboard_diserasi.PNG",
      "/assets/gallery/postman_diserasi.PNG",
    ],
    video: "/assets/demo/demo_diserasi.mp4",
    tags: ["Laravel", "AI", "OAuth", "Flip", "Geolocation"],
    features: [
      "AI Compatibility Scoring Engine",
      "Interactive Match Game Logic",
      "Location-based User Suggestions",
      "Premium Subscription via Flip Gateway"
    ],
    technologies: "Built with Laravel for the backend. Integrates Google OAuth 2.0, Flip for payments, and custom AI logic for compatibility scoring.",
    codeLink: "https://github.com/radifafta/diserasi-app",
    year: 2025
  },
  {
    id: 6,
    title: "JTV Attendance System – IoT Integrated",
    description: "IoT-based attendance tracking with QR check-in, Flutter mobile app, and Express.js backend.",
    fullDescription: "A digital presence system integrating IoT and QR technology for real-time tracking. It consists of a Flutter frontend, Express.js backend, and MySQL database.",
    image: "/assets/thumbnail/jtv_thumbnail.PNG",
    images: [
      "/assets/gallery/database_jtv.PNG",
      "/assets/gallery/postman_jtv.PNG",
    ],
    video: "/assets/demo/demo_jtv.mp4",
    tags: ["Express.js", "Flutter", "MySQL", "IoT"],
    features: [
      "QR-based Check-in via IoT",
      "Real-time Database Logging",
      "Clean Mobile UI (Flutter)",
      "Secure Express.js API"
    ],
    technologies: "Flutter for mobile, Express.js for the API, and MySQL for storage, integrated with custom IoT hardware.",
    codeLink: "https://github.com/RadifAfta/backend_jtv_presensi",
    year: 2025
  },
  {
    id: 7,
    title: "Inventory Management System",
    description: "A web-based system for managing inventory, tracking stock levels, and optimizing supply chain operations. Built with React and Node.js.",
    fullDescription: "This system provides a centralized interface for managing products, tracking stock quantities, and processing incoming and outgoing orders. It features an interactive dashboard, stock alerts, and reports, improving operational efficiency.",
    images: [
      "/assets/gallery/database_inventory_management.PNG",
      "/assets/gallery/postman_inventory_management.PNG"
    ],
    image: "/assets/thumbnail/inventory-management-thumbnail.png",
    video: "/assets/demo/demo_inventory_management.mp4",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "REST API"],
    features: [
      "Real-time dashboard for stock monitoring.",
      "Full CRUD (Create, Read, Update, Delete) for products.",
      "Minimum stock threshold alerts.",
      "Customizable inventory reports.",
      "User and role management."
    ],
    technologies: "React (frontend), Node.js (backend), Express.js (API layer), MySQL (database).",
    codeLink: "https://github.com/RadifAfta/Inventory-management",
    year: 2025
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A React.js-powered personal website designed to showcase projects, skills, and work experience.",
    fullDescription: "A modern and visually appealing portfolio website showcasing projects, skills, and achievements. Built with React.js, it provides a seamless user experience with interactive elements.",
    image: "/assets/PROJECT.PNG",
    video: "/assets/portoflioDemoRisa.mp4",
    tags: ["React js", "Html", "Css"],
    features: [
      "Download CV: Users can download a professional CV in PDF format.",
      "Modern & Trendy Design: Responsive UI with animations and smooth transitions.",
      "Contact Me: Integrated contact form for business inquiries.",
      "About Section: Personal biography and career highlights.",
      "Skills Showcase: Displays technical and soft skills with progress indicators.",
      "Certificates & Awards: Section highlighting certifications and professional achievements.",
      "Project Showcase: Lists all completed projects with detailed views.",
      "Social Media Integration: Clickable links to LinkedIn, GitHub, and other platforms."
    ],
    technologies: "Built using React.js for a dynamic frontend, with Tailwind CSS providing a modern design. Deployed on Vercel/Netlify for fast performance.",
    codeLink: "https://github.com/RadifAfta/Portofolio-Risalah",
    year: 2025
  },
  {
    id: 9,
    title: "Parking Gate Monitoring Website",
    description: "A Laravel-based web application integrated with IoT devices to monitor parking gate activity in real-time.",
    fullDescription: "A smart parking management system that integrates IoT-based RFID technology to track vehicle and personnel movement in and out of the facility. Provides real-time monitoring and logging capabilities for security and efficiency.",
    image: "/assets/thumbnailDasboardSmartGate.PNG",
    video: "/assets/DemoDashboardSmartGate.mp4",
    tags: ["Laravel", "Firebase", "Bootstrap"],
    features: [
      "RFID-Based Entry & Exit Monitoring.",
      "User Registration & Management for RFID tags.",
      "Live Monitoring Dashboard with real-time logs.",
      "Access Control & Permissions based on roles.",
      "Data Logging & Export for analysis."
    ],
    technologies: "Laravel (backend), Bootstrap & JavaScript (frontend), MySQL (database), integrated with RFID modules (NodeMCU, Arduino, Raspberry Pi).",
    codeLink: "https://github.com/RadifAfta/Smart-Gate-Parking-Dashboard",
    year: 2023
  },
  {
    id: 10,
    title: "Bootcamp Website with AI Recommendation",
    description: "A Laravel-based bootcamp management platform featuring AI-driven recommendations for personalized learning.",
    fullDescription: "An educational platform designed for tech bootcamps. It includes a catalog of courses, AI-powered course recommendations, and testimonials from previous learners.",
    image: "/assets/thumbnailBootcampWeb.PNG",
    video: "/assets/DemoWebBootcamp.mp4",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "Course catalog with filtering options.",
      "AI-Based Course Recommendation engine.",
      "Student Testimonials section.",
      "Interactive Dashboard for tracking progress.",
      "Secure Payment Integration for enrollment.",
      "Admin Dashboard for managing courses and users.",
      "Course Payment System with multiple methods."
    ],
    technologies: "Laravel (backend), MySQL (database), Bootstrap (frontend). AI recommendations powered by Python (scikit-learn/TensorFlow).",
    codeLink: "https://github.com/RadifAfta/GoldGenAcademy",
    year: 2023
  },
  {
    id: 11,
    title: "Admin Website for Company Profile",
    description: "A CodeIgniter-based CRUD system that allows administrators to manage and update company profile information efficiently.",
    fullDescription: "A dynamic and user-friendly CRUD-based admin panel for managing a company's profile website. It allows administrators to easily update company details, services, team members, and other relevant information.",
    image: "/assets/thumbnailAdminPms.PNG",
    video: "/assets/AdminPmsDemo.mp4",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    features: [
      "CRUD Operations for company details, services, and team members.",
      "Image Upload and management for different sections.",
      "User Authentication & Role Management.",
      "Content Management System without coding knowledge."
    ],
    technologies: "Built with CodeIgniter (backend), MySQL (database), HTML/CSS/JS (frontend), deployed on Apache server.",
    codeLink: "https://github.com/radifafta/rahasia",
    year: 2024
  }
];

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