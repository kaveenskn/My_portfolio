"use client";

import { useTheme } from "./ThemeProvider";
import SkillBalls from "./SkillBalls";

export default function StudiesAndSkillsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full pt-4 md:pt-8 pb-10 md:pb-16 overflow-hidden transition-colors duration-500`}>
      
      {/* Title Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-0 mb-8 md:mb-10 flex flex-col items-center justify-center">
        <h2
          className={`gsap-reveal text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-none ${isLight ? "text-gray-900" : "text-white"}`}
        >
          Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">Skills</span>
        </h2>
      </div>

      {/* New Open Education Design */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:pl-24 md:pr-12 mb-24">
        <div
           className="w-full flex flex-col md:flex-row justify-between gap-12 md:gap-16"
        >
          <div className={`gsap-reveal-left flex-1 relative flex flex-col items-center text-center md:items-start md:text-left p-6 md:p-8 rounded-2xl md:rounded-[32px] border-t-[3px] md:border-t-0 md:border-l-[3px] border-[#a855f7]/50 hover:border-[#a855f7] transition-all duration-300 ${isLight ? "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : "bg-[#080808] shadow-[0_10px_30px_rgba(0,0,0,0.6)] shadow-[#a855f7]/10"}`}>
             <div className="absolute top-[-9.5px] left-1/2 -translate-x-1/2 md:left-[-9.5px] md:top-8 md:translate-x-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#a855f7] to-[#00e5ff] shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
             <div className={`text-xs font-black uppercase tracking-widest mb-3 ${isLight ? "text-purple-600" : "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]"}`}>Education</div>
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

          <div className={`gsap-reveal-right flex-1 relative flex flex-col items-center text-center md:items-start md:text-left p-6 md:p-8 rounded-2xl md:rounded-[32px] border-t-[3px] md:border-t-0 md:border-l-[3px] border-[#00e5ff]/50 hover:border-[#00e5ff] transition-all duration-300 mt-4 md:mt-0 ${isLight ? "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : "bg-[#080808] shadow-[0_10px_30px_rgba(0,0,0,0.6)] shadow-[#00e5ff]/10"}`}>
             <div className="absolute top-[-8.5px] left-1/2 -translate-x-1/2 md:left-[-8.5px] md:top-8 md:translate-x-0 w-3.5 h-3.5 rounded-full border-[3px] border-[#00e5ff] bg-transparent shadow-[0_0_10px_rgba(0,229,255,0.4)]" />
             <div className={`text-xs font-black uppercase tracking-widest mb-3 ${isLight ? "text-cyan-600" : "text-[#00e5ff]"}`}>Secondary Education</div>
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
        </div>
      </div>

      {/* SkillBalls — Interactive 3D Physics */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:pl-24 md:pr-12 mb-8">
        <div className="gsap-reveal">
          <SkillBalls />
        </div>
      </div>

    </section>
  );
}
