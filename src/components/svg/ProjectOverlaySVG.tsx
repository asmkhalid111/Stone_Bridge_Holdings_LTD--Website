import React, { forwardRef } from "react";

interface ProjectOverlaySVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ProjectOverlaySVG = forwardRef<SVGSVGElement, ProjectOverlaySVGProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 1600 1000"
        role="img"
        aria-labelledby="proj-title proj-desc"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto overflow-visible select-none ${className}`}
        {...props}
      >
        <title id="proj-title">Project Transition Overlay</title>
        <desc id="proj-desc">Line art outline of a project facade, designed to transition into a photograph.</desc>

        <g id="outline" className="primary-line">
          <path id="building-profile" d="M 200,900 L 200,200 L 800,100 L 1400,200 L 1400,900 Z" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="structure" className="primary-line">
          <path id="bay-1" d="M 500,900 L 500,150" vectorEffect="non-scaling-stroke" />
          <path id="bay-2" d="M 800,900 L 800,100" vectorEffect="non-scaling-stroke" />
          <path id="bay-3" d="M 1100,900 L 1100,150" vectorEffect="non-scaling-stroke" />
          <path id="slab-floor-1" d="M 200,500 L 1400,500" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="details" className="secondary-line">
          <path id="window-left-1" d="M 250,850 L 450,850 L 450,550 L 250,550 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-left-2" d="M 250,450 L 450,450 L 450,200 L 250,200 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-center-1" d="M 550,850 L 750,850 L 750,550 L 550,550 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-center-2" d="M 550,450 L 750,450 L 750,150 L 550,150 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-right-1" d="M 850,850 L 1050,850 L 1050,550 L 850,550 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-right-2" d="M 850,450 L 1050,450 L 1050,150 L 850,150 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-far-right-1" d="M 1150,850 L 1350,850 L 1350,550 L 1150,550 Z" vectorEffect="non-scaling-stroke" />
          <path id="window-far-right-2" d="M 1150,450 L 1350,450 L 1350,200 L 1150,200 Z" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    );
  }
);

ProjectOverlaySVG.displayName = "ProjectOverlaySVG";
