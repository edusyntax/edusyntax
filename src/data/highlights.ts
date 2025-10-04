// highlights.ts
import { IconTextItem } from "../components/ui/IconTextCard";
import { GraduationCap, Users, Handshake, Medal } from "lucide-react";

export const highlights: IconTextItem[] = [
  { text: "Learn Till Get Placed", icon: GraduationCap },
  { text: "Micro Batches - Just 15 students!", icon: Users },
  { text: "Get Guaranteed Internships & Full-Time Jobs", icon: Handshake },
  { text: "16,000+ Success stories since 2014", icon: Medal },
];

export const dataScienceHighlights = [
  {
    id: 1,
    title: "AI & ML Projects",
    subtitle: "Hands-on projects in real business domains.",
    image: "/images/ai-ml-projects.svg",
  },
  {
    id: 2,
    title: "Data Visualization",
    subtitle: "Master PowerBI, Tableau, and Python dashboards.",
    image: "/images/data-visualization.svg",
  },
  {
    id: 3,
    title: "Model Deployment",
    subtitle: "Deploy models using AWS, Flask, and Streamlit.",
    image: "/images/model-deployment.svg",
  },
  {
    id: 4,
    title: "Career Mentorship",
    subtitle: "1:1 support from top data scientists.",
    image: "/images/data-mentorship.svg",
  },
];