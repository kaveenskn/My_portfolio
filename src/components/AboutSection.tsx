"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { MapPin, Mail, Phone, Calendar, Download, Code2, Smartphone, Bot, Database } from "lucide-react";
import CartoonBoy from "./CartoonBoy";

export default function AboutSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

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

  const pillBadges = [
    "Full Stack Developer",
    "Mobile App Developer",
    "OpenAI API Integration",
    "Backend & Architecture"
  ];

  return (
    <div className="relative w-full flex flex-col pt-4 pb-24 px-6 md:px-12 lg:pl-36 lg:pr-10 overflow-hidden">
      {/* Section Title */}
      <div className="w-full flex items-center justify-center mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl lg:text-6xl font-black tracking-tight leading-none text-center ${isLight ? "text-gray-900" : "text-white"}`}
        >
          About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-cyan-600 to-blue-800" : "from-cyan-400 to-blue-600"}`}>Me</span>
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Pill */}
          <div className={`w-fit px-5 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase mb-6 ${isLight ? "bg-cyan-100/80 text-cyan-500" : "bg-cyan-900/30 text-cyan-400"}`}>
            ABOUT ME
          </div>

          {/* Heading */}
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
            Building <br className="hidden md:block" />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-blue-600 to-cyan-400" : "from-blue-500 to-cyan-300"}`}>
              innovative software
            </span>
          </h2>

          {/* Paragraph */}
          <p className={`text-base md:text-lg leading-[1.8] mb-12 max-w-2xl font-medium ${isLight ? "text-gray-600" : "text-gray-400"}`}>
            I&apos;m a passionate full-stack developer pursuing Software Engineering at Sabaragamuwa University of Sri Lanka. I am particularly interested in mobile application development and love turning complex problems into elegant, user-centric solutions. When I&apos;m not coding, I&apos;m exploring new technologies or building exciting side projects.
          </p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mb-14">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className={`mt-0.5 flex-shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center transition-colors ${isLight ? "bg-[#F0EDFC] text-indigo-500" : "bg-indigo-900/30 text-indigo-400"}`}>
                  {item.icon}
                </div>
                <div className="flex flex-col pt-1">
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-fit px-8 py-4 rounded-full font-bold flex items-center gap-3 text-white shadow-[0_15px_30px_-10px] text-sm transition-all ${isLight ? "bg-gradient-to-r from-blue-600 to-cyan-400 shadow-blue-500/40 hover:shadow-cyan-500/50" : "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-blue-500/30"}`}
          >
            Download CV
            <Download size={18} />
          </motion.button>
        </motion.div>

        {/* Right Column — Cartoon Boy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex flex-col items-center lg:items-end justify-center py-10 lg:py-0"
        >
          <CartoonBoy />
        </motion.div>

      </div>
    </div>
  );
}
