import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample project data - in a real application, you would fetch this from your API or database
const projectsData = [
  {
    id: 1,
    title: "Admin Website for Company Profile",
    description: "A CodeIgniter-based CRUD system that allows administrators to manage and update company profile information efficiently. Includes features such as user authentication, content management, and file uploads.",
    fullDescription: "A dynamic and user-friendly CRUD-based admin panel for managing a company's profile website. It allows administrators to easily update company details, services, team members, and other relevant information. Designed to streamline content management efficiently.",
    image: "/assets/thumbnailAdminPms.PNG",
    video: "/assets/AdminPmsDemo.mp4",
    tags: ["Php", "Codeigniter", "MySQL"],
    features: [
      "CRUD Operations: Create, Read, Update, and Delete content for various sections such as company details, services, and team members.",
      "Image Upload: Admins can upload and manage images for different sections (e.g., team photos, banners, portfolio).",
      "User Authentication & Role Management: Secure access for different user roles (Admin, Editor, Viewer).",
      "Content Management System: Allows easy editing of text, images, and links without coding knowledge."
    ],
    technologies: "This project was developed using CodeIgniter as the main backend framework, ensuring fast and secure CRUD operations. The frontend utilizes HTML, CSS, and JavaScript (Bootstrap) to provide a responsive and user-friendly experience. For data management, MySQL was used as the database. The system is deployed on Apache/Nginx servers, ensuring stability and scalability.",
    codeLink: "https://github.com/yourusername/rahasia",
    year: 2024
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A React.js-powered personal website designed to showcase projects, skills, and work experience.",
    fullDescription: "A modern and visually appealing portfolio website showcasing projects, skills, and achievements. Built with React.js, it provides a seamless user experience with interactive elements.",
    image: "/assets/PROJECT.PNG",
    video: "/assets/portoflioDemoRisa.mp4", // Video URL instead of demo link
    tags: ["React js", "Html", "Css"],
    features: [
      "Download CV: Users can download a professional CV in PDF format.",
      "Modern & Trendy Design: Responsive UI with animations and smooth transitions.",
      "Contact Me: Integrated contact form for business inquiries.",
      "About Section: Personal biography and career highlights.",
      "Skills Showcase: Displays technical and soft skills with progress indicators.",
      "Certificates & Awards: Section highlighting certifications and professional achievements.",
      "Project Showcase: Lists all completed projects with detailed views linked to Google Drive.",
      "Social Media Integration: Clickable links to LinkedIn, GitHub, and other platforms."
    ],
    technologies: "This project is built using React.js for a dynamic and interactive frontend, with Tailwind CSS providing a modern and sleek design. For form submissions, Node.js can be integrated as the backend if needed. The website is deployed on Vercel or Netlify, ensuring fast performance and seamless updates.",
    codeLink: "https://github.com/RadifAfta/Portofolio-Risalah",
    year: 2024
  },
  {
    id: 3,
    title: "Parking Gate Monitoring Website",
    description: "A Laravel-based web application integrated with IoT devices to monitor parking gate activity in real-time.",
    fullDescription: "A smart parking management system that integrates IoT-based RFID technology to track vehicle and personnel movement in and out of the facility. Provides real-time monitoring and logging capabilities for security and efficiency.",
    image: "/assets/thumbnailDasboardSmartGate.PNG",
    video: "/assets/DemoDashboardSmartGate.mp4",
    tags: ["Laravel", "Firebase", "Bootstrap"],
    features: [
      "RFID-Based Entry & Exit Monitoring: Tracks individuals using registered ID cards/tags.",
      "User Registration & Management: Admins can register and manage RFID tags for employees and visitors.",
      "Live Monitoring Dashboard: Displays real-time logs of who enters/exits.",
      "Access Control & Permissions: Restricts unauthorized access based on predefined roles.",
      "Data Logging & Export: Stores records of all entries/exits and allows exporting logs for analysis."
    ],
    technologies: "This system is powered by Laravel as the backend framework, ensuring a structured and secure architecture. The frontend is built using Bootstrap and JavaScript for an intuitive user interface. The database is handled with MySQL for efficient data storage and retrieval. The system is integrated with RFID modules (NodeMCU, Arduino, Raspberry Pi) for real-time tracking and monitoring.",
    codeLink: "https://github.com/RadifAfta/Smart-Gate-Parking-Dashboard",
    year: 2023
  },
  {
    id: 4,
    title: "Bootcamp Website with AI Recommendation",
    description: "A Laravel-based bootcamp management platform featuring AI-driven recommendations for personalized learning.",
    fullDescription: "An educational platform designed for tech bootcamps. It includes a catalog of courses, AI-powered course recommendations, and testimonials from previous learners.",
    image: "/assets/thumbnailBootcampWeb.PNG",
    video: "/assets/DemoWebBootcamp.mp4",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "About Us Page: Provides detailed information about the company and its mission.",
      "Courses Page: Displays all available courses with filtering options.",
      "AI-Based Course Recommendation: Suggests courses based on user preferences and past interactions.",
      "Student Testimonials: Showcases feedback from past students to build credibility.",
      "Interactive Dashboard: Enables users to track enrolled courses and progress.",
      "Secure Payment Integration: Supports online payment for course enrollment.",
      "Admin Dashboard: Allows administrators to manage courses, users, payments, and content efficiently.",
      "Course Payment System: Enables users to purchase and enroll in courses using various payment methods."
    ],
    technologies: "he backend is developed using Laravel, ensuring high performance and scalability. The frontend is built with Vue.js or React.js, providing an interactive and user-friendly experience. The database is managed with MySQL for efficient data handling. AI-based course recommendations are powered by Python (scikit-learn/TensorFlow), improving user experience with personalized learning suggestions.",
    codeLink: "https://github.com/RadifAfta/GoldGenAcademy",
    year: 2023
  },
  {
    id: 5,
    title: "Dashboard for Monitoring PPE Violation Detection",
    description: "A real-time dashboard that monitors PPE violations using YOLOv5 and CCTV integration, automatically updating detected incidents and providing risk profiling. Built with Flask (Python) for efficient processing.",
    fullDescription: "This project is a real-time monitoring dashboard designed to detect Personal Protective Equipment (PPE) violations using YOLOv5 and CCTV integration. The system automatically captures and logs violations when workers are detected without proper safety gear, such as helmets or vests. The dashboard provides live updates, risk profiling, and automated alerts to improve workplace safety.",
    image: "/assets/thumbnailApdDashboard.PNG",
    tags: ["Flask", "Python", "css", "html"],
    video: "/assets/DemoApdDashboard.mp4",
    features: [
      "Real - time Violation Detection: When a violation is detected via CCTV and YOLOv5, the captured image is automatically uploaded to the dashboard.",
      "Auto - Update & Auto - Scroll: The latest violations appear at the top of the dashboard, and the system automatically scrolls to show the most recent incidents.",
      "Risk Profile Feature: Displays a risk assessment based on the frequency and severity of PPE violations in different areas.",
      "Violation History Log: Stores all detected violations for future reference and analysis.",
      "User Access Management: Allows administrators to review and manage violations efficiently."
    ],
    technologies: "The backend is built using Flask (Python) for fast and efficient processing of real-time detection data. The YOLOv5 deep learning model is utilized for accurate PPE violation detection. The system is integrated with CCTV cameras, and images are processed using OpenCV. The frontend uses HTML, CSS, and JavaScript to provide an interactive and responsive user experience. ",
    codeLink: "https://github.com/RadifAfta/Dashboar-Monitoring-PPE-Violations",
    year: 2024
  }
  // {
  //   id: 5,
  //   title: "Boarding House Management Platform",
  //   description: "A web-based platform for listing and managing boarding houses in specific areas with booking features.",
  //   fullDescription: "A room rental management system for landlords and tenants. This platform simplifies the process of finding, listing, and managing boarding houses.",
  //   image: "/assets/project6.jpg",
  //   tags: ["Laravel", "MySQL", "Vuejs"],
  //   video: "/assets/DemoBootcampWeb.mp4",
  //   features: [
  //     "Property Listings: Owners can list available rooms with images and descriptions.",
  //     "Room Management: Allows landlords to track occupancy status.",
  //     "Tenant Booking System: Enables users to book available rooms.",
  //     "Payment Tracking: Records payments and rental history.",
  //     "Location - Based Search: Helps users find boarding houses near their preferred area."
  //   ],
  //   technologies: "This system is built using Laravel as the backend framework, ensuring robust and scalable management. The frontend leverages Bootstrap and Vue.js for a clean and responsive interface. The database is handled with MySQL, allowing structured and efficient storage.",
  //   codeLink: "https://github.com/yourusername/ecommerce-dashboard",
  //   year: 2024
  // }
  // Additional projects would be defined here
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // This simulates an API call with a timeout
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950 to-black" />
        <div className="relative z-10">
          <div className="w-16 h-16 border-t-4 border-b-4 border-violet-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Project Not Found</h2>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/projects"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-500/20"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/30 to-black" />
      <div className="absolute inset-0 opacity-40">
        {/* Grid pattern using inline SVG instead of external asset */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 100 L0 100 Z' fill='none' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </span>
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => {
              const colorClasses = [
                "bg-violet-950 text-violet-300 border-violet-700 hover:bg-violet-900",
                "bg-fuchsia-950 text-fuchsia-300 border-fuchsia-700 hover:bg-fuchsia-900",
                "bg-blue-950 text-blue-300 border-blue-700 hover:bg-blue-900"
              ];

              return (
                <span
                  key={idx}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-colors ${colorClasses[idx % colorClasses.length]}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">{project.description}</p>
        </div>

        {/* Project Media (Video + Thumbnail) */}
        <div className="relative w-full aspect-video mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10 group">
          {/* Thumbnail Image (shown when video not playing) */}
          <img
            src={project.image || `/assets/projects/project-${project.id}.jpg`}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'} absolute inset-0`}
          />

          {/* Video Player - Added muted attribute */}
          <video
            ref={videoRef}
            src={project.video}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
            onEnded={() => setIsVideoPlaying(false)}
            onClick={toggleVideo}
            muted // Add muted attribute to remove audio
          />

          {/* Video Controls Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center cursor-pointer"
            onClick={toggleVideo}
          >
            <button
              className={`w-20 h-20 rounded-full bg-violet-600/80 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-105 ${isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            >
              {isVideoPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className="absolute bottom-4 left-4 right-4 flex flex-col">
              <p className={`text-white font-medium text-lg mb-1 ${isVideoPlaying ? 'opacity-0 hover:opacity-100 transition-opacity' : 'opacity-100'}`}>
                {project.title} - Demo Video
              </p>
              <p className={`text-gray-300 text-sm ${isVideoPlaying ? 'opacity-0 hover:opacity-100 transition-opacity' : 'opacity-100'}`}>
                Click to {isVideoPlaying ? 'pause' : 'play'} demo video
              </p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Overview</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Key Features</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Technology Stack</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                <p className="text-gray-300 leading-relaxed">
                  {project.technologies}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Project Info</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Year
                    </h3>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Category
                    </h3>
                    <p className="text-white font-medium">{project.tags[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Links</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                {/* Video control with updated text */}
                <button
                  onClick={toggleVideo}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/20 mb-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>{isVideoPlaying ? 'Pause Demo' : 'Play Demo'}</span>
                </button>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-violet-950/50 hover:border-violet-500/30"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Source Code</span>
                </a>
              </div>
            </div>

            {/* New section for additional info */}
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent inline-flex items-center">
                <span className="mr-2">Need More Info?</span>
                <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-violet-500/20 transition-all shadow-lg shadow-violet-950/5">
                <p className="text-gray-300 mb-4">Interested in learning more about this project or exploring collaboration opportunities?</p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-violet-950/50 hover:border-violet-500/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;