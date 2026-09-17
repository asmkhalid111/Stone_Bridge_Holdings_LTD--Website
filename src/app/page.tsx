import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative w-full flex flex-col">
      {/* 01. Hero Architectural Construction Sequence */}
      <HeroSection />

      {/* 02. Studio Discipline & Philosophy */}
      <StudioSection />

      {/* 03. Architecture & Spatial Plan (floor-plan.svg) */}
      <ArchitectureSection />

      {/* 04. Construction Logic & Process (structural-sequence.svg) */}
      <ProcessSection />

      {/* 05. Selected Commissions & Overlay (project-overlay.svg) */}
      <ProjectsSection />

      {/* 06. Technical Capabilities & Engineering */}
      <ExpertiseSection />

      {/* 07. Engagement & Cadastre Inquiry Form */}
      <ContactSection />
    </div>
  );
}
