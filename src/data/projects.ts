import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    slug: "proposed-steel-car-showroom-uttara",
    title: "Proposed Single-Storied Pre-Fabricated Steel Building (Car Showroom)",
    shortTitle: "Pre-Fabricated Steel Car Showroom",
    category: "Commercial / Automobile Showroom",
    typology: "Pre-Fabricated Steel Portal Frame",
    status: "STRUCTURAL WORKING DRAWINGS",
    location: {
      area: "Uttara",
      city: "Dhaka",
      country: "Bangladesh",
    },
    client: "Mr. Jahangir",
    year: "2026",
    submissionDate: "23.07.2026",
    referenceNo: "BS-26-031",
    consultants: [
      {
        role: "Structural Designer",
        name: "Md. Rifat Mahmud Sajib",
        credentials: "B.Sc. Engineer (Civil), MIEB",
      },
      {
        role: "Checked By",
        name: "Md. Rejaul Karim",
        credentials: "B.Sc. Engineer (Civil), MIEB",
      },
      {
        role: "Engineering & Fabrication",
        name: "M/S. B.S. Engineering",
        address:
          "Plot-09, N,S Road, Block-H, Sector-2, Jahirul Islam City, Aftabnagar, Dhaka-1212",
      },
    ],
    summary:
      "Single-storied pre-fabricated steel building designed as an automobile commercial showroom in Uttara, Dhaka, featuring tapered portal frames spanning 19.37m across four grid lines with integrated clear spans.",
    description:
      "Engineered for commercial automobile showroom use in Uttara, Dhaka, this structural design utilizes pre-engineered tapered steel portal frames. The transverse section spans 19,371 mm (63'-7\") across Grids A to D without interior structural column obstructions in the primary showroom volume. The structural envelope incorporates continuous C-purlin framing, engineered bolted moment connections, and reinforced concrete pedestals anchored to deep foundation bases.",
    structuralSystem:
      "Pre-engineered tapered steel portal frame with RCC pedestals and cold-formed secondary purlins",
    structuralNotes:
      "19,371 mm (63'-7\") portal bay span, tapered column SC103 (web 234~484x6), rafters R201~R203, ridge datum +4.488m.",
    services: [
      "Structural Engineering",
      "Pre-Fabricated Steel Detailing",
      "Portal Frame Connection Engineering",
      "Foundation Pedestal Coordination",
    ],
    drawings: [
      {
        id: "p1-section",
        title: "Cross Section of Grid: 02~05",
        sheetNo: "ST-09",
        type: "Structural Cross-Section",
        scale: "NTS",
        svgPath: "/assets/svg/project-01-section.svg",
        metaPath: "/assets/svg/project-01-section-meta.md",
        dimensions:
          "19,371 mm transverse width; +3.635m eave haunch; +4.488m ridge apex",
        description:
          "Structural cross-section showing tapered portal frame columns SC101/SC102/SC103, roof rafters R101/R201, cold-formed C-purlins 160*1.6, and reinforced concrete foundation pedestals across Grids A through D.",
      },
      {
        id: "p1-detail",
        title: "Detail of Column SC03 Assembly & Base Connection",
        sheetNo: "ST-10",
        type: "Fabrication & Assembly Detail",
        scale: "NTS",
        svgPath: "/assets/svg/project-01-detail.svg",
        metaPath: "/assets/svg/project-01-detail-meta.md",
        dimensions:
          "3,038 mm overall assembly; 300x250x20mm BP01 base plate; 615x200x20mm CP615 cap plate",
        description:
          "Shop fabrication detail of tapered column SC03 detailing mother plate cutting geometry, diagonal shear line, stiffener plate locations, base plate BP01 anchor holes (Ø24), and cap plate CP615 moment connection.",
      },
    ],
    mediaStatus: {
      drawings: true,
      renders: false,
      construction: false,
      completed: false,
    },
    technicalSpecifications: [
      {
        label: "Transverse Bay Span",
        value: "19,371 mm (63'-7\")",
        detail: "Grid D to A total clear transverse span",
      },
      {
        label: "Bay Distribution",
        value: "6,457mm / 3,228mm / 3,229mm / 6,457mm",
        detail: "D-C, C-Apex, Apex-B, B-A bay intervals",
      },
      {
        label: "Clear Height",
        value: "3,052 mm (10'-0\")",
        detail: "Ground level to underside of column bracket",
      },
      {
        label: "Eave Haunch Elevation",
        value: "+3,635 mm (11'-11\")",
        detail: "Top of column haunch connection",
      },
      {
        label: "Ridge Apex Elevation",
        value: "+4,488 mm (14'-9\")",
        detail: "Centerline roof apex datum",
      },
      {
        label: "Column Profile SC103",
        value: "Web: 234~484×6 mm | Flange: 200×8 mm",
        detail: "Tapered built-up plate profile, length 2,998 mm",
      },
      {
        label: "Rafter Profiles",
        value: "Web: 488~238~488×6 mm | Flange: 200×6 mm",
        detail: "Built-up tapered rafters R201, R202, R203",
      },
      {
        label: "Base Plate BP01",
        value: "300 × 250 × 20 mm",
        detail: "4 anchor holes Ø24 mm, pitch 120 × 120 mm",
      },
      {
        label: "Cap Plate CP615",
        value: "615 × 200 × 20 mm",
        detail: "8 connection holes Ø24 mm for rafter haunch",
      },
      {
        label: "Secondary Framing",
        value: "C-Purlin 160 × 1.6 mm",
        detail: "Continuous cold-formed roof purlins with PC210 cleats",
      },
    ],
    relatedProjectSlugs: ["proposed-g6-residential-basundhara"],
  },
  {
    id: "proj-02",
    slug: "proposed-g6-residential-basundhara",
    title:
      "Proposed G+6 = 07 (Seven) Storied Residential Building Plan (Type A-A3)",
    shortTitle: "G+6 Multi-Family Residential Building",
    category: "Multi-Family Residential",
    typology: "Reinforced Concrete Frame with Shear Core",
    status: "STRUCTURAL WORKING DRAWINGS",
    location: {
      plot: "Plot-9287",
      road: "Road-12",
      block: "Block-N",
      area: "Basundhara Residential Area",
      city: "Dhaka",
      country: "Bangladesh",
    },
    client: "Mahamudal Hassan",
    year: "2026",
    submissionDate: "05.02.2026",
    consultants: [
      {
        role: "Structural Consultant",
        name: "Edifice Construction & Consultants",
        address:
          "H-62/5/E, Rupayan, P&F Square, North Sagufta, New Road, Kalshi, Dhaka-1216",
      },
      {
        role: "Checked & Approved By",
        name: "Engr. Md. Nur Alam",
        credentials: "B.Sc. in Civil Engg., FIEB-11295",
      },
      {
        role: "Architect",
        name: "Ar. Rafiul Islam Rafi",
        credentials: "B.Arch (SUST)",
      },
      {
        role: "Drawn By",
        name: "Md. Mohaimenul Islam",
      },
    ],
    summary:
      "G+6 storied residential apartment building located in Basundhara Residential Area, Dhaka, featuring a stepped floor plate, 12 primary column nodes, rigid floor beams FB1-FB13, and integrated elevator and stair cores.",
    description:
      "Designed for high-density contemporary urban living in Basundhara Residential Area, Dhaka, this seven-storied (G+6) residential structure utilizes a cast-in-place reinforced concrete moment frame. The floor geometry follows a stepped perimeter accommodating front and rear setbacks, cantilever balconies, and light ventilation courts. The third-floor roof beam layout establishes 14 primary beam runs (FB1-FB13, 10\"x20\"), cantilever balcony beams (CB, 10\"x6\"), two-way solid slab panels (5\" and 6\"), and dedicated structural cores for vertical circulation.",
    structuralSystem:
      "Reinforced Concrete (RCC) moment-resisting frame with central shear core and two-way slabs",
    structuralNotes:
      "12 column nodes, 14 primary beam runs FB1-FB13 (10\"x20\"), cantilever beam CB (10\"x6\"), two-way slabs TH=5\" & 6\".",
    services: [
      "Architectural Planning",
      "Structural RCC Engineering",
      "Beam Layout & Framing Design",
      "Vertical Core Shear Engineering",
    ],
    drawings: [
      {
        id: "p2-beam-layout",
        title: "3rd Floor Roof Beam Layout Plan",
        sheetNo: "A-02",
        type: "Structural Framing Plan",
        scale: "1:100",
        svgPath: "/assets/svg/project-02-beam-layout.svg",
        metaPath: "/assets/svg/project-02-beam-layout-meta.md",
        dimensions:
          "35'-0\" lateral depth, 46'-11\" stepped frontal boundary, 12 column nodes",
        description:
          "Structural working drawing Sheet A-02 illustrating the 3rd floor roof beam layout, locating columns C1 through C12, beams FB1 to FB13 (10\"x20\"), cantilever beam CB (10\"x6\"), slab thickness zones (TH=5\", TH=6\"), beam bottom drop slabs, stair shaft (STAIR), lift core (LIFT), and ventilation void (VOID).",
      },
    ],
    mediaStatus: {
      drawings: true,
      renders: false,
      construction: false,
      completed: false,
    },
    technicalSpecifications: [
      {
        label: "Building Storeys",
        value: "G+6 = 07 (Seven) Storeys",
        detail: "Ground level plus six upper residential levels",
      },
      {
        label: "Primary Structural Nodes",
        value: "12 Column Positions",
        detail: "C1 to C12 with corner chamfer detail",
      },
      {
        label: "Primary Beams (FB1-FB13)",
        value: '10" × 20" Cross-Section',
        detail: "Cast-in-place reinforced concrete rigid frame beams",
      },
      {
        label: "Cantilever Balcony Beams",
        value: '10" × 6" (Beam CB)',
        detail: "Projecting cantilever supports for residential balconies",
      },
      {
        label: "Living Bay Slab Thickness",
        value: 'TH = 5" (125 mm)',
        detail: "Two-way solid reinforced concrete floor slab",
      },
      {
        label: "Cantilever & Wet Zone Slab",
        value: 'TH = 6" (150 mm)',
        detail: "Reinforced slab over balcony and core perimeter",
      },
      {
        label: "Vertical Transportation Core",
        value: "Dedicated LIFT Shaft",
        detail: "Reinforced concrete elevator shear envelope",
      },
      {
        label: "Fire Egress Shaft",
        value: "Monolithic STAIR Shaft",
        detail: "Integrated concrete dog-leg egress stairwell",
      },
      {
        label: "Perimeter Footprint Dimensions",
        value: '35\'-0" × 46\'-11" Stepped Bounds',
        detail: "Direct CAD vector boundary coordinates",
      },
      {
        label: "Light & Vent Void",
        value: "Central VOID Shaft",
        detail: "Natural daylight and cross-ventilation shaft",
      },
    ],
    relatedProjectSlugs: ["proposed-steel-car-showroom-uttara"],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
