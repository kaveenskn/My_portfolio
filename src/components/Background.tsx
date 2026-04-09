"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Hexagon = ({ size, color, duration, delay, opacity, top, left, right }: {
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  top: string;
  left?: string;
  right?: string;
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
    style={{ 
      width: size, 
      height: size, 
      top, 
      left: left || "auto", 
      right: right || "auto" 
    }}
    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

const GlowBlob = ({ size, color, duration, top, left, right, delay = 0 }: {
  size: number;
  color: string;
  duration: number;
  top: string;
  left?: string;
  right?: string;
  delay?: number;
}) => (
  <motion.div
    animate={{
      x: [0, 50, -30, 0],
      y: [0, 30, 50, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 45, 0]
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    style={{ 
      width: size, 
      height: size, 
      top, 
      left: left || "auto", 
      right: right || "auto",
      backgroundColor: color
    }}
    className="absolute rounded-full blur-[120px] pointer-events-none z-0 opacity-40 mix-blend-screen"
  />
);

export default function Background() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Transition Layer */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        isLight ? "bg-gradient-to-b from-purple-50/50 via-white/80 to-white" : "bg-[#0a0a0a]"
      }`}>
        {/* Subtle Radial Noise Overlay */}
        <div className={`absolute inset-0 opacity-30 ${
          isLight 
            ? "bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.03),transparent_50%)]" 
            : "bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_50%)]"
        }`} />
      </div>

      {/* --- UNIFIED BACKGROUND ELEMENTS --- */}
      
      {/* 1. HERO SECTION GLOWS & HEXAGONS */}
      <GlowBlob size={600} color={isLight ? "#e9d5ff" : "#581c87"} duration={20} top="5%" left="-5%" />
      <GlowBlob size={500} color={isLight ? "#ddd6fe" : "#4c1d95"} duration={25} top="15%" right="0%" delay={2} />
      
      {!isLight && (
        <>
          <Hexagon size={450} color="#a855f7" duration={20} delay={0} opacity={0.2} top="300px" left="50%" />
          <Hexagon size={600} color="#8b5cf6" duration={35} delay={2} opacity={0.1} top="280px" left="53%" />
          {/* Hero Left Side Hexagon */}
          <Hexagon size={350} color="#9333ea" duration={25} delay={1} opacity={0.15} top="400px" left="12%" />
        </>
      )}

      {/* 2. ABOUT SECTION GLOWS & HEXAGONS */}
      <GlowBlob size={700} color={isLight ? "#f5f3ff" : "#2e1065"} duration={30} top="25%" left="50%" />
      <Hexagon size={120} color={isLight ? "#9333ea" : "#a855f7"} duration={22} delay={1} opacity={0.25} top="22%" left="8%" />
      <Hexagon size={220} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={28} delay={3} opacity={0.15} top="28%" right="5%" />
      <Hexagon size={180} color={isLight ? "#d8b4fe" : "#7e22ce"} duration={30} delay={4} opacity={0.1} top="35%" left="20%" />

      {/* 3. STUDIES & SKILLS SECTION GLOWS & ANIMATIONS */}
      <GlowBlob size={800} color={isLight ? "#ede9fe" : "#1e1b4b"} duration={35} top="45%" right="-10%" />
      <GlowBlob size={600} color={isLight ? "#f3e8ff" : "#3b0764"} duration={28} top="55%" left="-10%" delay={4} />
      <Hexagon size={250} color={isLight ? "#a78bfa" : "#5b21b6"} duration={32} delay={2} opacity={0.12} top="50%" right="15%" />

      {/* 4. PROJECTS SECTION GLOWS & HEXAGONS */}
      <GlowBlob size={900} color={isLight ? "#fae8ff" : "#4a044e"} duration={40} top="70%" left="50%" />
      <Hexagon size={300} color={isLight ? "#9333ea" : "#a855f7"} duration={20} delay={0} opacity={0.15} top="75%" left="15%" />
      <Hexagon size={400} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={35} delay={5} opacity={0.1} top="78%" right="10%" />

      {/* 5. CONTACT SECTION GLOWS */}
      <GlowBlob size={600} color={isLight ? "#e9d5ff" : "#581c87"} duration={22} top="90%" left="20%" />
      <GlowBlob size={500} color={isLight ? "#c084fc" : "#6b21a8"} duration={18} top="95%" right="20%" delay={3} />

    </div>
  );
}
