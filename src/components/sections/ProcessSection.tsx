import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StructuralSequenceScrollScene } from "@/components/animation/StructuralSequenceScrollScene";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { PROCESS_STEPS } from "@/data/mockContent";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative w-full py-24 sm:py-32 bg-canvas border-t border-border">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="03"
          discipline="CONSTRUCTION LOGIC & PROCESS"
          title="From subterranean foundation to finished architectural envelope."
          subtitle="True architectural craft is defined during physical construction. We manage the chronological build sequence with engineering precision, ensuring that the structural framework directly dictates the final spatial aesthetic."
        />

        {/* Dynamic Structural Sequence Axonometric Canvas */}
        <div className="w-full mb-16">
          <StructuralSequenceScrollScene />
        </div>

        {/* Step-by-Step Chronological Construction Sequence */}
        <div className="border-t border-border">
          {PROCESS_STEPS.map((step, idx) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={idx === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
