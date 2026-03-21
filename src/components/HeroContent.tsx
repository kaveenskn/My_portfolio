"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

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
const Hexagon = ({ size, color, duration, delay, opacity, x, y }: {
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  x: string;
  y: string;
}) => (
  <motion.div
    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
    animate={{
      rotate: 360,
      scale: [0.9, 1.1, 0.9],
      opacity: [opacity * 0.5, opacity, opacity * 0.5]
    }}
    transition={{
      rotate: { duration, repeat: Infinity, ease: "linear" },
      scale: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut" },
      delay
    }}
    style={{ width: size, height: size, left: x, top: y }}
    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

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
    <div className="relative z-10 w-full min-h-[100dvh] pt-32 md:pt-32 flex items-center justify-center overflow-hidden">

      {/* === Large Purple Glow Behind Image === */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-violet-500/15 blur-[80px] pointer-events-none z-0"></div>

      {/* === Rotating Hexagons (Desktop Only) === */}
      <div className="hidden md:block absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {/* Center/Right Cluster */}
        <Hexagon size={450} color={isLight ? "#9333ea" : "#a855f7"} duration={20} delay={0} opacity={0.3} x="50%" y="50%" />
        <Hexagon size={600} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={30} delay={2} opacity={0.15} x="53%" y="48%" />
        <Hexagon size={350} color={isLight ? "#6d28d9" : "#7c3aed"} duration={25} delay={5} opacity={0.25} x="47%" y="52%" />

        {/* Left Cluster */}
        <Hexagon size={400} color={isLight ? "#9333ea" : "#a855f7"} duration={22} delay={1} opacity={0.2} x="20%" y="45%" />
        <Hexagon size={550} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={35} delay={3} opacity={0.1} x="22%" y="42%" />
        <Hexagon size={300} color={isLight ? "#6d28d9" : "#7c3aed"} duration={28} delay={6} opacity={0.15} x="18%" y="48%" />
      </div>

      {/* === Content Layout: 3-column flex === */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-12 md:gap-0">

        {/* Left Side: Name */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-[35%] h-auto md:h-[200px] flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left z-20 order-2 md:order-1"
        >
          <span className={`tracking-[0.25em] uppercase text-xs md:text-sm font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r ${isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
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
          <div className="relative w-[240px] h-[300px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[500px]">
            {/* Mobile-Only Hexagons (precisely behind the image) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-[-1] md:hidden">
              <Hexagon size={300} color={isLight ? "#9333ea" : "#a855f7"} duration={22} delay={0} opacity={0.3} x="50%" y="50%" />
              <Hexagon size={380} color={isLight ? "#7c3aed" : "#8b5cf6"} duration={32} delay={2} opacity={0.2} x="50%" y="50%" />
              <Hexagon size={250} color={isLight ? "#6d28d9" : "#7c3aed"} duration={26} delay={4} opacity={0.25} x="50%" y="50%" />
            </div>

            <Image
              src="/profile.png"
              alt="Profile Image"
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 380px"
              className="object-cover object-top"
              priority
            />
            {/* Gradient fade at bottom */}
            <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t pointer-events-none ${isLight ? "from-[#f8f9fa]" : "from-[#0a0a0a]"
              } to-transparent`}></div>
          </div>
        </motion.div>

        {/* Right Side: Role */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[35%] h-auto md:h-[200px] flex flex-col items-center md:items-end justify-center md:justify-start text-center md:text-right z-20 order-3 md:order-3"
        >
          <span className={`${isLight ? "text-purple-600" : "text-purple-400"
            } tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-3`}>
            Creative
          </span>
          <div className="relative min-h-[100px] md:min-h-[150px] w-full flex items-center md:items-start justify-center md:justify-end">
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] md:leading-[1.05] tracking-tight ${isLight ? "text-gray-900" : "text-white"
              }`}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r font-extrabold pr-2 py-2 ${isLight ? "from-purple-600 to-violet-800" : "from-purple-400 to-violet-600"
                }`}>
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
                className={`inline-block w-[3px] h-[25px] md:h-[40px] lg:h-[50px] ml-1 align-middle ${isLight ? "bg-purple-600" : "bg-purple-400"
                  }`}
              />
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

