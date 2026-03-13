"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 md:px-16 py-6"
    >
      {/* Logo / Brand */}
      <Link href="/" className="text-lg font-bold tracking-wide text-white light:text-black">
        <span className={theme === 'light' ? 'text-black' : 'text-white'}>S.Kaveen</span>
      </Link>

      {/* Menu Items */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  theme === "light" ? "text-gray-600 hover:text-black" : "text-gray-400 hover:text-white"
                } transition-colors duration-300 text-sm font-medium`}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === "light" ? "bg-black/5 text-black hover:bg-black/10" : "bg-white/5 text-white hover:bg-white/10"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button className={`md:hidden ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
