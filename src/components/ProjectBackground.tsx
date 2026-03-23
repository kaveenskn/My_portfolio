"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Github } from "lucide-react";

const GITHUB_PATH = "M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6-.1-1.4-.5-2.8-1.5-3.8.1-.3.2-1.5-.1-3.4 0 0-1.2-.4-3.8 1.4-1.1-.3-2.3-.5-3.5-.5s-2.4.2-3.5.5c-2.6-1.8-3.8-1.4-3.8-1.4-.3 1.9-.2 3.1-.1 3.4-1 1-1.5 2.4-1.5 3.8 0 3.6 3 5.6 6 5.6-1 0-1.5.8-1.8 2.2-1 .4-2.5.6-3.8-.7C2.7 15.6 2 15 2 15c-1-.6-.2-.5-.2-.5 1 .2 1.5 1.5 1.5 1.5 1 1.5 2.5 1 3.2.8.2-1 .6-1.5 1-1.8";

export const AnimatedGithubLogo = ({
  size,
  className,
  duration = 8,
  glowColor = "#a855f7"
}: {
  size: number;
  className: string;
  duration?: number;
  glowColor?: string;
}) => {
  return (
    <div className={`pointer-events-none select-none z-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}
      >
        {/* Faint base outline */}
        <path
          d={GITHUB_PATH}
          stroke="currentColor"
          strokeWidth="0.1"
          className="opacity-[0.7]"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Primary Running LED light */}
        <motion.path
          d={GITHUB_PATH}
          stroke="currentColor"
          strokeWidth="0.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: [0, 0.25, 0], 
            pathOffset: [0, 1] 
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Secondary Running light (lagging behind) */}
        <motion.path
          d={GITHUB_PATH}
          stroke="currentColor"
          strokeWidth="0.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
          initial={{ pathLength: 0.1, pathOffset: 0.5 }}
          animate={{
            pathLength: [0.1, 0.3, 0.1],
            pathOffset: [0.5, 1.5]
          }}
          transition={{
            duration: duration * 1.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default function ProjectBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Background glow layers */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isLight ? "bg-purple-50/20" : "bg-[#050505]"
      }`} />
      
      {/* Radial depth light */}
      <div className={`absolute inset-0 ${
        isLight 
        ? "bg-[radial-gradient(circle_at_center,rgba(232,218,255,0.4)_0%,transparent_70%)]" 
        : "bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1)_0%,transparent_70%)]"
      }`} />
      
      {mounted && (
        <>
          {/* Top Left Blob */}
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, 70, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] ${
              isLight ? "bg-fuchsia-300/30 mix-blend-multiply" : "bg-purple-900/30"
            }`}
          />
          
          {/* Bottom Right Blob */}
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -80, 0],
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute bottom-[-20%] right-[-10%] w-[500px] h-[700px] rounded-full blur-[130px] ${
              isLight ? "bg-indigo-300/30 mix-blend-multiply" : "bg-blue-900/30"
            }`}
          />

          {/* Center Blob */}
          <motion.div
            animate={{
              x: [0, -60, 60, 0],
              y: [0, 100, -50, 0],
              scale: [1, 1.4, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full blur-[100px] ${
              isLight ? "bg-teal-200/40 mix-blend-multiply" : "bg-teal-900/20"
            }`}
          />


        </>
      )}
    </div>
  );
}
