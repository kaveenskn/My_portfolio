"use client";

import Navbar from "@/components/Navbar";

import SocialIcons from "@/components/SocialIcons";
import HeroContent from "@/components/HeroContent";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <main className={`relative min-h-screen selection:bg-portfolio-accent selection:text-white transition-colors duration-500 ${
      isLight ? "bg-[#f8f9fa]" : "bg-portfolio-dark"
    }`}>
      
      {/* Background Glow Effect */}
      <div className="bg-glow"></div>

      {/* Grid overlay for a generic tech/developer look (optional, adds subtle texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      {/* Components */}
      <Navbar />
      <SocialIcons />
      <HeroContent />

    </main>
  );
}
