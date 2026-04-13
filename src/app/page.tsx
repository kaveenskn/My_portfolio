"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import HeroContent from "@/components/HeroContent";
import AboutSection from "@/components/AboutSection";
import StudiesAndSkillsSection from "@/components/StudiesAndSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Background from "@/components/Background";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <main className="relative min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <Background />
      
      {/* Background Glow Effect - Handled by Background component */}

      {/* Components */}
      <Navbar />
      <SocialIcons />
      
      {/* Sections sequentially */}
      <div className="flex flex-col relative z-10 w-full">
        {/* Home Section */}
        <section id="home" className="flex items-center justify-center w-full min-h-screen scroll-mt-28">
          <HeroContent />
        </section>
        
        {/* About Section */}
        <section id="about" className="w-full pt-4 md:pt-8 pb-16 md:pb-20 scroll-mt-28">
          <AboutSection />
        </section>

        {/* Studies & Skills Section */}
        <section id="studies-skills" className="w-full scroll-mt-28">
          <StudiesAndSkillsSection />
        </section>
        
        {/* Projects Section */}
        <div id="projects" className="w-full scroll-mt-28">
          <ProjectsSection />
        </div>

        {/* Contact Section */}
        <section id="contact" className="w-full pt-4 md:pt-8 pb-16 md:pb-24 scroll-mt-28">
          <ContactSection />
        </section>
      </div>

    </main>
  );
}
