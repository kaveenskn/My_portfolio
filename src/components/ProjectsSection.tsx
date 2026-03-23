"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";


// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Project, PROJECTS_DATA } from "@/data/projects";
import ProjectBackground, { AnimatedGithubLogo } from "./ProjectBackground";


const ProjectCard = ({ project }: { project: Project }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-[300px] md:w-[400px] h-[500px] md:h-[600px]">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-full h-full preserve-3d cursor-default"
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 backface-hidden rounded-[40px] border overflow-hidden group transition-all duration-500 ${isFlipped ? "pointer-events-none" : "pointer-events-auto"
            } ${isLight
              ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-purple-500/30"
              : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-black/40"
            }`}
        >

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <span className={`text-4xl md:text-6xl font-bold leading-none transition-colors ${isLight ? "text-black group-hover:text-purple-600" : "text-white group-hover:text-purple-400"
                }`}>
                {project.id}
              </span>
              <div className={`text-xs md:text-sm font-bold uppercase tracking-widest ${isLight ? "text-purple-600/60" : "text-purple-400/80"
                }`}>
                {project.category}
              </div>
            </div>

            {/* Title & Info */}
            <div className="mb-6 md:mb-8">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight transition-colors ${isLight ? "text-gray-900 group-hover:text-purple-600" : "text-white group-hover:text-purple-400"
                }`}>
                {project.title}
              </h3>

              <div className="space-y-3">
                <p className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${isLight ? "text-gray-400" : "text-gray-500"
                  }`}>
                  Technologies used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[10px] md:text-xs px-3 py-1 rounded-full border ${isLight
                        ? "bg-black/5 border-black/5 text-gray-700"
                        : "bg-white/5 border-white/10 text-gray-400"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Flip Button */}
            <button
              onClick={handleFlip}
              className={`mt-4 inline-flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all ${isLight ? "text-purple-600 hover:text-purple-800" : "text-purple-400 hover:text-purple-300"
                }`}
            >
              Learn More <Sparkles size={14} className="animate-pulse" />
            </button>

            {/* Project Image */}
            <div className="relative mt-auto w-full h-[180px] md:h-[220px] rounded-[24px] overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-purple-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-black/20">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 backface-hidden rounded-[40px] border overflow-hidden p-8 md:p-12 flex flex-col [transform:rotateY(180deg)] ${isFlipped ? "pointer-events-auto z-20" : "pointer-events-none z-0"
            } ${isLight
              ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
              : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20"
            }`}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-purple-600/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className={`text-xl md:text-2xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                Description
              </h3>
              <button
                onClick={handleFlip}
                className={`p-2 rounded-full border transition-all ${isLight
                  ? "bg-black/5 border-black/10 text-gray-600 hover:bg-black/10"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
              >
                <motion.div whileHover={{ rotate: 90 }}>
                  <ExternalLink size={18} className="rotate-45" />
                </motion.div>
              </button>
            </div>

            <p className={`text-sm md:text-base leading-relaxed font-medium mb-auto ${isLight ? "text-gray-600" : "text-gray-400"
              }`}>
              {project.desc}
            </p>

            <div className="mt-8 pt-8 border-t border-white/5">
              <button
                onClick={handleFlip}
                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${isLight
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_5px_20px_rgba(139,92,246,0.3)]"
                  }`}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Hexagon = ({ size, color, duration, delay, opacity, className }: {
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  className: string;
}) => (
  <motion.div
    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
    animate={{
      rotate: 360,
      scale: [0.9, 1.1, 0.9],
      opacity: [opacity * 0.5, opacity, opacity * 0.5]
    }}
    transition={{
      rotate: { duration, repeat: Infinity, ease: "linear" },
      scale: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut" },
      delay
    }}
    style={{ width: size, height: size }}
    className={`absolute pointer-events-none z-0 ${className}`}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

export default function ProjectsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full py-24 md:py-32 overflow-hidden transition-colors duration-500 ${isLight ? "bg-[#f8f9fa]" : "bg-[#050505]"
      }`}>
      {/* Dynamic Background Glow & Particles */}
      <ProjectBackground />


      {/* Title Header */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-5 mb-16 md:mb-24 flex flex-col items-center">

        {/* Corner Ambient Hexagons */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <Hexagon size={180} color={isLight ? "#9333ea" : "#a855f7"} duration={20} delay={0} opacity={0.15} className="top-24 left-4" />
          <Hexagon size={120} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={25} delay={2} opacity={0.25} className="top-40 left-32" />

          <Hexagon size={200} color={isLight ? "#6d28d9" : "#7c3aed"} duration={22} delay={1} opacity={0.25} className="top-20 right-4" />
          <Hexagon size={140} color={isLight ? "#9333ea" : "#a855f7"} duration={28} delay={3} opacity={0.25} className="top-48 right-32" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <div className="scale-75 md:scale-100">
            <AnimatedGithubLogo
              size={120}
              duration={8}
              glowColor={isLight ? "rgba(168,85,247,0.5)" : "rgba(168,85,247,0.8)"}
              className={`relative opacity-100 ${isLight ? "text-purple-700" : "text-purple-400"}`}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-tighter leading-tight ${isLight ? "text-gray-900" : "text-white"
            }`}
        >
          My <span className={`text-transparent bg-clip-text bg-gradient-to-r block md:inline pr-2 py-2 ${isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
            }`}>Projects</span>
        </motion.h2>
      </div>

      {/* Slider Container */}
      <div className="relative z-10 w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          grabCursor={true}
          className="w-full !overflow-visible"
        >
          {PROJECTS_DATA.map((project) => (
            <SwiperSlide key={project.id} className="py-10">
              <div className="flex justify-center">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
