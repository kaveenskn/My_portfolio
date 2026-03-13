"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isLight = theme === "light";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`flex items-center justify-between w-full max-w-[1000px] h-[70px] px-6 md:px-10 rounded-full border backdrop-blur-md shadow-2xl transition-colors duration-500 ${
          isLight 
          ? "bg-white/70 border-black/5 shadow-black/5" 
          : "bg-black/40 border-white/10 shadow-black"
        }`}
      >
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
            <Sparkles size={20} />
          </div>
          <span className={`text-lg font-bold tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
            S.Kaveen
          </span>
        </Link>

        {/* Menu Items */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 text-sm font-semibold tracking-wide ${
                      isActive 
                        ? (isLight ? "text-black" : "text-white") 
                        : (isLight ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white")
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isLight ? "bg-black" : "bg-white"}`}
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
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                isLight ? "bg-black/5 text-black" : "bg-white/5 text-white"
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
