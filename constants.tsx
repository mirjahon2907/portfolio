
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Mirjahon Bobonazarov",
  title: "Python Backend Architect",
  bio: "Architecting resilient server-side systems with a focus on Pythonic elegance and AI integration. Expert in high-performance Telegram bots and scalable Django ecosystems.",
  contact: {
    email: "mirjahonbobonazarov5@gmail.com",
    location: "Tashkent, Uzbekistan",
    linkedin: "linkedin.com/in/mirjahon2907",
    github: "github.com/mirjahon2907"
  },
  experiences: [
    {
      id: "exp1",
      company: "Najot Talim",
      role: "Support Teacher & Technical Mentor",
      period: "June 2025 — Present",
      description: [
        "Teaching computer science foundations including C and Python programming.",
        "Guiding students through PyQt desktop application development and SQL database integration.",
        "Improving students' logical thinking and problem-solving through structured algorithms.",
        "Reviewing code for Django projects and ensuring adherence to REST API standards."
      ],
      skills: ["C", "Python", "PyQt", "SQL", "Logic Design"]
    },
    {
      id: "exp2",
      company: "Backend Solutions",
      role: "Junior Backend Engineer",
      period: "Early 2025 — Present",
      description: [
        "Developing AI-integrated Telegram bots using modern LLM APIs.",
        "Building RESTful architectures with Django and PostgreSQL.",
        "Managing version control and deployment pipelines via Git and GitHub.",
        "Optimizing relational database schemas for performance."
      ],
      skills: ["Django", "PostgreSQL", "MySQL", "Git", "AI Integration"]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "GigaChat Analog",
      description: "A localized AI interface designed for seamless interaction with heavy LLMs, featuring custom prompt buffering and session persistence.",
      tags: ["Python", "FastAPI", "AI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "p2",
      title: "Telegram AI Bot",
      description: "An automated assistant for business workflows, integrating multi-modal AI capabilities with a robust Python backend.",
      tags: ["Python", "Telegram API", "Git"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  skills: [
    { name: "Python / Django", level: 95, category: "Backend" },
    { name: "PostgreSQL / MySQL", level: 88, category: "Backend" },
    { name: "C Programming", level: 80, category: "Tools" },
    { name: "PyQt / Desktop", level: 85, category: "Tools" },
    { name: "REST API Design", level: 92, category: "Backend" },
    { name: "Git / GitHub", level: 90, category: "Tools" }
  ],
  education: [
    {
      school: "IT Park University",
      degree: "B.S. Software Engineering (Year 1/4)",
      period: "2025 — Present"
    },
    {
      school: "Najot Talim",
      degree: "Foundation & Backend Engineering",
      period: "Early 2025"
    }
  ]
};
