"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Linkedin, Github, Facebook, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ContactSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject || `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shanmugarajakaveen4@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

    window.open(gmailUrl, "_blank");
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const WhatsappIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  // Social icons to render at the bottom
  const socialIcons = [
    { Icon: WhatsappIcon, href: "https://wa.me/yournumber", label: "WhatsApp" },
    { Icon: Instagram, href: "https://www.instagram.com/mztr_kaveen_?igsh=cThoZHpsbzh2YXM3&utm_source=qr", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/shanmugaraja-kaveen/", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/kaveenskn", label: "GitHub" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1TLjA11Aeh/", label: "Facebook" },
    { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=shanmugarajakaveen4@gmail.com", label: "Email" },
  ];

  const contactInfo = [
    { label: "EMAIL", value: "shanmugarajakaveen4@gmail.com", icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=shanmugarajakaveen4@gmail.com" },
    { label: "GITHUB", value: "kaveenskn", icon: Github, href: "https://github.com/kaveenskn" },
    { label: "LINKEDIN", value: "kaveenskn", icon: Linkedin, href: "https://www.linkedin.com/in/shanmugaraja-kaveen/" },
    { label: "LOCATION", value: "Sri Lanka", icon: MapPin, href: "#" }
  ];

  return (
    <div className="w-full flex flex-col pt-20 pb-10">
      {/* Title Header */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center justify-center text-center">
        <h2
          className={`gsap-reveal text-4xl md:text-6xl font-black tracking-tight mb-4 ${isLight ? "text-gray-900" : "text-white"}`}
        >
          Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">Connect</span>
        </h2>
        <p
          className={`gsap-reveal max-w-xl text-sm md:text-base ${isLight ? "text-gray-600" : "text-gray-400"}`}
        >
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Info Cards */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div
            className={`gsap-reveal-left p-8 rounded-[40px] shadow-xl relative overflow-hidden mb-2 transition-all border ${isLight 
              ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-gray-900" 
              : "bg-gradient-to-b from-blue-600/20 via-[#0D0D0D] to-[#101010] border-blue-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white"
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className={`text-sm mb-8 leading-relaxed font-medium ${isLight ? "text-gray-600" : "text-white/80"}`}>
                Currently seeking internship and full-time roles in software development. Let&apos;s build something amazing together.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shanmugarajakaveen4@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 transition-all px-6 py-3.5 rounded-xl text-sm font-bold shadow-sm bg-gradient-to-r from-[#a855f7] to-[#00e5ff] text-white hover:opacity-90 border-none"
              >
                Send Email <ArrowRight size={16} />
              </a>
            </div>
            {/* Soft background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          </div>

          {/* Small contact list cards */}
          {contactInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel={item.href !== "#" ? "noopener noreferrer" : undefined}
              className={`gsap-reveal-left flex items-center gap-4 py-3 px-4 rounded-2xl border transition-all ${isLight
                ? "bg-white/80 border-gray-200/50 shadow-md hover:border-cyan-500/30"
                : "bg-gradient-to-b from-blue-600/10 via-[#0D0D0D] to-[#101010] border-blue-500/20 hover:border-cyan-500/50 shadow-lg"
                }`}
            >
              <div className={`p-3 rounded-xl flex-shrink-0 ${isLight ? "bg-cyan-50 text-cyan-600" : "bg-[#0d0d12] text-[#3b82f6]"}`}>
                <item.icon size={18} />
              </div>
              <div className="overflow-hidden flex flex-col justify-center">
                <p className={`text-[10px] uppercase font-black tracking-[0.15em] mb-0.5 ${isLight ? "text-gray-400" : "text-gray-500"}`}>
                  {item.label}
                </p>
                <p className={`text-sm font-medium truncate ${isLight ? "text-gray-800" : "text-white"}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Right Side: Contact Form (Phone Mockup) */}
        <div
          className="gsap-reveal-right md:col-span-7 flex justify-center items-center relative py-6"
        >
          {/* Ambient Glow behind phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/20 to-[#00e5ff]/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Phone Mockup Container */}
          <div className={`relative w-full max-w-[380px] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] shadow-2xl overflow-hidden transition-all ${
            isLight 
              ? "border-gray-900 bg-gray-50 shadow-[0_30px_60px_rgba(0,0,0,0.2)]" 
              : "border-[#151515] bg-[#0a0a0a] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          }`}>
            
            {/* Phone Camera Notch */}
            <div className="absolute top-0 inset-x-0 flex justify-center z-20 pointer-events-none">
              <div className={`w-32 h-6 md:h-7 rounded-b-3xl ${isLight ? "bg-gray-900" : "bg-[#151515]"}`}></div>
            </div>

              {/* Phone Screen Content */}
              <div className={`h-full w-full px-5 py-8 pt-10 md:pt-12 flex flex-col relative z-10 ${isLight ? "bg-white" : "bg-[#0d0d0d]"}`}>
              <div className="text-center mb-6">
                <h3 className={`text-xl md:text-2xl font-black tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>Message Me</h3>
                <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isLight ? "text-cyan-600" : "text-cyan-400"}`}>Stay Connected</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                <div className="space-y-1.5">
                  <label className={`text-[9px] font-black uppercase tracking-[0.1em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                      ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] bg-gray-50/50"
                      : "border-[#222] focus:border-cyan-500 text-white placeholder:text-white/60 bg-[#111]"
                      }`}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className={`text-[9px] font-black uppercase tracking-[0.1em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                      ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] bg-gray-50/50"
                      : "border-[#222] focus:border-cyan-500 text-white placeholder:text-white/60 bg-[#111]"
                      }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-[9px] font-black uppercase tracking-[0.1em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                      ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] bg-gray-50/50"
                      : "border-[#222] focus:border-cyan-500 text-white placeholder:text-white/60 bg-[#111]"
                      }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-1.5 pb-2">
                  <label className={`text-[9px] font-black uppercase tracking-[0.1em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Message</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border bg-transparent outline-none transition-all resize-none text-sm font-medium ${isLight
                      ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] bg-gray-50/50"
                      : "border-[#222] focus:border-cyan-500 text-white placeholder:text-white/60 bg-[#111]"
                      }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all text-white bg-gradient-to-r from-[#a855f7] to-[#00e5ff] shadow-[0_10px_20px_-10px] shadow-[#a855f7]/40 hover:shadow-[#00e5ff]/60 mb-2"
                >
                  {status === "idle" && (
                    <>Send Message <Send size={16} /></>
                  )}
                  {status === "submitting" && "Sending..."}
                  {status === "success" && "Delivered!"}
                </button>
              </form>
            </div>
            
            {/* Phone Home Bar */}
            <div className="absolute bottom-1.5 inset-x-0 flex justify-center pointer-events-none z-20">
              <div className={`w-1/3 h-1 md:h-1.5 rounded-full ${isLight ? "bg-gray-300" : "bg-[#333]"}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons mapped dynamically at the end */}
      <div className={`mt-24 w-full max-w-7xl mx-auto px-6 border-t pt-10 flex flex-col items-center ${isLight ? "border-gray-200" : "border-[#222]"}`}>
        <p className={`text-sm mb-6 font-medium ${isLight ? "text-gray-500" : "text-gray-500"}`}>Connect with me on social media</p>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          {socialIcons.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 md:p-4 rounded-full transition-all text-white shadow-lg bg-gradient-to-r from-[#a855f7] to-[#00e5ff] shadow-[#a855f7]/20 hover:shadow-[#00e5ff]/40 hover:scale-110"
              title={item.label}
            >
              <item.Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

