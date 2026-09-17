import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STUDIO_DISCIPLINES } from "@/data/mockContent";

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="relative w-full py-24 sm:py-32 bg-canvas">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="01"
          discipline="STUDIO PHILOSOPHY &amp; ETHOS"
          title="Architecture conceived not as decoration, but as an honest structural reality."
          subtitle="We eliminate the traditional friction between the architect's drafting board and the general contractor's crane. By uniting spatial conception with engineering execution, our structures remain uncompromising in detailing and permanence."
        />

        {/* 12-Column Grid: Editorial Text & Discipline Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* Studio Statement */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-light text-ink-primary tracking-tight">
              Tectonic rigor from the first site coordinate to final commissioning.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-ink-secondary">
              Buildings should express the physics that sustain them. In our work, load paths are not
              concealed behind arbitrary plaster shells; they are articulated as the primary spatial
              rhythm. Columns frame views; cantilever slabs extend shelter; shadow reveals celebrate the
              meeting of dissimilar materials.
            </p>
            <div className="border-t border-border pt-6 font-mono text-xs text-ink-muted space-y-2">
              <p>CORE METHODOLOGY: Monoline precision drafting</p>
              <p>DELIVERY MODEL: Single-source Design-Build &amp; Construction</p>
            </div>
          </div>

          {/* 4 Core Disciplines */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STUDIO_DISCIPLINES.map((discipline) => (
              <div
                key={discipline.code}
                className="border border-border bg-canvas-elevated p-6 flex flex-col justify-between hover:border-ink-primary transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-ink-muted mb-4 pb-2 border-b border-border/60">
                    <span className="text-accent-tech font-bold">{discipline.code}</span>
                    <span className="text-[10px] uppercase">DISCIPLINE</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-normal text-ink-primary mb-3">
                    {discipline.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                    {discipline.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/40 font-mono text-[10px] text-ink-subtle uppercase">
                  STATUS: INTEGRATED PRACTICE
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
