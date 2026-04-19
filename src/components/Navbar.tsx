"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#studies-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? isLight 
              ? "bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-b border-gray-200 backdrop-blur-xl" 
              : "bg-[#030b1a]/95 shadow-[0_20px_60px_rgba(0,0,0,0.95)] border-b border-white/10 backdrop-blur-xl" 
            : isLight 
              ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/60 shadow-md"
              : "bg-[#030b1a]/80 backdrop-blur-lg border-b border-white/5 shadow-xl"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between h-[76px] px-6 lg:px-12">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isLight ? "bg-[#00D4FF]/20" : "bg-[#00D4FF]/10"} border border-[#00D4FF]/30 shadow-[0_0_20px_rgba(0,212,255,0.6)] group-hover:shadow-[0_0_35px_rgba(0,212,255,1)] transition-all duration-300`}>
              <span className="text-[#00D4FF] font-bold text-[15px] tracking-wider">SK</span>
            </div>
            <span className={`font-[700] text-lg tracking-wide hidden sm:block transition-colors ${isLight ? "text-gray-900 group-hover:text-gray-700" : "text-white group-hover:text-white/90"}`}>
              S.Kaveen
            </span>
          </Link>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={`relative px-5 py-2.5 rounded-full transition-colors duration-300 text-[14px] font-[600] tracking-wide ${
                      isActive
                        ? isLight ? "text-white" : "text-[#050a19]"
                        : isLight ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[#00D4FF] shadow-[0_0_35px_rgba(0,212,255,1)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Tools */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                isLight 
                  ? "border-gray-200 text-gray-500 hover:bg-gray-100 hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]" 
                  : "border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              className="hidden sm:flex items-center justify-center px-7 py-2.5 rounded-full bg-[#00D4FF] text-[#050a19] text-[13.5px] font-bold tracking-wide shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_40px_rgba(0,212,255,1)] transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button  */}
            <button className={`md:hidden p-2 transition-colors duration-300 ${isLight ? "text-gray-800" : "text-white"}`}>
              <Menu size={24} />
            </button>
          </div>
          
        </div>
      </motion.nav>
    </header>
  );
}
