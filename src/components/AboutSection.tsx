"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { MapPin, Mail, Phone, Calendar, Download } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const [pulse, setPulse] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(id);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      label: "LOCATION",
      value: "Sri Lanka",
    },
    {
      icon: <Mail size={24} />,
      label: "EMAIL",
      value: "shanmugarajakaveen@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "PHONE",
      value: "Available on request",
    },
    {
      icon: <Calendar size={24} />,
      label: "AVAILABILITY",
      value: "Open to opportunities",
    },
  ];

  return (
    <div className="relative w-full flex flex-col pt-4 pb-24 px-6 md:px-12 lg:pl-36 lg:pr-10 overflow-hidden">
      {/* Section Title */}
      <div className="w-full flex items-center justify-center mb-16 md:mb-20">
        <h2
          className={`gsap-reveal text-4xl md:text-6xl lg:text-6xl font-black tracking-tight leading-none text-center ${isLight ? "text-gray-900" : "text-white"}`}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">Me</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left Column */}
        <div
          className="gsap-reveal-left flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Pill */}
          <div className={`w-fit px-5 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase mb-6 ${isLight ? "bg-cyan-100/80 text-cyan-500" : "bg-cyan-900/30 text-cyan-400"}`}>
            ABOUT ME
          </div>

          {/* Heading */}
          <h2 className={`text-4xl lg:text-5xl font-black mb-6 leading-[1.1] tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
            Building <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">
              innovative software
            </span>
          </h2>

          {/* Paragraph */}
          <p className={`text-base md:text-md leading-[1.8] mb-12 max-w-2xl font-medium ${isLight ? "text-gray-600" : "text-gray-400"}`}>
            I'm a Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka with a strong interest in software development, web technologies, and mobile application engineering. I enjoy building scalable, user-focused applications and solving real-world problems through clean and efficient software solutions. Passionate about continuous learning, I actively explore modern technologies while developing projects that strengthen my skills in full-stack and mobile application development.
          </p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mb-14 w-full place-items-center lg:place-items-start">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5">
                <div className={`mt-0.5 flex-shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center transition-colors ${isLight ? "bg-[#F0EDFC] text-indigo-500" : "bg-indigo-900/30 text-indigo-400"}`}>
                  {item.icon}
                </div>
                <div className="flex flex-col pt-1 items-center lg:items-start">
                  <span className={`text-xs font-black tracking-[0.15em] mb-1.5 ${isLight ? "text-gray-400" : "text-gray-500"}`}>
                    {item.label}
                  </span>
                  <span className={`text-base md:text-[17px] font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="/ShanmugarajaKaveen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit px-8 py-4 rounded-full font-bold flex items-center gap-3 text-white shadow-[0_15px_30px_-10px] text-sm transition-all bg-gradient-to-r from-[#a855f7] to-[#00e5ff] shadow-[#a855f7]/30 hover:shadow-[#00e5ff]/50"
          >
            Download CV
            <Download size={18} />
          </motion.a>
        </div>

        {/* Right Column — Profile Image */}
        <div
          className="gsap-reveal-right relative flex justify-center w-full mx-auto max-w-[380px] lg:max-w-none lg:justify-center py-10 lg:py-0"
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: isLight
                ? "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Main Frame */}
          <div className={`relative w-full max-w-[360px] aspect-[4/5] p-[2px] z-20 mx-auto lg:my-auto ${
            isLight ? "bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.15)]" : "bg-gradient-to-br from-[#a855f7] to-[#00e5ff] shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          }`}>
            <div className={`relative w-full h-full ${isLight ? "bg-white" : "bg-[#070b14]"}`}>

              {/* AVAILABLE badge */}
              <div className={`absolute -top-[2px] right-[-2px] translate-x-[28px] sm:translate-x-[44px] -translate-y-[22px] p-[2px] flex items-center z-30 ${
                isLight ? "bg-blue-600" : "bg-gradient-to-r from-[#00e5ff] to-[#a855f7]"
              }`}>
                <div className={`px-4 py-[7px] w-full h-full flex items-center gap-2.5 ${isLight ? "bg-white" : "bg-[#070b14]"}`}>
                  <motion.div
                    className={`w-[7px] h-[7px] rounded-full ${isLight ? "bg-blue-600" : "bg-[#00e5ff]"}`}
                    animate={{ opacity: pulse ? 1 : 0.25 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span
                    className={`text-[10px] font-black tracking-[0.15em] uppercase ${isLight ? "text-blue-600" : "text-white"}`}
                  >
                    AVAILABLE
                  </span>
                </div>
              </div>

              {/* EST . 2025 tag */}
              <div className={`absolute -bottom-[2px] left-[-2px] -translate-x-[28px] sm:-translate-x-[44px] translate-y-[22px] px-5 py-2.5 z-30 ${
                isLight ? "bg-blue-600" : "bg-gradient-to-r from-[#a855f7] to-[#00e5ff]"
              }`}>
                <span
                  className={`text-[10px] font-black tracking-[0.15em] uppercase ${isLight ? "text-white" : "text-[#070b14]"}`}
                >
                  SE . 2026
                </span>
              </div>

              {/* Inner padded image area */}
              <div className="absolute inset-[12px] bg-transparent">
                <Image
                  src="/profile.png"
                  alt="Shanmugaraja Kaveen"
                  fill
                  priority
                  className={`object-cover object-top transition-all duration-700 hover:grayscale ${isLight
                    ? "hover:brightness-[0.95] hover:contrast-[1.1]"
                    : "hover:brightness-[0.82] hover:contrast-[1.2]"
                    }`}
                  sizes="(max-width: 768px) 340px, 360px"
                />

                {/* Vertical side text */}
                <div className="absolute top-1/2 right-4 sm:right-5 transform -translate-y-1/2 rotate-90 origin-right mix-blend-difference opacity-70 pointer-events-none">
                  <span
                    className="text-white text-[8px] tracking-[5px] uppercase whitespace-nowrap font-bold"
                  >
                    ▲ FRAME ^__^ / ABOUT ME
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
