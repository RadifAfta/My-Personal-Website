import React, { useState } from 'react';
import { 
  SiLaravel, 
  SiPhp, 
  SiGo, 
  SiNodedotjs, 
  SiMysql, 
  SiPostgresql, 
  SiAlibabacloud, 
  SiUipath, 
  SiDocker, 
  SiReact, 
  SiJavascript,
  SiPostman
} from 'react-icons/si';
import { FaAws, FaBrain } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillCategories = [
    {
      title: 'Backend Engineering',
      skills: [
        { name: 'Laravel', level: 'Advanced', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'PHP', level: 'Advanced', icon: <SiPhp className="text-[#777BB4]" /> },
        { name: 'Node.js', level: 'Advanced', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'REST API', level: 'Advanced', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'Go (Golang)', level: 'Intermediate', icon: <SiGo className="text-[#00ADD8]" /> },
      ],
    },
    {
      title: 'Frontend & Languages',
      skills: [
        { name: 'JavaScript', level: 'Advanced', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React.js', level: 'Intermediate', icon: <SiReact className="text-[#61DAFB]" /> },
      ],
    },
    {
      title: 'Cloud & Database',
      skills: [
        { 
          name: 'MySQL / PostgreSQL', 
          level: 'Advanced', 
          icon: (
            <span className="flex items-center gap-0.5">
              <SiMysql className="text-[#4479A1]" />
              <SiPostgresql className="text-[#4169E1]" />
            </span>
          ) 
        },
        { 
          name: 'Alibaba & AWS Cloud', 
          level: 'Intermediate', 
          icon: (
            <span className="flex items-center gap-0.5">
              <SiAlibabacloud className="text-[#FF6A00]" />
              <FaAws className="text-[#FF9900]" />
            </span>
          ) 
        },
        { name: 'Docker', level: 'Familiar', icon: <SiDocker className="text-[#2496ED]" /> },
      ],
    },
    {
      title: 'Specialized Tech',
      skills: [
        { name: 'UiPath (RPA)', level: 'Intermediate', icon: <SiUipath className="text-[#FA4616]" /> },
        { name: 'YOLOv5 (AI)', level: 'Familiar', icon: <FaBrain className="text-[#EE4C2C]" /> },
      ],
    },
  ];

  const experiences = [
    {
      company: 'PT Amora Walet Indonesia',
      role: 'Fullstack Developer',
      period: 'May 2026 - Present',
      desc: 'Designed and developed internal Manufacturing Execution Systems (MES) to digitize and automate the entire edible bird\'s nest production workflow. Built end-to-end workflow tracking modules from raw materials washing, quality grading, to finished products. Integrated inventory control and quality control (QC) management systems to ensure physical stock accuracy and minimize human error. Containerized and deployed applications using Docker on Linux environments and local NAS servers.',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Docker', 'Linux', 'NAS Server'],
    },
    {
      company: 'PT Multi Spunindo Jaya Tbk (Kemnaker Intern)',
      role: 'IT Programmer Intern',
      period: '2025 - 2026',
      desc: 'Developed the "TSI Inventory" industrial warehouse management system using Laravel to optimize real-time stock tracking. Automated SAP document workflows using UiPath RPA and validated Material Master and Bill of Materials (BOM) data. Maintained and debugged internal applications (MSJ Magang & Document) to ensure high uptime stability.',
      tags: ['Laravel', 'PHP', 'UiPath', 'SAP', 'MySQL', 'JavaScript'],
    },
    {
      company: 'Involuntir',
      role: 'Backend Developer Intern',
      period: '2025',
      desc: 'Developed and maintained the "Rintisar" workspace reservation platform. Designed and implemented REST CRUD APIs for admin dashboards and user approval features. Integrated Flip payment gateway for automated reservation transactions and built image upload features. Deployed and maintained systems on cPanel.',
      tags: ['Laravel', 'MySQL', 'Flip API', 'REST API', 'cPanel'],
    },
    {
      company: 'PT Pelindo Marine Service',
      role: 'Software Engineering Intern',
      period: '2024 - 2025',
      desc: 'Engineered an AI-based computer vision system using YOLOv5 for PPE (helmet & vest) detection with 87% accuracy. Developed admin dashboards and created technical documentation for internal enterprise systems (Marron & Mardoc), including system architecture, flowcharts, and requirement specifications. Optimized company website performance.',
      tags: ['YOLOv5', 'Flask', 'Python', 'CodeIgniter', 'Bootstrap'],
    },
  ];

  const education = [
    {
      school: 'Telkom University Surabaya',
      degree: 'Bachelor of Information Technology (S1 Teknologi Informasi)',
      period: '2021 - 2025 (Graduated: October 2025)',
      gpa: 'GPA: 3.83 / 4.00',
      courses: 'Web Programming (Pemrograman Web), Cloud Computing (Komputasi Awan), Computer Networks (Jaringan Komputer), Artificial Intelligence (Kecerdasan Buatan), Internet of Things (IoT)',
      icon: '🎓',
    },
  ];

  const certifications = [
    {
      title: 'Alibaba Cloud Certification Associate',
      issuer: 'Alibaba Cloud',
      period: 'Active',
      icon: <SiAlibabacloud className="text-[#FF6A00]" />
    },
    {
      title: 'Cloud Computing Analyst Certification',
      issuer: 'BNSP - Inixindo',
      period: 'Active',
      icon: '🛡️'
    },
    {
      title: 'Alibaba Cloud Certified Developer',
      issuer: 'Alibaba Cloud',
      period: 'Active',
      icon: <SiAlibabacloud className="text-[#FF6A00]" />
    },
    {
      title: 'Cloud Practitioner Essentials (AWS Cloud Fundamentals)',
      issuer: 'AWS - Dicoding Indonesia',
      period: 'Active',
      icon: <FaAws className="text-[#FF9900]" />
    },
    {
      title: 'Python Crash Course: Dive into Coding with Hands-On Projects',
      issuer: 'Udemy',
      period: 'Completed',
      icon: '🐍'
    },
    {
      title: 'Basic SQL',
      issuer: 'Dicoding Indonesia',
      period: 'Completed',
      icon: <SiMysql className="text-[#4479A1]" />
    },
    {
      title: 'Basic JavaScript Programming',
      issuer: 'Dicoding Indonesia',
      period: 'Completed',
      icon: <SiJavascript className="text-[#F7DF1E]" />
    }
  ];

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse-slow-reverse" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Section divider — wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Row 1: Profile Photo & Description Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mb-16">
          {/* Photo Section */}
          <div className="relative w-full lg:w-5/12 max-w-lg mx-auto lg:mx-0 z-10 group">
            <div className="relative aspect-square rounded-2xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] shadow-2xl shadow-violet-500/10">
              <img
                src="/assets/hero/radifhima.JPG"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>

            {/* Decorative borders */}
            <div className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-2 border-violet-500/20 rounded-2xl transition-all duration-700 group-hover:border-violet-500/40 group-hover:-translate-y-1 group-hover:-translate-x-1" />
            <div className="absolute -bottom-4 -right-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-2 border-fuchsia-500/20 rounded-2xl transition-all duration-700 group-hover:border-fuchsia-500/40 group-hover:translate-y-1 group-hover:translate-x-1" />

            {/* Stats Cards */}
            <div className="hidden lg:block absolute -right-10 top-1/4 z-20 bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 transform translate-y-12 shadow-lg shadow-violet-500/10 transition-all duration-500 group-hover:shadow-violet-500/20 group-hover:-translate-x-2">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
              <p className="text-sm text-gray-400 mb-1">Experience</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                2+ Years
              </p>
            </div>

            <div className="hidden lg:block absolute -left-10 bottom-1/4 z-20 bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 transform -translate-y-12 shadow-lg shadow-fuchsia-500/10 transition-all duration-500 group-hover:shadow-fuchsia-500/20 group-hover:translate-x-2">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full"></div>
              <p className="text-sm text-gray-400 mb-1">Projects</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                10+ Done
              </p>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden flex justify-center gap-6 mt-6">
              <div className="bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg shadow-violet-500/10">
                <p className="text-sm text-gray-400 mb-1">Experience</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">2+ Years</p>
              </div>
              <div className="bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg shadow-fuchsia-500/10">
                <p className="text-sm text-gray-400 mb-1">Projects</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">10+ Done</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
            <div className="relative mb-10">
              <h2 className="text-5xl font-black relative z-10">
                About
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Me</span>
              </h2>
              <div className="absolute -bottom-3 left-0 h-1 w-24 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"></div>
              <div className="absolute -bottom-3 left-24 h-1 w-36 bg-white/10 rounded-full"></div>
            </div>

            {/* About Text */}
            <div className="space-y-5 text-gray-300">
              <p className="text-lg leading-relaxed pl-4 border-l-2 border-violet-500/30">
                I am a results-driven Software Engineer and an Information Technology graduate from Telkom University Surabaya (GPA: 3.83). With certified cloud expertise (AWS & Alibaba Cloud), I specialize in architecting scalable backend systems, automating complex business workflows (RPA with UiPath), and deploying reliable cloud infrastructures for enterprise applications. I am actively open to both full-time engineering roles and freelance software development contracts.
              </p>
              <p className="text-lg leading-relaxed pl-4 border-l-2 border-fuchsia-500/30">
                My track record includes developing mission-critical Manufacturing Execution Systems (MES) at PT Amora Walet Indonesia, engineering warehouse inventory systems (TSI Inventory) at PT Multi Spunindo Jaya Tbk, and building AI computer vision systems at PT Pelindo Marine Service. I bring a comprehensive understanding of the entire software development lifecycle (SDLC), focusing on writing clean code, optimizing performance, and automating deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Row 2: Tabs & Tab Content (Full Width) */}
        <div className="w-full z-10 relative">
          {/* Tabs Navigation (Centered) */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10 w-fit backdrop-blur-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content (Full Width) */}
          <div className="min-h-[280px]">
            {/* Skills Tab (4 Columns on Desktop) */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
                {skillCategories.map((category) => (
                  <div key={category.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent inline-flex items-center gap-2 uppercase tracking-wider">
                        {category.title}
                      </h3>
                      <div className="flex flex-col gap-3">
                        {category.skills.map((skill) => {
                          const levelColors = {
                            Advanced: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                            Intermediate: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
                            Familiar: 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                          };
                          const colorClass = levelColors[skill.level] || 'bg-white/5 text-gray-300 border-white/10';
                          return (
                            <div
                              key={skill.name}
                              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.06] group"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-lg group-hover:scale-110 transition-transform duration-300 flex items-center">{skill.icon}</span>
                                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                              </div>
                              <span className={`px-2 py-0.5 text-[9px] font-bold border rounded-md ${colorClass}`}>
                                {skill.level}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-violet-500/30">
                    <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30" />
                    <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-300 shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                        <span className="text-xs text-violet-400 font-mono mt-1 sm:mt-0 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">{exp.period}</span>
                      </div>
                      <p className="text-sm text-fuchsia-300/80 font-semibold mb-3">{exp.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs bg-white/5 text-gray-300 rounded-md border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="max-w-2xl mx-auto animate-fadeIn">
                {education.map((edu, index) => (
                  <div key={index} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 text-3xl flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                          <span className="text-xs text-violet-400 font-mono bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">{edu.period}</span>
                        </div>
                        <p className="text-sm text-fuchsia-300/80 font-medium mb-3">{edu.degree}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-3">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">{edu.gpa}</span>
                        </div>
                        {edu.courses && (
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">Relevant Courses</p>
                            <p className="text-sm text-gray-400 leading-relaxed">{edu.courses}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fadeIn">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-300 backdrop-blur-sm shadow-xl flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-2xl flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                      <p className="text-xs text-fuchsia-300/80 font-semibold mb-1">{cert.issuer}</p>
                      <span className="text-[10px] text-violet-400 font-mono bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">{cert.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center pt-16">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <span className="relative z-10">Let's Connect</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black z-10"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.2; transform: scale(1.05); }
          50% { opacity: 0.1; transform: scale(1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        .animate-pulse-slow-reverse { animation: pulse-slow-reverse 8s infinite ease-in-out; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }

        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }

        @media (max-width: 1024px) {
          #about { padding: 6rem 2rem; }
        }
      `}</style>
    </section>
  );
};

export default About;