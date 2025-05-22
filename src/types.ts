export type PortfolioSection = 'about' | 'projects' | 'skills' | 'contact' | 'experience' | 'certifications';

export interface FileList extends Array<FileItem> {}

export interface FileItem {
  id: PortfolioSection;
  label: string;
  fileName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
} 