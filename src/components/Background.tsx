"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Background() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Background Color */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          isLight ? "bg-[#F8FAFC]" : "bg-[#030B1A]"
        }`} 
      />

      {/* Subtle Glow Behind Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />


      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-black/20" />
    </div>
  );
}
