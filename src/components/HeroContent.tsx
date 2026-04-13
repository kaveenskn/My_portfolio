"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const roles = [
  "Cross-Platform Developer",
  "UI/UX Designer",
  "Flutter Expert"
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
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto px-6 lg:pl-32 lg:pr-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0"
      >

        {/* Left Block: Name & Info */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[#00D4FF] uppercase tracking-[3px] text-[13px] font-bold mb-4">
            HELLO, I&apos;M
          </span>
          <h1 className={`text-4xl md:text-5xl xl:text-6xl font-[800] leading-[1.1] tracking-tight mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
            Shanmugaraja<br />
            Kaveen
          </h1>
          <p className={`text-lg md:text-xl font-medium mb-10 max-w-md ${isLight ? "text-gray-600" : "text-gray-400"}`}>
            Building beautiful digital experiences with modern technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00D4FF] text-[#030B1A] font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border font-bold rounded-full flex items-center gap-2 transition-all ${isLight ? "border-gray-900 text-gray-900" : "border-white text-white"
                }`}
            >
              Download CV
              <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Center Block: Portrait */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {/* Cyan Glow Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#00D4FF]/20 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px]"
          >
            <Image
              src="/profile.png"
              alt="Shanmugaraja Kaveen"
              fill
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 450px"
              className="object-contain drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            />
          </motion.div>
        </motion.div>

        {/* Right Block: Role & Typewriter */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <span className="text-[#00D4FF] uppercase tracking-[3px] text-[13px] font-bold mb-4 lg:mb-6">
            CREATIVE
          </span>
          <div className="relative min-h-[120px] flex items-center justify-center lg:justify-end">
            <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[30px] md:h-[50px] ml-2 bg-[#00D4FF] align-middle"
              />
            </h2>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

