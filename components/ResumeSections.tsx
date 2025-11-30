import React from 'react';
import { RESUME_DATA } from '../constants';

export const AboutSection: React.FC = () => {
  return (
    <section className="scroll-mt-24" id="about">
      <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition group-hover:bg-cyan-500/20"></div>
        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">About Me</h2>
        <p className="text-slate-300 leading-8 text-lg relative z-10 font-light">
          {RESUME_DATA.bio}
        </p>
      </div>
    </section>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
        Technical Arsenal
      </h2>
      <div className="glass-card p-8 rounded-2xl">
        <div className="flex flex-wrap gap-3">
          {RESUME_DATA.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 text-slate-200 rounded-lg text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:-translate-y-0.5 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
         <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
         Professional Journey
      </h2>
      <div className="space-y-12 pl-4 md:pl-0 border-l-2 border-slate-800 md:border-none">
        {RESUME_DATA.experience.map((job, index) => (
          <div key={job.id} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start group">
            
            {/* Date - Left Side (Desktop) */}
            <div className={`hidden md:block text-right pt-1 ${index % 2 === 0 ? '' : 'md:col-start-3 md:text-left'}`}>
              <span className="inline-block px-3 py-1 bg-slate-800 rounded text-sm font-mono text-cyan-400 border border-slate-700">
                {job.period}
              </span>
            </div>

            {/* Timeline Line & Dot */}
            <div className="hidden md:flex flex-col items-center h-full">
              <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10 relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="w-0.5 h-full bg-slate-800 -mt-2"></div>
            </div>

            {/* Content Card */}
            <div className={`ml-6 md:ml-0 ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1 md:text-right'}`}>
              
              {/* Mobile Date */}
              <div className="md:hidden mb-2">
                 <span className="inline-block px-3 py-1 bg-slate-800 rounded text-xs font-mono text-cyan-400 border border-slate-700">
                  {job.period}
                </span>
              </div>

              <div className={`glass-card p-6 rounded-xl hover:border-slate-600 transition duration-300 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                <p className="text-purple-400 font-medium mb-3">{job.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
        Key Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.projects.map((project) => (
          <div key={project.id} className="glass-card p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">{project.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const EducationSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-green-500 rounded-full"></span>
        Education
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {RESUME_DATA.education.map((edu) => (
          <div key={edu.id} className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-6 md:items-center">
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
              <p className="text-green-400 font-medium">{edu.institution}</p>
              {edu.description && (
                <p className="text-slate-400 text-sm mt-2">{edu.description}</p>
              )}
            </div>
            <div className="shrink-0">
               <span className="px-4 py-1.5 bg-green-500/10 text-green-300 rounded-full text-xs font-bold border border-green-500/20">
                {edu.period}
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CertificationsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {RESUME_DATA.certifications.map((cert) => (
          <div key={cert.id} className="glass-card p-5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
               </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm line-clamp-1" title={cert.name}>{cert.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="relative rounded-2xl overflow-hidden p-10 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            I'm currently open to new opportunities in AI Automation, Data Analysis, and IT Project Management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              Email Me
            </a>
            <a
              href={RESUME_DATA.contact.socials[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all transform hover:-translate-y-1 shadow-lg border border-blue-400/30"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};