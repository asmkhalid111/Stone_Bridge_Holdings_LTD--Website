import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { ProjectsIndexMotion } from "@/components/animation/ProjectsIndexMotion";
import { ArrowLeft, CheckCircle2, FileText, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Technical Drawings Archive | Stone Bridge Holdings",
  description:
    "Explore authoritative architectural and structural engineering case studies from Stone Bridge Holdings, including pre-fabricated steel structures and multi-storied residential developments in Dhaka.",
};

export default function ProjectsPage() {
  return (
    <div className="relative w-full pt-28 pb-24 bg-canvas min-h-screen">
      <Container gridGuides>
        <ProjectsIndexMotion>
          {/* Top Breadcrumb & Technical Telemetry */}
          <div
            data-motion="breadcrumb"
            className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-border/80 font-mono text-xs text-ink-muted"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 hover:text-ink-primary transition-colors uppercase tracking-wider text-[11px]"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.5}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>Return to Studio Main</span>
            </Link>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-ink-subtle">
              <span>INDEX: ARCHIVE-2026</span>
              <span>&bull;</span>
              <span className="text-ink-primary font-semibold">VERIFIED CAD/BIM RECORDS</span>
            </div>
          </div>

          {/* Section Header */}
          <div data-motion="heading" className="mb-16">
            <SectionHeading
              phaseNumber="04"
              discipline="ARCHITECTURAL COMMISSIONS & CASE STUDIES"
              title="Structural precision translated into physical built environments."
              subtitle="The Stone Bridge Holdings project archive documents active and completed commissions with absolute engineering transparency. Every case study below is grounded in verified CAD and BIM working drawings."
            />
          </div>

          {/* Practice Policy & Telemetry Banner */}
          <div
            data-motion="policy"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 p-6 border border-border/80 bg-canvas-subtle/40 font-mono text-xs"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} strokeWidth={1.5} className="text-accent-tech shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-ink-primary block uppercase tracking-wider mb-1">
                  Zero Fact Fabrication
                </span>
                <p className="text-ink-muted leading-relaxed text-[11px]">
                  All spans, elevations, member sizes, and consultant attributions are derived from certified engineering sets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers size={18} strokeWidth={1.5} className="text-accent-tech shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-ink-primary block uppercase tracking-wider mb-1">
                  Vector Accuracy
                </span>
                <p className="text-ink-muted leading-relaxed text-[11px]">
                  Production SVG drawings preserve 1:1 CAD coordinate accuracy, semantic layer hierarchy, and scale fidelity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText size={18} strokeWidth={1.5} className="text-accent-tech shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-ink-primary block uppercase tracking-wider mb-1">
                  Drawings-First Lifecycle
                </span>
                <p className="text-ink-muted leading-relaxed text-[11px]">
                  Active records provide complete sheet inspection while site construction and final photography are underway.
                </p>
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="mb-20">
            <div
              data-motion="cards-header"
              className="flex items-center justify-between pb-4 mb-8 border-b border-border font-mono text-xs text-ink-muted uppercase"
            >
              <span>ACTIVE MONOGRAPH RECORDS ({PROJECTS.length})</span>
              <span>SORT: COMMISSION ORDER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <div key={project.id} data-motion="card">
                  <ProjectCard project={project} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Media Transparency Statement */}
          <div data-motion="ledger" className="p-8 border border-border bg-canvas-elevated">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-primary font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} strokeWidth={1.25} className="text-emerald-600" />
              <span>Practice Media Transparency Statement</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-ink-secondary leading-relaxed font-light">
              <p>
                In accordance with our core design principles, Stone Bridge Holdings does not publish synthetic 3D renders
                or generic architectural stock photography for real projects. The case studies in this archive reflect genuine
                engineering submissions, permit approvals, and active structural documentation.
              </p>
              <p>
                As each project breaks ground and progresses through steel erection, post-tensioning, and facade installation,
                photographic documentation from site engineers will be integrated directly alongside the corresponding drawing layers.
              </p>
            </div>
          </div>
        </ProjectsIndexMotion>
      </Container>
    </div>
  );
}
