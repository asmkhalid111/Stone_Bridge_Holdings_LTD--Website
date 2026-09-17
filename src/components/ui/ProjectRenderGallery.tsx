"use client";

import React, { useState } from "react";
import { ProjectRender } from "@/types";
import { Maximize2, X, Aperture } from "lucide-react";

interface ProjectRenderGalleryProps {
  renders: ProjectRender[];
  projectTitle: string;
}

export const ProjectRenderGallery: React.FC<ProjectRenderGalleryProps> = ({
  renders,
  projectTitle,
}) => {
  const [expandedRender, setExpandedRender] = useState<ProjectRender | null>(
    null
  );

  if (!renders || renders.length === 0) return null;

  return (
    <div className="w-full space-y-6">
      {/* Gallery Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs">
        <div className="flex items-center gap-2 text-ink-primary uppercase tracking-wider font-semibold">
          <span className="w-2 h-2 bg-ink-primary" />
          <span>04 / ARCHITECTURAL 3D VISUALIZATIONS</span>
        </div>
        <span className="text-[10px] text-ink-muted uppercase flex items-center gap-1.5">
          <Aperture size={12} strokeWidth={1.5} />
          NATIVE RENDERS
        </span>
      </div>

      {/* Masonry/Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {renders.map((render) => (
          <div
            key={render.id}
            className="group relative cursor-pointer overflow-hidden border border-border bg-canvas shadow-sm"
            onClick={() => setExpandedRender(render)}
          >
            {/* Aspect Ratio Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-canvas-subtle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={render.imagePath}
                alt={render.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-canvas font-mono text-xs font-semibold uppercase tracking-wider">
                {render.title}
              </span>
              <span className="text-canvas/70 font-mono text-[10px] uppercase tracking-widest mt-1 flex items-center gap-1">
                <Maximize2 size={10} />
                Expand View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Render Modal */}
      {expandedRender && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/95 backdrop-blur-md p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full h-full flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between py-4 border-b border-border/40">
              <div className="font-mono text-xs">
                <span className="text-ink-subtle uppercase text-[10px] tracking-widest block mb-1">
                  {expandedRender.type}
                </span>
                <span className="text-ink-primary font-semibold text-sm sm:text-base">
                  {expandedRender.title}
                </span>
              </div>
              <button
                onClick={() => setExpandedRender(null)}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-ink-primary bg-ink-primary text-canvas hover:bg-canvas hover:text-ink-primary transition-colors font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <X size={14} strokeWidth={1.5} />
                Close
              </button>
            </div>
            
            {/* Modal Image */}
            <div className="flex-1 overflow-hidden flex items-center justify-center py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={expandedRender.imagePath}
                alt={expandedRender.title}
                className="max-w-full max-h-full object-contain drop-shadow-md"
              />
            </div>
            
            {/* Modal Footer */}
            {expandedRender.description && (
              <div className="py-4 border-t border-border/40 text-center">
                <p className="text-ink-secondary font-sans text-sm font-light">
                  {expandedRender.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
