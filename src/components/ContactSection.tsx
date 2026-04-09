"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Linkedin, Github, Twitter, Mail, Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ContactSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const WhatsappIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  // Social icons for the popup animation
  const popIcons = [
    { Icon: WhatsappIcon, color: "text-green-500", delay: 0.1, x: 0, y: 150, href: "https://wa.me/yournumber" },
    { Icon: Instagram, color: "text-pink-500", delay: 0.2, x: -90, y: -80, href: "https://instagram.com/yourprofile" },
    { Icon: Linkedin, color: "text-blue-500", delay: 0.4, x: 90, y: -120, href: "https://linkedin.com/in/yourprofile" },
    { Icon: Github, color: isLight ? "text-gray-800" : "text-white", delay: 0.6, x: -110, y: 50, href: "https://github.com/yourprofile" },
    { Icon: Twitter, color: "text-sky-400", delay: 0.8, x: 100, y: 70, href: "https://twitter.com/yourprofile" },
    { Icon: Mail, color: "text-purple-500", delay: 1.0, x: 0, y: -160, href: "mailto:your@email.com" },
  ];

  return (
    <div className="relative z-10 container mx-auto px-6 w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-12 lg:gap-24">
      
      {/* Left Side: 3D Slanted Phone Graphic */}
      <div className="w-full lg:w-1/2 flex items-center justify-center perspective-1000 h-[400px] md:h-[500px] lg:h-[580px] relative">
        
        <motion.div
          initial={{ rotateX: 60, rotateY: -30, rotateZ: -10, y: 50, opacity: 0 }}
          whileInView={{ rotateX: 30, rotateY: -15, rotateZ: 10, y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`relative w-[260px] md:w-[280px] h-[520px] md:h-[580px] rounded-[48px] border-[14px] preserve-3d shadow-2xl ${
            isLight ? "bg-white border-gray-200 shadow-gray-300" : "bg-[#0a0a0a] border-[#1a1a1a] shadow-purple-900/20"
          }`}
        >
          {/* Phone Screen Glow & Interface */}
          <div className={`absolute inset-0 rounded-[34px] overflow-hidden flex flex-col items-center justify-center ${
             isLight ? "bg-gradient-to-br from-purple-50 to-white" : "bg-gradient-to-br from-[#111] to-[#050505]"
          }`}>
            
            {/* Massive Center Light Beam */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] blur-[50px] ${
                isLight ? "bg-purple-400/40" : "bg-purple-600/50"
              }`}
            />

            {/* Phone contents behind light */}
            <div className="absolute top-4 w-1/3 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            <div className="absolute bottom-4 w-1/3 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />

            <Sparkles size={64} className={`relative z-10 animate-pulse ${isLight ? "text-purple-600" : "text-purple-400"}`} />
            <p className={`relative z-10 mt-4 text-xs font-bold uppercase tracking-widest ${isLight ? "text-purple-600" : "text-purple-400"}`}>
              Drop a line
            </p>
          </div>

          {/* Popping Icons - Translated in Z space */}
          {popIcons.map((item, idx) => (
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, z: -50 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                x: item.x, 
                y: item.y, 
                z: 80 // Float out of the screen
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5 + item.delay,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              whileHover={{ scale: 1.15, z: 120 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 md:p-4 rounded-2xl shadow-2xl backdrop-blur-md border cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all ${
                isLight ? "bg-white/90 border-white shadow-black/10" : "bg-white/10 border-white/30 shadow-black/50 hover:bg-white/20"
              } ${item.color}`}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
              >
                <item.Icon size={26} />
              </motion.div>
            </motion.a>
          ))}

        </motion.div>

        {/* Contact background glow removed - now handled by global Background.tsx */}
      </div>

      {/* Right Side: Redesigned Compact Contact Form */}
      <div className="w-full lg:w-1/2 max-w-[420px] relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 md:p-10 rounded-[36px] border relative overflow-hidden transition-all duration-500 ${
            isLight 
            ? "bg-gradient-to-b from-purple-100 to-white border-purple-200/50 shadow-[0_15px_60px_rgba(168,85,247,0.25)]" 
            : "bg-gradient-to-b from-purple-900/40 to-[#050505] border-purple-500/30 shadow-[0_15px_60px_rgba(168,85,247,0.35)]"
          }`}
        >
          <div className="mb-8">
            <h2 className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${
              isLight ? "text-gray-900" : "text-white"
            }`}>
              Say <span className="text-purple-500">Hello_</span>
            </h2>
            <p className={`text-xs md:text-sm font-medium ${isLight ? "text-gray-500" : "text-gray-400"}`}>
              Drop a message and let's work together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-5 py-4 rounded-xl border bg-transparent outline-none transition-all text-sm font-medium ${
                  isLight 
                  ? "border-black/5 focus:border-purple-500 hover:bg-black/5 focus:bg-white text-black placeholder:text-gray-400" 
                  : "border-white/5 focus:border-purple-500 hover:bg-white/5 focus:bg-[#111] text-white placeholder:text-gray-500"
                }`}
                placeholder="Your Name"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-5 py-4 rounded-xl border bg-transparent outline-none transition-all text-sm font-medium ${
                  isLight 
                  ? "border-black/5 focus:border-purple-500 hover:bg-black/5 focus:bg-white text-black placeholder:text-gray-400" 
                  : "border-white/5 focus:border-purple-500 hover:bg-white/5 focus:bg-[#111] text-white placeholder:text-gray-500"
                }`}
                placeholder="Email Address"
              />
            </div>

            <div>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-5 py-4 rounded-xl border bg-transparent outline-none transition-all resize-none text-sm font-medium ${
                  isLight 
                  ? "border-black/5 focus:border-purple-500 hover:bg-black/5 focus:bg-white text-black placeholder:text-gray-400" 
                  : "border-white/5 focus:border-purple-500 hover:bg-white/5 focus:bg-[#111] text-white placeholder:text-gray-500"
                }`}
                placeholder="Project Details..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-4 mt-2 rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all shadow-lg ${
                isLight
                ? "bg-black text-white hover:bg-purple-600 hover:shadow-purple-500/20"
                : "bg-white text-black hover:bg-purple-500 hover:text-white hover:shadow-purple-500/20"
              }`}
            >
              {status === "idle" && (
                <>Send Message <Send size={14} /></>
              )}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Delivered!"}
            </button>
          </form>
        </motion.div>
      </div>

    </div>
  );
}
