# Phase 5 — Full Architectural Scroll Animation System Report

**Date:** 2026-09-17  
**Status:** PASS  
**Governing Standard:** `instructions/00-MASTER-PROJECT-INSTRUCTIONS.md`, `instructions/02-WEBSITE-AND-SCROLL-ANIMATION-AGENT.md`, `instructions/03-DESIGN-SYSTEM-AND-SVG-STORYBOARD.md`, `instructions/04-QA-AND-ITERATION-CHECKLIST.md`

---

## 1. Scenes Implemented

Phase 5 has successfully expanded the proven GSAP ScrollTrigger animation grammar established in Phase 4 across all remaining approved SVG scenes in the website:

1. **Floor Plan Scene (`floor-plan.svg`)** — Integrated into Section 02 (`#architecture`):
   - Spatial syntax narrative illustrating the progression from boundary to structural grid, external walls, internal partitions, apertures, and circulation axis.
2. **Structural Sequence Scene (`structural-sequence.svg`)** — Integrated into Section 03 (`#process`):
   - Axonometric construction sequence illustrating ground condition, foundation slab, vertical columns, horizontal framing beams, upper suspended slab, and architectural bounding envelope.
3. **Project Overlay Scene (`project-overlay.svg`)** — Integrated into Section 04 (`#projects`):
   - Elevation and structural bay overlay illustrating silhouette profile, structural bay alignment, rhythmic glazing apertures, and a subtle architectural tonal massing transition into the Phase 6 Media Slot.
4. **Hero Architectural Scene (`hero-building.svg`)** — Preserved from Phase 4:
   - Primary 8-stage pinned construction sequence.

---

## 2. Animation Mapping

All scenes map directly to the audited semantic `<g>` groups and element IDs approved in Phase 2, with no geometry alteration:

### Scene 01: Floor Plan (`floor-plan.svg`)
* **Stage 01 — Site Boundary:** `#site-boundary` (site cadastre and property perimeter)
* **Stage 02 — Structural Grid:** `#grid-v-1`, `#grid-v-2`, `#grid-v-3`, `#grid-v-4`, `#grid-h-1`, `#grid-h-2`, `#grid-h-3`
* **Stage 03 — External Walls:** `#wall-ext-top`, `#wall-ext-bottom`, `#wall-ext-left`, `#wall-ext-right`
* **Stage 04 — Internal Organization:** `#wall-int-1` through `#wall-int-6`
* **Stage 05 — Openings & Fenestration:** `#door-entry`, `#door-int-1..3`, `#window-1..3`
* **Stage 06 — Circulation & Spatial Context:** `#circ-flow`, `#circ-arrow`, `#kitchen-island`, `#dining-table`, `#dining-chair-1..2`, `#sofa`
* **Stage 07 — Dimension Annotations:** `#dim-line-ext-bottom`, `#dim-tick-1..3`, `#dim-text-1`, `#dim-text-2`

### Scene 02: Structural Sequence (`structural-sequence.svg`)
* **Stage 01 — Geotechnical Datum:** `#ground-grid-1`, `#ground-grid-2`, `#ground-grid-3`
* **Stage 02 — Foundation Substructure:** `#foundation-slab`, `#foundation-depth-left`, `#foundation-depth-right`
* **Stage 03 — Vertical Primary Frame:** `#col-1-edge..side`, `#col-2-edge`, `#col-3-edge..side`, `#col-4-edge..side1..2`
* **Stage 04 — Horizontal Framing:** `#beam-left`, `#beam-right`, `#beam-bottom-right`, `#beam-bottom-left`
* **Stage 05 — Upper Diaphragm Slab:** `#slab-1`, `#slab-1-depth-left`, `#slab-1-depth-right`
* **Stage 06 — Architectural Envelope:** `#mass-left`, `#mass-right`, `#mass-front-left`, `#mass-front-right`

### Scene 03: Project Overlay (`project-overlay.svg`)
* **Stage 01 — Monumental Profile:** `#building-profile`
* **Stage 02 — Structural Bays & Datum:** `#bay-1`, `#bay-2`, `#bay-3`, `#slab-floor-1`
* **Stage 03 — Aperture Portals:** `#window-left-1..2`, `#window-center-1..2`, `#window-right-1..2`, `#window-far-right-1..2`
* **Transition Layer — Massing Reveal:** Tonal volumetric underlay (`opacity: 0.22`) demonstrating drawing-to-massing translation, accompanied by the designated Phase 6 Media Slot.

---

## 3. Scroll Architecture

To prevent scroll-jacking and respect user ergonomics, Phase 5 enforces a strict distinction between pinned and unpinned scenes:

* **Hero Scene:** Remains the primary pinned sequence (`pin: pinRef.current`, scrub distance `+=220%` desktop / `+=130%` mobile).
* **Floor Plan, Structural Sequence, and Project Overlay Scenes:** Implemented as natural **in-view scrubbed timelines** (`trigger: containerRef.current`, `start: "top 78%"`, `end: "bottom 20%"`, `scrub: 1.2`).
  - As the user scrolls naturally down the page, drawing progress is tied directly to the section's position in the viewport.
  - Normal scrolling feels fluid and unrestricted; no artificial wheel blocking or viewport traps are introduced.
* **React Lifecycle & Context Management:**
  - All timelines are encapsulated inside `gsap.context(() => { ... }, container)` ensuring complete garbage collection and ScrollTrigger teardown (`ctx.revert()`) on unmount, route transitions, or hot reloads.
  - No global mutable state.

---

## 4. Reusable Components & Architecture

To eliminate code duplication, Phase 5 established a modular architecture separating configuration from animation mechanics:

1. **`src/lib/animation/sceneEngine.ts`**:
   - `prepareSvgPaths()`: Dynamically calculates stroke length via `getTotalLength()` and initializes `strokeDasharray` / `strokeDashoffset`. Includes defensive guards against empty/whitespace selectors.
   - `prepareFadeElements()`: Manages opacity initialization for text annotations, witness ticks, and fills.
   - `resolveReducedMotion()`: Instantly reveals all paths and groups with zero animation lag.
   - `addStageToTimeline()`: Declaratively sequences drawing and fade steps onto a GSAP timeline.
2. **`src/data/sceneConfigs.ts`**:
   - Declarative data tables for `FLOOR_PLAN_CONFIG`, `STRUCTURAL_SEQUENCE_CONFIG`, and `PROJECT_OVERLAY_CONFIG`, centralizing all selectors, stage numbers, labels, disciplines, and mobile overrides.
3. **Dedicated Scene Components**:
   - `FloorPlanScrollScene.tsx`
   - `StructuralSequenceScrollScene.tsx`
   - `ProjectOverlayScrollScene.tsx`
   - Each encapsulates its SVG ref, container ref, `gsap.matchMedia()`, and live interactive telemetry HUD.

---

## 5. Section Transitions & Visual Rhythm (Animation Fatigue Rule)

The website pacing was strictly audited against the **Animation Fatigue Rule** (Section 20). Continuous animation across all sections leads to cognitive exhaustion. The page rhythm now deliberately alternates:

$$\text{Hero (Pinned Construction)} \longrightarrow \mathbf{\text{Studio (Editorial Stillness)}} \longrightarrow \text{Architecture (Floor Plan Scrub)} \longrightarrow \text{Process (Structural Build)} \longrightarrow \text{Projects (Overlay Transition)} \longrightarrow \mathbf{\text{Expertise \& Contact (Stillness)}}$$

* **Studio Section (Section 01):** Serves as an intentional typographic buffer with monoline grid guides, structured text, and zero canvas motion.
* **Process Section (Section 03):** Transitions directly from the structural sequence diagram into an editorial timeline of 5 chronological execution milestones.
* **Expertise & Contact Sections (Sections 05 & 06):** Maintain clean monoline layouts and stillness, allowing users to engage with capability cards and the cadastre inquiry form without distraction.

---

## 6. Desktop Behavior (1440px)

* All architectural layers render with full drafting precision: technical borders, corner ticks, and coordinate readouts (`PROJ: SBH-2025 // CADASTRE REF // 00-SVG-PHASE-3`).
* Interactive telemetry HUDs at the base of each scene display:
  - Real-time Stage Number (e.g., `STAGE 03 / 07`)
  - Architectural Stage Label (e.g., `PRIMARY EXTERNAL PERIMETER WALLS`)
  - Active Discipline (e.g., `Building Envelope`)
  - Live Syntax/Assembly Progress % (e.g., `SYNTAX: 73%`)
* Scrolling upward smoothly reverses all drawn strokes without flickering or disappearing geometry.

---

## 7. Mobile Behavior (390px Viewport)

Dense architectural drawings can become illegible when scaled down to mobile viewports. Using `gsap.matchMedia("(max-width: 768px)")`, Phase 5 applies intelligent mobile line simplification:

* **Floor Plan Scene:** Automatically hides the dense orthogonal grid (`#grid`) and fine furniture (`#furniture`). The site boundary, perimeter walls, interior partitions, door openings, and circulation arrow remain bold, clear, and prominent.
* **Structural Sequence Scene:** Automatically hides the dense perspective ground grid (`#ground`). The 3D foundation slab, vertical columns, and upper beams occupy center stage without visual clutter.
* **Layout & Geometry:** Zero horizontal page overflow; all SVG canvases maintain responsive aspect ratios with touch-friendly vertical rhythm.

---

## 8. Reduced Motion (`prefers-reduced-motion: reduce`)

* Fully tested and verified using Chrome media feature emulation.
* When active:
  - Scrubbed timelines are disabled.
  - `resolveReducedMotion()` sets all `strokeDashoffset` to `0` and `opacity` to `1` immediately on mount.
  - Telemetry HUD updates to `STATIC OVERVIEW` with `100%` resolution.
  - All floor plans, structural diagrams, and project overlays remain fully visible, annotated, and readable. Users are never left with empty canvas containers.

---

## 9. Performance & Measurements

* **Next.js Production Build (`npm run build`):** Exited with code `0`. All 5 routes prerendered statically (`○ Static`).
* **Console Errors:** `0` runtime exceptions, `0` warnings.
* **DOM Recalculation:** Paths are measured once on mount via `getTotalLength()` inside `gsap.context()`. No continuous `getBoundingClientRect()` or geometric recalculations occur during scroll scrubbing.
* **Frame Rate:** Maintained smooth 60 FPS scrolling during down/up scrubs.

---

## 10. Browser Testing Summary

| Test Scenario | Action Taken | Result |
| :--- | :--- | :--- |
| **Slow Downward Scroll** | Scrolled from Hero to Footer through all 7 sections | All 4 scenes progress in distinct, chronological stages |
| **Fast Downward Scroll** | Rapid scroll scrub across entire document | Timelines stay synchronized; no broken stroke states |
| **Upward Scroll Reversal** | Scrolled from Footer back to Hero top | All strokes retract cleanly; Hero settles at 0% cadastre |
| **Stop / Start Scrubbing** | Intermittent scroll pauses mid-scene | Stroke offsets lock accurately to active scroll position |
| **Page Refresh** | Hard reload at scroll position 0 and mid-page | Initial states calculate correctly with zero jump |
| **Viewport Resize** | Resized browser between 1440px, 768px, and 390px | GSAP matchMedia toggles desktop/mobile simplifications |
| **Mobile Simulation** | 390×844 mobile viewport emulation with touch | Dense secondary grids hidden; typography scales legibly |
| **Reduced Motion** | Emulated `prefers-reduced-motion: reduce` | All SVGs render in 100% complete static state |

---

## 11. Issues Found & Resolutions

1. **Empty Selector Exception in `sceneEngine.ts`:**
   - *Issue:* When a stage had no fade selectors (`fadeSelectors: []`), `svg.querySelectorAll("")` threw `DOMException: SyntaxError: The provided selector is empty`.
   - *Resolution:* Added strict validation in `prepareSvgPaths` and `prepareFadeElements` to filter empty strings and return early if no valid selectors exist.
2. **DOM ID Collision between Hero SVG and Section Element:**
   - *Issue:* `HeroBuildingSVG` contained `<g id="architecture">` from Phase 2 naming, which collided with `<section id="architecture">` when using `document.getElementById()`.
   - *Resolution:* Automated capture scripts updated to use strict `section#architecture` selectors; production components use React `useRef` directly, completely avoiding global DOM ID queries.

---

## 12. Remaining Issues

* None. The full scroll animation system is stable, responsive, accessible, and performant.

---

## 13. Browser Artifacts

All verification artifacts are saved in `screenshots/phase5/`:

* `01_floor_plan_initial.png`: Floor Plan initial site boundary entrance
* `02_floor_plan_mid_progress.png`: Floor Plan structural grid and perimeter wall construction
* `03_floor_plan_completed.png`: Floor Plan completed layout with door swings, circulation, and telemetry
* `04_structural_early_foundation.png`: Structural Sequence foundation slab and geotechnical datum
* `05_structural_mid_columns_beams.png`: Structural Sequence vertical columns and framing beams rising
* `06_structural_completed.png`: Structural Sequence upper floor slab and envelope volume
* `07_project_overlay_drawing.png`: Project Overlay monumental profile silhouette
* `08_project_overlay_transition.png`: Project Overlay structural bays and subtle massing tone reveal
* `09_project_overlay_final.png`: Project Overlay completed elevation with Phase 6 Media Slot badge
* `10_reverse_scroll_hero_top.png`: Verification of reverse scroll back to Hero top (0% state)
* `11_mobile_floor_plan_simplified.png`: Mobile (390px) floor plan with simplified grid and furniture
* `12_mobile_structural_simplified.png`: Mobile (390px) structural sequence with simplified ground grid
* `13_reduced_motion_floor_plan.png`: Static resolved floor plan under `prefers-reduced-motion: reduce`
* `intermediate_scroll_stillness_studio.png`: Studio section demonstrating the Animation Fatigue Rule (stillness)
* `full_desktop_homepage.png`: Complete desktop page composition
* `full_mobile_homepage.png`: Complete mobile page composition
* `phase5_audit_log.json`: Automated test run report confirming 0 errors

---

## 14. Phase 5 Status

**PASS**

*The full architectural scroll animation system is verified and complete. In accordance with project instructions, execution stops here. Phase 6 (Authoritative Content & Media System) is awaiting authorization.*
