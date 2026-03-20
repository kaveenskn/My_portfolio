"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Mail, Download, Code2, Database, BrainCircuit, ShieldAlert, X, User } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function AboutSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-10">

      {/* === LEFT COLUMN: Profile Card === */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`lg:col-span-5 w-full backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 flex flex-col items-center text-center sticky top-24 transition-all duration-500 group overflow-hidden ${isLight
          ? "bg-gradient-to-br from-white to-gray-50 border-black/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:border-purple-500/50"
          : "bg-gradient-to-br from-[#111111] to-[#1a1a1a] border-white/10 shadow-lg shadow-black/50 hover:border-purple-500/50 hover:shadow-[0_0_80px_-15px_rgba(139,92,246,0.25)]"
          }`}
      >
        {/* Dynamic Background Glows for Maximum Vibrancy */}
        {/* Bottom-Right Glow (Purple/Blue) */}
        <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-purple-600/30 blur-[120px] pointer-events-none opacity-60 group-hover:opacity-100 group-hover:bg-purple-600/40 transition-all duration-700" />
        <div className="absolute -bottom-12 -right-12 w-[250px] h-[250px] bg-blue-600/20 blur-[90px] pointer-events-none opacity-40 group-hover:opacity-60 transition-all duration-700" />

        {/* Top-Left Glow (Violet/Cyan) */}
        <div className="absolute -top-20 -left-20 w-[200px] h-[200px] bg-violet-600/10 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-30 transition-all duration-700" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[320px] mb-10 group/img">
            {/* Main Glow behind image */}
            <div className={`absolute -inset-4 rounded-[70px] blur-3xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 ${isLight ? "bg-purple-200/50" : "bg-purple-600/20"
              }`} />

            <div className={`relative w-full h-full rounded-[60px] overflow-hidden border-2 transition-all duration-700 group-hover/img:scale-[1.02] ${isLight ? "border-purple-500/10 shadow-xl" : "border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              }`}>
              <Image
                src="/profile.png"
                alt="Shanmugaraja Kaveen"
                fill
                className="object-cover object-top transition-all duration-700"
              />
              {/* Subtle Gradient Overlay on Image Card */}
              <div className={`absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover/img:from-purple-500/10 group-hover/img:to-transparent transition-colors duration-700`} />
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl font-black mb-3 tracking-tight ${isLight ? "text-gray-900" : "text-white"
            }`}>
            Shanmugaraja<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">Kaveen</span>
          </h1>
          <p className={`${isLight ? "text-purple-600" : "text-purple-400"
            } font-semibold mb-10 text-base flex items-center gap-2 opacity-90`}>
            <Mail size={18} className="text-purple-500" /> shanmugarajakaveen@gmail.com
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-[30px] font-bold flex items-center justify-center gap-3 transition-all duration-300 border shadow-lg ${isLight
              ? "bg-gray-900 border-black/5 text-white hover:bg-white hover:text-black hover:border-black/10 hover:shadow-black/10"
              : "bg-white text-black border-white/10 hover:bg-transparent hover:text-white hover:border-white/20 hover:shadow-purple-500/10"
              }`}
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </div>
      </motion.div>

      {/* === RIGHT COLUMN: About & Experience === */}
      <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14 w-full">

        {/* Top Card: About Me Bio (Interactive) */}
        <AnimatePresence mode="wait">
          {!isAboutOpen ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsAboutOpen(true)}
              className={`cursor-pointer backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 flex flex-col items-center justify-center gap-6 relative overflow-hidden group transition-all duration-500 min-h-[400px] h-full ${isLight
                ? "bg-white/70 border-black/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:border-purple-500/30"
                : "bg-[#111111] border-white/10 shadow-lg shadow-black/50 hover:bg-[#151515] hover:border-purple-500/50 hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]"
                }`}
            >
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 ${isLight ? "bg-purple-100/50 border-purple-500/20 text-purple-600" : "bg-purple-500/10 border-purple-500/30 text-purple-400"
                }`}>
                <User size={80} strokeWidth={1} />
              </div>
              <div className="text-center">
                <h2 className={`text-4xl font-black mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>About Me</h2>
                <p className={`text-sm font-bold uppercase tracking-[0.3em] ${isLight ? "text-purple-600/60" : "text-purple-400/60"}`}>Click to Explore</p>
              </div>
              {/* Radial glow for icon mode */}
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className={`backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 relative overflow-hidden transition-all duration-500 ${isLight
                ? "bg-white/70 border-black/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
                : "bg-[#111111] border-white/10 shadow-lg shadow-black/50"
                }`}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAboutOpen(false);
                }}
                className={`absolute top-8 right-8 p-3 rounded-full border transition-all duration-300 hover:rotate-90 hover:scale-110 ${isLight ? "bg-black/5 border-black/5 text-black hover:bg-black/10" : "bg-white/5 border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-400"
                  }`}
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <h2 className={`text-4xl md:text-5xl font-black ${isLight ? "text-gray-900" : "text-white"
                  }`}>About Me</h2>
                <div className={`w-fit flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em] ${isLight
                  ? "bg-green-500/[0.08] border-green-500/20 text-green-700"
                  : "bg-green-500/[0.05] border-green-500/10 text-green-400/90"
                  }`}>
                  <CheckCircle2 size={14} className="animate-pulse" /> Available for Projects
                </div>
              </div>

              <div className={`space-y-12 text-lg md:text-xl font-light leading-[3.0] tracking-wide ${isLight ? "text-gray-600/90" : "text-gray-400"
                }`}>
                <p>
                  I am a dedicated <strong className={`font-bold underline decoration-purple-500/60 decoration-4 underline-offset-8 ${isLight ? "text-gray-900" : "text-white/90"
                    }`}>Fullstack Developer</strong> with a deep passion for <strong className={`font-bold ${isLight ? "text-gray-900" : "text-white/90"
                      }`}>Artificial Intelligence</strong>. Based in Sri Lanka, I specialize in building scalable, intelligence-driven architectures.
                </p>
                <p>
                  My expertise extends into <strong className={`font-bold ${isLight ? "text-gray-900" : "text-white/90"
                    }`}>Cybersecurity</strong>, ensuring that every line of code is not just functional, but inherently secure. I thrive on the challenge of transforming complex problems into elegant, high-impact digital solutions.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Card: Journey & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 transition-all duration-500 ${isLight
            ? "bg-white/70 border-black/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
            : "bg-[#111111] border-white/10 shadow-lg shadow-black/50 hover:bg-[#151515] hover:border-purple-500/40 hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]"
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                      : "bg-[#1a1a1a] border-white/10 text-white hover:bg-purple-500/[0.1] hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.4)]"
                      }`}
                  >
                    <skill.icon size={24} className={`${isLight ? "text-purple-600" : "text-purple-500"
                      } group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all`} />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
