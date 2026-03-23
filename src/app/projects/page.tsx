"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import ProjectsSection from "@/components/ProjectsSection";
import Background from "@/components/Background";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-purple-500/30">
      <Background />
      {/* Background Effects matching the theme - Handled by Background component */}

      {/* Components */}
      <Navbar />
      <SocialIcons />
      
      <div className="relative z-10"> {/* Padding removed here to fix background gap */}
        <ProjectsSection />
      </div>
    </main>
  );
}
