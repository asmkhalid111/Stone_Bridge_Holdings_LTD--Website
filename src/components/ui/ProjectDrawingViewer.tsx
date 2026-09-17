"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProjectDrawing } from "@/types";
import { Maximize2, Layers, CheckCircle2, X, ExternalLink } from "lucide-react";

interface ProjectDrawingViewerProps {
  drawings: ProjectDrawing[];
  projectTitle: string;
}

export const ProjectDrawingViewer: React.FC<ProjectDrawingViewerProps> = ({
  drawings,
  projectTitle,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const activeDrawing = drawings[activeIdx] || drawings[0];

  const handleOpenExpanded = () => {
    setIsExpanded(true);
    if (containerRef.current && document.fullscreenEnabled && !document.fullscreenElement) {
      try {
        containerRef.current.requestFullscreen().catch(() => {
          // Graceful fallback to overlay if browser policy blocks fullscreen
        });
      } catch {
        // Fallback to overlay
      }
    }
  };

  const handleCloseExpanded = () => {
    if (document.fullscreenElement) {
      try {
        document.exitFullscreen().catch(() => {});
      } catch {
        // Safe exit
      }
    }
    setIsExpanded(false);
    setTimeout(() => {
      expandButtonRef.current?.focus();
    }, 50);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        handleCloseExpanded();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isExpanded) {
        // Synchronize state if user exited via native browser key
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  if (!drawings || drawings.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="w-full border border-border bg-canvas-elevated">
      {/* Top Drawing Selection Tabs & Inspection Trigger */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-canvas-subtle/70 px-4 sm:px-6 py-3 gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-ink-muted uppercase">
          <Layers size={15} strokeWidth={1.5} className="text-accent-tech" />
          <span className="font-semibold text-ink-primary">PRODUCTION DRAWINGS:</span>
          <span>
            {activeIdx + 1} OF {drawings.length}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {drawings.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              {drawings.map((dwg, idx) => (
                <button
                  key={dwg.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`px-2.5 sm:px-3 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all border ${
                    activeIdx === idx
                      ? "border-ink-primary bg-ink-primary text-canvas font-semibold shadow-xs"
                      : "border-border bg-canvas text-ink-secondary hover:border-ink-primary hover:text-ink-primary"
                  }`}
                  aria-pressed={activeIdx === idx}
                >
                  <span>{dwg.sheetNo ? `${dwg.sheetNo}: ` : ""}</span>
                  <span>{dwg.title.length > 24 ? dwg.title.slice(0, 22) + "..." : dwg.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* Discoverable Fullscreen Inspection Trigger */}
          <button
            ref={expandButtonRef}
            type="button"
            onClick={handleOpenExpanded}
            className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-canvas text-ink-primary hover:border-ink-primary hover:bg-canvas-subtle transition-all duration-200 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-ink-primary"
            aria-label="Expand drawing for full-screen CAD inspection"
          >
            <Maximize2 size={13} strokeWidth={1.5} className="text-accent-tech group-hover/btn:scale-105 transition-transform" />
            <span>Inspect Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Technical Drawing Meta Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-6 py-3 border-b border-border/60 bg-canvas font-mono text-[11px] text-ink-muted">
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-ink-subtle">
            SHEET NUMBER
          </span>
          <span className="font-semibold text-ink-primary">
            {activeDrawing.sheetNo || "N/A"}
          </span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-ink-subtle">
            DRAWING TYPE
          </span>
          <span className="font-semibold text-ink-primary">{activeDrawing.type}</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-ink-subtle">
            NOMINAL SCALE
          </span>
          <span className="font-semibold text-ink-primary">{activeDrawing.scale || "NTS"}</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-ink-subtle">
            AUDIT STATUS
          </span>
          <span className="font-semibold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 size={12} strokeWidth={1.25} />
            <span>VERIFIED CAD</span>
          </span>
        </div>
      </div>

      {/* Main Drawing Viewport */}
      <div className="relative w-full p-4 sm:p-8 lg:p-12 flex items-center justify-center bg-canvas overflow-hidden min-h-[420px] sm:min-h-[540px]">
        {/* Drafting Grid Watermark / Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0F1115 1px, transparent 1px), linear-gradient(90deg, #0F1115 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Vector SVG Image (Preserved sharp vector) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeDrawing.svgPath}
          alt={`${activeDrawing.title} - ${projectTitle}`}
          className="relative z-10 max-w-full h-auto max-h-[700px] object-contain drop-shadow-xs transition-all duration-300"
          loading="eager"
        />

        {/* Floating Controls Overlay */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={handleOpenExpanded}
            className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 bg-canvas/90 backdrop-blur-xs border border-border text-ink-primary hover:bg-ink-primary hover:text-canvas transition-colors font-mono text-[10px] uppercase tracking-wider shadow-xs"
            title="Inspect drawing in fullscreen"
          >
            <Maximize2 size={12} strokeWidth={1.5} className="text-accent-tech group-hover/btn:text-canvas transition-colors" />
            <span>Expand</span>
          </button>
          <a
            href={activeDrawing.svgPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-canvas/90 backdrop-blur-xs border border-border text-ink-primary hover:bg-ink-primary hover:text-canvas transition-colors font-mono text-[10px] uppercase tracking-wider shadow-xs"
            title="Open raw vector SVG in new tab"
          >
            <ExternalLink size={12} strokeWidth={1.5} />
            <span>Vector File</span>
          </a>
        </div>
      </div>

      {/* Bottom Technical Description & Dimensions */}
      <div className="p-4 sm:p-6 border-t border-border bg-canvas-subtle/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="max-w-3xl">
          <span className="font-semibold text-ink-primary block uppercase tracking-wider mb-1 text-[11px]">
            {activeDrawing.title}
          </span>
          {activeDrawing.description && (
            <p className="text-ink-secondary text-xs leading-relaxed font-sans font-normal">
              {activeDrawing.description}
            </p>
          )}
        </div>
        {activeDrawing.dimensions && (
          <div className="sm:text-right shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-ink-subtle block">
              KEY DATUMS
            </span>
            <span className="text-accent-tech font-bold text-[11px]">
              {activeDrawing.dimensions}
            </span>
          </div>
        )}
      </div>

      {/* Fullscreen / Expanded Inspection Overlay Mode */}
      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded CAD Drawing Inspection: ${activeDrawing.title}`}
          className="fixed inset-0 z-50 bg-canvas/98 backdrop-blur-md flex flex-col overflow-hidden"
        >
          {/* Top Expanded Navigation & Control Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-border bg-canvas px-4 sm:px-8 py-3.5 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-tech" />
              <div className="font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-ink-muted block">
                  CAD DRAWING INSPECTION // {activeDrawing.sheetNo || "SHEET RECORD"}
                </span>
                <span className="font-semibold text-ink-primary text-sm sm:text-base">
                  {activeDrawing.title}
                </span>
              </div>
            </div>

            {/* Sheet switching if multiple */}
            <div className="flex items-center gap-3">
              {drawings.length > 1 && (
                <div className="flex items-center gap-1.5">
                  {drawings.map((dwg, idx) => (
                    <button
                      key={dwg.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                        activeIdx === idx
                          ? "border-ink-primary bg-ink-primary text-canvas font-semibold shadow-xs"
                          : "border-border bg-canvas text-ink-secondary hover:border-ink-primary hover:text-ink-primary"
                      }`}
                      aria-pressed={activeIdx === idx}
                    >
                      <span>{dwg.sheetNo ? `${dwg.sheetNo}: ` : ""}{dwg.title}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Close Button with ESC label */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseExpanded}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-ink-primary bg-ink-primary text-canvas hover:bg-canvas hover:text-ink-primary transition-all duration-200 font-mono text-xs uppercase tracking-wider font-semibold focus:outline-none focus:ring-1 focus:ring-accent-tech cursor-pointer"
                aria-label="Close expanded drawing inspection (Escape)"
              >
                <X size={15} strokeWidth={1.5} />
                <span>Close [ESC]</span>
              </button>
            </div>
          </div>

          {/* Expanded Vector Viewport */}
          <div className="relative flex-1 w-full p-4 sm:p-8 flex items-center justify-center bg-canvas overflow-auto">
            {/* Drafting Grid Watermark */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#0F1115 1px, transparent 1px), linear-gradient(90deg, #0F1115 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeDrawing.svgPath}
              alt={`${activeDrawing.title} - ${projectTitle} (Expanded)`}
              className="relative z-10 max-w-full max-h-full object-contain drop-shadow-sm select-none"
              loading="eager"
            />
          </div>

          {/* Bottom Expanded Telemetry Bar */}
          <div className="border-t border-border bg-canvas-subtle/70 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-6 text-[11px] text-ink-muted">
              <div>
                <span className="text-ink-subtle uppercase text-[9px] block">NOMINAL SCALE</span>
                <span className="text-ink-primary font-semibold">{activeDrawing.scale || "NTS"}</span>
              </div>
              <div>
                <span className="text-ink-subtle uppercase text-[9px] block">DRAWING TYPE</span>
                <span className="text-ink-primary font-semibold">{activeDrawing.type}</span>
              </div>
              {activeDrawing.dimensions && (
                <div>
                  <span className="text-ink-subtle uppercase text-[9px] block">KEY DATUMS</span>
                  <span className="text-accent-tech font-bold">{activeDrawing.dimensions}</span>
                </div>
              )}
              <div>
                <span className="text-ink-subtle uppercase text-[9px] block">AUDIT VERIFICATION</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={12} strokeWidth={1.25} />
                  <span>1:1 POSTSCRIPT CAD EXTRACTION</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={activeDrawing.svgPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-canvas text-ink-primary hover:border-ink-primary transition-colors text-[11px] uppercase tracking-wider"
              >
                <ExternalLink size={13} strokeWidth={1.5} />
                <span>Open Raw SVG</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
