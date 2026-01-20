
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  contact: {
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
}
