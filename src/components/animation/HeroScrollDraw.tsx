"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroBuildingSVG } from "@/components/svg/HeroBuildingSVG";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SequenceStage {
  threshold: number;
  label: string;
  discipline: string;
  stageNumber: string;
}

const STAGES: SequenceStage[] = [
  { threshold: 0.10, stageNumber: "01", label: "SITE CADASTRE & REFERENCE GRID", discipline: "Topography" },
  { threshold: 0.25, stageNumber: "02", label: "SUBSTRUCTURE & FOUNDATION PIERS", discipline: "Geotechnical" },
  { threshold: 0.45, stageNumber: "03", label: "PRIMARY FRAME, COLUMNS & CANTILEVER", discipline: "Structural" },
  { threshold: 0.65, stageNumber: "04", label: "EXTERIOR ENVELOPE & VOLUME MASSING", discipline: "Architecture" },
  { threshold: 0.78, stageNumber: "05", label: "GLAZING APERTURES & ENTRY PORTAL", discipline: "Fenestration" },
  { threshold: 0.88, stageNumber: "06", label: "FACADE MULLIONS, PANELS & BALUSTERS", discipline: "Craftsmanship" },
  { threshold: 0.95, stageNumber: "07", label: "CONTEXT SILHOUETTES & LANDSCAPE", discipline: "Context" },
  { threshold: 1.00, stageNumber: "08", label: "COMPLETED ELEVATION & DATUM ANNOTATIONS", discipline: "Resolution" },
];

export const HeroScrollDraw: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const headlineBlockRef = useRef<HTMLDivElement>(null);

  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [currentStage, setCurrentStage] = useState<SequenceStage>(STAGES[0]);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setProgressPercent(100);
      setCurrentStage(STAGES[STAGES.length - 1]);
      return;
    }

    const container = containerRef.current;
    const pin = pinRef.current;
    const svg = svgRef.current;
    const headline = headlineBlockRef.current;

    if (!container || !pin || !svg) return;

    // Use GSAP Context for bulletproof React lifecycle and cleanup
    const ctx = gsap.context(() => {
      // Helper function to measure path length and set up stroke-dasharray
      const preparePaths = (selector: string) => {
        const elements = svg.querySelectorAll<SVGGeometryElement>(selector);
        elements.forEach((el) => {
          const length = el.getTotalLength ? Math.ceil(el.getTotalLength()) : 1000;
          gsap.set(el, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });
        return elements;
      };

      // Query all semantic groups by ID
      const siteGround = preparePaths("#site-ground");
      const siteGrid = preparePaths("#site-grid-vertical, #site-grid-horizontal");
      const foundation = preparePaths("#foundation-main, #foundation-pier-1, #foundation-pier-2, #foundation-pier-3, #foundation-pier-4");
      const columns = preparePaths("#column-1, #column-2, #column-3, #column-4");
      const slabs = preparePaths("#slab-level-1, #slab-roof, #slab-lower-roof");
      const architecture = preparePaths("#wall-exterior-left, #wall-exterior-right, #wall-interior-1, #cantilever-box");
      const openings = preparePaths("#window-large-1, #window-large-2, #window-upper, #door-entry");
      const detailsMullions = preparePaths("#mullion-1, #mullion-2, #mullion-3, #mullion-h-1, #mullion-h-2");
      const detailsDoor = preparePaths("#door-panel-1, #door-panel-2, #door-handle");
      const detailsBalcony = preparePaths("#balcony-rail, #balcony-balusters");
      const landscapeTrees = preparePaths("#tree-1, #tree-2");
      const landscapeDetails = preparePaths("#tree-1-detail, #tree-2-detail");
      const dimLines = preparePaths("#dim-line-1, #dim-line-2, #dim-line-3");
      const dimTexts = svg.querySelectorAll<SVGTextElement>("#annotations text");

      gsap.set(dimTexts, { opacity: 0 });

      // Create responsive matchMedia
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP & TABLET ANIMATION (width >= 768px)
      // ==========================================
      mm.add("(min-width: 768px)", () => {
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: pin,
            start: "top top",
            end: "+=220%",
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              setProgressPercent(Math.round(p * 100));

              const matched =
                STAGES.find((stage) => p <= stage.threshold) ||
                STAGES[STAGES.length - 1];
              setCurrentStage(matched);
            },
          },
        });

        // 0. Headline Synchronization (0% -> 12%): headline gently compresses & docks as drawing takes center stage
        if (headline) {
          masterTl.to(
            headline,
            {
              opacity: 0.35,
              y: -15,
              duration: 1.2,
              ease: "power1.out",
            },
            0
          );
        }

        // STAGE 01: Site / Reference (0% -> 10%)
        masterTl.to(siteGround, { strokeDashoffset: 0, duration: 1.0, ease: "none" }, 0);
        masterTl.to(siteGrid, { strokeDashoffset: 0, duration: 1.2, ease: "none", stagger: 0.15 }, 0.4);

        // STAGE 02: Substructure & Foundation (10% -> 25%)
        masterTl.to(foundation, { strokeDashoffset: 0, duration: 2.0, ease: "none", stagger: 0.2 }, 1.4);

        // STAGE 03: Primary Structural Frame (25% -> 45%)
        masterTl.to(columns, { strokeDashoffset: 0, duration: 2.2, ease: "none", stagger: 0.25 }, 3.2);
        masterTl.to(slabs, { strokeDashoffset: 0, duration: 2.2, ease: "none", stagger: 0.2 }, 4.6);

        // STAGE 04: Architecture Envelope & Massing (45% -> 65%)
        masterTl.to(architecture, { strokeDashoffset: 0, duration: 2.4, ease: "none", stagger: 0.2 }, 6.5);

        // STAGE 05: Openings & Glazing Voids (65% -> 78%)
        masterTl.to(openings, { strokeDashoffset: 0, duration: 2.0, ease: "none", stagger: 0.2 }, 8.5);

        // STAGE 06: Craftsmanship & Facade Details (78% -> 88%)
        masterTl.to(detailsMullions, { strokeDashoffset: 0, duration: 1.6, ease: "none", stagger: 0.1 }, 10.2);
        masterTl.to(detailsDoor, { strokeDashoffset: 0, duration: 1.2, ease: "none", stagger: 0.1 }, 11.2);
        masterTl.to(detailsBalcony, { strokeDashoffset: 0, duration: 1.4, ease: "none", stagger: 0.1 }, 11.8);

        // STAGE 07: Landscape & Context (88% -> 95%)
        masterTl.to(landscapeTrees, { strokeDashoffset: 0, duration: 1.5, ease: "none", stagger: 0.2 }, 13.0);
        masterTl.to(landscapeDetails, { strokeDashoffset: 0, duration: 1.2, ease: "none", stagger: 0.15 }, 14.0);

        // STAGE 08: Completed Elevation & Annotations (95% -> 100%)
        masterTl.to(dimLines, { strokeDashoffset: 0, duration: 1.0, ease: "none" }, 15.0);
        masterTl.to(dimTexts, { opacity: 1, duration: 0.8, ease: "power1.out", stagger: 0.15 }, 15.6);
        // Settle state pause at end before pin release
        masterTl.to({}, { duration: 1.0 }, 16.5);
      });

      // ==========================================
      // MOBILE ANIMATION (width < 768px)
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        // Hide landscape trees and nonessential annotations on mobile to keep building legible
        gsap.set("#landscape, #annotations", { display: "none" });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: pin,
            start: "top top",
            end: "+=130%",
            scrub: 0.6,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              setProgressPercent(Math.round(p * 100));

              const matched =
                STAGES.find((stage) => p <= stage.threshold) ||
                STAGES[STAGES.length - 1];
              setCurrentStage(matched);
            },
          },
        });

        // Mobile: Site & Foundation
        mobileTl.to(siteGround, { strokeDashoffset: 0, duration: 1.0, ease: "none" }, 0);
        mobileTl.to(foundation, { strokeDashoffset: 0, duration: 1.5, ease: "none", stagger: 0.15 }, 0.8);

        // Mobile: Structure Columns & Slabs
        mobileTl.to(columns, { strokeDashoffset: 0, duration: 1.8, ease: "none", stagger: 0.2 }, 2.0);
        mobileTl.to(slabs, { strokeDashoffset: 0, duration: 1.8, ease: "none", stagger: 0.2 }, 3.2);

        // Mobile: Architecture Envelope & Openings
        mobileTl.to(architecture, { strokeDashoffset: 0, duration: 1.8, ease: "none", stagger: 0.15 }, 4.6);
        mobileTl.to(openings, { strokeDashoffset: 0, duration: 1.6, ease: "none", stagger: 0.15 }, 6.0);

        // Mobile: Details
        mobileTl.to(detailsMullions, { strokeDashoffset: 0, duration: 1.4, ease: "none", stagger: 0.1 }, 7.2);
        mobileTl.to([detailsDoor, detailsBalcony], { strokeDashoffset: 0, duration: 1.2, ease: "none" }, 8.2);

        // Pause settle state
        mobileTl.to({}, { duration: 0.8 }, 9.2);
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col justify-between pt-24 pb-6 px-4 sm:px-8 lg:px-12 bg-canvas overflow-hidden select-none"
      >
        {/* Top Synchronized Headline & Telemetry Block */}
        <div ref={headlineBlockRef} className="w-full border-b border-border pb-4 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-tech mb-2">
                <span className="w-1.5 h-1.5 bg-accent-tech" />
                <span>ARCHITECTURAL PROJECTION &amp; CONSTRUCTION</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink-primary max-w-3xl leading-[1.1]">
                Form follows structure. Architecture constructed through drawing.
              </h1>
            </div>

            <div className="flex items-center gap-6 font-mono text-[11px] text-ink-muted">
              <span className="hidden sm:inline">
                DISCIPLINE: <strong className="text-ink-primary">{currentStage.discipline}</strong>
              </span>
              <span>
                PROGRESS:{" "}
                <strong className="text-ink-primary tabular-nums font-semibold">
                  {isReducedMotion ? "100%" : `${progressPercent}%`}
                </strong>
              </span>
              <div className="w-24 h-1.5 bg-border hidden sm:block overflow-hidden">
                <div
                  className="h-full bg-ink-primary transition-all duration-100"
                  style={{ width: isReducedMotion ? "100%" : `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Architectural Drawing Canvas */}
        <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center py-2 sm:py-4">
          {/* Subtle Drafting Grid Watermark */}
          <div className="absolute inset-0 bg-drafting-grid opacity-60 pointer-events-none" />

          {/* Precision Drawing Frame */}
          <div className="relative w-full h-full flex items-center justify-center">
            <HeroBuildingSVG
              ref={svgRef}
              className="max-h-[62vh] sm:max-h-[66vh] w-full object-contain filter drop-shadow-sm"
            />
          </div>
        </div>

        {/* Bottom Sequence Stage Telemetry & Scroll Cue */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border pt-3 sm:pt-4 font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="text-accent-tech font-bold">▶</span>
            <span className="text-ink-subtle uppercase text-[10px] tracking-wider">
              STAGE {currentStage.stageNumber} //
            </span>
            <span className="tracking-wide text-ink-primary font-medium">
              {isReducedMotion
                ? "ARCHITECTURAL SEQUENCE // COMPLETED RESOLUTION"
                : currentStage.label}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-ink-subtle uppercase tracking-widest">
            <span className="hidden md:inline">DATUM ELEVATION: 0.000m</span>
            <span>{isReducedMotion ? "RESOLUTION STATE" : "SCROLL TO CONSTRUCT"}</span>
            <span className="text-ink-muted">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
