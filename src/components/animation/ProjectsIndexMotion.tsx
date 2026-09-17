"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectsIndexMotionProps {
  children: React.ReactNode;
}

export const ProjectsIndexMotion: React.FC<ProjectsIndexMotionProps> = ({ children }) => {
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
      const breadcrumb = el.querySelector('[data-motion="breadcrumb"]');
      const heading = el.querySelector('[data-motion="heading"]');
      const policy = el.querySelector('[data-motion="policy"]');
      const cardsHeader = el.querySelector('[data-motion="cards-header"]');
      const cards = el.querySelectorAll('[data-motion="card"]');
      const ledger = el.querySelector('[data-motion="ledger"]');

      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.55 } });

      if (breadcrumb) {
        tl.fromTo(breadcrumb, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, 0.05);
      }
      if (heading) {
        tl.fromTo(heading, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, 0.15);
      }
      if (policy) {
        tl.fromTo(policy, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, 0.25);
      }
      if (cardsHeader) {
        tl.fromTo(cardsHeader, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, 0.35);
      }
      if (cards.length > 0) {
        tl.fromTo(cards, { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: 0.1 }, 0.4);
      }

      if (ledger) {
        gsap.fromTo(
          ledger,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ledger,
              start: "top 90%",
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
