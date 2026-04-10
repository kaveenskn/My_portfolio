"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Studies & Skills", href: "#studies-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("#home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(window.location.hash || "#home");
      
      const handleHashChange = () => {
        setActiveTab(window.location.hash || "#home");
      };
      
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const isLight = theme === "light";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex items-center justify-between w-full max-w-[1000px] h-[70px] px-6 md:px-10 rounded-full border backdrop-blur-md transition-all duration-500 ${isLight
          ? "bg-white/70 border-gray-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          : "bg-black/40 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
          }`}
      >
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center group">
          <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${isLight ? "text-gray-900 group-hover:text-cyan-600" : "text-white group-hover:text-cyan-400"}`}>
            S.Kaveen
          </span>
        </Link>

        {/* Menu Items */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 md:gap-10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={`relative py-1 transition-all duration-300 text-[10px] md:text-[12px] font-bold tracking-[0.15em] uppercase ${isActive
                      ? (isLight ? "text-cyan-600" : "text-cyan-400")
                      : (isLight ? "text-gray-400 group-hover:text-cyan-500" : "text-gray-500 group-hover:text-cyan-300")
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className={`absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full ${isLight ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]" : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"}`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-white/10 md:pl-8">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${isLight ? "bg-black/5 text-black" : "bg-white/5 text-white"
                }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Menu Button placeholder */}
            <button className={`md:hidden p-2 rounded-full ${isLight ? "bg-black/5 text-black" : "bg-white/5 text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
