import { SceneConfig } from "@/lib/animation/sceneEngine";

export const FLOOR_PLAN_CONFIG: SceneConfig = {
  sceneId: "PLAN-01",
  title: "SCHEMATIC FLOOR PLAN & SPATIAL SYNTAX",
  stages: [
    {
      id: "stage-site",
      stageNumber: "01",
      label: "SITE CADASTRE & PERIMETER BOUNDARY",
      discipline: "Site Context",
      drawSelectors: ["#site-boundary"],
      duration: 0.6,
    },
    {
      id: "stage-grid",
      stageNumber: "02",
      label: "STRUCTURAL GRID & COLUMN AXES",
      discipline: "Structural Grid",
      drawSelectors: [
        "#grid-v-1", "#grid-v-2", "#grid-v-3", "#grid-v-4",
        "#grid-h-1", "#grid-h-2", "#grid-h-3"
      ],
      hideSelectorsOnMobile: ["#grid"],
      duration: 0.8,
      stagger: 0.05,
    },
    {
      id: "stage-ext-walls",
      stageNumber: "03",
      label: "PRIMARY EXTERNAL PERIMETER WALLS",
      discipline: "Building Envelope",
      drawSelectors: [
        "#wall-ext-top", "#wall-ext-bottom", "#wall-ext-left", "#wall-ext-right"
      ],
      duration: 0.9,
      stagger: 0.08,
    },
    {
      id: "stage-int-walls",
      stageNumber: "04",
      label: "INTERNAL PARTITION VOLUMES & ROOMS",
      discipline: "Spatial Division",
      drawSelectors: [
        "#wall-int-1", "#wall-int-2", "#wall-int-3",
        "#wall-int-4", "#wall-int-5", "#wall-int-6"
      ],
      duration: 0.8,
      stagger: 0.06,
    },
    {
      id: "stage-openings",
      stageNumber: "05",
      label: "PORTAL APERTURES & FENESTRATION",
      discipline: "Openings",
      drawSelectors: [
        "#door-entry", "#door-int-1", "#door-int-2", "#door-int-3",
        "#window-1", "#window-2", "#window-3"
      ],
      duration: 0.8,
      stagger: 0.05,
    },
    {
      id: "stage-circulation",
      stageNumber: "06",
      label: "CIRCULATION AXIS & SPATIAL CONTEXT",
      discipline: "Circulation & Context",
      drawSelectors: [
        "#circ-flow", "#circ-arrow",
        "#kitchen-island", "#dining-table", "#dining-chair-1", "#dining-chair-2", "#sofa"
      ],
      hideSelectorsOnMobile: ["#furniture"],
      duration: 0.8,
      stagger: 0.04,
    },
    {
      id: "stage-resolution",
      stageNumber: "07",
      label: "COMPLETED FLOOR PLAN & WITNESS DIMENSIONS",
      discipline: "Final Resolution",
      drawSelectors: [
        "#dim-line-ext-bottom", "#dim-tick-1", "#dim-tick-2", "#dim-tick-3"
      ],
      fadeSelectors: ["#dim-text-1", "#dim-text-2"],
      duration: 0.6,
      stagger: 0.04,
    },
  ],
};

export const STRUCTURAL_SEQUENCE_CONFIG: SceneConfig = {
  sceneId: "STRUCT-01",
  title: "AXONOMETRIC STRUCTURAL SEQUENCE",
  stages: [
    {
      id: "stage-ground",
      stageNumber: "01",
      label: "SUBTERRANEAN GRID & SITE TOPOGRAPHY",
      discipline: "Geotechnical Datum",
      drawSelectors: ["#ground-grid-1", "#ground-grid-2", "#ground-grid-3"],
      hideSelectorsOnMobile: ["#ground"],
      duration: 0.7,
      stagger: 0.06,
    },
    {
      id: "stage-foundation",
      stageNumber: "02",
      label: "REINFORCED FOUNDATION SLAB & FOOTINGS",
      discipline: "Substructure",
      drawSelectors: [
        "#foundation-slab", "#foundation-depth-left", "#foundation-depth-right"
      ],
      duration: 0.8,
      stagger: 0.08,
    },
    {
      id: "stage-columns",
      stageNumber: "03",
      label: "VERTICAL STRUCTURAL PIERS & COLUMNS",
      discipline: "Primary Frame",
      drawSelectors: [
        "#col-1-edge", "#col-1-side",
        "#col-2-edge",
        "#col-3-edge", "#col-3-side",
        "#col-4-edge", "#col-4-side1", "#col-4-side2"
      ],
      duration: 0.9,
      stagger: 0.05,
    },
    {
      id: "stage-beams",
      stageNumber: "04",
      label: "HORIZONTALLY TIE-BEAMS & PERIMETER GIRDERS",
      discipline: "Structural Framing",
      drawSelectors: [
        "#beam-left", "#beam-right", "#beam-bottom-right", "#beam-bottom-left"
      ],
      duration: 0.8,
      stagger: 0.06,
    },
    {
      id: "stage-slabs",
      stageNumber: "05",
      label: "UPPER SUSPENDED CONCRETE FLOOR SLAB",
      discipline: "Floor Diaphragm",
      drawSelectors: [
        "#slab-1", "#slab-1-depth-left", "#slab-1-depth-right"
      ],
      duration: 0.8,
      stagger: 0.08,
    },
    {
      id: "stage-envelope",
      stageNumber: "06",
      label: "ARCHITECTURAL ENVELOPE & ROOF BOUNDING MASS",
      discipline: "Enclosure Composition",
      drawSelectors: [
        "#mass-left", "#mass-right", "#mass-front-left", "#mass-front-right"
      ],
      duration: 0.9,
      stagger: 0.06,
    },
  ],
};

export const PROJECT_OVERLAY_CONFIG: SceneConfig = {
  sceneId: "OVERLAY-01",
  title: "FACADE ELEVATION & STRUCTURAL BAY OVERLAY",
  stages: [
    {
      id: "stage-profile",
      stageNumber: "01",
      label: "FACADE SILHOUETTE & MONUMENTAL PROFILE",
      discipline: "Elevation Outline",
      drawSelectors: ["#building-profile"],
      duration: 0.7,
    },
    {
      id: "stage-structure",
      stageNumber: "02",
      label: "STRUCTURAL BAYS & PRIMARY FLOOR DATUM",
      discipline: "Bay Organization",
      drawSelectors: ["#bay-1", "#bay-2", "#bay-3", "#slab-floor-1"],
      duration: 0.8,
      stagger: 0.08,
    },
    {
      id: "stage-apertures",
      stageNumber: "03",
      label: "GLAZING APERTURES & RHYTHMIC FENESTRATION",
      discipline: "Window Portals",
      drawSelectors: [
        "#window-left-1", "#window-left-2",
        "#window-center-1", "#window-center-2",
        "#window-right-1", "#window-right-2",
        "#window-far-right-1", "#window-far-right-2"
      ],
      duration: 1.0,
      stagger: 0.05,
    },
  ],
};
