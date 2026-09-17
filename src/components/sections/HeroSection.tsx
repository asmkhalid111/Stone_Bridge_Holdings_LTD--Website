"use client";

import React from "react";
import { HeroScrollDraw } from "@/components/animation/HeroScrollDraw";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-canvas">
      <HeroScrollDraw />
    </section>
  );
};
