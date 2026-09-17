import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EXPERTISE_AREAS = [
  {
    code: "CAP-01",
    title: "Post-Tensioned Concrete & Long-Span Cantilevers",
    description:
      "Advanced structural engineering facilitating dramatic column-free spaces and floating horizontal slabs without excessive floor depth.",
    parameters: ["Deflection control", "Integrated thermal breaks", "Exposed architectural finish"],
  },
  {
    code: "CAP-02",
    title: "Engineered Mass Timber & Glulam Framing",
    description:
      "Biophilic and low-carbon structural systems utilizing precision CNC-milled cross-laminated timber (CLT) and glue-laminated beams.",
    parameters: ["Sub-millimeter joinery tolerance", "Carbon sequestration", "Exposed fire-rated soffits"],
  },
  {
    code: "CAP-03",
    title: "Unitized Curtain Walls & Custom Glazing Envelopes",
    description:
      "Facade systems engineered for high thermal resistance, acoustic decoupling, and frameless visual transitions to exterior environments.",
    parameters: ["Triple-pane low-iron glazing", "Concealed structural silicone joints", "Air permeability < 0.1 m³/h·m²"],
  },
  {
    code: "CAP-04",
    title: "Direct Integrated General Contracting",
    description:
      "Eliminating the traditional design-bid-build compromise by managing jobsite craft, subcontractors, and timelines under single-source accountability.",
    parameters: ["Comprehensive BIM 4D scheduling", "Direct millwork fabrication", "Zero design-execution variance"],
  },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="relative w-full py-24 sm:py-32 bg-canvas border-t border-border">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="05"
          discipline="TECHNICAL CAPABILITIES &amp; ENGINEERING"
          title="Engineering rigor married with uncompromising craftsmanship."
          subtitle="We approach complex technical challenges through proven building science, advanced materials, and meticulous constructability reviews."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERTISE_AREAS.map((item) => (
            <div
              key={item.code}
              className="border border-border bg-canvas-elevated p-6 sm:p-8 flex flex-col justify-between hover:border-ink-primary transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-ink-muted mb-4 pb-3 border-b border-border/60">
                  <span className="text-accent-tech font-bold">{item.code}</span>
                  <span className="text-[10px] uppercase tracking-wider">TECHNICAL SPECIFICATION</span>
                </div>
                <h3 className="text-lg sm:text-xl font-normal text-ink-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-2">
                  Technical Performance Parameters:
                </p>
                <ul className="space-y-1 font-mono text-xs text-ink-secondary">
                  {item.parameters.map((param, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-ink-muted flex-shrink-0" />
                      <span>{param}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
