// types-and-data.ts
export type Step = {
  id: number;
  title: string;
  image: string;
  isMore?: boolean;
};



// Career steps (for your roadmap / blueprint)
export const careerSteps: Step[] = [
  { id: 1, title: "LinkedIn & Resume Mastery", image: "/images/resume.svg" },
  { id: 2, title: "Interview Prep & Mock Drills", image: "/images/interviewprep.svg" },
  { id: 3, title: "Project & Scheduling Support", image: "/images/project.svg" },
  { id: 4, title: "Guaranteed Job Interviews", image: "/images/interview.svg" },
];



// dataScienceProjects.ts
export type ProjectStep = {
  id: number;
  title: string;
  image?: string;
  isMore?: boolean; // for the 4th card
  miniProjectsCount?: number; // just a number to display on 4th card
};

export const dataScienceProjects: ProjectStep[] = [
  {
    id: 1,
    title: 'Sales Data Analysis',
    image: '/images/eccomerce.svg',
  },
  {
    id: 2,
    title: 'Customer Segmentation',
    image: '/images/finance.svg',
  },
  {
    id: 3,
    title: 'Predictive Analytics Model',
    image: '/images/health.svg',
  },
  {
    id: 4,
    title: 'Mini Projects',
    isMore: true,
    miniProjectsCount: 15,
     image: '/images/many.svg'
  },
];


import { Benefit } from "@/components/ui/Bonuses";

export const myBenefits: Benefit[] = [
  { 
    id: 1, 
    title: "Soft Skills & Communication", 
    description: "Enhance your professional communication and interpersonal skills.", 
    image: "/images/softskills.svg" 
  },
  { 
    id: 2, 
    title: "AI Tools Mastery", 
    description: "Learn and apply cutting-edge AI tools in real-world projects.", 
    image: "/images/aitools.svg" 
  },
  { 
    id: 3, 
    title: "1:1 Mentorship", 
    description: "Get personalized guidance from industry experts.", 
    image: "/images/interview.svg" 
  },
  { 
    id: 4, 
    title: "Portfolio & GitHub Branding", 
    description: "Build a strong portfolio and GitHub profile to impress employers.", 
    image: "/images/profileb.svg" 
  },
  { 
    id: 5, 
    title: "Free Job Portal Access", 
    description: "Exclusive access to job listings and internships for career growth.", 
    image: "/images/finance.svg" 
  },
  { 
    id: 6, 
    title: "Community Support", 
    description: "Collaborate, network, and learn with our active community.", 
    image: "/images/community.svg" 
  },
];

export const extraBenefits: Benefit[] = [
  { 
    id: 7, 
    title: "Resume Review", 
    description: "Get professional feedback to make your resume stand out.", 
    image: "/images/resume.svg" 
  },
  { 
    id: 8, 
    title: "Interview Prep", 
    description: "Practice and polish your interview skills with expert tips.", 
    image: "/images/interviewprep.svg" 
  },
];


import { Users, Building2, BookOpen, Wrench, Award, Briefcase } from 'lucide-react';
import { Feature } from "@/components/ui/WhyChooseUs";

export const myFeatures: Feature[] = [
  { icon: Users, title: 'Expert Trainers', gradient: 'from-trust-blue to-blue-600' },
  { icon: Building2, title: '1-on-1 Mentorship', gradient: 'from-success-green to-green-600' },
  { icon: BookOpen, title: 'Industry-Relevant Curriculum', gradient: 'from-primary-orange to-orange-600' },
  { icon: Wrench, title: 'Hands-on Projects', gradient: 'from-purple-500 to-purple-700' },
  { icon: Award, title: 'Community Support',  gradient: 'from-pink-500 to-pink-700' },
  { icon: Briefcase, title: 'Freelancing Guidance', gradient: 'from-indigo-500 to-indigo-700' },
];