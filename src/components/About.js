import React from 'react';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      skills: [
        { name: 'Laravel', level: 'Advanced' },
        { name: 'PHP', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'REST API', level: 'Advanced' },
        { name: 'Go (Golang)', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frontend & Languages',
      skills: [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React.js', level: 'Intermediate' },
      ],
    },
    {
      title: 'Cloud & Database',
      skills: [
        { name: 'MySQL / PostgreSQL', level: 'Advanced' },
        { name: 'Alibaba & AWS Cloud', level: 'Intermediate' },
        { name: 'Docker', level: 'Familiar' },
      ],
    },
    {
      title: 'Specialized Tech',
      skills: [
        { name: 'UiPath (RPA)', level: 'Intermediate' },
        { name: 'YOLOv5 (AI)', level: 'Familiar' },
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
      courses: 'Web Programming, Cloud Computing, Computer Networks, Artificial Intelligence, Internet of Things',
    },
  ];

  const certifications = [
    { title: 'Alibaba Cloud Certification Associate', issuer: 'Alibaba Cloud' },
    { title: 'Cloud Computing Analyst Certification', issuer: 'BNSP - Inixindo' },
    { title: 'Alibaba Cloud Certified Developer', issuer: 'Alibaba Cloud' },
    { title: 'Cloud Practitioner Essentials (AWS)', issuer: 'AWS - Dicoding' },
    { title: 'Python Crash Course', issuer: 'Udemy' },
    { title: 'Basic SQL', issuer: 'Dicoding Indonesia' },
    { title: 'Basic JavaScript Programming', issuer: 'Dicoding Indonesia' }
  ];

  return (
    <>
      {/* CELL 3: BIO SUMMARY (Spans 6 columns) */}
      <div id="about" className="col-span-12 lg:col-span-6 border-r border-b border-neutral-900 bg-[#080809] p-8 md:p-10 flex flex-col justify-between group relative">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ ABOUT_ME // PROFILE"}
          </h2>
          <div className="space-y-6 text-sm md:text-base text-neutral-350 font-sans leading-relaxed">
            <p className="border-l-2 border-neutral-850 pl-4 hover:border-safety transition-mechanical">
              I am a results-driven Software Engineer and an Information Technology graduate from Telkom University Surabaya (GPA: 3.83). With certified cloud expertise (AWS & Alibaba Cloud), I specialize in architecting scalable backend systems, automating complex business workflows (RPA with UiPath), and deploying reliable cloud infrastructures for enterprise applications.
            </p>
            <p className="border-l-2 border-neutral-850 pl-4 hover:border-safety transition-mechanical">
              My track record includes developing mission-critical Manufacturing Execution Systems (MES) at PT Amora Walet Indonesia, engineering warehouse inventory systems (TSI Inventory) at PT Multi Spunindo Jaya Tbk, and building AI computer vision systems at PT Pelindo Marine Service. I bring a comprehensive understanding of the entire software development lifecycle (SDLC), focusing on writing clean code, optimizing performance, and automating deployments.
            </p>
          </div>
        </div>
        <div className="mt-8 font-mono text-[10px] text-neutral-600">
          {"✦ SECTION_02 // SYSTEM_OVERVIEW"}
        </div>
      </div>

      {/* CELL 4: TECHNICAL STACK MATRIX (Spans 6 columns) */}
      <div className="col-span-12 lg:col-span-6 border-r border-b border-neutral-900 bg-[#0A0A0B] p-8 md:p-10 flex flex-col justify-between group relative">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ TECHNICAL_STACK // SKILLS"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="font-mono">
                <h3 className="text-xs uppercase text-white font-bold mb-3 tracking-wider">
                  {"// " + category.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex justify-between items-center group/skill py-0.5 border-b border-neutral-900 hover:border-neutral-800">
                      <span className="group-hover/skill:text-white transition-mechanical">
                        [{skill.name}]
                      </span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest group-hover/skill:text-safety transition-mechanical">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 font-mono text-[10px] text-neutral-600">
          {"✦ SECTION_03 // SYSTEM_CAPABILITIES"}
        </div>
      </div>

      {/* CELL 5: WORK HISTORY TIMELINE (Spans 8 columns) */}
      <div className="col-span-12 lg:col-span-8 border-r border-b border-neutral-900 bg-[#080809] p-8 md:p-10 flex flex-col justify-between group relative">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ WORK_EXPERIENCE // HISTORY"}
          </h2>

          <div className="space-y-8 mt-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l border-neutral-800 hover:border-safety transition-mechanical pb-4 last:pb-0">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-neutral-900 border border-neutral-700 rounded-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    {exp.company}
                  </h4>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="font-mono text-xs text-safety mb-3 font-semibold">
                  &gt; {exp.role.toUpperCase()}
                </p>
                
                <p className="text-neutral-300 text-sm leading-relaxed mb-4 font-sans">
                  {exp.desc}
                </p>
                
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[10px]">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-neutral-500 hover:text-white transition-mechanical">
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 font-mono text-[10px] text-neutral-600">
          {"✦ SECTION_04 // PROFESSIONAL_HISTORY"}
        </div>
      </div>

      {/* CELL 6: CREDENTIALS & EDUCATION (Spans 4 columns) */}
      <div className="col-span-12 lg:col-span-4 border-r border-b border-neutral-900 bg-[#0A0A0B] p-8 md:p-10 flex flex-col justify-between group relative">
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-neutral-800 group-hover:border-safety transition-mechanical" />
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-safety rounded-sm" />
            {"✦ CREDENTIALS // EDUCATION & CERTIFICATIONS"}
          </h2>

          {/* Education Block */}
          <div className="mb-8 font-mono text-xs">
            <h3 className="text-xs uppercase text-white font-bold mb-3 tracking-wider">{"// EDUCATION"}</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="border border-neutral-900 bg-[#080809]/50 p-4 relative group/edu hover:border-neutral-800 transition-mechanical">
                <div className="absolute top-2 right-2 text-[10px] text-neutral-500 uppercase">
                  {edu.period}
                </div>
                <div className="font-bold text-white uppercase text-xs mb-1 pr-16 leading-tight">
                  {edu.school}
                </div>
                <div className="text-neutral-400 text-[11px] mb-2">
                  {edu.degree}
                </div>
                <div className="inline-block px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] text-safety uppercase tracking-wider font-bold mb-2">
                  {edu.gpa}
                </div>
                <div className="text-[10px] text-neutral-500 leading-normal border-t border-neutral-900 pt-2 mt-2">
                  <span className="text-neutral-400 block mb-1">COURSES:</span>
                  {edu.courses}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Block */}
          <div className="font-mono text-xs">
            <h3 className="text-xs uppercase text-white font-bold mb-3 tracking-wider">{"// CERTIFICATIONS"}</h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-800">
              {certifications.map((cert, index) => (
                <li key={index} className="p-2 border border-neutral-900 bg-[#080809]/30 hover:border-neutral-800 transition-mechanical flex justify-between items-center gap-3">
                  <div className="pr-2 leading-tight">
                    <p className="text-xs text-white uppercase font-semibold">{cert.title}</p>
                    <p className="text-[9px] text-neutral-500 uppercase mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-[9px] text-safety font-bold flex-shrink-0 uppercase">
                    [OK]
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 font-mono text-[10px] text-neutral-600">
          {"✦ SECTION_05 // SYSTEM_CREDENTIALS"}
        </div>
      </div>
    </>
  );
};

export default About;