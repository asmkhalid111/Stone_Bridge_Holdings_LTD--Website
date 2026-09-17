# Project 02 — Beam Layout SVG Metadata (Phase 5.5E Reconstructed)

## Scene Name
`project-02-beam-layout.svg`

## Source PDF
`project-source/project-02/project-02-Apartment_Building-structural-drawings.pdf`

## Source Page
Page 2 ("3 RD FLOOR ROOF BEAM LAYOUT PLAN", Sheet A-02)

## Purpose
Authoritative structural beam and framing layout plan communicating the true stepped building perimeter, structural grid alignments, 12 reinforced concrete columns, reinforced concrete shear wall lift core, 14 primary/secondary beams (FB1–FB13, CB), slab zoning (TH=5", TH=6", drop beam bottom slab), stair well, and light court void.

## Extraction Method
Direct forensic extraction of CAD vector linework, polylines, and text streams using PyMuPDF from Sheet A-02:
- Stepped exterior perimeter extracted directly from CAD polyline `#2192`.
- Column coordinates and orientations extracted directly from CAD red rectangles (`#0`–`#9`, `#11`, `#12`).
- Lift core shear wall geometry extracted directly from CAD polyline `#10`.
- Beam profiles (FB1 through FB13, CB) extracted directly from orange CAD beam layers.
- Stair treads and core flight extracted from CAD polylines `#2194`–`#2211`, `#2222`.
- Void crossing lines extracted directly from CAD diagonals `#16`–`#21`.
- Dimensions verified against exact CAD witness lines at 1.5355 pt/inch scale (1:100 CAD scale).

## Coordinate System & ViewBox
- `viewBox="35 45 970 735"`
- All SVG coordinates are maintained 1:1 with source PDF PostScript points for zero rounding drift and absolute auditability.

## Primary Semantic Groups
- `#reference`: Sheet title block, scale notation ("SCALE: 1:100"), architectural north arrow, and true stepped building perimeter (`#perimeter-outer`).
- `#grid`: Structural grid lines (`grid-v1` to `grid-v6`, `grid-ha` to `grid-he`) and circular grid bubbles with centered designations (Grids 1–6, Grids A–E).
- `#columns`: 12 structural RC columns (`col-c1` to `col-c12`) and the monolithic RC shear wall lift core (`wall-core`).
- `#beams`: 13 primary beams (`beam-fb1` to `beam-fb13`) and cantilever beam (`beam-cb`).
- `#slabs`: Structural slab panels categorized by thickness and function (`slab-cantilever-north`, `slab-bay-nw`, `slab-bay-nc`, `slab-bay-ne`, `slab-balcony-ne`, `slab-bay-wm`, `slab-bay-center`, `slab-bay-court-east`, `slab-bay-se`, `slab-balcony-se`, `slab-south-core`).
- `#voids`: Openings through floor slabs: `#void-stair` (staircase opening and flight treads), `#void-lift` (elevator core shaft), and `#void-shaft` (light court ventilation well) with architectural diagonal crosses.
- `#annotations`: Explicit structural dimensions (top, bottom, left, right) and callouts (`FB1(10"X20")` to `FB13(10"X20")`, `CB(10"x6")`, `TH=5"`, `TH=6"`, `beam bottom slab`).

## Secondary Semantic Groups & Stable IDs
- **Columns:**
  - `col-c1`: (822.20, 123.64, 30.72, 18.48) — Grid 5 / North stepped eave
  - `col-c2`: (607.28, 123.64, 30.72, 23.04) — Grid 4 / North spine
  - `col-c3`: (85.16, 142.12, 27.72, 18.36) — Grid 1 / Northwest corner
  - `col-c4`: (284.60, 142.12, 36.84, 18.36) — Grid 2 / North intermediate
  - `col-c5`: (85.16, 418.60, 30.72, 18.36) — Grid 1 / West mid
  - `col-c6`: (232.64, 418.60, 36.84, 18.36) — Grid 2 / Mid intermediate
  - `col-c7`: (619.52, 475.36, 18.48, 36.84) — Grid 4 / Center spine
  - `col-c8`: (895.88, 489.16, 30.72, 18.48) — Grid 6 / East mid
  - `col-c9`: (85.16, 681.16, 18.48, 30.60) — Grid 1 / Southwest corner
  - `col-c10`: (254.12, 681.16, 18.36, 30.60) — Grid 2 / South intermediate
  - `col-c11`: (619.52, 681.16, 18.48, 30.60) — Grid 4 / South spine
  - `col-c12`: (899.00, 693.40, 27.60, 18.36) — Grid 6 / Southeast corner
  - `wall-core`: (254.12, 512.20, 122.76, 122.88) — Monolithic lift core shear wall
- **Beams:**
  - `beam-fb1`: FB1 (10"x20") along Grid 1 [85.16, 142.12, 15.36, 569.64]
  - `beam-fb2`: FB2 (10"x20") along Grid 2 [254.12, 418.60, 15.36, 293.16]
  - `beam-fb3`: FB3 (10"x20") along Grid 4 [622.64, 123.64, 15.36, 588.12]
  - `beam-fb4`: FB4 (10"x20") along Grid 5 [837.56, 123.64, 15.36, 365.52]
  - `beam-fb5`: FB5 (10"x20") along Grid 5 [849.92, 489.16, 15.36, 222.60]
  - `beam-fb6`: FB6 (10"x20") along Grid B [85.16, 142.12, 552.84, 15.24]
  - `beam-fb7`: FB7 (10"x20") along Grid B-step [638.00, 123.64, 214.92, 15.36]
  - `beam-fb8`: FB8 (10"x20") along Grid C [85.16, 421.60, 552.84, 15.36]
  - `beam-fb9`: FB9 (10"x20") North court beam [638.00, 363.16, 214.92, 15.36]
  - `beam-fb10`: FB10 (10"x20") South court beam [638.00, 489.16, 288.60, 15.36]
  - `beam-fb11`: FB11 (10"x20") Lift core north tie beam [254.12, 512.20, 122.76, 15.36]
  - `beam-fb12`: FB12 (10"x20") Interior transverse beam [361.52, 142.12, 15.36, 569.64]
  - `beam-fb13`: FB13 (10"x20") along Grid E [85.16, 696.52, 841.44, 15.24]
  - `beam-cb`: CB (10"x6") Cantilever court edge beam [734.72, 378.52, 15.36, 110.64]
- **Voids:**
  - `void-stair`: Stair hall void [100.52, 511.96, 153.60, 184.56] + flight treads [269.48, 635.08, 92.04, 61.44]
  - `void-lift`: Elevator shaft opening [269.48, 527.56, 92.04, 92.16]
  - `void-shaft`: Light court ventilation well [638.00, 378.52, 112.08, 110.64]

## Recommended Drawing Order (Scroll-Scrubbed)
1. **Stage 1 (0% – 15%):** Reference baseline, architectural north arrow, stepped building perimeter, and structural grid lines (Grids 1–6, A–E).
2. **Stage 2 (15% – 35%):** 12 structural RC columns and monolithic shear wall lift core appear at structural grid intersections.
3. **Stage 3 (35% – 60%):** Primary beams FB1 to FB13 and secondary beam CB draw across grid lines connecting columns.
4. **Stage 4 (60% – 75%):** Structural floor slabs fill in with differentiated fills according to slab thickness (TH=5", TH=6", drop beam bottom slab).
5. **Stage 5 (75% – 85%):** Stair flight treads, stair well opening, elevator shaft, and light court voids cut through the floor plate with diagonal cross markers.
6. **Stage 6 (85% – 100%):** Complete dimension chains (top, bottom, left, right) and beam/slab callouts resolve into place.
7. **Stage 7 (100%):** Complete, crisp structural engineering presentation ready for static review.

## Mobile Considerations
- Fully fluid SVG using `viewBox="35 45 970 735"` with `width="100%"` and `height="100%"`.
- Zero fixed-width constraints; tested down to 390px mobile viewport with zero horizontal overflow (`scrollWidth === window.innerWidth`).
- All strokes utilize `vector-effect="non-scaling-stroke"` ensuring hairline crispness on mobile retina displays without stroke fattening.

## Reduced-Motion Considerations
- All geometry renders in a static, fully resolved structural state under `prefers-reduced-motion: reduce`.
- Semantic groups allow CSS-only or GSAP-only scrubbing without layout shifts.

## Intentional Simplifications
- Over 1,900 CAD micro-stippling hatch dots inside columns removed in favor of clean, solid structural fills (`#0f172a`), preserving crisp rendering performance.
- Engineer signatures, cell numbers, and email addresses omitted from the sheet border per editorial architecture guidelines.
- Rebar schedules and stirrup details (detailed on Sheets A-03 through A-08) omitted from this plan view to maintain clean line hierarchy.

## Known Limitations
- None. All geometric contradictions from the rejected Phase 5.5B asset have been completely eliminated. Dimensions, offsets, cantilevers, and step-downs reconcile 100% with the authoritative PDF vectors.
