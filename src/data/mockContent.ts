import { NavItem, ProjectData, ProcessStepData } from "@/types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { index: "01", label: "Studio", href: "/#studio" },
  { index: "02", label: "Architecture", href: "/#architecture" },
  { index: "03", label: "Process", href: "/#process" },
  { index: "04", label: "Projects", href: "/projects" },
  { index: "05", label: "Expertise", href: "/#expertise" },
  { index: "06", label: "Contact", href: "/#contact" },
];


export const STUDIO_DISCIPLINES = [
  {
    code: "ARC-01",
    title: "Spatial & Conceptual Architecture",
    description:
      "Site-specific spatial volumes governed by natural light ingress, structural clarity, and environmental orientation.",
  },
  {
    code: "STR-02",
    title: "Structural Engineering & Massing",
    description:
      "Direct integration of structural framing—concrete post-tensioning, steel moment frames, and mass timber—into the aesthetic identity.",
  },
  {
    code: "BLD-03",
    title: "General Contracting & Construction",
    description:
      "Rigorous construction management ensuring zero discrepancy between architectural intent and physical execution.",
  },
  {
    code: "ENV-04",
    title: "High-Performance Envelopes",
    description:
      "Precision thermal breaks, high-performance glazing, ventilated rainscreens, and durable material assemblies.",
  },
];


export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: "01",
    title: "Site & Reference Cadastre",
    discipline: "Topography & Boundary Analysis",
    description:
      "Establishing fundamental coordinates, solar azimuth, soil bearing capacity, and contextual setbacks prior to formal drafting.",
    technicalMilestones: [
      "Topographical survey & digital elevation model",
      "Subsurface geotechnical boring test",
      "Solar path & prevailing wind orientation",
    ],
  },
  {
    number: "02",
    title: "Substructure & Foundation",
    discipline: "Geotechnical & Civil Engineering",
    description:
      "Subsurface load transfer engineering, grade beams, foundation piers, and subterranean moisture mitigation systems.",
    technicalMilestones: [
      "Deep foundation pilings & rock anchoring",
      "Reinforced concrete grade beam pour",
      "Sub-slab vapor barrier & radon mitigation",
    ],
  },
  {
    number: "03",
    title: "Primary Structural Frame",
    discipline: "Structural Framing & Floor Plates",
    description:
      "Erection of vertical load-bearing columns, seismic shear cores, cantilever floor plates, and structural roof slabs.",
    technicalMilestones: [
      "Post-tensioned slab tendon tensioning",
      "Moment-resisting structural steel erection",
      "Precision deflection monitoring",
    ],
  },
  {
    number: "04",
    title: "Building Envelope & Openings",
    discipline: "Facade Engineering & Glazing",
    description:
      "Installation of high-performance curtain walls, thermal-break sliding panels, ventilated rainscreen cladding, and waterproofing.",
    technicalMilestones: [
      "Triple-glazed unitized facade installation",
      "Continuous exterior mineral wool insulation",
      "Envelope air-tightness smoke testing",
    ],
  },
  {
    number: "05",
    title: "Craftsmanship & Commissioning",
    discipline: "Interior Architecture & Systems",
    description:
      "Architectural detailing, acoustic insulation, integrated linear illumination, millwork, and full mechanical commissioning.",
    technicalMilestones: [
      "HVAC acoustic balancing & commissioning",
      "Flush architectural reveals & shadow gaps",
      "Final structural and municipal occupancy sign-off",
    ],
  },
];
