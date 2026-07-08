import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "b5f1622e-cc8d-4758-b338-96de776b9949");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("TRANSACTION_STATUS: SUCCESS (Message sent)");
        event.target.reset();
      } else {
        setResult("TRANSACTION_STATUS: ERROR (" + data.message + ")");
      }
    } catch (error) {
      setResult("TRANSACTION_STATUS: SYSTEM_ERROR (Try again later)");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <>
      {/* CELL 7: CONTACT FORM (Spans 7 columns) */}
      <div id="contact" className="col-span-12 lg:col-span-7 border-r border-b border-neutral-900 bg-[#080809] p-8 md:p-10 group relative flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ CONTACT // GET_IN_TOUCH"}
          </h2>

          <form onSubmit={onSubmit} className="space-y-4 font-mono text-xs">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-neutral-400 uppercase tracking-wider">01 // Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="INPUT_NAME..."
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-neutral-900 focus:border-safety transition-mechanical text-white placeholder-neutral-700 outline-none rounded-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-neutral-400 uppercase tracking-wider">02 // Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="INPUT_EMAIL..."
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-neutral-900 focus:border-safety transition-mechanical text-white placeholder-neutral-700 outline-none rounded-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-neutral-400 uppercase tracking-wider">03 // Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="INPUT_SUBJECT..."
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-neutral-900 focus:border-safety transition-mechanical text-white placeholder-neutral-700 outline-none rounded-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-neutral-400 uppercase tracking-wider">04 // Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="INPUT_LOGS..."
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-neutral-900 focus:border-safety transition-mechanical text-white placeholder-neutral-700 outline-none resize-none rounded-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 border border-white bg-white text-black uppercase tracking-wider font-bold hover:bg-transparent hover:text-white transition-mechanical"
            >
              {isSubmitting ? '[Transmitting...]' : '[Send Message]'}
            </button>

            {result && (
              <div className={`p-3 font-mono text-[10px] uppercase border ${
                result.includes("SUCCESS") 
                  ? "bg-neutral-950 text-safety border-neutral-900" 
                  : "bg-neutral-950 text-red-500 border-red-900/50"
              }`}>
                {result}
              </div>
            )}
          </form>
        </div>
        <div className="mt-8 font-mono text-[10px] text-neutral-600">
          {"✦ SECTION_07 // CONTACT_GATEWAY"}
        </div>
      </div>

      {/* CELL 8: CONTACT DETAILS & SOCIALS (Spans 5 columns) */}
      <div className="col-span-12 lg:col-span-5 border-r border-b border-neutral-900 bg-[#0A0A0B] p-8 md:p-10 flex flex-col justify-between group relative">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ DIRECT_COMMS // INFORMATION"}
          </h2>

          <div className="space-y-6 font-mono text-xs">
            <div className="border-b border-neutral-900 pb-4">
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest">{"✦ EMAIL"}</span>
              <a href="mailto:radifam06@gmail.com" className="text-white hover:text-safety transition-mechanical">
                radifam06@gmail.com
              </a>
            </div>

            <div className="border-b border-neutral-900 pb-4">
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest">{"✦ PHONE"}</span>
              <a href="tel:+6282245480975" className="text-white hover:text-safety transition-mechanical">
                +6282245480975
              </a>
            </div>

            <div className="border-b border-neutral-900 pb-4">
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest">{"✦ LOCATION"}</span>
              <p className="text-white">
                Jember, East Java, Indonesia
              </p>
              <p className="text-[10px] text-neutral-500 uppercase mt-0.5">
                (Open to Remote / Relocation)
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-8 border-t border-neutral-900">
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-4">{"✦ INDEXED_NETWORKS"}</h3>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <a 
                href="https://github.com/RadifAfta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 border border-neutral-800 hover:border-safety text-neutral-400 hover:text-white transition-mechanical"
              >
                [GITHUB]
              </a>
              <a 
                href="https://www.linkedin.com/in/radifaftamaulana/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 border border-neutral-800 hover:border-safety text-neutral-400 hover:text-white transition-mechanical"
              >
                [LINKEDIN]
              </a>
              <a 
                href="https://www.instagram.com/radifaftamaulana/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 border border-neutral-800 hover:border-safety text-neutral-400 hover:text-white transition-mechanical"
              >
                [INSTAGRAM]
              </a>
            </div>
          </div>
          <div className="mt-8 font-mono text-[10px] text-neutral-600">
            {"✦ SECTION_08 // NODE_LOCATOR"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;