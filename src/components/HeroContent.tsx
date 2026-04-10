"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";

const roles = [
  "Full-Stack Web Developer",
  "Mobile App Developer",
  "AI-Integrated Developer",
  "Cybersecurity Enthusiast (Foundation Level)",
  "Software Developer",
  "AI-Powered Application Developer",
  "Web Systems Developer",
  "Cross-Platform App Developer"
];
export default function HeroContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100); // Speed of typing

        if (displayText === currentRole) {
          // Pause at the end of the word
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Speed of deleting

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="relative z-10 w-full min-h-[100dvh] pt-32 md:pt-32 flex items-center justify-center overflow-hidden bg-transparent">

      {/* Hero background glows removed - now handled by global Background.tsx */}

      {/* === Content Layout: 3-column flex === */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:pl-36 md:pr-16 gap-12 md:gap-0">
        <SocialIcons />

        {/* Left Side: Name */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-[35%] h-auto md:h-[200px] flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left z-20 order-2 md:order-1 -translate-y-8 md:-translate-y-12"
        >
          <span className={`tracking-[0.25em] uppercase text-xs md:text-sm font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${isLight ? "from-blue-600 to-cyan-500" : "from-blue-500 to-cyan-400"
            }`}>
            Hello, I&apos;m
          </span>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] md:leading-[0.95] tracking-tight ${isLight ? "text-gray-900" : "text-white"
            }`}>
            Shanmugaraja<br />
            <span className="block mt-1">Kaveen</span>
          </h1>
        </motion.div>

        {/* Center: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-[30%] flex justify-center items-end z-10 order-1 md:order-2"
        >
          <div 
            className="relative w-[240px] h-[300px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[500px]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
            }}
          >
            {/* Mobile-Only Hexagons removed - now handled by global Background.tsx */}

            <Image
              src="/profile.png"
              alt="Profile Image"
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 380px"
              className="object-cover object-top drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-500"
              priority
            />
            {/* Gradient fade at bottom via maskImage enables background flow without harsh cutoffs */}
          </div>
        </motion.div>

        {/* Right Side: Role */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[35%] h-auto md:h-[200px] flex flex-col items-center md:items-end justify-center md:justify-start text-center md:text-right z-20 order-3 md:order-3 -translate-y-8 md:-translate-y-12"
        >
          <span className={`${isLight ? "text-cyan-500" : "text-blue-400"
            } tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-3`}>
            Creative
          </span>
          <div className="relative min-h-[100px] md:min-h-[150px] w-full flex items-center md:items-start justify-center md:justify-end">
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] md:leading-[1.05] tracking-tight ${isLight ? "text-gray-900" : "text-white"
              }`}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r font-extrabold pr-2 py-2 ${isLight ? "from-blue-600 to-cyan-500" : "from-blue-500 to-cyan-400"
                }`}>
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
                className={`inline-block w-[3px] h-[25px] md:h-[40px] lg:h-[50px] ml-1 align-middle ${isLight ? "bg-cyan-500" : "bg-blue-400"
                  }`}
              />
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

