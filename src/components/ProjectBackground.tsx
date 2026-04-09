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
      {/* Background glow layers (color removed to allow global background to show through) */}
      <div className="absolute inset-0 transition-opacity duration-1000 bg-transparent" />
      
      {/* Radial depth light */}
      <div className={`absolute inset-0 ${
        isLight 
        ? "bg-[radial-gradient(circle_at_center,rgba(232,218,255,0.4)_0%,transparent_70%)]" 
        : "bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1)_0%,transparent_70%)]"
      }`} />
      
      {mounted && (
        <>
          {/* Section-specific background elements moved to global Background.tsx or simplified */}
        </>
      )}
    </div>
  );
}
