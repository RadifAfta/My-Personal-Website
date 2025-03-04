import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse-slow-reverse" />
        {/* Additional subtle background elements */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl animate-pulse-slow-delay" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-fuchsia-600/5 rounded-full blur-3xl animate-pulse-slow-delay-reverse" />
      </div>

      {/* Decorative grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Enhanced Photo Section */}
          <div className="relative w-full lg:w-1/2 aspect-square max-w-lg mb-10 lg:mb-0 z-10 group">
            {/* Main Image with enhanced container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] shadow-2xl shadow-violet-500/10">
              <img
                src="/assets/hero2.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Subtle shimmering effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>

            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-2 border-violet-500/20 rounded-2xl transition-all duration-700 group-hover:border-violet-500/40 group-hover:-translate-y-1 group-hover:-translate-x-1" />
            <div className="absolute -bottom-4 -right-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-2 border-fuchsia-500/20 rounded-2xl transition-all duration-700 group-hover:border-fuchsia-500/40 group-hover:translate-y-1 group-hover:translate-x-1" />

            {/* Enhanced Stats Cards */}
            <div className="hidden lg:block absolute -right-10 top-1/4 z-20 bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 transform translate-y-12 max-w-[90%] shadow-lg shadow-violet-500/10 transition-all duration-500 group-hover:shadow-violet-500/20 group-hover:-translate-x-2">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
              <p className="text-sm text-gray-400 mb-1">Experience</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                1 Year
              </p>
            </div>

            <div className="hidden lg:block absolute -left-10 bottom-1/4 z-20 bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 transform -translate-y-12 max-w-[90%] shadow-lg shadow-fuchsia-500/10 transition-all duration-500 group-hover:shadow-fuchsia-500/20 group-hover:translate-x-2">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full"></div>
              <p className="text-sm text-gray-400 mb-1">Projects</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                10+ Done
              </p>
            </div>

            {/* Enhanced Mobile Stats Cards */}
            <div className="lg:hidden flex justify-center gap-6 mt-6">
              <div className="bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg shadow-violet-500/10 transition-all duration-300 hover:shadow-violet-500/20 hover:-translate-y-1">
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
                <p className="text-sm text-gray-400 mb-1">Experience</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  1 Year
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg shadow-fuchsia-500/10 transition-all duration-300 hover:shadow-fuchsia-500/20 hover:-translate-y-1">
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full"></div>
                <p className="text-sm text-gray-400 mb-1">Projects</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  10+ Done
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative mb-10">
              <h2 className="text-5xl font-black relative z-10">
                About
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Me</span>
              </h2>
              {/* Subtle decoration for heading */}
              <div className="absolute -bottom-3 left-0 h-1 w-24 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"></div>
              <div className="absolute -bottom-3 left-24 h-1 w-36 bg-white/10 rounded-full"></div>
            </div>

            {/* Enhanced About Text with better typography */}
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed relative pl-4 border-l-2 border-violet-500/30">
                I am an Information Technology student at Telkom University with a strong passion for web development. I enjoy building innovative and functional digital solutions that enhance user experience.
              </p>

              <p className="text-lg leading-relaxed relative pl-4 border-l-2 border-fuchsia-500/30">
                I have hands-on experience in software engineering, having completed a six-month internship at PT Pelindo Marine Service. I am always eager to learn and adapt to the evolving technology landscape.
              </p>

              {/* Enhanced Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  'Web Development',
                  'UI/UX Design',
                  'Problem Solving',
                  'Clean Code'
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 group p-3 rounded-lg transition-all duration-300 hover:bg-white/5">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 group-hover:from-violet-600/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-300 text-lg font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-10">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black z-10"></div>

      {/* Custom animations and grid pattern */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.2; transform: scale(1.05); }
          50% { opacity: 0.1; transform: scale(1); }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.03); }
        }
        @keyframes pulse-slow-delay-reverse {
          0%, 100% { opacity: 0.15; transform: scale(1.03); }
          50% { opacity: 0.1; transform: scale(1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s infinite ease-in-out;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 10s infinite ease-in-out;
        }
        .animate-pulse-slow-delay-reverse {
          animation: pulse-slow-delay-reverse 10s infinite ease-in-out;
        }
        
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        @media (max-width: 1024px) {
          .hidden-mobile {
            display: none;
          }
          #about {
            padding: 6rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;