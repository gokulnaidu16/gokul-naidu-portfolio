export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  variant: "flagship" | "standard";
  featured?: boolean;
  projectUrl?: string;
  githubUrl?: string;
};

export type Interest = {
  title: string;
  description: string;
  icon: "sparkles" | "message" | "brain" | "eye" | "network";
  index: string;
};

export type SkillGroup = {
  name: string;
  description: string;
  skills: string[];
  emphasis?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  description: string;
  technologies: string[];
  period?: string;
};

export type Education = {
  degree: string;
  institution: string;
  affiliation?: string;
  location?: string;
  status?: string;
  cgpa?: number;
  period?: string;
};

export type SocialLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
};
