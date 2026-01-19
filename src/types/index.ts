export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  phone: string;
}
