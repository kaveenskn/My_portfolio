"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import SkillBalls from "./SkillBalls";

export default function StudiesAndSkillsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full pt-4 md:pt-8 pb-8 md:pb-12 overflow-hidden transition-colors duration-500`}>
      
      {/* Title Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mb-24 md:mb-28 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-none ${isLight ? "text-gray-900" : "text-white"}`}
        >
          Studies & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-cyan-600 to-blue-800" : "from-cyan-400 to-blue-600"}`}>Skills</span>
        </motion.h2>
      </div>

      {/* New Open Education Design */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:pl-24 md:pr-12 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full flex flex-col md:flex-row justify-between gap-12 md:gap-16"
        >
          <div className="flex-1 relative pl-8 border-l-[3px] border-cyan-500/30 hover:border-cyan-500 transition-colors duration-300">
             <div className="absolute left-[-9.5px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
             <div className={`text-xs font-black uppercase tracking-widest mb-3 ${isLight ? "text-cyan-600" : "text-cyan-400"}`}>Education</div>
             <h4 className={`text-2xl md:text-3xl font-black mb-2 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
               BSc Hons in Software Engineering
             </h4>
             <p className={`text-lg font-medium mb-2 ${isLight ? "text-gray-600" : "text-gray-400"}`}>
               Undergraduate • Final Year
             </p>
             <p className={`text-sm font-semibold uppercase tracking-widest ${isLight ? "text-gray-400" : "text-gray-500"}`}>
               Sabaragamuwa University of Sri Lanka
             </p>
          </div>

          <div className="flex-1 relative pl-8 border-l-[3px] border-cyan-500/20 hover:border-cyan-500/70 transition-colors duration-300">
             <div className="absolute left-[-8.5px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-cyan-500 bg-transparent" />
             <div className={`text-xs font-black uppercase tracking-widest mb-3 ${isLight ? "text-cyan-600" : "text-cyan-400"}`}>Secondary Education</div>
             <h4 className={`text-2xl md:text-3xl font-black mb-2 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
               G.C.E. Advanced Level
             </h4>
             <p className={`text-lg font-medium mb-2 ${isLight ? "text-gray-600" : "text-gray-400"}`}>
               Badulla Central College
             </p>
             <p className={`text-sm font-semibold uppercase tracking-widest ${isLight ? "text-gray-400" : "text-gray-500"}`}>
               Mathematics Stream
             </p>
          </div>
        </motion.div>
      </div>

      {/* SkillBalls — Interactive 3D Physics */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:pl-24 md:pr-12 mb-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <SkillBalls />
        </motion.div>
      </div>

    </section>
  );
}
