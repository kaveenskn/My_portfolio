"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30">
      {/* Background Effects matching the theme */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Components */}
      <Navbar />
      <SocialIcons />
      
      <div className="relative z-10 pt-20"> {/* Padding for the fixed Navbar */}
        <ProjectsSection />
      </div>
    </main>
  );
}
