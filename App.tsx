import React from 'react';
import ChatInterface from './components/ChatInterface';
import { 
  AboutSection, 
  SkillsSection, 
  ExperienceSection, 
  EducationSection,
  ProjectsSection,
  CertificationsSection,
  ContactSection 
} from './components/ResumeSections';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-1 bg-slate-900 rounded-full">
               <img 
                 src="lorenzo-vasquez.jpg" 
                 onError={(e) => {
                   e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(RESUME_DATA.name)}&background=0f172a&color=38bdf8&size=128&bold=true`;
                 }}
                 alt={RESUME_DATA.name}
                 className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-900"
               />
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full z-20" title="AI Online"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
              {RESUME_DATA.name}
            </h1>
            <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-medium">
              {RESUME_DATA.title}
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-200/80">AI AGENT ACTIVE</span>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="mb-24">
          <ChatInterface />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-8 mb-8 opacity-50">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Professional Dossier</span>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
        </div>

        {/* Resume Content Sections */}
        <main className="space-y-24">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-500 py-12 border-t border-white/5 mt-20">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} {RESUME_DATA.name}</p>
          <p className="text-xs mt-2 opacity-60">Interactive Resume • Powered by Gemini AI</p>
        </footer>

      </div>
    </div>
  );
};

export default App;