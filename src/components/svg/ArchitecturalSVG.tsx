import React from "react";

interface ArchitecturalSVGProps {
  children: React.ReactNode;
  sceneId: string;
  title: string;
  scale?: string;
  discipline?: string;
  showGrid?: boolean;
  className?: string;
}

export const ArchitecturalSVG: React.FC<ArchitecturalSVGProps> = ({
  children,
  sceneId,
  title,
  scale = "SCALE 1:100",
  discipline = "ARCHITECTURAL PROJECTION",
  showGrid = false,
  className = "",
}) => {
  return (
    <div
      id={`scene-${sceneId}`}
      className={`relative w-full border border-border bg-canvas-elevated p-4 sm:p-8 lg:p-12 ${
        showGrid ? "bg-drafting-grid" : ""
      } ${className}`}
    >
      {/* Corner Drafting Ticks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-ink-muted/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-ink-muted/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-ink-muted/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-ink-muted/40" />

      {/* Top Technical Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3 mb-6 font-mono text-[10px] sm:text-xs text-ink-muted tracking-wider uppercase">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-accent-tech" />
          <span className="font-semibold text-ink-primary">{title}</span>
          <span className="text-ink-subtle">/</span>
          <span>{sceneId}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-ink-subtle">{discipline}</span>
          <span className="border border-border px-1.5 py-0.5 text-ink-primary font-medium">
            {scale}
          </span>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full flex items-center justify-center svg-mobile-simplified">
        {children}
      </div>

      {/* Bottom Technical Coordinates */}
      <div className="flex items-center justify-between border-t border-border/60 pt-3 mt-6 font-mono text-[9px] sm:text-[10px] text-ink-subtle uppercase">
        <span>PROJ: SBH-2025</span>
        <span className="tracking-widest">CADASTRE REF // 00-SVG-PHASE-3</span>
        <span>STATUS: DRAWING ARCHIVE</span>
      </div>
    </div>
  );
};
