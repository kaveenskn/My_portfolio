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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${isLight ? "text-gray-900" : "text-white"}`}
        >
          Let&apos;s <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? "from-cyan-600 to-blue-800" : "from-cyan-400 to-blue-600"}`}>Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`max-w-xl text-sm md:text-base ${isLight ? "text-gray-600" : "text-gray-400"}`}
        >
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Info Cards */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-[40px] shadow-xl relative overflow-hidden mb-2 transition-all border ${isLight 
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
                className={`inline-flex items-center justify-center gap-2 transition-all px-6 py-3.5 rounded-xl text-sm font-bold shadow-sm ${isLight 
                  ? "bg-cyan-600 text-white hover:bg-cyan-700" 
                  : "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10"}`}
              >
                Send Email <ArrowRight size={16} />
              </a>
            </div>
            {/* Soft background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          </motion.div>

          {/* Small contact list cards */}
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel={item.href !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              className={`flex items-center gap-4 py-3 px-4 rounded-2xl border transition-all ${isLight
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
            </motion.a>
          ))}
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`md:col-span-7 p-6 md:p-8 rounded-[40px] border transition-all ${isLight
              ? "bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              : "bg-gradient-to-b from-blue-600/20 via-[#0D0D0D] to-[#101010] border-blue-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            }`}
        >
          <h3 className={`text-xl font-black tracking-tight mb-8 ${isLight ? "text-gray-900" : "text-white"}`}>Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
              <div className="space-y-2">
                <label className={`text-[10px] font-black uppercase tracking-[0.15em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                    ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]"
                    : "border-[#222] focus:border-cyan-500 text-white placeholder:text-[#555] bg-[#0a0a0a]"
                    }`}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className={`text-[10px] font-black uppercase tracking-[0.15em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                    ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]"
                    : "border-[#222] focus:border-cyan-500 text-white placeholder:text-[#555] bg-[#0a0a0a]"
                    }`}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-[10px] font-black uppercase tracking-[0.15em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none transition-all text-sm font-medium ${isLight
                  ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]"
                  : "border-[#222] focus:border-cyan-500 text-white placeholder:text-[#555] bg-[#0a0a0a]"
                  }`}
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label className={`text-[10px] font-black uppercase tracking-[0.15em] ${isLight ? "text-gray-500" : "text-gray-400"}`}>Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3.5 rounded-xl border bg-transparent outline-none transition-all resize-none text-sm font-medium ${isLight
                  ? "border-gray-200 focus:border-cyan-500 text-gray-900 placeholder:text-gray-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]"
                  : "border-[#222] focus:border-cyan-500 text-white placeholder:text-[#555] bg-[#0a0a0a]"
                  }`}
                placeholder="Tell me about your project or just say hi.."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-4 mt-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all text-white shadow-[0_15px_30px_-10px] ${isLight ? "bg-gradient-to-r from-blue-600 to-cyan-400 shadow-blue-500/40 hover:shadow-cyan-500/50" : "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-blue-500/30"}`}
            >
              {status === "idle" && (
                <>Send Message <Send size={16} /></>
              )}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Delivered!"}
            </button>
          </form>
        </motion.div>
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
              className={`p-3 md:p-4 rounded-full transition-all text-white shadow-lg ${isLight
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-110"
                  : "bg-gradient-to-r from-cyan-600 to-blue-700 shadow-cyan-900/40 hover:shadow-cyan-400/20 hover:scale-110"
                }`}
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

