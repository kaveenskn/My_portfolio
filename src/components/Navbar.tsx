"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#studies-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[95%] lg:w-[85%] xl:w-[75%] rounded-full pointer-events-auto transition-all duration-300 ${
          isScrolled 
            ? isLight 
              ? "bg-white/95 shadow-[0_0_20px_rgba(0,229,255,0.3),0_0_20px_rgba(168,85,247,0.3)] border border-[#00e5ff]/30 backdrop-blur-xl" 
              : "bg-[#030014]/95 shadow-[0_0_30px_rgba(0,229,255,0.3),0_0_30px_rgba(168,85,247,0.3)] border border-[#a855f7]/40 backdrop-blur-xl" 
            : isLight 
              ? "bg-white/80 backdrop-blur-lg border border-[#00e5ff]/20 shadow-[0_0_15px_rgba(0,229,255,0.2),0_0_15px_rgba(168,85,247,0.2)]"
              : "bg-[#030014]/80 backdrop-blur-lg border border-[#a855f7]/20 shadow-[0_0_15px_rgba(0,229,255,0.2),0_0_15px_rgba(168,85,247,0.2)]"
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between h-[70px] px-4 md:px-6 lg:px-8">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
            <div className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full ${isLight ? "bg-[#00e5ff]/20" : "bg-[#a855f7]/10"} border border-[#a855f7]/50 shadow-[0_0_20px_rgba(0,229,255,0.5),0_0_20px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_35px_rgba(0,229,255,0.8),0_0_35px_rgba(168,85,247,0.8)] transition-all duration-300`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff] font-bold text-[13px] lg:text-[15px] tracking-wider">SK</span>
            </div>
            <span className={`font-[700] text-lg lg:text-xl tracking-wide transition-colors ${isLight ? "text-gray-900 group-hover:text-gray-700" : "text-white group-hover:text-white/90"}`}>
              S.Kaveen
            </span>
          </Link>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-4 xl:gap-6 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(link.href);
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`relative px-3 lg:px-5 py-2 lg:py-2.5 rounded-full transition-colors duration-300 text-[13px] lg:text-[14px] font-[600] tracking-wide whitespace-nowrap ${
                      isActive
                        ? "text-white"
                        : isLight ? "text-gray-600 hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" : "text-gray-300 hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a855f7] to-[#00e5ff] shadow-[0_0_30px_rgba(0,229,255,0.6),0_0_30px_rgba(168,85,247,0.6)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Tools */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Resume CTA Button */}
            <a
              href="/ShanmugarajaKaveen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center px-4 lg:px-7 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#00e5ff] text-[#030014] text-[12px] lg:text-[13.5px] font-bold tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.4),0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6),0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 whitespace-nowrap"
            >
              Resume
            </a>

            {/* Mobile Menu Button  */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 rounded-full hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:bg-[#00e5ff]/10 ${isLight ? "text-gray-800 hover:text-[#00e5ff]" : "text-white hover:text-[#00e5ff]"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-[80px] w-full max-w-sm md:hidden rounded-2xl overflow-hidden pointer-events-auto border ${
              isLight
                ? "bg-white/95 border-[#00e5ff]/30 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
                : "bg-[#030014]/95 border-[#a855f7]/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            }`}
          >
            <ul className="flex flex-col py-4 px-6 gap-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.href;
                return (
                  <li key={link.name} className="w-full">
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(link.href);
                        setIsMobileMenuOpen(false);
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 text-[15px] font-[600] tracking-wide ${
                        isActive
                          ? "bg-gradient-to-r from-[#a855f7] to-[#00e5ff] text-white font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                          : isLight
                          ? "text-gray-600 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff]"
                          : "text-gray-300 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              
              <li className="w-full pt-2 mt-2 border-t border-white/10">
                <a
                  href="/ShanmugarajaKaveen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-7 py-3 mt-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#00e5ff] text-[#030014] text-[14px] font-bold tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.3),0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
