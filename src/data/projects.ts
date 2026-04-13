export interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  technologies: string[];
  image: string;
  color: string;
  github?: string;
  Livelink: string
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "FutureHive Platform",
    category: "Web Application",
    desc: "Full Stack Web Platform for university students to explore projects, research ideas, and collaborate with AI-powered assistance.",
    technologies: ["React", "Node.js", "MongoDB", "AI Integration"],
    image: "/project_images/futureHive.png",
    color: "from-blue-500/20 to-cyan-600/20",
    github: "https://github.com/yourusername/futurehive",
    Livelink: ""
  },
  {
    id: "02",
    title: "Ice Cream Shop UI",
    category: "Design",
    desc: "A modern and delightful user interface for an ice cream shop, focusing on visual appeal and smooth user experience.",
    technologies: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    image: "/project_images/icecreamshop.png",
    color: "from-blue-500/20 to-cyan-600/20",
    github: "https://github.com/yourusername/ice-cream-ui",
    Livelink: ""
  },
  {
    id: "03",
    title: "Saree Shop Landing Page",
    category: "Web",
    desc: "A modern and responsive saree shop landing page designed to showcase elegant collections with smooth animations and an engaging user experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/project_images/Sareeshop.png",
    color: "from-cyan-500/20 to-blue-600/20",
    github: "https://github.com/yourusername/saree-shop",
    Livelink: "https://saree-shop-landingpage.vercel.app"
  },

  {
    id: "04",
    title: "Saree Bazar",
    category: "E-commerce Web Application",
    desc: "Interactive saree shopping platform with virtual try-on (IDM-VTON) and smooth scroll-based animations to enhance user experience and satisfaction.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "IDM-VTON"],
    image: "/project_images/sareeBazar.png",
    color: "from-pink-500/20 to-rose-600/20",
    github: "https://github.com/yourusername/sareebazar",
    Livelink: ""
  },
  {
    id: "05",
    title: "Memora",
    category: "Mobile Application",
    desc: "Memory mapping mobile app that allows users to save trips on a map, store media in the cloud, share memories, follow users, chat, and manage private memories.",
    technologies: ["React Native", "Expo Go", "Tailwind CSS", "Firebase", "OpenStreetMap"],
    image: "/project_images/memora.png",
    color: "from-green-500/20 to-emerald-600/20",
    github: "https://github.com/yourusername/memora",
    Livelink: ""
  },  {
    id: "06",
    title: "InternQuest",
    category: "Web Application",
    desc: "Web-based platform that helps students find internships based on their skills and interests with an interactive UI and smooth animations.",
    technologies: ["React", "Node.js", "Express.js", "GSAP"],
    image: "/project_images/internquest.png",
    color: "from-purple-500/20 to-indigo-600/20",
    github: "https://github.com/yourusername/internquest",
    Livelink: ""
  },
  {
    id: "07",
    title: "MyAssistant",
    category: "AI Web Application",
    desc: "RAG-based personal assistant that answers queries about the user using a local LLM (LLaMA 3 via Ollama) with intelligent and context-aware responses.",
    technologies: ["React", "FastAPI", "LangChain", "Ollama", "LLaMA 3"],
    image: "/project_images/myassistant.png",
    color: "from-orange-500/20 to-amber-600/20",
    github: "https://github.com/yourusername/myassistant",
    Livelink: ""
  }, 
  {
    id: "08",
    title: "InternQuest (V2)",
    category: "Web Application",
    desc: "Web-based platform that helps students find internships based on their skills and interests with an interactive UI and smooth animations.",
    technologies: ["React", "Node.js", "Express.js", "GSAP"],
    image: "/project_images/internquest.png",
    color: "from-purple-500/20 to-indigo-600/20",
    github: "https://github.com/yourusername/internquest",
    Livelink: ""
  }

];
