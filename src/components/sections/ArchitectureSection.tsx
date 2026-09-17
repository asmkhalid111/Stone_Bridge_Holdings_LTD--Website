import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloorPlanScrollScene } from "@/components/animation/FloorPlanScrollScene";

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="relative w-full py-24 sm:py-32 bg-canvas border-t border-border">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="02"
          discipline="SPATIAL SYNTAX & CIRULATION"
          title="Floor plans conceived as fluid volumes organized by a disciplined structural grid."
          subtitle="A floor plan is not merely an arrangement of partitions; it is a musical score of light, threshold, and movement. The approved plan below illustrates our approach to structural alignment, daylight penetration, and clear circulation paths."
        />

        {/* Dynamic Floor Plan Narrative Canvas */}
        <div className="w-full">
          <FloorPlanScrollScene />
        </div>

        {/* Orthographic Analytical Readout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border font-mono text-xs text-ink-secondary">
          <div className="space-y-2">
            <span className="text-accent-tech font-bold uppercase tracking-wider">01 / STRUCTURAL GRID</span>
            <p className="text-ink-secondary leading-relaxed">
              Orthogonal 4.0m × 8.0m column bays establish clear structural zones, avoiding interior load-bearing
              obstructions across the primary living pavilion.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-accent-tech font-bold uppercase tracking-wider">02 / AXIAL CIRCULATION</span>
            <p className="text-ink-secondary leading-relaxed">
              A continuous circulation axis (dashed line) navigates from the south entry vestibule into the
              sheltered garden terrace without disruptive sightline breaks.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-accent-tech font-bold uppercase tracking-wider">03 / ENVELOPE OPENINGS</span>
            <p className="text-ink-secondary leading-relaxed">
              Extensive floor-to-ceiling multi-slide pocket doors dissolve the boundary between interior
              living volumes and exterior stone courtyards.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
