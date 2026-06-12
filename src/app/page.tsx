"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import AboutSection from "@/components/AboutSection";
import StudiesAndSkillsSection from "@/components/StudiesAndSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Background from "@/components/Background";
import VideoIntroSection from "@/components/VideoIntroSection";
import GsapSection from "@/components/GsapSection";


export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-purple-500/30 overflow-clip">
      <Background />

      {/* Background Glow Effect - Handled by Background component */}

      {/* Components */}
      <Navbar />
      <SocialIcons />

      {/* Sections sequentially */}
      <div className="flex flex-col gap-20 md:gap-32 relative z-10 w-full">
        {/* Scroll-scrubbed video intro */}
        <VideoIntroSection />




        {/* About Section */}
        <GsapSection id="about" className="w-full pt-0 pb-4 md:pb-8 scroll-mt-20">
          <AboutSection />
        </GsapSection>

        {/* Studies & Skills Section */}
        <GsapSection id="studies-skills" className="w-full scroll-mt-20 -mt-16 md:-mt-32">
          <StudiesAndSkillsSection />
        </GsapSection>

        {/* Projects Section */}
        <GsapSection id="projects" className="w-full scroll-mt-20">
          <ProjectsSection />
        </GsapSection>

        {/* Contact Section */}
        <GsapSection id="contact" className="w-full pt-0 pb-16 md:pb-24 scroll-mt-20">
          <ContactSection />
        </GsapSection>
      </div>

    </main>
  );
}
