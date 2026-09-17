export interface ProjectConsultant {
  role: string;
  name: string;
  credentials?: string;
  firm?: string;
  address?: string;
}

export interface ProjectDrawing {
  id: string;
  title: string;
  sheetNo?: string;
  type: string;
  scale?: string;
  svgPath: string;
  metaPath?: string;
  dimensions?: string;
  description?: string;
}

export interface ProjectTechnicalSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectLocation {
  address?: string;
  plot?: string;
  road?: string;
  block?: string;
  area: string;
  city: string;
  country: string;
}

export interface ProjectMediaStatus {
  drawings: boolean;
  renders: boolean;
  construction: boolean;
  completed: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  typology: string;
  status:
    | "APPROVED DRAWINGS / DESIGN"
    | "STRUCTURAL WORKING DRAWINGS"
    | "CONSTRUCTION DOCUMENTATION"
    | "COMPLETED";
  location: ProjectLocation;
  client?: string;
  year: string;
  submissionDate?: string;
  referenceNo?: string;
  consultants?: ProjectConsultant[];
  summary: string;
  description: string;
  structuralSystem: string;
  structuralNotes: string;
  programArea?: string;
  services: string[];
  drawings: ProjectDrawing[];
  mediaStatus: ProjectMediaStatus;
  technicalSpecifications: ProjectTechnicalSpec[];
  relatedProjectSlugs: string[];
}
