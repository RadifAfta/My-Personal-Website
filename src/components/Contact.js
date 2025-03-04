import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      {/* Background Elements - Sama dengan section sebelumnya */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>

      {/* Buffer untuk transisi mulus dari section sebelumnya */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black z-10" style={{ marginTop: "-1px" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title dengan styling yang konsisten */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-center">
            Get In
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg text-center max-w-2xl mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="relative p-8 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full"></div>
            <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-violet-500 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-fuchsia-500 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-fuchsia-500 to-transparent rounded-full"></div>

            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-white placeholder-gray-500 outline-none"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-white placeholder-gray-500 outline-none" 
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-white placeholder-gray-500 outline-none" 
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-white placeholder-gray-500 outline-none resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="group w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-[1.02] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Contact Information</h3>
              
              {/* Contact details with icons */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black/50 p-3 rounded-lg border border-violet-500/20">
                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:hello@yourname.com" className="text-white hover:text-violet-400 transition-colors">radifam06@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black/50 p-3 rounded-lg border border-violet-500/20">
                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-violet-400 transition-colors">+6282245480975</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black/50 p-3 rounded-lg border border-violet-500/20">
                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Surabaya, Indonesian</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="p-8 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <a href="#" className="group p-3 bg-black/50 rounded-lg border border-white/10 transition-all duration-300 hover:border-violet-500/50 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="group p-3 bg-black/50 rounded-lg border border-white/10 transition-all duration-300 hover:border-violet-500/50 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>  
                
                {/* Instagram */}
                <a href="#" className="group p-3 bg-black/50 rounded-lg border border-white/10 transition-all duration-300 hover:border-violet-500/50 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;