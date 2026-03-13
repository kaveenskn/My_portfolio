"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Dribbble } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", name: "LinkedIn" },
  { icon: <Github size={18} />, href: "https://github.com", name: "GitHub" },
  { icon: <Dribbble size={18} />, href: "https://dribbble.com", name: "Dribbble" },
];

export default function SocialIcons() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="hidden md:flex fixed left-10 bottom-12 flex-col items-center gap-5 z-40"
    >
      {socialLinks.map((social) => (
        <Link 
          key={social.name} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${
            isLight ? "text-gray-600 hover:text-purple-600" : "text-gray-500 hover:text-purple-400"
          } transition-all duration-300`}
          aria-label={social.name}
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full ${isLight ? "hover:bg-black/5" : "hover:bg-white/5"}`}
          >
            {social.icon}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
