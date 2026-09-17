import React from "react";

interface SectionHeadingProps {
  phaseNumber: string;
  discipline: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  phaseNumber,
  discipline,
  title,
  subtitle,
  className = "",
  align = "left",
}) => {
  return (
    <div
      className={`relative w-full border-b border-border pb-8 mb-12 sm:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {/* Telemetry Tag */}
      <div
        className={`flex items-center gap-3 font-mono text-[11px] sm:text-xs text-ink-muted uppercase tracking-widest mb-3 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="w-1.5 h-1.5 bg-accent-tech" />
        <span className="font-semibold text-ink-primary">{phaseNumber}</span>
        <span className="text-ink-subtle">//</span>
        <span>{discipline}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink-primary max-w-4xl leading-tight">
        {title}
      </h2>

      {/* Subtitle / Narrative */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-secondary font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
