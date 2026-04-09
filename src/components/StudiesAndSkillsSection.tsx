"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, ShieldAlert } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function StudiesAndSkillsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative w-full py-16 md:py-24 overflow-hidden transition-colors duration-500 ${isLight ? "bg-[#f8f9fa]" : "bg-[#050505]"}`}>
      
      {/* Title Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-none ${isLight ? "text-gray-900" : "text-white"}`}
        >
          Studies & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"}`}>Skills</span>
        </motion.h2>
      </div>

      <div className="relative w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start px-6">
        
        {/* === Skills & Tools === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`w-full backdrop-blur-3xl border rounded-[60px] p-8 md:p-12 relative overflow-hidden transition-all duration-500 ${isLight
            ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            }`}
        >
          <h3 className={`text-base font-black mb-8 uppercase tracking-[0.25em] ${isLight ? "text-black/30" : "text-white/30"}`}>Technical Arsenal</h3>

          <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isLight ? "text-purple-600/70" : "text-purple-400/70"}`}>Frameworks & Libraries</p>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {[
              {
                name: "React",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
                  </svg>
                )
              },
              {
                name: "Next.js",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.93 14.5L9.5 8.5v7H8V7h1.5l6 8.5V7H17v9.5h-1.07z" />
                  </svg>
                )
              },
              {
                name: "Tailwind",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#38BDF8">
                    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.669 1.716 1.221C13.23 10.35 14.28 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.669-1.716-1.221C15.27 7.05 14.22 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.669 1.716 1.221C8.73 15.75 9.78 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.669-1.716-1.221C10.77 12.45 9.72 11.4 7.5 11.4z" />
                  </svg>
                )
              },
              {
                name: "Node.js",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#68A063">
                    <path d="M12 1.85L3.09 6.92v10.16L12 22.15l8.91-5.07V6.92L12 1.85zm0 2.3l6.91 3.93v7.84L12 19.85l-6.91-3.93V8.08L12 4.15zm0 2.7L7.5 9.5v5l4.5 2.65 4.5-2.65v-5L12 6.85zm0 1.73l2.77 1.58v3.16L12 14.9l-2.77-1.58V10.16L12 8.58z" />
                  </svg>
                )
              },
              {
                name: "Flask",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M9 2v7.5L4 17a4 4 0 0 0 3.47 6h9.06A4 4 0 0 0 20 17l-5-7.5V2H9zm2 2h2v4h-2V4zm-5.5 13a2 2 0 0 1 0-4h1a2 2 0 0 1 0 4h-1zm9 0a2 2 0 0 1 0-4h1a2 2 0 0 1 0 4h-1z" />
                  </svg>
                )
              },
              {
                name: "Django",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#092E20">
                    <path d="M11.5 2h2v8.5h-2V2zm0 10h2v10h-2V12zm-5 3.5h2V22H6.5v-6.5zM17 4h2v7h-2V4z" fill="#44B78B" />
                  </svg>
                )
              },
              {
                name: "React Native",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
                  </svg>
                )
              },
              {
                name: "Flutter",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M14 2L4 12l3 3 10-10-3-3z" fill="#54C5F8" />
                    <path d="M4 12l7 7-3.5.5L4 12z" fill="#54C5F8" />
                    <path d="M7.5 19.5L11 23l10-10-3-3-10 9.5z" fill="#01579B" />
                    <path d="M11 23l-3.5-3.5 3-1 .5 4.5z" fill="#29B6F6" />
                  </svg>
                )
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300 cursor-default ${isLight
                  ? "bg-white border-black/5 hover:border-purple-500/20 hover:shadow-lg"
                  : "bg-[#1a1a1a] border-white/10 hover:bg-purple-500/[0.08] hover:border-purple-500/40"
                  }`}
              >
                <div className={`${isLight ? "text-gray-700" : "text-white"}`}>{skill.logo}</div>
                <span className={`text-[9px] font-bold uppercase tracking-widest text-center leading-tight ${isLight ? "text-gray-500" : "text-gray-400"}`}>{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isLight ? "text-purple-600/70" : "text-purple-400/70"}`}>AI Models & APIs</p>
          <div className="grid grid-cols-4 gap-3">
            {[
              {
                name: "OpenAI",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M22.28 9.84a5.83 5.83 0 0 0-.5-4.79 5.9 5.9 0 0 0-6.35-2.83A5.86 5.86 0 0 0 11.01 1a5.9 5.9 0 0 0-5.62 4.08 5.85 5.85 0 0 0-3.91 2.84 5.9 5.9 0 0 0 .73 6.92 5.83 5.83 0 0 0 .5 4.79 5.9 5.9 0 0 0 6.35 2.83A5.86 5.86 0 0 0 12.99 23a5.9 5.9 0 0 0 5.63-4.08 5.85 5.85 0 0 0 3.91-2.84 5.9 5.9 0 0 0-.73-6.92l-.52-.32zM13 21.5a4.38 4.38 0 0 1-2.81-1.02l.14-.08 4.67-2.69a.77.77 0 0 0 .39-.67v-6.57l1.97 1.14a.07.07 0 0 1 .04.06v5.43A4.4 4.4 0 0 1 13 21.5zm-9.4-4.04a4.38 4.38 0 0 1-.52-2.95l.14.08 4.66 2.7a.77.77 0 0 0 .77 0l5.7-3.29v2.28a.07.07 0 0 1-.03.06l-4.72 2.73a4.4 4.4 0 0 1-6-.61zm-1.22-9.62A4.38 4.38 0 0 1 4.67 5.7v5.51a.77.77 0 0 0 .39.67l5.68 3.28-1.97 1.14a.07.07 0 0 1-.07 0L4 13.6a4.4 4.4 0 0 1-1.62-5.76zM19.9 13a.77.77 0 0 0-.39-.67L13.83 9.05l1.97-1.14a.07.07 0 0 1 .07 0l4.7 2.72a4.4 4.4 0 0 1-.68 7.94v-5.51A.77.77 0 0 0 19.9 13zm1.96-2.96l-.14-.08-4.66-2.7a.77.77 0 0 0-.77 0l-5.69 3.29V8.27a.07.07 0 0 1 .03-.06l4.72-2.73a4.4 4.4 0 0 1 6.51 4.56zM8.61 13.48l-1.97-1.14a.07.07 0 0 1-.04-.06V6.85a4.4 4.4 0 0 1 7.21-3.38l-.14.08-4.67 2.69a.77.77 0 0 0-.39.67v6.57zm1.07-2.3L12 9.76l2.32 1.34v2.68L12 15.12l-2.32-1.34v-2.6z" />
                  </svg>
                )
              },
              {
                name: "Gemini",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <defs>
                      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2C12 2 14 9 22 12C14 15 12 22 12 22C12 22 10 15 2 12C10 9 12 2 12 2Z" fill="url(#gemini-grad)" />
                  </svg>
                )
              },
              {
                name: "Grok",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                )
              },
              {
                name: "HuggingFace",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#FFD21E">
                    <circle cx="12" cy="12" r="10" fill="#FFD21E" />
                    <circle cx="9" cy="10" r="1.5" fill="#333" />
                    <circle cx="15" cy="10" r="1.5" fill="#333" />
                    <path d="M8 15c1-2 7-2 8 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M7 7c-.5-1 .5-2 1.5-1.5" stroke="#FF6B6B" strokeWidth="1" strokeLinecap="round" fill="none" />
                    <path d="M17 7c.5-1-.5-2-1.5-1.5" stroke="#FF6B6B" strokeWidth="1" strokeLinecap="round" fill="none" />
                  </svg>
                )
              },
            ].map((ai, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300 cursor-default ${isLight
                  ? "bg-white border-black/5 hover:border-purple-500/20 hover:shadow-lg"
                  : "bg-[#1a1a1a] border-white/10 hover:bg-purple-500/[0.08] hover:border-purple-500/40"
                  }`}
              >
                <div className={`${isLight ? "text-gray-700" : "text-white"}`}>{ai.logo}</div>
                <span className={`text-[9px] font-bold uppercase tracking-widest text-center leading-tight ${isLight ? "text-gray-500" : "text-gray-400"}`}>{ai.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Education & Expertise === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`w-full backdrop-blur-3xl border rounded-[60px] p-8 md:p-12 relative overflow-hidden transition-all duration-500 group ${isLight
            ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            }`}
        >
          <div className="flex flex-col gap-12">
            {/* Journey Section */}
            <div>
              <h3 className={`text-base font-black mb-8 uppercase tracking-[0.25em] ${isLight ? "text-black/30" : "text-white/30"
                }`}>Education</h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-purple-500/20 group hover:border-purple-500/50 transition-colors">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <h4 className={`font-bold text-lg mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>BSc Hons in Software Engineering</h4>
                  <p className="text-gray-500 text-sm font-medium italic">Undergraduate • Final Year</p>
                </div>
                <div className="relative pl-6 border-l-2 border-purple-500/20 group hover:border-purple-500/50 transition-colors">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] opacity-50" />
                  <h4 className={`font-bold text-lg mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>Cyber Security Track</h4>
                  <p className="text-gray-500 text-sm font-medium italic">Practical Defense & Architecture</p>
                </div>
              </div>
            </div>

            {/* Core Expertise Section (Icons) */}
            <div>
              <h3 className={`text-base font-black mb-8 uppercase tracking-[0.25em] ${isLight ? "text-black/30" : "text-white/30"
                }`}>Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Fullstack", icon: Code2 },
                  { name: "AI/ML", icon: BrainCircuit },
                  { name: "Systems", icon: Database },
                  { name: "Security", icon: ShieldAlert }
                ].map((skill, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-3xl border flex flex-col items-center gap-3 transition-all duration-300 group hover:-translate-y-1 ${isLight
                      ? "bg-white border-black/5 text-gray-900 hover:shadow-lg hover:border-purple-500/20"
                      : "bg-[#1a1a1a] border-white/10 text-white hover:bg-purple-500/[0.1] hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40"
                      }`}
                  >
                    <skill.icon size={24} className={`${isLight ? "text-purple-600" : "text-purple-500"
                      } group-hover:scale-110 transition-all`} />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
