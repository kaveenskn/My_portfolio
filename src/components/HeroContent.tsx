"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function HeroContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* === Large Purple Glow Behind Image === */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-violet-500/15 blur-[80px] pointer-events-none z-0"></div>

      {/* === Content Layout: 3-column flex === */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-8 md:gap-0">

        {/* Left Side: Name */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left z-20 order-2 md:order-1"
        >
          <span className={`tracking-[0.25em] uppercase text-xs md:text-sm font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r ${
            isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
          }`}>
            Hello, I&apos;m
          </span>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight ${
            isLight ? "text-gray-900" : "text-white"
          }`}>
            Shanmugaraja<br />
            <span className="block mt-1">Kaveen</span>
          </h1>
        </motion.div>

        {/* Center: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-[30%] flex justify-center items-end z-10 order-1 md:order-2"
        >
          <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[500px]">
            <Image
              src="/profile.png"
              alt="Profile Image"
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
              className="object-cover object-top"
              priority
            />
            {/* Gradient fade at bottom */}
            <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t pointer-events-none ${
              isLight ? "from-[#f8f9fa]" : "from-[#0a0a0a]"
            } to-transparent`}></div>
          </div>
        </motion.div>

        {/* Right Side: Role */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[35%] flex flex-col items-center md:items-end text-center md:text-right z-20 order-3 md:order-3"
        >
          <span className={`${
            isLight ? "text-purple-600" : "text-purple-400"
          } tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-3`}>
            Creative
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight ${
            isLight ? "text-gray-900" : "text-white"
          }`}>
            Developer<br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r font-extrabold ${
              isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
            }`}>
              &amp; Designer
            </span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
