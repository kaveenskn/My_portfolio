"use client";

import Navbar from "@/components/Navbar";

import SocialIcons from "@/components/SocialIcons";
import AboutSection from "@/components/AboutSection";
import Background from "@/components/Background";
import { useTheme } from "@/components/ThemeProvider";

export default function AboutPage() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-purple-500/30">
      <Background />
      
      {/* Background Glow Effect - Handled by Background component */}

      {/* Components */}
      <Navbar />
      <SocialIcons />
      <div className="pt-32 pb-20 px-4"> 
        <AboutSection />
      </div>

    </main>
  );
}
