# Stone Bridge Holdings LTD

> An architecture, engineering, and construction portfolio designed as an interactive architectural process.

## ⚠️ CURRENT STATUS — PRE-LAUNCH / IN PROGRESS

The website is currently deployed on Netlify for review, testing, and development purposes.

**It is NOT the final production version.**

The current deployment contains placeholders and incomplete information because the final company and project information has not yet been supplied. The website structure, visual system, animation framework, project architecture, and drawing presentation have been developed ahead of the final content handoff.

The current version should therefore be considered a **"Functional design/technical prototype + evolving project presentation"** rather than the final approved company website.

---

## Overview

This website serves as the digital presence for Stone Bridge Holdings LTD, an integrated architectural design, structural engineering, and construction practice. 

## Core Concept

**CONCEPT → ARCHITECTURE → STRUCTURE → CONSTRUCTION → COMPLETED SPACE**

The website is intentionally designed so that the website itself behaves like an architectural process. The visual language communicates architectural drawing, construction sequence, structural logic, technical precision, editorial presentation, and controlled motion. It emphasizes progressive development from technical drawings to the built space.

This is **NOT** intended to be a generic corporate/SaaS website. The intended character is:
- premium
- restrained
- editorial
- contemporary
- precise
- technical
- spacious
- architectural

## Current Capabilities

The platform currently supports a fully deterministic scroll-driven animation architecture, responsive vector inspection for technical drawings, a strict data model for managing architectural projects, and an accessible, premium front-end experience built on Next.js.

## Current Projects

The repository currently represents the following verified projects (driven by `src/data/projects.ts`):

1. **Proposed Single-Storied Pre-Fabricated Steel Building (Car Showroom)**
   - **Slug:** `proposed-steel-car-showroom-uttara`
   - **Typology:** Commercial / Automobile Showroom
   - **Location:** Uttara, Dhaka, Bangladesh
   - **Status:** STRUCTURAL WORKING DRAWINGS
   - **Media State:** Drawings available; Renders/Photography pending.
   - **Assets:** `project-01-section.svg`, `project-01-detail.svg`

2. **Proposed G+6 = 07 (Seven) Storied Residential Building Plan (Type A-A3)**
   - **Slug:** `proposed-g6-residential-basundhara`
   - **Typology:** Multi-Family Residential
   - **Location:** Basundhara Residential Area, Dhaka, Bangladesh
   - **Status:** STRUCTURAL WORKING DRAWINGS
   - **Media State:** Drawings available; Renders/Photography pending.
   - **Assets:** `project-02-beam-layout.svg`

## Project Presentation Philosophy

Textual information should remain concise, useful, technical where necessary, editorial, and supportive of the visual material, rather than becoming long-form marketing copy. 

**NO INFORMATION SHOULD BE FABRICATED.** 
If information has not been supplied by the company/client:
- do not invent it
- do not infer it
- do not embellish it
- do not create realistic-looking placeholder facts
- do not invent project statistics, awards, certifications, or completion dates
- use `PENDING CLIENT`, transparent media-status states, or omission where appropriate.

## Future Priority — Project Visibility

The next major evolution of the website should focus on making the projects themselves more visually prominent and easier to understand. The priority is **NOT** to keep adding large amounts of explanatory text. 

The future direction should emphasize:
- stronger project visibility
- larger project imagery when real media exists
- clearer project thumbnails
- stronger project indexing
- visual project browsing
- drawing + render + photography relationships
- project storytelling through visuals
- architectural diagrams
- project-specific animation
- construction/process imagery
- better project discovery
- stronger visual hierarchy around projects

The goal is: **SHOW MORE, EXPLAIN LESS**, without sacrificing factual accuracy.

## Missing / Placeholder Information

Additional authoritative information still needs to be supplied. 

### Company Information
Potentially incomplete:
- official company name and description
- company history
- final services/expertise
- official office address and phone number
- official email
- social media links
- registration/legal information
- approved team information
- logo/brand assets where applicable

### Project Information
Potentially incomplete:
- additional projects
- final project descriptions and approved metadata
- project status and additional technical information
- project-specific media (renders, construction photography, completed photography)
- additional drawings and approved project captions

### Contact / Business Information
Potentially incomplete:
- final contact information
- permanent contact numbers
- official email
- office location
- contact form requirements

### Media
Real-world project photography may not yet exist for projects still in planning/pre-construction. The absence of construction photography, completed photography, and site photography must **NOT** be interpreted as a missing website feature. The website intentionally represents unavailable media transparently.

## Technical Architecture

- **Next.js**: React App Router framework for static generation, routing, and overall architecture.
- **React**: UI component library.
- **TypeScript**: Strict static typing to enforce project data constraints and component safety.
- **GSAP**: High-performance animation engine.
- **ScrollTrigger**: Plugin for scroll-driven timeline scrub animations.
- **SVG**: Scalable Vector Graphics used as interactive, semantic DOM elements.
- **Tailwind CSS**: Utility-first CSS framework for precise layout and responsive rules.
- **Netlify**: Continuous deployment and hosting platform.

## Animation System

The website uses architectural drawing as an animation medium. 
Key principles:
- scroll-driven
- deterministic
- reversible
- scrubbed
- semantic SVG groups
- progressive construction
- controlled opacity
- controlled transforms
- restrained transitions
- reduced-motion support

The primary narrative order:
1. Site/reference
2. Foundation
3. Structure
4. Architecture
5. Openings
6. Details
7. Landscape/context
8. Complete

Broader animation scenes currently implemented:
- `hero-building.svg`
- `floor-plan.svg`
- `structural-sequence.svg`
- `project-overlay.svg`

## SVG Architecture

The SVGs are not merely decorative illustrations. They are structured animation assets.
They rely heavily on semantic grouping (e.g., site, reference, structure, architecture, openings, details, landscape, annotations). Verified source-derived SVGs are treated as production assets. 

**Important:** Do not casually regenerate or redraw verified SVGs. Where source drawings were converted into animation-ready SVGs, the original PDFs remain the source-of-truth.

## Project Source Drawings

The website uses a hybrid drawing architecture. Original engineering PDFs remain the source-of-truth. Selected high-value drawings are converted into semantic SVGs for animation/inspection, preserving structural logic, important dimensions, primary geometry, spatial relationships, and architectural/engineering meaning while avoiding unnecessary visual clutter.

## Project Data Architecture

- `src/types/project.ts`: Defines the strict data contracts.
- `src/data/projects.ts`: Acts as the central repository/database for authoritative project data.
- Project routing and components consume from this central file.

Content should remain separated from presentation. Future agents must update authoritative data in the appropriate content/data layer instead of scattering project facts throughout React components.

## Drawing Viewer

The `ProjectDrawingViewer` component exists to allow visitors to inspect architectural/engineering documentation without turning the main page into a dense technical drawing sheet. 
Capabilities include:
- normal drawing display
- expanded/fullscreen inspection
- sheet switching
- vector rendering
- keyboard accessibility
- Escape handling
- responsive behavior
- scale/datum presentation where applicable

## Responsive Design

- **Desktop**: Expansive composition, large architectural graphics, strong whitespace, multi-column project presentation.
- **Tablet**: Simplified grid, preserved hierarchy, controlled drawing scale.
- **Mobile**: Simplified architectural scenes, readable typography, accessible controls, stacked project information, usable drawing inspection. Mobile should not simply be a scaled-down desktop.

## Accessibility

Current accessibility principles:
- semantic HTML
- keyboard navigation
- visible focus states
- reduced motion
- accessible drawing viewer (Escape handling, focus restoration)
- appropriate image alt text
- accessible controls

Future changes must preserve these principles.

## Design System

The current visual language is architectural and restrained:
- **Typography**: Inter (primary) + Monospace (for metadata/dimensions) with strict hierarchy.
- **Spacing / Grid**: Precise, generous margins prioritizing whitespace.
- **Color Palette**: Monochromatic slate/gray/black tones for a blueprint/technical feel.
- **Iconography**: Clean, sharp line-art vectors (`lucide-react`).
- **Architectural Drafting References**: Hairline borders, technical crosshairs, semantic grouping.

## Deployment

The project is currently deployed on Netlify for review/testing/development. 
**The deployment should NOT automatically be treated as the final public launch.**

- **Build command**: `npm run build` (Next.js default)
- **Publish directory**: `.next`

## Completed Work

- [x] Project architecture
- [x] SVG system
- [x] Architectural animation
- [x] Project content model
- [x] Project routes
- [x] Project drawing viewer
- [x] Responsive system
- [x] Reduced-motion support
- [x] Visual refinements
- [x] Accessibility work
- [x] Production build
- [x] Browser validation
- [x] Netlify deployment

## Not Yet Final

- [ ] Final company information
- [ ] Final contact information
- [ ] Final legal/corporate information
- [ ] Final brand assets where required
- [ ] Additional project information
- [ ] Additional project drawings
- [ ] Real project renders
- [ ] Construction photography
- [ ] Completed-project photography
- [ ] Final copy approval
- [ ] Final domain configuration
- [ ] Final SEO approval
- [ ] Final client review

## Future Roadmap

### Stage 1 — Current
- verified architectural drawings
- technical project information
- project cards
- project detail pages
- drawing inspection
- transparent media lifecycle
- restrained editorial presentation

### Stage 2 — Additional Project Data
- more authoritative projects
- approved project descriptions
- project-specific metadata
- additional drawings
- verified technical information

### Stage 3 — Visual Project Media
When supplied (architectural renders, site photography, construction photography, completed photography), integrate them into the existing **DRAWING → RENDER → CONSTRUCTION → COMPLETED** story.

### Stage 4 — Enhanced Project Storytelling
Potential future enhancements:
- larger project hero imagery
- project galleries
- drawing-to-render transitions
- drawing-to-photo transitions
- construction sequence imagery
- project-specific scroll narratives
- visual comparison between technical drawing and built result
*(Only implement these when real media supports them).*

## Rules for Future Agents

Future agents must follow these principles:
1. Do not redesign without explicit approval.
2. Do not fabricate project information.
3. Do not fabricate media.
4. Do not modify verified SVG geometry casually.
5. Preserve the architectural animation language.
6. Prefer visual project storytelling over excessive explanatory copy.
7. Keep project content separate from presentation.
8. Preserve responsive behavior.
9. Preserve reduced-motion support.
10. Preserve accessibility.
11. Prefer real project evidence over marketing language.
12. Use real project media as it becomes available.
13. Make project visibility progressively stronger.
14. Keep the interface restrained and premium.
15. Do not add features merely because they are technically possible.

## Content Configuration

The file `FINAL-LAUNCH-CONTENT-CONFIGURATION.md` is intended to become the authoritative input for final company/client data. It may contain placeholders until the client supplies the information. Users should edit that file rather than embedding random company facts throughout the codebase. **Never put secrets in it.**

## Development Workflow

**INSPECT → UNDERSTAND → PLAN → IMPLEMENT → VALIDATE → BROWSER TEST → REPORT**

Future agents should:
- read the README
- read the relevant instruction files
- inspect the actual implementation
- make small controlled changes
- test before claiming success
- create/update a report
- avoid scope creep

**Never assume an earlier report is more authoritative than the actual source code and source drawings.**

## Final Notes

This is a functioning, deployed, evolving architecture website — not yet the final approved public version. It is an active engineering and design environment that will progressively mature as final content is provided.
