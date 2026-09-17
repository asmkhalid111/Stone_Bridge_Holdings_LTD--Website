import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimationStage {
  id: string;
  stageNumber: string;
  label: string;
  discipline: string;
  drawSelectors?: string[];
  fadeSelectors?: string[];
  hideSelectorsOnMobile?: string[];
  duration?: number;
  stagger?: number;
  delay?: number;
}

export interface SceneConfig {
  sceneId: string;
  title: string;
  stages: AnimationStage[];
}

/**
 * Prepares SVG stroke geometry for drawing animations by setting strokeDasharray and strokeDashoffset.
 */
export function prepareSvgPaths(svg: SVGSVGElement, selectors: string[] | string): SVGGeometryElement[] {
  if (!selectors) return [];
  const selectorStr = Array.isArray(selectors) ? selectors.filter(Boolean).join(", ") : selectors;
  if (!selectorStr || !selectorStr.trim()) return [];

  const elements = svg.querySelectorAll<SVGGeometryElement>(selectorStr);

  elements.forEach((el) => {
    try {
      const length = el.getTotalLength ? Math.ceil(el.getTotalLength()) : 1000;
      gsap.set(el, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    } catch {
      // Fallback for elements where getTotalLength might fail
      gsap.set(el, {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      });
    }
  });

  return Array.from(elements);
}

/**
 * Prepares elements intended for fade / opacity reveals by hiding them initially.
 */
export function prepareFadeElements(svg: SVGSVGElement, selectors: string[] | string): Element[] {
  if (!selectors) return [];
  const selectorStr = Array.isArray(selectors) ? selectors.filter(Boolean).join(", ") : selectors;
  if (!selectorStr || !selectorStr.trim()) return [];

  const elements = svg.querySelectorAll(selectorStr);

  elements.forEach((el) => {
    gsap.set(el, { opacity: 0 });
  });

  return Array.from(elements);
}

/**
 * Instantly resolves all SVG elements to their completed, visible state (used for prefers-reduced-motion).
 */
export function resolveReducedMotion(
  svg: SVGSVGElement,
  strokeSelectors?: string[],
  fadeSelectors?: string[]
): void {
  if (strokeSelectors && strokeSelectors.length > 0) {
    const strokeEls = svg.querySelectorAll(strokeSelectors.join(", "));
    gsap.set(strokeEls, { strokeDashoffset: 0, opacity: 1 });
  } else {
    // If no specific selectors provided, resolve all path/line/geometry elements
    const allGeometry = svg.querySelectorAll("path, line, polyline, polygon, rect, circle, ellipse");
    gsap.set(allGeometry, { strokeDashoffset: 0, opacity: 1 });
  }

  if (fadeSelectors && fadeSelectors.length > 0) {
    const fadeEls = svg.querySelectorAll(fadeSelectors.join(", "));
    gsap.set(fadeEls, { opacity: 1 });
  } else {
    const allGroups = svg.querySelectorAll("g, text");
    gsap.set(allGroups, { opacity: 1 });
  }
}

/**
 * Appends a drawing stage to a GSAP timeline.
 */
export function addStageToTimeline(
  tl: gsap.core.Timeline,
  svg: SVGSVGElement,
  stage: AnimationStage,
  position?: string | number
): void {
  const pos = position !== undefined ? position : ">";

  // Stroke drawing elements
  if (stage.drawSelectors && stage.drawSelectors.length > 0) {
    const validDraw = stage.drawSelectors.filter(s => s && s.trim());
    if (validDraw.length > 0) {
      const selectorStr = validDraw.join(", ");
      const elements = svg.querySelectorAll(selectorStr);
      if (elements.length > 0) {
        tl.to(
          elements,
          {
            strokeDashoffset: 0,
            duration: stage.duration ?? 0.8,
            stagger: stage.stagger ?? 0.05,
            ease: "power2.inOut",
          },
          pos
        );
      }
    }
  }

  // Fade / annotation elements
  if (stage.fadeSelectors && stage.fadeSelectors.length > 0) {
    const validFade = stage.fadeSelectors.filter(s => s && s.trim());
    if (validFade.length > 0) {
      const selectorStr = validFade.join(", ");
      const elements = svg.querySelectorAll(selectorStr);
      if (elements.length > 0) {
        tl.to(
          elements,
          {
            opacity: 1,
            duration: stage.duration ? stage.duration * 0.6 : 0.5,
            ease: "power1.out",
          },
          "<0.2"
        );
      }
    }
  }
}
