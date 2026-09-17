import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectOverlayScrollScene } from "@/components/animation/ProjectOverlayScrollScene";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 bg-canvas border-t border-border">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="04"
          discipline="COMMISSION PORTFOLIO & SYNTHESIS"
          title="Translating line art into permanent physical architecture."
          subtitle="Our projects progress seamlessly from monoline drafting diagrams to physical built reality. Below is the approved project overlay scene showing structural bay alignment, followed by current active commission records."
        />

        {/* Dynamic Project Transition Overlay Canvas */}
        <div className="w-full mb-16">
          <ProjectOverlayScrollScene />
        </div>

        {/* Authoritative Engineering Archive Notice */}
        <div className="mb-8 p-4 border border-border/80 bg-canvas-subtle/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-tech" />
            <span className="font-semibold text-ink-primary">AUTHORITATIVE COMMISSIONS:</span>
            <span>Verified engineering drawings and structural working sets derived directly from source CAD/BIM records.</span>
          </div>
          <Link
            href="/projects"
            className="group/link text-[11px] font-mono text-accent-tech hover:text-ink-primary flex items-center gap-1.5 uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Complete Project Index</span>
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom Archive Link Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <span className="text-ink-muted">
            All project data adheres to the practice-wide Zero Fact Fabrication policy.
          </span>
          <Link
            href="/projects"
            className="group/link inline-flex items-center gap-2 px-5 py-3 border border-ink-primary text-ink-primary hover:bg-ink-primary hover:text-canvas transition-all duration-200 tracking-wider uppercase font-semibold text-[11px]"
          >
            <span>Open Projects Monograph & Archive</span>
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

