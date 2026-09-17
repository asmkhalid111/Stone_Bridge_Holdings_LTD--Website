"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDetailMotionProps {
  children: React.ReactNode;
}

export const ProjectDetailMotion: React.FC<ProjectDetailMotionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Project Identity (Header, Breadcrumb, Datum Matrix)
      const breadcrumb = el.querySelector('[data-detail-motion="breadcrumb"]');
      const header = el.querySelector('[data-detail-motion="header"]');
      const datumMatrix = el.querySelector('[data-detail-motion="datum-matrix"]');

      const entranceTl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.55 } });

      if (breadcrumb) {
        entranceTl.fromTo(breadcrumb, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, 0.05);
      }
      if (header) {
        entranceTl.fromTo(header, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, 0.15);
      }
      if (datumMatrix) {
        entranceTl.fromTo(datumMatrix, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, 0.25);
      }

      // 2. Primary Visual / Drawing Viewport
      const drawingSection = el.querySelector('[data-detail-motion="drawing"]');
      if (drawingSection) {
        gsap.fromTo(
          drawingSection,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: drawingSection,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 3. Narrative & Attestation
      const narrativeSection = el.querySelector('[data-detail-motion="narrative"]');
      if (narrativeSection) {
        gsap.fromTo(
          narrativeSection,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: narrativeSection,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 4. Technical Specs Matrix
      const specsSection = el.querySelector('[data-detail-motion="specs"]');
      if (specsSection) {
        gsap.fromTo(
          specsSection,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: specsSection,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 5. Commission Media Lifecycle
      const lifecycleSection = el.querySelector('[data-detail-motion="lifecycle"]');
      if (lifecycleSection) {
        gsap.fromTo(
          lifecycleSection,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: lifecycleSection,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 6. Related Projects
      const relatedSection = el.querySelector('[data-detail-motion="related"]');
      if (relatedSection) {
        gsap.fromTo(
          relatedSection,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: relatedSection,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
};
