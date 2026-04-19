"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "Mobile App Developer",
  "AI API Integration Developer",
  "Python Developer"
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
      >
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,212,255,0.1)]">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] uppercase tracking-wider text-xs font-bold">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-5xl sm:text-5xl lg:text-6xl font-[800] leading-[1.1] tracking-tight mb-4 ${isLight ? "text-gray-900" : "text-white"}`}
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#3B82F6]">Shanmugaraja</span>
            <br />
            Kaveen
          </motion.h1>

          <motion.div variants={itemVariants} className="h-[40px] sm:h-[48px] mb-6 flex items-center justify-center lg:justify-start">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isLight ? "text-gray-700" : "text-gray-200"}`}>
              I am a{" "}
              <span className="text-[#00D4FF]">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[24px] sm:h-[32px] ml-1 bg-[#00D4FF] align-middle"
              />
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl font-medium mb-10 max-w-xl ${isLight ? "text-gray-600" : "text-gray-400"}`}
          >
            I build elegant, high-performance digital experiences. Passionate about creating seamless user interfaces and robust architectures using modern technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00D4FF] text-[#030B1A] font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 font-bold rounded-full flex items-center gap-2 transition-all ${isLight ? "border-gray-900 text-gray-900" : "border-white/20 text-white hover:border-white/40"
                }`}
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 to-transparent rounded-full blur-3xl opacity-60" />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]"
          >
            {/* Background Cards for Depth */}
            <div className={`absolute inset-2 sm:inset-4 rounded-3xl transform rotate-3 transition-transform duration-500 border ${isLight ? "border-gray-200 bg-white/40" : "border-white/10 bg-[#0A192F]/40"} backdrop-blur-xl shadow-xl`} />
            <div className={`absolute inset-2 sm:inset-4 rounded-3xl transform -rotate-3 transition-transform duration-500 border ${isLight ? "border-[#00D4FF]/20 bg-white/60" : "border-[#00D4FF]/20 bg-[#030B1A]/60"} backdrop-blur-xl shadow-2xl z-0`} />

            <Image
              src="/profile.png"
              alt="Shanmugaraja Kaveen"
              fill
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,212,255,0.25)] z-10 p-2 sm:p-4"
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

