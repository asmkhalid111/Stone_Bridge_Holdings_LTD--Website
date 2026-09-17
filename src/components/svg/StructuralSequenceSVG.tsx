import React, { forwardRef } from "react";

interface StructuralSequenceSVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const StructuralSequenceSVG = forwardRef<SVGSVGElement, StructuralSequenceSVGProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 -100 1600 1300"
        role="img"
        aria-labelledby="struct-title struct-desc"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto overflow-visible select-none ${className}`}
        {...props}
      >
        <title id="struct-title">Structural Construction Sequence</title>
        <desc id="struct-desc">Diagram showing the physical logic of construction from foundation up to the roof envelope.</desc>

        <g id="ground" className="detail-line">
          <path id="ground-grid-1" d="M 200,800 L 800,500 L 1400,800 L 800,1100 Z" vectorEffect="non-scaling-stroke" />
          <path id="ground-grid-2" d="M 400,700 L 1000,1000 M 600,600 L 1200,900" vectorEffect="non-scaling-stroke" />
          <path id="ground-grid-3" d="M 1200,700 L 600,1000 M 1000,600 L 400,900" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="foundation" className="primary-line">
          <path id="foundation-slab" d="M 300,750 L 800,500 L 1300,750 L 800,1000 Z" vectorEffect="non-scaling-stroke" />
          <path id="foundation-depth-left" d="M 300,750 L 300,780 L 800,1030 L 800,1000 Z" vectorEffect="non-scaling-stroke" />
          <path id="foundation-depth-right" d="M 800,1000 L 800,1030 L 1300,780 L 1300,750 Z" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="columns" className="primary-line">
          <path id="col-1-edge" d="M 350,730 L 350,430" vectorEffect="non-scaling-stroke" />
          <path id="col-1-side" d="M 370,720 L 370,420" vectorEffect="non-scaling-stroke" />
          <path id="col-2-edge" d="M 750,530 L 750,230" vectorEffect="non-scaling-stroke" />
          <path id="col-3-edge" d="M 1250,730 L 1250,430" vectorEffect="non-scaling-stroke" />
          <path id="col-3-side" d="M 1230,740 L 1230,440" vectorEffect="non-scaling-stroke" />
          <path id="col-4-edge" d="M 800,950 L 800,650" vectorEffect="non-scaling-stroke" />
          <path id="col-4-side1" d="M 780,940 L 780,640" vectorEffect="non-scaling-stroke" />
          <path id="col-4-side2" d="M 820,940 L 820,640" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="beams" className="secondary-line">
          <path id="beam-left" d="M 350,430 L 750,230" vectorEffect="non-scaling-stroke" />
          <path id="beam-right" d="M 750,230 L 1250,430" vectorEffect="non-scaling-stroke" />
          <path id="beam-bottom-right" d="M 1250,430 L 800,650" vectorEffect="non-scaling-stroke" />
          <path id="beam-bottom-left" d="M 800,650 L 350,430" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="slabs" className="primary-line">
          <path id="slab-1" d="M 300,400 L 800,150 L 1300,400 L 800,650 Z" vectorEffect="non-scaling-stroke" />
          <path id="slab-1-depth-left" d="M 300,400 L 300,430 L 800,680 L 800,650 Z" vectorEffect="non-scaling-stroke" />
          <path id="slab-1-depth-right" d="M 800,650 L 800,680 L 1300,430 L 1300,400 Z" vectorEffect="non-scaling-stroke" />
        </g>

        <g id="envelope" className="ref-line">
          <path id="mass-left" d="M 300,400 L 300,200 L 800,-50 L 800,150" vectorEffect="non-scaling-stroke" />
          <path id="mass-right" d="M 800,-50 L 1300,200 L 1300,400" vectorEffect="non-scaling-stroke" />
          <path id="mass-front-left" d="M 300,200 L 800,450 L 800,650" vectorEffect="non-scaling-stroke" />
          <path id="mass-front-right" d="M 800,450 L 1300,200" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    );
  }
);

StructuralSequenceSVG.displayName = "StructuralSequenceSVG";
