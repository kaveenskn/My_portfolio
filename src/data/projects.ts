export interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  color: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "Barbershop Website",
    category: "Web",
    desc: "HTML, CSS, JavaScript, GSAP, Swiper.js, Figma",
    image: "/project1.jpg",
    color: "from-purple-500/20 to-violet-600/20"
  },
  {
    id: "02",
    title: "Ice Cream Shop UI",
    category: "Design",
    desc: "Figma, Adobe XD, UI/UX, Prototyping",
    image: "/project_images/icecreamshop.png",
    color: "from-blue-500/20 to-cyan-600/20"
  },
  {
    id: "03",
    title: "Fast Food Website",
    category: "Web",
    desc: "Next.js, Tailwind CSS, Framer Motion, MongoDB",
    image: "/project3.jpg",
    color: "from-red-500/20 to-orange-600/20"
  },
  {
    id: "04",
    title: "Fitness Tracker App",
    category: "Mobile",
    desc: "React Native, Firebase, Expo, Redux",
    image: "/project4.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
  {
    id: "05",
    title: "AI Portfolio Assistant",
    category: "AI",
    desc: "OpenAI API, LangChain, Next.js, Vector Databases",
    image: "/project5.jpg",
    color: "from-fuchsia-500/20 to-pink-600/20"
  }
];
