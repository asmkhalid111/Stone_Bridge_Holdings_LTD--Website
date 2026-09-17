import React, { forwardRef } from "react";

interface FloorPlanSVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const FloorPlanSVG = forwardRef<SVGSVGElement, FloorPlanSVGProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 1600 1000"
        role="img"
        aria-labelledby="plan-title plan-desc"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto overflow-visible select-none ${className}`}
        {...props}
      >
        <title id="plan-title">Architectural Floor Plan</title>
        <desc id="plan-desc">Clean 2D architectural floor plan revealing structural grid, walls, and circulation.</desc>

        <g id="site" className="ref-line">
          <path id="site-boundary" d="M 100,100 L 1500,100 L 1500,900 L 100,900 Z" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="grid" className="ref-line">
          <path id="grid-v-1" d="M 300,150 L 300,850" vectorEffect="non-scaling-stroke" />
          <path id="grid-v-2" d="M 700,150 L 700,850" vectorEffect="non-scaling-stroke" />
          <path id="grid-v-3" d="M 1100,150 L 1100,850" vectorEffect="non-scaling-stroke" />
          <path id="grid-v-4" d="M 1300,150 L 1300,850" vectorEffect="non-scaling-stroke" />
          <path id="grid-h-1" d="M 250,200 L 1350,200" vectorEffect="non-scaling-stroke" />
          <path id="grid-h-2" d="M 250,500 L 1350,500" vectorEffect="non-scaling-stroke" />
          <path id="grid-h-3" d="M 250,800 L 1350,800" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="walls-exterior" className="primary-line">
          <path id="wall-ext-top" d="M 300,200 L 1300,200" vectorEffect="non-scaling-stroke" />
          <path id="wall-ext-bottom" d="M 300,800 L 600,800 M 800,800 L 1300,800" vectorEffect="non-scaling-stroke" />
          <path id="wall-ext-left" d="M 300,200 L 300,800" vectorEffect="non-scaling-stroke" />
          <path id="wall-ext-right" d="M 1300,200 L 1300,800" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="walls-interior" className="secondary-line">
          <path id="wall-int-1" d="M 700,200 L 700,400" vectorEffect="non-scaling-stroke" />
          <path id="wall-int-2" d="M 700,500 L 700,800" vectorEffect="non-scaling-stroke" />
          <path id="wall-int-3" d="M 1100,500 L 1100,800" vectorEffect="non-scaling-stroke" />
          <path id="wall-int-4" d="M 300,500 L 500,500" vectorEffect="non-scaling-stroke" />
          <path id="wall-int-5" d="M 600,500 L 700,500" vectorEffect="non-scaling-stroke" />
          <path id="wall-int-6" d="M 700,500 L 950,500" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="openings" className="secondary-line">
          <path id="door-entry" d="M 800,800 L 800,700 A 100 100 0 0 0 700,800" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="door-int-1" d="M 700,400 L 600,400 A 100 100 0 0 0 700,500" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="door-int-2" d="M 500,500 L 500,600 A 100 100 0 0 0 600,500" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="door-int-3" d="M 1100,500 L 1000,500 A 100 100 0 0 1 1100,400" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="window-1" d="M 400,195 L 600,195 M 400,205 L 600,205" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="window-2" d="M 800,195 L 1200,195 M 800,205 L 1200,205" className="detail-line" vectorEffect="non-scaling-stroke" />
          <path id="window-3" d="M 295,300 L 295,700 M 305,300 L 305,700" className="detail-line" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="circulation">
          <path id="circ-flow" d="M 750,850 L 750,650 C 750,550 550,550 550,450" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" vectorEffect="non-scaling-stroke" />
          <path id="circ-arrow" d="M 540,460 L 550,450 L 560,460" className="primary-line" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="furniture" className="detail-line">
          <path id="kitchen-island" d="M 800,600 L 1000,600 L 1000,650 L 800,650 Z" vectorEffect="non-scaling-stroke" />
          <path id="dining-table" d="M 850,300 L 950,300 L 950,400 L 850,400 Z" vectorEffect="non-scaling-stroke" />
          <circle id="dining-chair-1" cx="830" cy="350" r="15" vectorEffect="non-scaling-stroke" fill="none" stroke="currentColor" />
          <circle id="dining-chair-2" cx="970" cy="350" r="15" vectorEffect="non-scaling-stroke" fill="none" stroke="currentColor" />
          <path id="sofa" d="M 1150,250 L 1150,450 L 1250,450 L 1250,400 L 1200,400 L 1200,250 Z" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="annotations" className="detail-line">
          <path id="dim-line-ext-bottom" d="M 300,850 L 1300,850 M 300,840 L 300,860 M 1300,840 L 1300,860" vectorEffect="non-scaling-stroke" />
          <text id="dim-text-1" x="800" y="880" fontFamily="var(--font-mono), monospace" fontSize="13" textAnchor="middle" fill="currentColor">
            PLAN SPAN — 24.00m
          </text>
        </g>
      </svg>
    );
  }
);

FloorPlanSVG.displayName = "FloorPlanSVG";
