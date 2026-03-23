"use client";

import Navbar from "@/components/Navbar";

import SocialIcons from "@/components/SocialIcons";
import HeroContent from "@/components/HeroContent";
import Background from "@/components/Background";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <main className="relative min-h-screen selection:bg-purple-500/30">
      <Background />
      
      {/* Background Glow Effect - Handled by Background component */}

      {/* Components */}
      <Navbar />
      <SocialIcons />
      <HeroContent />

    </main>
  );
}
