"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Mail, Download, Code2, Database, BrainCircuit, ShieldAlert, X, User } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Hexagon = ({ size, color, duration, delay, opacity, x, y }: {
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  x: string;
  y: string;
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
    style={{ width: size, height: size, left: x, top: y }}
    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
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

export default function AboutSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-10">

      {/* === Background Hexagons === */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <Hexagon size={120} color={isLight ? "#9333ea" : "#a855f7"} duration={20} delay={0} opacity={0.25} x="-5%" y="10%" />
        <Hexagon size={180} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={25} delay={2} opacity={0.15} x="105%" y="25%" />
        <Hexagon size={100} color={isLight ? "#6d28d9" : "#7c3aed"} duration={18} delay={4} opacity={0.2} x="85%" y="90%" />
        <Hexagon size={150} color={isLight ? "#9333ea" : "#a855f7"} duration={22} delay={1} opacity={0.2} x="5%" y="85%" />
        <Hexagon size={140} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={30} delay={3} opacity={0.15} x="50%" y="60%" />
      </div>

      {/* === LEFT COLUMN: Profile Card === */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`lg:col-span-5 w-full backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 flex flex-col items-center text-center sticky top-24 transition-all duration-500 group overflow-hidden ${isLight
          ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-purple-500/30"
          : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-black/40"
          }`}
      >


        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[320px] mb-10 group/img">

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600 pr-2 py-2">Kaveen</span>
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
                ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-purple-500/30"
                : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-black/40"
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
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className={`backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 relative overflow-hidden transition-all duration-500 ${isLight
                ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
                : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20"
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
          className={`backdrop-blur-3xl border rounded-[60px] p-10 md:p-14 transition-all duration-500 group overflow-hidden ${isLight
            ? "bg-white/80 border-gray-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-purple-500/30"
            : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-xl shadow-black/20 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-black/40"
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
    </div>
  );
}
