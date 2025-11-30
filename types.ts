
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  role?: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  contact: {
    email: string;
    phone: string;
    location: string;
    socials: SocialLink[];
  };
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
