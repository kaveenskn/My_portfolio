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

const ProjectCard = ({ project }: { project: Project }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative flex-shrink-0 w-[320px] md:w-[450px] h-[500px] md:h-[600px] rounded-[40px] backdrop-blur-xl border overflow-hidden group transition-all duration-500 ${
        isLight 
        ? "bg-white/80 border-black/5 shadow-2xl shadow-black/5 hover:border-purple-500/50" 
        : "bg-[#111111]/80 border-white/5 hover:border-purple-500/30"
      }`}
    >
      {/* Background Number */}
      <span className={`absolute top-8 left-8 text-8xl md:text-9xl font-black select-none transition-colors duration-500 ${
        isLight ? "text-black/[0.03] group-hover:text-purple-500/[0.08]" : "text-white/[0.03] group-hover:text-purple-500/[0.05]"
      }`}>
        {project.id}
      </span>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-auto">
          <span className={`text-4xl md:text-5xl font-black transition-colors uppercase italic ${
            isLight ? "text-black/10 group-hover:text-black/20" : "text-white/10 group-hover:text-white/20"
          }`}>
            {project.id}
          </span>
          <div className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest text-purple-400 group-hover:bg-purple-500/20 transition-all ${
            isLight ? "bg-black/5 border-black/5" : "bg-white/5 border-white/10"
          }`}>
            {project.category}
          </div>
        </div>

        {/* Info */}
        <div className="mb-8">
          <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors ${
            isLight ? "text-gray-900 group-hover:text-purple-600" : "text-white group-hover:text-purple-400"
          }`}>
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[80%]">
            {project.desc}
          </p>
        </div>

        {/* Project Image */}
        <div className={`relative w-full h-[200px] md:h-[280px] rounded-[30px] overflow-hidden border transition-all duration-500 ${
          isLight ? "border-black/5 bg-gray-100 group-hover:border-purple-500/20" : "border-white/5 bg-[#0a0a0a] group-hover:border-purple-500/20"
        }`}>
           {/* Placeholder Gradient */}
           <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity z-0`} />
           
           {/* Actual Image */}
           <img 
             src={project.image} 
             alt={project.title}
             className="absolute inset-0 w-full h-full object-contain z-10 p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
             }}
           />

           <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className={`font-mono text-xs uppercase tracking-[0.5em] ${isLight ? "text-black/10" : "text-white/10"}`}>Preview Asset</span>
           </div>
           
           {/* Link Icon Overlay */}
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                 <ExternalLink size={24} />
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
};

export default function ProjectsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
      isLight ? "bg-[#f8f9fa]" : "bg-[#050505]"
    }`}>
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[150px] -z-10 ${
        isLight ? "bg-purple-500/5" : "bg-purple-900/10"
      }`} />

      {/* Title Header */}
      <div className="max-w-[1440px] mx-auto px-6 mb-16 md:mb-24 flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-6 ${
             isLight ? "bg-black/5 border-black/5" : "bg-white/5 border-white/10"
           }`}
        >
          <Sparkles size={14} />
          Case Studies
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tighter leading-tight ${
             isLight ? "text-gray-900" : "text-white"
           }`}
        >
          I Make <span className={`text-transparent bg-clip-text bg-gradient-to-r block md:inline ${
            isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
          }`}>Incredible Projects</span>
        </motion.h2>
      </div>

      {/* Slider Container */}
      <div className="relative w-full">
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
