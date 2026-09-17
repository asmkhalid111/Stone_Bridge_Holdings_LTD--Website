import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProjectDrawingViewer } from "@/components/ui/ProjectDrawingViewer";
import { ProjectRenderGallery } from "@/components/ui/ProjectRenderGallery";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { ProjectDetailMotion } from "@/components/animation/ProjectDetailMotion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  HardHat,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Stone Bridge Holdings",
    };
  }

  const locationString = `${project.location.area}, ${project.location.city}`;

  return {
    title: `${project.shortTitle} — Architectural & Structural Monograph | Stone Bridge Holdings`,
    description: `${project.title}. Located in ${locationString}. ${project.summary}`,
    openGraph: {
      title: `${project.shortTitle} | Stone Bridge Holdings`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const locationString = [
    project.location.plot,
    project.location.road,
    project.location.block,
    project.location.area,
    project.location.city,
    project.location.country,
  ]
    .filter(Boolean)
    .join(", ");

  const allProjects = getAllProjects();
  const relatedProjects = allProjects.filter((p) =>
    project.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="relative w-full pt-28 pb-24 bg-canvas min-h-screen">
      <Container gridGuides>
        <ProjectDetailMotion>
          {/* Navigation Breadcrumb Bar */}
          <div
            data-detail-motion="breadcrumb"
            className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-border/80 font-mono text-xs text-ink-muted"
          >
            <Link
              href="/projects"
              className="group/link inline-flex items-center gap-2 hover:text-ink-primary transition-colors uppercase tracking-wider text-[11px]"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.5}
                className="group-hover/link:-translate-x-1 transition-transform duration-200"
              />
              <span>Projects Archive</span>
            </Link>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] uppercase tracking-widest text-ink-subtle">
              {project.referenceNo && <span>REF: {project.referenceNo}</span>}
              <span className="hidden sm:inline">&bull;</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 size={12} strokeWidth={1.25} />
                <span>PRODUCTION AUTHORIZED</span>
              </span>
            </div>
          </div>

          {/* Project Header & Identification */}
          <header data-detail-motion="header" className="mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-tech uppercase tracking-widest mb-3">
              <Compass size={14} strokeWidth={1.5} />
              <span>{project.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink-primary max-w-5xl mb-6">
              {project.marketingTitle ? (
                <span className="block font-semibold mb-2">{project.marketingTitle}</span>
              ) : null}
              <span className={project.marketingTitle ? "text-xl sm:text-2xl text-ink-secondary block" : ""}>
                {project.title}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-secondary font-light max-w-3xl leading-relaxed mb-8">
              {project.summary}
            </p>

            {/* Primary Datum Matrix */}
            <div
              data-detail-motion="datum-matrix"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 border border-border bg-canvas-subtle/50 font-mono text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-ink-subtle text-[10px] uppercase tracking-wider">
                  <MapPin size={12} strokeWidth={1.5} />
                  <span>Location</span>
                </div>
                <p className="text-ink-primary font-medium text-xs truncate">
                  {project.location.area}, {project.location.city}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-ink-subtle text-[10px] uppercase tracking-wider">
                  <User size={12} strokeWidth={1.5} />
                  <span>Client / Owner</span>
                </div>
                <p className="text-ink-primary font-medium text-xs">
                  {project.client || "Confidential"}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-ink-subtle text-[10px] uppercase tracking-wider">
                  <Calendar size={12} strokeWidth={1.5} />
                  <span>Drawing Datum</span>
                </div>
                <p className="text-ink-primary font-medium text-xs">
                  {project.submissionDate || project.year}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-ink-subtle text-[10px] uppercase tracking-wider">
                  <Building2 size={12} strokeWidth={1.5} />
                  <span>Commission Status</span>
                </div>
                <p className="text-emerald-600 font-semibold text-xs tracking-wider">
                  {project.status}
                </p>
              </div>
            </div>
          </header>

          {/* Section 01: Architectural & Structural Drawing Presentation */}
          <section data-detail-motion="drawing" className="mb-20">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-border font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-primary uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-accent-tech" />
                <span>01 / CERTIFIED STRUCTURAL DRAWING VIEWPORT</span>
              </div>
              <span className="text-[10px] text-ink-muted uppercase">
                1:1 POSTSCRIPT VECTOR EXTRACTION
              </span>
            </div>

            <ProjectDrawingViewer
              drawings={project.drawings}
              projectTitle={project.title}
            />
          </section>

          {/* Section 02: Narrative, Attributions & Scope */}
          <section
            data-detail-motion="narrative"
            className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-border font-mono text-xs text-ink-primary uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-ink-primary" />
                <span>02 / STRUCTURAL SYNTHESIS &amp; SPECIFICATION</span>
              </div>

              <div className="space-y-4 text-ink-secondary text-sm sm:text-base leading-relaxed font-normal">
                <p>{project.description}</p>
              </div>

              {/* Scope / Services Badges */}
              <div className="pt-4 border-t border-border/60">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-subtle mb-3">
                  COMMISSION SCOPE &amp; DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((svc) => (
                    <span
                      key={svc}
                      className="px-2.5 py-1 border border-border bg-canvas-subtle text-ink-primary font-mono text-xs"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Attributions & Full Location Ledger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-border font-mono text-xs text-ink-primary uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-ink-primary" />
                <span>CONSULTANT ATTESTATION</span>
              </div>

              {project.consultants && project.consultants.length > 0 && (
                <div className="space-y-3 p-5 border border-border bg-canvas-elevated">
                  {project.consultants.map((c, i) => (
                    <div
                      key={i}
                      className={`${
                        i > 0 ? "pt-3 border-t border-border/40" : ""
                      } font-mono text-xs`}
                    >
                      <span className="text-[10px] uppercase tracking-wider text-ink-subtle block">
                        {c.role}
                      </span>
                      <span className="text-ink-primary font-semibold block">
                        {c.name}
                      </span>
                      {c.credentials && (
                        <span className="text-ink-muted text-[11px] block">
                          {c.credentials}
                        </span>
                      )}
                      {c.address && (
                        <span className="text-ink-subtle text-[10px] block mt-1 leading-normal">
                          {c.address}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Cadastre & Full Address */}
              <div className="p-5 border border-border bg-canvas-subtle/40 font-mono text-xs space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-ink-subtle block">
                  SITE CADASTRE RECORD
                </span>
                <p className="text-ink-primary leading-relaxed text-xs">
                  {locationString}
                </p>
              </div>
            </div>
          </section>

          {/* Section 03: Technical Specifications Matrix */}
          <section data-detail-motion="specs" className="mb-20">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-border font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-primary uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-accent-tech" />
                <span>03 / VERIFIED TECHNICAL SPECIFICATIONS MATRIX</span>
              </div>
              <span className="text-[10px] text-ink-muted uppercase">
                ZERO FACT FABRICATION AUDITED
              </span>
            </div>

            <div className="border border-border bg-canvas-elevated overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-border bg-canvas-subtle/80 text-[10px] uppercase tracking-widest text-ink-muted">
                    <th className="py-3 px-4 sm:px-6">STRUCTURAL PARAMETER</th>
                    <th className="py-3 px-4 sm:px-6">VERIFIED SPECIFICATION</th>
                    <th className="py-3 px-4 sm:px-6 hidden sm:table-cell">ENGINEERING CONTEXT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {project.technicalSpecifications.map((spec, i) => (
                    <tr key={i} className="hover:bg-canvas-subtle/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-ink-primary">
                        {spec.label}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-accent-tech font-bold">
                        {spec.value}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-ink-muted text-[11px] hidden sm:table-cell">
                        {spec.detail || "Authoritative drawing datum"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 04: Architectural 3D Visualizations */}
          {project.renders && project.renders.length > 0 && (
            <section data-detail-motion="renders" className="mb-20">
              <ProjectRenderGallery
                renders={project.renders}
                projectTitle={project.marketingTitle || project.title}
              />
            </section>
          )}

          {/* Section 05: Media Lifecycle Pipeline Indicator */}
          <section data-detail-motion="lifecycle" className="mb-20">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-border font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-primary uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-ink-primary" />
                <span>{project.renders && project.renders.length > 0 ? "05" : "04"} / COMMISSION MEDIA LIFECYCLE</span>
              </div>
              <span className="text-[10px] text-ink-muted uppercase">
                TRANSPARENT STATUS LEDGER
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {/* Stage 1: Engineering Drawings */}
              <div className="p-5 border border-emerald-600/40 bg-canvas-elevated relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />
                <span className="text-[10px] uppercase tracking-widest text-ink-subtle block mb-1">
                  STAGE 01
                </span>
                <span className="text-sm font-bold text-ink-primary block mb-2">
                  Engineering Drawings
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                  <FileCheck size={14} strokeWidth={1.5} />
                  <span>AUDITED &amp; ACTIVE</span>
                </span>
                <p className="mt-3 text-[11px] text-ink-muted font-sans leading-relaxed">
                  Full 1:1 CAD vector drawing extraction verified and production authorized.
                </p>
              </div>

              {/* Stage 2: 3D Visualization Renders */}
              <div className={`p-5 border relative overflow-hidden ${project.mediaStatus.renders ? 'border-emerald-600/40 bg-canvas-elevated' : 'border-border/80 bg-canvas-subtle/40'}`}>
                {project.mediaStatus.renders && <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />}
                <span className="text-[10px] uppercase tracking-widest text-ink-subtle block mb-1">
                  STAGE 02
                </span>
                <span className="text-sm font-bold text-ink-primary block mb-2">
                  3D Architectural Renders
                </span>
                {project.mediaStatus.renders ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                    <CheckCircle2 size={14} strokeWidth={1.5} />
                    <span>PUBLISHED</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-ink-muted text-[11px]">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>NOT COMMISSIONED</span>
                  </span>
                )}
                <p className="mt-3 text-[11px] text-ink-subtle font-sans leading-relaxed">
                  {project.mediaStatus.renders 
                    ? "Native 3D rendering assets have been authorized and published to the monograph." 
                    : "Structural working drawing phase prioritizes drafting precision over synthetic marketing imagery."}
                </p>
              </div>

              {/* Stage 3: Site Construction Documentation */}
              <div className="p-5 border border-border/80 bg-canvas-subtle/40 relative overflow-hidden">
                <span className="text-[10px] uppercase tracking-widest text-ink-subtle block mb-1">
                  STAGE 03
                </span>
                <span className="text-sm font-bold text-ink-primary block mb-2">
                  Site Construction
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-muted text-[11px]">
                  <HardHat size={14} strokeWidth={1.5} />
                  <span>PENDING GROUNDBREAK</span>
                </span>
                <p className="mt-3 text-[11px] text-ink-subtle font-sans leading-relaxed">
                  Engineering photographic records will be uploaded upon site mobilization and foundation pour.
                </p>
              </div>

              {/* Stage 4: Completed Architecture Photography */}
              <div className="p-5 border border-border/80 bg-canvas-subtle/40 relative overflow-hidden">
                <span className="text-[10px] uppercase tracking-widest text-ink-subtle block mb-1">
                  STAGE 04
                </span>
                <span className="text-sm font-bold text-ink-primary block mb-2">
                  Completed Monograph
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-muted text-[11px]">
                  <ShieldCheck size={14} strokeWidth={1.5} />
                  <span>PENDING COMPLETION</span>
                </span>
                <p className="mt-3 text-[11px] text-ink-subtle font-sans leading-relaxed">
                  Final architectural monograph photography will document the finished physical spaces.
                </p>
              </div>
            </div>
          </section>

          {/* Section 05: Related Case Studies */}
          {relatedProjects.length > 0 && (
            <section data-detail-motion="related" className="pt-12 border-t border-border">
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-border font-mono text-xs text-ink-muted uppercase">
                <span>RELATED COMMISSIONS IN ARCHIVE</span>
                <span>VERIFIED RECORDS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relProj, idx) => (
                  <ProjectCard key={relProj.id} project={relProj} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <Link
              href="/projects"
              className="group/link inline-flex items-center gap-2 hover:text-accent-tech transition-colors uppercase tracking-wider"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.5}
                className="group-hover/link:-translate-x-1 transition-transform duration-200"
              />
              <span>Return to Projects Monograph Index</span>
            </Link>
            <Link
              href="/#contact"
              className="group/link inline-flex items-center gap-2 text-ink-primary font-semibold hover:text-accent-tech transition-colors uppercase tracking-wider"
            >
              <span>Commission an Architectural Study</span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover/link:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </ProjectDetailMotion>
      </Container>
    </div>
  );
}
