"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectOverlaySVG } from "@/components/svg/ProjectOverlaySVG";
import { ArchitecturalSVG } from "@/components/svg/ArchitecturalSVG";
import { PROJECT_OVERLAY_CONFIG } from "@/data/sceneConfigs";
import {
  prepareSvgPaths,
  resolveReducedMotion,
  addStageToTimeline,
  AnimationStage,
} from "@/lib/animation/sceneEngine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectOverlayScrollScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tonalMassingRef = useRef<HTMLDivElement>(null);

  const [activeStage, setActiveStage] = useState<AnimationStage>(PROJECT_OVERLAY_CONFIG.stages[0]);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setProgressPercent(100);
      setActiveStage(PROJECT_OVERLAY_CONFIG.stages[PROJECT_OVERLAY_CONFIG.stages.length - 1]);
      if (svgRef.current) {
        resolveReducedMotion(svgRef.current);
      }
      if (tonalMassingRef.current) {
        gsap.set(tonalMassingRef.current, { opacity: 0.18 });
      }
      return;
    }

    const container = containerRef.current;
    const svg = svgRef.current;
    const tonalMassing = tonalMassingRef.current;
    if (!container || !svg) return;

    const ctx = gsap.context(() => {
      const allDrawSelectors: string[] = [];
      PROJECT_OVERLAY_CONFIG.stages.forEach((stage) => {
        if (stage.drawSelectors) allDrawSelectors.push(...stage.drawSelectors);
      });

      prepareSvgPaths(svg, allDrawSelectors);
      if (tonalMassing) {
        gsap.set(tonalMassing, { opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          end: "bottom 20%",
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress;
            const pct = Math.round(progress * 100);
            setProgressPercent(pct);

            const numStages = PROJECT_OVERLAY_CONFIG.stages.length;
            const stageIdx = Math.min(
              Math.floor(progress * numStages),
              numStages - 1
            );
            setActiveStage(PROJECT_OVERLAY_CONFIG.stages[stageIdx]);
          },
        },
      });

      // Step 1: Draw architectural line art stages
      PROJECT_OVERLAY_CONFIG.stages.forEach((stage) => {
        addStageToTimeline(tl, svg, stage);
      });

      // Step 2: Smooth architectural tone reveal (drawing -> architectural massing transition)
      if (tonalMassing) {
        tl.to(
          tonalMassing,
          {
            opacity: 0.22,
            duration: 1.0,
            ease: "power2.inOut",
          },
          ">-0.3"
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <ArchitecturalSVG
        sceneId={PROJECT_OVERLAY_CONFIG.sceneId}
        title={PROJECT_OVERLAY_CONFIG.title}
        scale="ELEVATION 1:100"
        discipline="FACADE REVEAL TRANSITION"
        showGrid
      >
        <div className="relative w-full max-w-5xl flex items-center justify-center">
          {/* Subtle Architectural Massing / Tonal Transition Underlay */}
          <div
            ref={tonalMassingRef}
            className="absolute inset-x-[12%] inset-y-[10%] bg-gradient-to-b from-accent-tech/20 via-border/30 to-canvas-elevated pointer-events-none rounded-sm transition-opacity duration-300"
            aria-hidden="true"
          />

          <ProjectOverlaySVG ref={svgRef} className="w-full relative z-10" />

          {/* Phase 6 Media Slot Indicator */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-2.5 py-1 bg-canvas/90 border border-border/80 font-mono text-[9px] text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-tech" />
            <span className="tracking-widest uppercase">
              Phase 6 Media Slot // Architectural Synthesis Ready
            </span>
          </div>
        </div>
      </ArchitecturalSVG>

      {/* Live Facade Transition Telemetry Bar */}
      <div className="mt-3 px-4 py-3 border border-border bg-canvas-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-tech animate-pulse" />
          <span className="text-ink-primary font-semibold">
            {isReducedMotion ? "STATIC FACADE OVERVIEW" : `STAGE ${activeStage.stageNumber} / 03`}
          </span>
          <span className="text-ink-subtle">|</span>
          <span className="text-ink-secondary">{activeStage.label}</span>
        </div>

        <div className="flex items-center gap-4 text-ink-subtle text-[10px] sm:text-[11px]">
          <span>TRANSITION: <strong className="text-ink-primary font-normal">{activeStage.discipline}</strong></span>
          <span className="hidden sm:inline">|</span>
          <span>
            SYNTHESIS: <span className="font-semibold text-accent-tech">{progressPercent}%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
