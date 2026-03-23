"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Background() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isLight ? "bg-gradient-to-b from-purple-50/50 via-white/80 to-white" : "bg-[#050505]"
      }`}>
        <div className={`absolute inset-0 transition-opacity duration-700 ${
          isLight ? "bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_50%)]" : "bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)]"
        }`} />
      </div>

      {/* Glassmorphism Blobs for both Light and Dark modes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] ${
          isLight ? "bg-purple-300/30 mix-blend-multiply" : "bg-purple-900/20"
        }`}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] ${
          isLight ? "bg-blue-300/20 mix-blend-multiply" : "bg-blue-900/20"
        }`}
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full blur-[80px] ${
          isLight ? "bg-violet-300/25 mix-blend-multiply" : "bg-violet-900/20"
        }`}
      />
    </div>
  );
}
