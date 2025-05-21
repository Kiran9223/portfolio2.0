export type PortfolioSection = 'about' | 'projects' | 'skills' | 'contact' | 'experience';

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

export interface FileItem {
  id: PortfolioSection;
  label: string;
  fileName: string;
}

export type FileList = FileItem[]; 