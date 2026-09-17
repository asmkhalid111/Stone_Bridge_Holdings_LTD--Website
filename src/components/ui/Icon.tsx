import React from "react";
import type { LucideIcon, LucideProps } from "lucide-react";

/**
 * Architectural Iconography Conventions
 * Standardized delicate stroke weights to complement high-precision CAD geometry
 * and editorial typography.
 */
export const ARCHITECTURAL_ICON_STROKE = 1.5;
export const ARCHITECTURAL_ICON_STROKE_SUBTLE = 1.25;

export interface ArchitecturalIconProps extends LucideProps {
  icon: LucideIcon;
  delicate?: boolean;
}

/**
 * Reusable Icon component enforcing the architectural stroke convention.
 */
export const ArchitecturalIcon: React.FC<ArchitecturalIconProps> = ({
  icon: LucideComp,
  strokeWidth,
  delicate = false,
  className = "",
  ...props
}) => {
  const resolvedStroke =
    strokeWidth !== undefined
      ? strokeWidth
      : delicate
      ? ARCHITECTURAL_ICON_STROKE_SUBTLE
      : ARCHITECTURAL_ICON_STROKE;

  return (
    <LucideComp
      strokeWidth={resolvedStroke}
      className={className}
      {...props}
    />
  );
};
