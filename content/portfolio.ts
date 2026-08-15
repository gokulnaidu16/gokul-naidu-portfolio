import type { Education, Experience, Interest, Project, SkillGroup, SocialLinks } from "@/types/portfolio";

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const interests: Interest[] = [
  { index: "01", title: "Generative AI", description: "Exploring generative tools and systems for practical, helpful applications.", icon: "sparkles" },
  { index: "02", title: "Natural Language Processing", description: "Interested in language understanding, analysis, and conversational experiences.", icon: "message" },
  { index: "03", title: "Machine Learning", description: "Learning methods for building useful, data-informed applications.", icon: "brain" },
  { index: "04", title: "Computer Vision", description: "Exploring how visual signals can support intelligent software.", icon: "eye" },
  { index: "05", title: "Intelligent Systems", description: "Designing systems where intelligence supports clearer decisions and workflows.", icon: "network" },
];

export const projects: Project[] = [
  {
    id: "mock-interview",
    number: "01 / FLAGSHIP",
    title: "AI Based Mock Interview with Resume Building & Analyzing",
    category: "AI / Machine Learning / NLP",
    description: "An intelligent AI-powered system designed to help candidates prepare for interviews and improve their resumes through automated analysis, simulated interviews, and personalized feedback.",
    capabilities: ["AI-powered mock interviews", "Resume parsing and analysis", "ATS compatibility scoring", "Role-specific interview question generation", "Speech-to-text", "Speech analysis", "Facial-expression analysis", "Personalized feedback"],
    technologies: ["Python", "NLP", "Machine Learning", "Transformers", "BERT", "RoBERTa", "Speech Processing", "Computer Vision", "Generative AI"],
    variant: "flagship",
    featured: true,
    githubUrl: "https://github.com/gokulnaidu16/Ai-Based-Mock-Interview-Platform",
  },
  {
    id: "kutira-kushala",
    number: "02",
    title: "Kutira-Kushala",
    category: "AI / Intelligent Systems",
    description: "An intelligent digital platform designed to support self-employed individuals and cottage industries by helping them showcase products, manage business information, connect with buyers, and discover relevant opportunities.",
    capabilities: ["AI recommendations", "Intelligent product discovery", "Cottage-industry support", "Digital business profiles", "Product catalog", "Buyer connection", "Firebase integration"],
    technologies: ["AI Recommendations", "Intelligent Systems", "Firebase", "React"],
    variant: "standard",
    featured: true,
    githubUrl: "https://github.com/gokulnaidu16/Kutira-Kushala",
  },
  {
    id: "health-data",
    number: "03",
    title: "Health Data Information Management System",
    category: "Software / Data Management",
    description: "A practical information management system focused on organizing and managing healthcare-related information through a structured digital application.",
    capabilities: ["Structured information management", "Healthcare-focused workflow", "Digital organization", "Practical application design"],
    technologies: ["Data Management", "Software Development"],
    variant: "standard",
    featured: true,
  },
];

export const skillGroups: SkillGroup[] = [
  { name: "AI / Machine Learning", description: "Core areas of exploration and application.", emphasis: true, skills: ["Python", "Machine Learning", "NLP", "Generative AI", "Transformers", "BERT", "RoBERTa", "Computer Vision", "Speech Processing"] },
  { name: "AI Engineering / Development", description: "Building the systems around intelligent experiences.", skills: ["Python", "React", "Node.js", "Firebase", "Git", "GitHub"] },
  { name: "AI Tools", description: "Tools used to explore and prototype AI-assisted workflows.", skills: ["Google AI Studio", "Gemini"] },
];

export const experience: Experience[] = [
  {
    company: "MindMatrix / CL Infotech Pvt. Ltd.",
    role: "Android App Development using GenAI",
    description: "Experience applying Generative AI within application development, with a focus on building thoughtful, AI-assisted software experiences.",
    technologies: ["Kotlin", "Jetpack Compose", "Generative AI", "Google AI Studio", "Firebase", "MVVM", "AI-assisted development"],
  },
];

export const education: Education[] = [
  {
    degree: "B.E. in Information Science and Engineering",
    institution: "S.J.C. Institute of Technology",
    affiliation: "VTU",
    cgpa: 8.47,
  },
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/gokulnaidu16",
  linkedin: "https://www.linkedin.com/in/gokul-naidu-ma-199175244",
  email: "bunnynaidu640@gmail.com",
};

export const resumeAvailable = false;

