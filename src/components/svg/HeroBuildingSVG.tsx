import React, { forwardRef } from "react";

interface HeroBuildingSVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const HeroBuildingSVG = forwardRef<SVGSVGElement, HeroBuildingSVGProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 1600 1000"
        role="img"
        aria-labelledby="hero-title hero-desc"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto overflow-visible select-none ${className}`}
        {...props}
      >
        <title id="hero-title">Contemporary building construction sequence</title>
        <desc id="hero-desc">
          Architectural line drawing showing the building from foundation to completed facade.
        </desc>

        {/* Site & Reference Cadastre */}
        <g id="site" className="ref-line">
          <path id="site-ground" d="M 100,850 L 1500,850" vectorEffect="non-scaling-stroke" />
          <path
            id="site-grid-vertical"
            d="M 400,200 L 400,900 M 700,200 L 700,900 M 1000,200 L 1000,900 M 1200,200 L 1200,900"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="site-grid-horizontal"
            d="M 200,300 L 1400,300 M 200,550 L 1400,550 M 200,800 L 1400,800"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Substructure & Foundation */}
        <g id="foundation" className="primary-line">
          <path
            id="foundation-main"
            d="M 400,850 L 1200,850 L 1200,800 L 400,800 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path id="foundation-pier-1" d="M 450,850 L 450,900" vectorEffect="non-scaling-stroke" />
          <path id="foundation-pier-2" d="M 700,850 L 700,900" vectorEffect="non-scaling-stroke" />
          <path id="foundation-pier-3" d="M 950,850 L 950,900" vectorEffect="non-scaling-stroke" />
          <path id="foundation-pier-4" d="M 1150,850 L 1150,900" vectorEffect="non-scaling-stroke" />
        </g>

        {/* Primary Load-Bearing Structure */}
        <g id="structure" className="primary-line">
          {/* Columns */}
          <path
            id="column-1"
            d="M 450,800 L 450,300 M 470,800 L 470,300"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="column-2"
            d="M 700,800 L 700,550 M 720,800 L 720,550"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="column-3"
            d="M 950,800 L 950,300 M 970,800 L 970,300"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="column-4"
            d="M 1150,800 L 1150,550 M 1170,800 L 1170,550"
            vectorEffect="non-scaling-stroke"
          />
          {/* Slabs */}
          <path
            id="slab-level-1"
            d="M 350,550 L 1250,550 L 1250,530 L 350,530 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="slab-roof"
            d="M 380,300 L 1000,300 L 1000,280 L 380,280 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="slab-lower-roof"
            d="M 1000,530 L 1220,530 L 1220,510 L 1000,510 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Architectural Envelope & Spatial Volumes */}
        <g id="architecture" className="secondary-line">
          <path
            id="wall-exterior-left"
            d="M 400,800 L 400,300 L 450,300 L 450,800 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="wall-exterior-right"
            d="M 1200,800 L 1200,530 L 1150,530 L 1150,800 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="wall-interior-1"
            d="M 700,530 L 700,300 L 720,300 L 720,530 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="cantilever-box"
            d="M 300,530 L 450,530 L 450,350 L 300,350 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Glazing & Openings */}
        <g id="openings" className="secondary-line">
          <path
            id="window-large-1"
            d="M 470,800 L 700,800 L 700,550 L 470,550 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="window-large-2"
            d="M 720,800 L 950,800 L 950,550 L 720,550 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="window-upper"
            d="M 720,530 L 950,530 L 950,300 L 720,300 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="door-entry"
            d="M 970,800 L 1150,800 L 1150,600 L 970,600 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Architectural Details & Balusters */}
        <g id="details" className="detail-line">
          <path id="mullion-1" d="M 585,800 L 585,550" vectorEffect="non-scaling-stroke" />
          <path id="mullion-2" d="M 835,800 L 835,550" vectorEffect="non-scaling-stroke" />
          <path id="mullion-3" d="M 835,530 L 835,300" vectorEffect="non-scaling-stroke" />
          <path id="mullion-h-1" d="M 470,600 L 700,600" vectorEffect="non-scaling-stroke" />
          <path id="mullion-h-2" d="M 720,600 L 950,600" vectorEffect="non-scaling-stroke" />
          <path
            id="door-panel-1"
            d="M 970,800 L 1060,800 L 1060,600 L 970,600 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="door-panel-2"
            d="M 1060,800 L 1150,800 L 1150,600 L 1060,600 Z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="door-handle"
            d="M 1050,700 L 1050,730 M 1070,700 L 1070,730"
            vectorEffect="non-scaling-stroke"
          />
          <path id="balcony-rail" d="M 300,500 L 450,500" vectorEffect="non-scaling-stroke" />
          <path
            id="balcony-balusters"
            d="M 320,530 L 320,500 M 340,530 L 340,500 M 360,530 L 360,500 M 380,530 L 380,500 M 400,530 L 400,500 M 420,530 L 420,500 M 440,530 L 440,500"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Context & Landscape */}
        <g id="landscape" className="secondary-line">
          <path
            id="tree-1"
            d="M 200,850 L 200,700 M 170,720 C 150,700 150,650 200,620 C 250,650 250,700 230,720"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="tree-1-detail"
            className="detail-line"
            d="M 200,700 L 185,670 M 200,670 L 215,640"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="tree-2"
            d="M 1350,850 L 1350,600 M 1300,630 C 1260,580 1260,500 1350,450 C 1440,500 1440,580 1400,630"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="tree-2-detail"
            className="detail-line"
            d="M 1350,600 L 1320,550 M 1350,550 L 1380,500"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Technical Annotations & Elevation Dimensions */}
        <g id="annotations" className="detail-line">
          <path
            id="dim-line-1"
            d="M 140,850 L 140,800 M 135,850 L 145,850 M 135,800 L 145,800"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="dim-line-2"
            d="M 140,800 L 140,550 M 135,550 L 145,550"
            vectorEffect="non-scaling-stroke"
          />
          <path
            id="dim-line-3"
            d="M 140,550 L 140,300 M 135,300 L 145,300"
            vectorEffect="non-scaling-stroke"
          />
          <text
            id="dim-text-1"
            x="120"
            y="830"
            fontFamily="var(--font-mono), monospace"
            fontSize="12"
            textAnchor="end"
            fill="currentColor"
            className="select-none"
          >
            +0.50m
          </text>
          <text
            id="dim-text-2"
            x="120"
            y="680"
            fontFamily="var(--font-mono), monospace"
            fontSize="12"
            textAnchor="end"
            fill="currentColor"
            className="select-none"
          >
            +3.70m
          </text>
          <text
            id="dim-text-3"
            x="120"
            y="430"
            fontFamily="var(--font-mono), monospace"
            fontSize="12"
            textAnchor="end"
            fill="currentColor"
            className="select-none"
          >
            +6.90m
          </text>
        </g>
      </svg>
    );
  }
);

HeroBuildingSVG.displayName = "HeroBuildingSVG";
