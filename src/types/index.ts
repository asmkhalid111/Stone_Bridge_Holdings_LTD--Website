export * from "./project";

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface ProjectData {
  id: string;
  title: string;
  typology: string;
  status: "CONCEPT" | "SCHEMATIC" | "CONSTRUCTION" | "COMPLETED";
  location: string;
  year: string;
  area: string;
  description: string;
  structuralNotes: string;
  isPlaceholder: true;
}

export interface ProcessStepData {
  number: string;
  title: string;
  discipline: string;
  description: string;
  technicalMilestones: string[];
}

export interface SVGSceneGroup {
  id: string;
  label: string;
  strokeClass: "ref-line" | "primary-line" | "secondary-line" | "detail-line";
  order: number;
}
