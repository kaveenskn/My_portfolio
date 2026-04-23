"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const stats = [
  { value: "10+", label: "Projects" },
];

export default function HeroContent() {
  const [pulse, setPulse] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">

      {/* Grid Pattern Background - adapting opacity for light mode */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "70px 70px",
          backgroundImage: isLight
            ? "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        }}
      />

      {/* Subtle cyan/blue glow top-left */}
      <div
        className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at top left, rgba(37,99,235,0.08) 0%, transparent 65%)"
            : "radial-gradient(ellipse at top left, rgba(0,229,255,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Rotating Hexagon Background - Specific to Hero */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none z-0 overflow-hidden">
        <motion.svg
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3 },
            scale: { duration: 3 }
          }}
          viewBox="0 0 100 100"
          className="w-[110vh] h-[110vh] text-cyan-500"
        >
          <path
            d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-6 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ============ LEFT COLUMN ============ */}
        <div className="flex flex-col items-start text-left">

          {/* Accent header label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <div className={`w-8 h-[2px] ${isLight ? "bg-blue-600" : "bg-[#00e5ff]"}`} />
            <span
              className={`text-[11px] font-black tracking-[0.15em] uppercase ${isLight ? "text-blue-600" : "text-[#00e5ff]"}`}
            >
              {"// PORTFOLIO_ –"}
            </span>
          </motion.div>

          {/* Name block */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1
              className={`font-black leading-[1.0] tracking-tight ${isLight ? "text-gray-900" : "text-[#f8f9fa]"}`}
              style={{
                fontSize: "clamp(42px, 6vw, 85px)",
              }}
            >
              Shanmugaraja
            </h1>
            <h1
              className={`font-black leading-[1.0] tracking-tight ${isLight ? "text-blue-600" : "text-[#00e5ff]"}`}
              style={{
                fontSize: "clamp(42px, 6vw, 85px)",
              }}
            >
              Kaveen<span className={isLight ? "text-blue-600" : "text-[#00e5ff]"}>.</span>
            </h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div variants={itemVariants} className="mb-6 min-h-[40px] sm:min-h-[48px]">
            <h2 className={`text-[28px] sm:text-[36px] md:text-[40px] font-bold tracking-tight ${isLight ? "text-gray-900" : "text-[#f8f9fa]"}`}>
              I am a{" "}
              <span className={isLight ? "text-blue-600" : "text-[#00e5ff]"}>
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    2000,
                    "Mobile App Developer",
                    2000,
                    "AI Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-[14px] sm:text-[15px] leading-[1.8] max-w-[480px] mb-8 font-medium ${isLight ? "text-gray-600" : "text-[#8b9099]"}`}
          >
            Architect of digital spaces. Crafting interfaces with{" "}
            <span className={`font-bold ${isLight ? "text-blue-600" : "text-[#00e5ff]"}`}>clarity</span>, function, and
            lasting design —{" "}
            <br className="hidden lg:block" />
            built one considered detail at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mb-10">
            <a
              href="#projects"
              className={`group relative px-6 py-3 border-[2px] text-[10px] sm:text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300 ${isLight
                ? "border-blue-600 text-blue-600 hover:bg-blue-600/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]"
                : "border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                }`}
            >
              VIEW WORK →
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 border-[2px] text-[10px] sm:text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300 ${isLight
                ? "border-gray-800 text-gray-700 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-200/50"
                : "border-[#1e2533] text-[#6b7280] hover:border-[#374151] hover:text-[#9ca3af] hover:bg-[#1e2533]/40"
                }`}
            >
              CONTACT
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="flex items-start gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className={`text-[28px] sm:text-[36px] font-black leading-none tracking-tight ${isLight ? "text-gray-900" : "text-[#f8f9fa]"}`}
                >
                  {stat.value}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] tracking-[0.15em] uppercase mt-1.5 font-black ${isLight ? "text-gray-500" : "text-[#4b5563]"}`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============ RIGHT COLUMN: Image Card ============ */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center w-full mx-auto max-w-[380px] lg:max-w-none"
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: isLight
                ? "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Main Frame */}
          <div className={`relative w-full max-w-[360px] aspect-[4/5] border-[2px] z-20 mx-auto lg:my-auto ${isLight ? "border-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.15)]" : "border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.15)]"
            }`}>

            {/* AVAILABLE badge */}
            <div className={`absolute -top-[2px] right-[-2px] translate-x-[28px] sm:translate-x-[44px] -translate-y-[22px] border-[2px] px-4 py-[7px] flex items-center gap-2.5 z-30 ${isLight ? "bg-white border-blue-600" : "bg-[#070b14] border-[#00e5ff]"
              }`}>
              <motion.div
                className={`w-[7px] h-[7px] rounded-full ${isLight ? "bg-blue-600" : "bg-[#00e5ff]"}`}
                animate={{ opacity: pulse ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
              />
              <span
                className={`text-[10px] font-black tracking-[0.15em] uppercase ${isLight ? "text-blue-600" : "text-[#00e5ff]"}`}
              >
                AVAILABLE
              </span>
            </div>

            {/* EST . 2025 tag */}
            <div className={`absolute -bottom-[2px] left-[-2px] -translate-x-[28px] sm:-translate-x-[44px] translate-y-[22px] px-5 py-2.5 z-30 ${isLight ? "bg-blue-600" : "bg-[#00e5ff]"
              }`}>
              <span
                className={`text-[10px] font-black tracking-[0.15em] uppercase ${isLight ? "text-white" : "text-[#070b14]"}`}
              >
                SE . 2026
              </span>
            </div>

            {/* Inner padded image area */}
            <div className="absolute inset-[14px] bg-transparent">
              <Image
                src="/profile.png"
                alt="Shanmugaraja Kaveen"
                fill
                priority
                className={`object-cover object-top transition-all duration-700 hover:grayscale ${isLight
                  ? "hover:brightness-[0.95] hover:contrast-[1.1]"
                  : "hover:brightness-[0.82] hover:contrast-[1.2]"
                  }`}
                sizes="(max-width: 768px) 340px, 360px"
              />

              {/* Vertical side text */}
              <div className="absolute top-1/2 right-4 sm:right-5 transform -translate-y-1/2 rotate-90 origin-right mix-blend-difference opacity-70 pointer-events-none">
                <span
                  className="text-white text-[8px] tracking-[5px] uppercase whitespace-nowrap font-bold"
                >
                  ▲ FRAME ^__^ / SELF PORTRAIT
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
