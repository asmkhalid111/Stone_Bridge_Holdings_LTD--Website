"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StructuralSequenceSVG } from "@/components/svg/StructuralSequenceSVG";
import { ArchitecturalSVG } from "@/components/svg/ArchitecturalSVG";
import { STRUCTURAL_SEQUENCE_CONFIG } from "@/data/sceneConfigs";
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

export const StructuralSequenceScrollScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [activeStage, setActiveStage] = useState<AnimationStage>(STRUCTURAL_SEQUENCE_CONFIG.stages[0]);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setProgressPercent(100);
      setActiveStage(STRUCTURAL_SEQUENCE_CONFIG.stages[STRUCTURAL_SEQUENCE_CONFIG.stages.length - 1]);
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

      const allDrawSelectors: string[] = [];
      const allFadeSelectors: string[] = [];

      STRUCTURAL_SEQUENCE_CONFIG.stages.forEach((stage) => {
        if (stage.drawSelectors) allDrawSelectors.push(...stage.drawSelectors);
        if (stage.fadeSelectors) allFadeSelectors.push(...stage.fadeSelectors);
      });

      // Desktop & Tablet
      mm.add("(min-width: 769px)", () => {
        gsap.set(svg.querySelectorAll("#ground"), { display: "inline", opacity: 1 });

        prepareSvgPaths(svg, allDrawSelectors);
        prepareFadeElements(svg, allFadeSelectors);

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

              const numStages = STRUCTURAL_SEQUENCE_CONFIG.stages.length;
              const stageIdx = Math.min(
                Math.floor(progress * numStages),
                numStages - 1
              );
              setActiveStage(STRUCTURAL_SEQUENCE_CONFIG.stages[stageIdx]);
            },
          },
        });

        STRUCTURAL_SEQUENCE_CONFIG.stages.forEach((stage) => {
          addStageToTimeline(tl, svg, stage);
        });
      });

      // Mobile (< 769px) - simplified density
      mm.add("(max-width: 768px)", () => {
        // Hide perspective ground grid to focus on vertical structural elements
        gsap.set(svg.querySelectorAll("#ground"), { display: "none" });

        const mobileDrawSelectors = allDrawSelectors.filter(
          (sel) => !sel.startsWith("#ground")
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

              const numStages = STRUCTURAL_SEQUENCE_CONFIG.stages.length;
              const stageIdx = Math.min(
                Math.floor(progress * numStages),
                numStages - 1
              );
              setActiveStage(STRUCTURAL_SEQUENCE_CONFIG.stages[stageIdx]);
            },
          },
        });

        STRUCTURAL_SEQUENCE_CONFIG.stages.forEach((stage) => {
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
        sceneId={STRUCTURAL_SEQUENCE_CONFIG.sceneId}
        title={STRUCTURAL_SEQUENCE_CONFIG.title}
        scale="AXONOMETRIC 1:100"
        discipline="STRUCTURAL SYSTEM ASSEMBLY"
        showGrid
      >
        <StructuralSequenceSVG ref={svgRef} className="w-full max-w-4xl" />
      </ArchitecturalSVG>

      {/* Live Construction Sequence Telemetry Bar */}
      <div className="mt-3 px-4 py-3 border border-border bg-canvas-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-tech animate-pulse" />
          <span className="text-ink-primary font-semibold">
            {isReducedMotion ? "STATIC STRUCTURAL OVERVIEW" : `STAGE ${activeStage.stageNumber} / 06`}
          </span>
          <span className="text-ink-subtle">|</span>
          <span className="text-ink-secondary">{activeStage.label}</span>
        </div>

        <div className="flex items-center gap-4 text-ink-subtle text-[10px] sm:text-[11px]">
          <span>SYSTEM: <strong className="text-ink-primary font-normal">{activeStage.discipline}</strong></span>
          <span className="hidden sm:inline">|</span>
          <span>
            ASSEMBLY: <span className="font-semibold text-accent-tech">{progressPercent}%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
