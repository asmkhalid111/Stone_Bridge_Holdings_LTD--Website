import React from "react";
import Link from "next/link";
import { Project, ProjectData } from "@/types";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project | ProjectData;
  index: number;
}

function isRealProject(p: Project | ProjectData): p is Project {
  return "slug" in p && "drawings" in p;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isReal = isRealProject(project);
  const locationString = isReal
    ? `${project.location.area}, ${project.location.city}`
    : project.location;
  const linkHref = isReal ? `/projects/${project.slug}` : "#";

  return (
    <article className="group relative flex flex-col justify-between border border-border bg-canvas-elevated p-6 sm:p-8 transition-all duration-300 hover:border-ink-primary hover:shadow-sm">
      {/* Top Technical Metadata */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted uppercase tracking-wider pb-4 mb-4 border-b border-border/60">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-ink-primary group-hover:bg-accent-tech transition-colors" />
            <span>RECORD 0{index + 1}</span>
          </div>
          <span className="border border-border px-1.5 py-0.5 text-ink-primary font-medium text-[9px] tracking-widest">
            {project.status}
          </span>
        </div>

        {/* Project Typology & Title */}
        <p className="font-mono text-[11px] text-accent-tech uppercase tracking-widest mb-2">
          {project.typology}
        </p>
        <h3 className="text-xl sm:text-2xl font-light tracking-tight text-ink-primary mb-4 group-hover:text-ink-primary">
          {isReal ? (
            <Link
              href={linkHref}
              className="focus:outline-none focus:underline flex items-start justify-between gap-2"
            >
              <span>{project.title}</span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-accent-tech flex-shrink-0 mt-1"
                aria-hidden="true"
              />
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Structural Specification & Parameters */}
      <div className="pt-4 border-t border-border/60 font-mono text-xs space-y-2">
        <div className="flex justify-between text-ink-muted">
          <span>STRUCTURAL SYSTEM:</span>
          <span className="text-ink-primary text-right max-w-[200px] truncate">
            {project.structuralNotes}
          </span>
        </div>
        <div className="flex justify-between text-ink-muted">
          <span>LOCATION:</span>
          <span className="text-ink-primary">{locationString}</span>
        </div>
        <div className="flex justify-between text-ink-muted">
          <span>YEAR / DATUM:</span>
          <span className="text-ink-primary">{project.year}</span>
        </div>

        {/* Engineering Drawing Availability */}
        {isReal && (
          <div className="flex justify-between items-center text-ink-muted pt-1">
            <span>DRAWINGS AUDITED:</span>
            <span className="text-accent-tech font-bold text-[10px] tracking-wider">
              {project.drawings.length} PRODUCTION {project.drawings.length === 1 ? "SET" : "SETS"}
            </span>
          </div>
        )}

        {/* Action Link Footer */}
        {isReal && (
          <div className="pt-3 border-t border-border/40 flex items-center justify-between">
            <span className="text-[10px] text-ink-subtle uppercase tracking-wider">
              CAD &bull; BIM &bull; WORKING DRAWINGS
            </span>
            <Link
              href={linkHref}
              className="group/link inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-primary hover:text-accent-tech tracking-wider uppercase transition-colors"
            >
              <span>View Case Study</span>
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="group-hover/link:translate-x-1 transition-transform duration-200 text-accent-tech"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

