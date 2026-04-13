"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", name: "LinkedIn" },
  { icon: <Github size={18} />, href: "https://github.com", name: "GitHub" },
  { icon: <Globe size={18} />, href: "https://yourwebsite.com", name: "Portfolio" },
];

export default function SocialIcons() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-40"
    >
      {/* Sidebar Line Decoration */}
      <div className={`w-[1px] h-20 mb-4 bg-gradient-to-b from-transparent ${isLight ? "to-gray-300" : "to-white/10"}`} />
      
      {socialLinks.map((social) => (
        <Link 
          key={social.name} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group"
          aria-label={social.name}
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isLight 
                ? "border-gray-200 text-gray-600 hover:border-cyan-500 hover:text-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                : "border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            }`}
          >
            {social.icon}
          </motion.div>
        </Link>
      ))}

      <div className={`w-[1px] h-20 mt-4 bg-gradient-to-t from-transparent ${isLight ? "to-gray-300" : "to-white/10"}`} />
    </motion.div>
  );
}
