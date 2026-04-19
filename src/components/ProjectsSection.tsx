"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";


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
    <div className="perspective-1000 w-[300px] md:w-[400px] h-[450px] md:h-[500px]">
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
              ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-cyan-500/30"
              : "bg-gradient-to-b from-blue-600/20 via-[#0D0D0D] to-[#101010] border-blue-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-black/40"
            }`}
        >

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4 md:mb-6">
              <span className={`text-4xl md:text-5xl font-bold leading-none transition-colors ${isLight ? "text-black group-hover:text-cyan-600" : "text-white group-hover:text-cyan-400"
                }`}>
                {project.id}
              </span>
              <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isLight ? "text-cyan-600/60" : "text-cyan-400/80"
                }`}>
                {project.category}
              </div>
            </div>

            {/* Title & Info */}
            <div className="mb-4 md:mb-6">
              <h3 className={`text-xl md:text-2xl font-bold mb-3 leading-tight transition-colors ${isLight ? "text-gray-900 group-hover:text-cyan-600" : "text-white group-hover:text-cyan-400"
                }`}>
                {project.title}
              </h3>

              <div className="space-y-2">
                <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isLight ? "text-gray-400" : "text-gray-500"
                  }`}>
                  Technologies used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[9px] md:text-[10px] px-2 py-1 rounded-full border ${isLight
                        ? "bg-black/5 border-black/5 text-gray-700"
                        : "bg-white/5 border-white/10 text-gray-400"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`text-[9px] md:text-[10px] px-2 py-1 rounded-full border ${isLight ? "bg-black/5 border-black/5 text-gray-700" : "bg-white/5 border-white/10 text-gray-400"}`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Flip Button */}
            <button
              onClick={handleFlip}
              className={`mt-2 inline-flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all ${isLight ? "text-cyan-600 hover:text-cyan-800" : "text-cyan-400 hover:text-cyan-300"
                }`}
            >
              Learn More
            </button>

            {/* Project Image & Action Buttons */}
            <div className="relative mt-auto w-full h-[140px] md:h-[180px] rounded-[24px] overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-cyan-500/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 shadow-xl transition-all duration-300 transform hover:scale-110 group/link"
                  onClick={(e) => e.stopPropagation()}
                  title="View Source on GitHub"
                >
                  <Github size={24} className="group-hover/link:scale-110 transition-transform" />
                </a>
                <div className="w-14 h-14 rounded-full bg-cyan-600/80 hover:bg-cyan-600 flex items-center justify-center text-white border border-cyan-400/30 shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.Livelink, "_blank");
                  }}
                  title="View Live Demo"
                >
                  <ExternalLink size={24} />
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
              : "bg-gradient-to-b from-blue-600/20 via-[#0D0D0D] to-[#101010] border-blue-500/30 shadow-xl shadow-black/20"
            }`}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-cyan-600/5 blur-[80px] pointer-events-none" />

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
                  : "bg-cyan-600 text-white hover:bg-cyan-700 shadow-[0_5px_20px_rgba(59,130,246,0.3)]"
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

export default function ProjectsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full pt-4 md:pt-8 pb-10 md:pb-16 overflow-hidden transition-colors duration-500`}>
      {/* Dynamic Background Glow & Particles */}
      <ProjectBackground />


      {/* Title Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-0 mb-8 md:mb-10 flex flex-col items-center justify-center">
        {/* Project background hexagons removed - now handled by global Background.tsx */}

        <div className="flex flex-row items-center justify-center gap-5 md:gap-10 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <AnimatedGithubLogo
              size={isLight ? 70 : 85}
              duration={8}
              glowColor={isLight ? "rgba(6,182,212,0.4)" : "rgba(6,182,212,0.7)"}
              className={`relative opacity-100 ${isLight ? "text-cyan-700" : "text-cyan-400"}`}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none ${isLight ? "text-gray-900" : "text-white"
              }`}
          >
            My <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-cyan-600 to-blue-800" : "from-cyan-400 to-blue-600"
              }`}>Projects</span>
          </motion.h2>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative z-10 w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={2}
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
