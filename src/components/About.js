import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'Laravel', level: 90, icon: '🔴' },
    { name: 'PHP', level: 85, icon: '🐘' },
    { name: 'MySQL', level: 85, icon: '🗄️' },
    { name: 'React.js', level: 75, icon: '⚛️' },
    { name: 'JavaScript', level: 80, icon: '🟨' },
    { name: 'REST API', level: 88, icon: '🔗' },
    { name: 'Python / Flask', level: 70, icon: '🐍' },
    { name: 'HTML & CSS', level: 90, icon: '🎨' },
  ];

  const experiences = [
    {
      company: 'PT Pelindo Marine Service',
      role: 'Web Developer Intern',
      period: '2024',
      desc: 'Developed CRUD APIs, integrated payment systems, and optimized dashboard applications.',
      tags: ['Laravel', 'MySQL', 'REST API'],
    },
    {
      company: 'Involuntir',
      role: 'Fullstack Developer Intern',
      period: '2024',
      desc: 'Built fullstack features, optimized backend systems, and collaborated with cross-functional teams.',
      tags: ['Laravel', 'React', 'MySQL'],
    },
  ];

  const education = [
    {
      school: 'Telkom University',
      degree: 'S1 Information Technology',
      period: '2021 - 2025',
      gpa: 'GPA: 3.83 / 4.00',
      icon: '🎓',
    },
  ];

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
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
        <div className="flex flex-col lg:flex-row items-start gap-16">
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
                1 Year
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
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">1 Year</p>
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
            <div className="space-y-5 text-gray-300 mb-10">
              <p className="text-lg leading-relaxed pl-4 border-l-2 border-violet-500/30">
                I am a final-year Information Technology student at Telkom University with a GPA of 3.83. I specialize in backend and fullstack web development using technologies like Laravel, MySQL, and React.js.
              </p>
              <p className="text-lg leading-relaxed pl-4 border-l-2 border-fuchsia-500/30">
                I have completed internships at PT Pelindo Marine Service and Involuntir, where I developed CRUD APIs, integrated payment systems, and optimized dashboard applications.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 p-1 bg-white/5 rounded-xl w-fit border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[280px]">
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                  {skills.map((skill) => (
                    <div key={skill.name} className="group p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.06]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-violet-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6 animate-fadeIn">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-violet-500/30">
                      <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30" />
                      <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                          <span className="text-xs text-violet-400 font-mono mt-1 sm:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-sm text-fuchsia-300/80 font-medium mb-2">{exp.role}</p>
                        <p className="text-sm text-gray-400 mb-3">{exp.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-md border border-violet-500/20">
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
                <div className="space-y-6 animate-fadeIn">
                  {education.map((edu, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 text-2xl flex-shrink-0">
                          {edu.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{edu.school}</h4>
                          <p className="text-sm text-fuchsia-300/80 font-medium mb-1">{edu.degree}</p>
                          <p className="text-xs text-violet-400 font-mono mb-2">{edu.period}</p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span className="text-sm text-emerald-300 font-medium">{edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub Activity Widget removed from here */}

            {/* CTA Button */}
            <div className="pt-8">
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