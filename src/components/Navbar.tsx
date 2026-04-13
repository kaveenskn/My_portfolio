"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
        className="w-full flex items-center justify-between h-[70px] px-6 md:px-8 lg:px-12 border-b border-white/[0.08]"
        style={{
          backgroundColor: "rgba(5, 10, 25, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/30 shadow-[0_0_8px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.7)] group-hover:bg-[#00D4FF]/20 transition-all duration-300">
              <span className="text-[#00D4FF] font-bold text-[13px] tracking-[0.1em]">SK</span>
            </div>
            <span className="text-white font-[600] text-lg tracking-wide hidden sm:block group-hover:text-white/90 transition-colors">
              S.Kaveen
            </span>
          </Link>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 h-full">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <li key={link.name} className="relative h-full flex items-center">
                  <Link
                    href={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={`relative py-3 transition-colors duration-300 text-[13px] font-medium tracking-[1.5px] uppercase ${
                      isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline-main"
                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Tools */}
          <div className="flex items-center gap-4 lg:gap-5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D4FF]/40 text-white/80 hover:text-white hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              className="hidden sm:flex items-center justify-center px-4 lg:px-5 py-2 rounded border border-[#00D4FF] text-[#00D4FF] text-[11px] font-bold tracking-[1.5px] uppercase hover:bg-[#00D4FF] hover:text-[#050a19] transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.15)] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button placeholder */}
            <button className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
        </div>
      </motion.nav>
    </header>
  );
}
