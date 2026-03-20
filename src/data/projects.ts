export interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  technologies: string[];
  image: string;
  color: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "FutureHive Platform",
    category: "Web Application",
    desc: "Full Stack Web Platform for university students to explore projects, research ideas, and collaborate with AI-powered assistance.",
    technologies: ["React", "Node.js", "MongoDB", "AI Integration"],
    image: "/project_images/futureHive.png",
    color: "from-blue-500/20 to-cyan-600/20"
  },
  {
    id: "02",
    title: "Ice Cream Shop UI",
    category: "Design",
    desc: "A modern and delightful user interface for an ice cream shop, focusing on visual appeal and smooth user experience.",
    technologies: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    image: "/project_images/icecreamshop.png",
    color: "from-blue-500/20 to-cyan-600/20"
  },
  {
    id: "03",
    title: "Fast Food Website",
    category: "Web",
    desc: "A highly responsive fast-food ordering website with dynamic animations and seamless navigation.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    image: "/project3.jpg",
    color: "from-red-500/20 to-orange-600/20"
  },
  {
    id: "04",
    title: "Fitness Tracker App",
    category: "Mobile",
    desc: "A comprehensive fitness tracking mobile application to monitor workouts, diet, and health metrics.",
    technologies: ["React Native", "Firebase", "Expo", "Redux"],
    image: "/project4.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
  {
    id: "05",
    title: "AI Portfolio Assistant",
    category: "AI",
    desc: "An intelligent portfolio assistant capable of answering questions about my work and providing personalized recommendations.",
    technologies: ["OpenAI API", "LangChain", "Next.js", "Vector DB"],
    image: "/project5.jpg",
    color: "from-fuchsia-500/20 to-pink-600/20"
  }
];
