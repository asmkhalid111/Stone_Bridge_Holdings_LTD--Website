"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloorPlanSVG } from "@/components/svg/FloorPlanSVG";
import { ArchitecturalSVG } from "@/components/svg/ArchitecturalSVG";
import { FLOOR_PLAN_CONFIG } from "@/data/sceneConfigs";
import {
  prepareSvgPaths,
  prepareFadeElements,
  resolveReducedMotion,
  addStageToTimeline,
  AnimationStage,
} from "@/lib/animation/sceneEngine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FloorPlanScrollScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [activeStage, setActiveStage] = useState<AnimationStage>(FLOOR_PLAN_CONFIG.stages[0]);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setProgressPercent(100);
      setActiveStage(FLOOR_PLAN_CONFIG.stages[FLOOR_PLAN_CONFIG.stages.length - 1]);
      if (svgRef.current) {
        resolveReducedMotion(svgRef.current);
      }
      return;
    }

    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Collect all draw and fade selectors
      const allDrawSelectors: string[] = [];
      const allFadeSelectors: string[] = [];

      FLOOR_PLAN_CONFIG.stages.forEach((stage) => {
        if (stage.drawSelectors) allDrawSelectors.push(...stage.drawSelectors);
        if (stage.fadeSelectors) allFadeSelectors.push(...stage.fadeSelectors);
      });

      // Desktop & Tablet (width >= 769px)
      mm.add("(min-width: 769px)", () => {
        // Ensure all groups are visible
        gsap.set(svg.querySelectorAll("#grid, #furniture"), { display: "inline", opacity: 1 });

        prepareSvgPaths(svg, allDrawSelectors);
        prepareFadeElements(svg, allFadeSelectors);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 78%",
            end: "bottom 22%",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress;
              const pct = Math.round(progress * 100);
              setProgressPercent(pct);

              const numStages = FLOOR_PLAN_CONFIG.stages.length;
              const stageIdx = Math.min(
                Math.floor(progress * numStages),
                numStages - 1
              );
              setActiveStage(FLOOR_PLAN_CONFIG.stages[stageIdx]);
            },
          },
        });

        FLOOR_PLAN_CONFIG.stages.forEach((stage) => {
          addStageToTimeline(tl, svg, stage);
        });
      });

      // Mobile (< 769px) - simplified density
      mm.add("(max-width: 768px)", () => {
        // Hide dense reference grid and fine furniture for mobile legibility
        gsap.set(svg.querySelectorAll("#grid, #furniture"), { display: "none" });

        // Filter out mobile hidden selectors
        const mobileDrawSelectors = allDrawSelectors.filter(
          (sel) =>
            !sel.startsWith("#grid") &&
            !sel.startsWith("#kitchen") &&
            !sel.startsWith("#dining") &&
            !sel.startsWith("#sofa")
        );

        prepareSvgPaths(svg, mobileDrawSelectors);
        prepareFadeElements(svg, allFadeSelectors);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 25%",
            scrub: 0.8,
            onUpdate: (self) => {
              const progress = self.progress;
              const pct = Math.round(progress * 100);
              setProgressPercent(pct);

              const numStages = FLOOR_PLAN_CONFIG.stages.length;
              const stageIdx = Math.min(
                Math.floor(progress * numStages),
                numStages - 1
              );
              setActiveStage(FLOOR_PLAN_CONFIG.stages[stageIdx]);
            },
          },
        });

        FLOOR_PLAN_CONFIG.stages.forEach((stage) => {
          addStageToTimeline(tl, svg, stage);
        });
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <ArchitecturalSVG
        sceneId={FLOOR_PLAN_CONFIG.sceneId}
        title={FLOOR_PLAN_CONFIG.title}
        scale="SCALE 1:50 @ A1"
        discipline="2D ORTHOGRAPHIC PROJECTION"
        showGrid
      >
        <FloorPlanSVG ref={svgRef} className="w-full max-w-5xl" />
      </ArchitecturalSVG>

      {/* Live Architectural Telemetry Bar */}
      <div className="mt-3 px-4 py-3 border border-border bg-canvas-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-tech animate-pulse" />
          <span className="text-ink-primary font-semibold">
            {isReducedMotion ? "STATIC OVERVIEW" : `STAGE ${activeStage.stageNumber} / 07`}
          </span>
          <span className="text-ink-subtle">|</span>
          <span className="text-ink-secondary">{activeStage.label}</span>
        </div>

        <div className="flex items-center gap-4 text-ink-subtle text-[10px] sm:text-[11px]">
          <span>DISCIPLINE: <strong className="text-ink-primary font-normal">{activeStage.discipline}</strong></span>
          <span className="hidden sm:inline">|</span>
          <span>
            SYNTAX: <span className="font-semibold text-accent-tech">{progressPercent}%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
