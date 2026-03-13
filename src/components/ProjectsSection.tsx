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
      className={`relative flex-shrink-0 w-[320px] md:w-[450px] h-[550px] md:h-[650px] rounded-[40px] border overflow-hidden group transition-all duration-500 ${
        isLight 
        ? "bg-gradient-to-br from-white to-gray-50 border-black/5 shadow-2xl shadow-black/5 hover:border-purple-500/50" 
        : "bg-gradient-to-br from-[#0D0D0D] to-[#151515] border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
      }`}
    >
      {/* Dynamic Background Glows for Maximum Vibrancy */}
      {/* Bottom-Right Glow (Purple/Blue) */}
      <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-purple-600/40 blur-[120px] pointer-events-none opacity-80 group-hover:opacity-100 group-hover:bg-purple-600/50 transition-all duration-700" />
      <div className="absolute -bottom-12 -right-12 w-[250px] h-[250px] bg-blue-600/30 blur-[90px] pointer-events-none opacity-60 group-hover:opacity-80 transition-all duration-700" />
      
      {/* Top-Left Glow (Violet/Cyan) */}
      <div className="absolute -top-20 -left-20 w-[200px] h-[200px] bg-violet-600/10 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-40 transition-all duration-700" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <span className={`text-5xl md:text-7xl font-bold leading-none transition-colors ${
            isLight ? "text-black group-hover:text-purple-600" : "text-white group-hover:text-purple-400"
          }`}>
            {project.id}
          </span>
          <div className={`text-sm md:text-base font-bold uppercase tracking-widest ${
            isLight ? "text-purple-600/60" : "text-purple-400/80"
          }`}>
            {project.category}
          </div>
        </div>

        {/* Info Area */}
        <div className="mb-8 md:mb-12">
          <h3 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight max-w-[90%] transition-colors ${
            isLight ? "text-gray-900 group-hover:text-purple-600" : "text-white group-hover:text-purple-400"
          }`}>
            {project.title}
          </h3>
          
          <div className="space-y-2">
            <p className={`text-xs md:text-sm font-black uppercase tracking-widest ${
              isLight ? "text-gray-400" : "text-gray-500"
            }`}>
              Technologies used
            </p>
            <p className={`text-sm md:text-base font-medium leading-relaxed ${
              isLight ? "text-gray-600" : "text-gray-400"
            }`}>
              {project.desc}
            </p>
          </div>
        </div>

        {/* Project Image - Using object-contain and padding to show full image brightly */}
        <div className="relative mt-auto w-full h-[220px] md:h-[280px] rounded-[30px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 bg-white/[0.03] border border-white/5 group-hover:border-purple-500/20">
           <img 
             src={project.image} 
             alt={project.title}
             className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
             }}
           />
           
           {/* Link Icon Overlay */}
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                 <ExternalLink size={24} />
              </div>
           </div>
        </div>
      </div>
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
