"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Mail, Download, Code2, Database, BrainCircuit, ShieldAlert, X, User } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function AboutSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="relative w-full flex flex-col py-10 md:py-16">

      {/* Title Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mb-24 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-none ${isLight ? "text-gray-900" : "text-white"}`}
        >
          About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"}`}>Me</span>
        </motion.h2>
      </div>

      <div className="relative w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6">

        {/* About background hexagons removed - now handled by global Background.tsx */}

        {/* === LEFT COLUMN: Profile Card === */}
        <div className="lg:col-span-5 flex justify-center sticky top-24 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`w-full max-w-[420px] backdrop-blur-3xl border rounded-[50px] p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 group overflow-hidden ${isLight
              ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-purple-500/30"
              : "bg-gradient-to-b from-purple-600/40 via-[#0D0D0D] to-[#101010] border-purple-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-purple-500/80 hover:shadow-2xl hover:shadow-black/40"
              }`}
          >
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[280px] mb-8 group/img">
                <div className={`relative w-full h-full rounded-[40px] overflow-hidden border-2 transition-all duration-700 group-hover/img:scale-[1.02] ${isLight ? "border-purple-500/10 shadow-xl" : "border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                  }`}>
                  <Image
                    src="/profile.png"
                    alt="Shanmugaraja Kaveen"
                    fill
                    className="object-cover object-top transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover/img:from-purple-500/10 group-hover/img:to-transparent transition-colors duration-700`} />
                </div>
              </div>

              <h1 className={`text-3xl md:text-4xl font-black mb-2 tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                Shanmugaraja<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600 pr-1 py-1">Kaveen</span>
              </h1>
              <p className={`${isLight ? "text-purple-600" : "text-purple-400"} font-semibold mb-8 text-sm flex items-center justify-center gap-2 opacity-90`}>
                <Mail size={16} className="text-purple-500" /> shanmugarajakaveen@gmail.com
              </p>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-[25px] text-base font-bold flex items-center justify-center gap-3 transition-all duration-300 border shadow-lg ${isLight
                  ? "bg-gray-900 border-black/5 text-white hover:bg-white hover:text-black hover:border-black/10 hover:shadow-black/10"
                  : "bg-white text-black border-white/10 hover:bg-transparent hover:text-white hover:border-white/20 hover:shadow-purple-500/10"
                  }`}
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* === RIGHT COLUMN: Simple About Paragraph === */}
        <div className="lg:col-span-7 flex flex-col w-full z-10 justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col pt-4 md:pt-10"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className={`w-fit flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-black uppercase tracking-[0.15em] shadow-sm ${isLight
                ? "bg-green-500/[0.08] border-green-500/20 text-green-700"
                : "bg-green-500/[0.05] border-green-500/10 text-green-400/90"
                }`}>
                <CheckCircle2 size={16} className="animate-pulse" /> Available for Projects
              </div>
            </div>

            <div
              className={`space-y-5 text-sm md:text-base font-normal leading-[1.8] md:leading-[1.9] tracking-wide ${isLight ? "text-gray-700/90" : "text-gray-300"
                }`}
            >
              <p>
                I&apos;m{" "}
                <strong className={`font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Kaveen</strong>
                , an undergraduate at{" "}
                <strong className={`font-semibold ${isLight ? "text-gray-800" : "text-gray-200"}`}>Sabaragamuwa University of Sri Lanka</strong>
                , pursuing a BSc (Hons) in Software Engineering under the Faculty of Computing. I am an aspiring{" "}
                <strong className={`font-bold ${isLight ? "text-purple-600" : "text-purple-400"}`}>Full Stack Web Developer</strong>{" "}
                and{" "}
                <strong className={`font-bold ${isLight ? "text-purple-600" : "text-purple-400"}`}>Mobile App Developer</strong>{" "}
                with a strong foundation in Python, JavaScript, and basic Java.
              </p>

              <p>
                I have experience working with modern frameworks and technologies including <strong className={`font-medium ${isLight ? "text-gray-900" : "text-white"}`}>Node.js, Flask, Next.js Django, FastAPI, React Native, and Flutter</strong>, along with Tailwind CSS for frontend development. I am familiar with database systems such as MongoDB and Firestore, and I have hands-on experience integrating APIs, including OpenAI API, into applications. 
              </p>

              <p>
                My career goal is to develop scalable, efficient, and user-focused applications while continuously enhancing my skills in both web and mobile development.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
