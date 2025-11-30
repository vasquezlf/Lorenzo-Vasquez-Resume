
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Lorenzo Vasquez",
  title: "IT Professional | Help Desk Support & AI Workflows Generalist",
  bio: "I am an innovative IT Professional and Data Analyst bridging the gap between operational efficiency and cutting-edge AI. My expertise lies in orchestrating complex workflows using Power Automate, Power BI, and Advanced Excel, while pushing boundaries with LLM integration and AI video generation. Whether I'm developing full-stack web applications, managing enterprise projects, or providing critical IT support, I focus on building scalable, automated solutions that empower teams. I don't just manage data; I transform it into actionable intelligence.",
  skills: [
    "LLM Integration & Prompt Engineering",
    "AI Video Generation",
    "Power Automate & Workflow Automation",
    "Power BI & Data Visualization",
    "Advanced MS Excel (Pivot/VBA)",
    "Python & Scripting",
    "System Administration",
    "SQL & Database Management",
    "Web Development (React/Node.js)",
    "Project Management",
    "IT Support & Troubleshooting",
    "Scrum/Agile Methodologies",
    "Linux CLI & PowerShell",
    "SharePoint & Power Apps",
    "Cybersecurity Awareness",
    "API Integration"
  ],
  experience: [
    {
      id: "1",
      role: "Staff Services Analyst",
      company: "Department of State Hospitals, Napa",
      period: "01.2025 - Present",
      description: "Evaluating compliance with standards and regulations through data analysis. Leveraged Power Automate to achieve an 80% efficiency increase in business workflows. Created Power BI and SharePoint dashboards for consolidated data sharing. Acted as system administrator for SharePoint sites and maintained databases."
    },
    {
      id: "2",
      role: "IT Support",
      company: "The Generics Pharmacy",
      period: "10.2020 - 12.2024",
      description: "Installed and maintained POS systems and IT infrastructure. Developed IT governance policies to ensure data security. Provided real-time technical support via AnyDesk. Managed onboarding processes and vendor relationships, while implementing Agile methodologies."
    },
    {
      id: "3",
      role: "Quality Assurance / Associate Automation Engineer",
      company: "Workday, Inc.",
      period: "02.2016 - 11.2018",
      description: "Created and documented test cases for Financial suite integrations. Collaborated with developers to resolve bugs and enhanced testing efficiency by automating test cases using Java."
    }
  ],
  education: [
    {
      id: "ed-1",
      degree: "Full-Stack Developer Bootcamp",
      institution: "UC Berkeley Extension, San Francisco, CA",
      period: "2018",
      description: "6-month intensive web app development training using JavaScript frameworks (Mongo Db, Express, React, Node)."
    },
    {
      id: "ed-2",
      degree: "IT Support",
      institution: "YearUp, San Jose, CA",
      period: "2015 - 2016",
      description: "Non-profit vocational IT training program. Awards: Professional of the Week, Tech Ninja."
    },
    {
      id: "ed-3",
      degree: "Computer Science (24 units)",
      institution: "Chabot College, Hayward, CA",
      period: "2014 - 2017",
      description: "3.66 GPA | 77 units total."
    }
  ],
  projects: [
    {
      id: "p-1",
      name: "Licensing Intake Db (DSH Napa)",
      description: "A system using Microsoft Lists to store data and Power Automate to perform automated tasks for licensing intake."
    },
    {
      id: "p-2",
      name: "Directive Db (DSH Napa)",
      description: "A searchable database for AD’s and procedure manuals using keywords to improve information accessibility."
    },
    {
      id: "p-3",
      name: "TGP Timetracker (The Generics Pharmacy)",
      description: "Custom-made employee time-keeping system using store POS scanner, forms, and spreadsheets with advanced functions and pivot tables to automatically calculate payroll."
    }
  ],
  certifications: [
    {
      id: "c-1",
      name: "Google IT Support Professional Certificate",
      issuer: "Coursera",
      date: "Apr 08, 2024"
    },
    {
      id: "c-2",
      name: "Google Project Management Certificate",
      issuer: "Coursera",
      date: "Mar 29, 2024"
    },
    {
      id: "c-3",
      name: "Google Data Analytics Course",
      issuer: "Google",
      date: "2024"
    },
    {
      id: "c-4",
      name: "Data Classification and Summarization Using IBM Granite",
      issuer: "IBM SkillsBuild",
      date: "Oct 06, 2025"
    }
  ],
  contact: {
    email: "vasquez.lf@gmail.com",
    phone: "669 669-2570",
    location: "San Francisco Bay Area",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/lorenzovasquez", icon: "linkedin" }
    ]
  }
};

export const INITIAL_GREETING = `Hi, I'm ${RESUME_DATA.name} (AI Version). I'm an IT Professional and Data & AI Automation Specialist. Ask me anything about my background, projects, or how I can help your team!`;
