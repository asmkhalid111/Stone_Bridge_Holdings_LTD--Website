import React from "react";
import { ProcessStepData } from "@/types";

interface ProcessStepProps {
  step: ProcessStepData;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, isLast = false }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 sm:py-12 ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      {/* Step Number & Discipline Code */}
      <div className="w-full md:w-48 flex-shrink-0">
        <div className="flex items-center gap-3 font-mono text-xs text-ink-muted mb-2">
          <span className="text-xl sm:text-2xl font-light text-ink-primary tabular-nums">
            {step.number}
          </span>
          <span className="w-8 h-[1px] bg-border" />
          <span className="text-[10px] uppercase tracking-wider text-accent-tech font-semibold">
            PHASE
          </span>
        </div>
        <p className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
          {step.discipline}
        </p>
      </div>

      {/* Main Content & Description */}
      <div className="flex-1 max-w-2xl">
        <h3 className="text-xl sm:text-2xl font-light tracking-tight text-ink-primary mb-3">
          {step.title}
        </h3>
        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6 font-normal">
          {step.description}
        </p>

        {/* Technical Milestones */}
        <div className="space-y-2 border-l border-border pl-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            Key Execution Milestones
          </p>
          <ul className="space-y-1 font-mono text-xs text-ink-secondary">
            {step.technicalMilestones.map((milestone, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent-tech flex-shrink-0" />
                <span>{milestone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
