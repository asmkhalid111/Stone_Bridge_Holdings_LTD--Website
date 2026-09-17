# Project 01 — Detail SVG Metadata

## Scene Name
`project-01-detail.svg`

## Source PDF
`project-source/project-01/project-01-Car_Showroom-structural-drawings.pdf`

## Source Page
Page 8 ("DETAIL OF SC03", Drawing ST-10)

## Purpose
Engineering detail and structural connection precision scene highlighting fabrication accuracy: the assembled SC103 column, tapered web cutting pattern, base plate BP01, eave cap plate CP615x200x20, and purlin cleat PC210*6.

## Primary Semantic Groups
- `#column-assembly`: Assembled SC103 column elevation with baseplate BP01, cap plate CP615, stiffeners ST01/ST02, and height dimensions (total 3038mm, web 2998mm).
- `#cutting-web`: Web plate profile cut from mother plate (width 718mm, bottom 234mm, top 484mm, cut length 2998mm, diagonal 3008mm).
- `#base-plate-bp01`: Base plate BP01 plan detail (300x250x20mm, 4 anchor holes Ø24, 120x120mm pitch, column footprint).
- `#cap-plate-cp615`: Eave connection cap plate CP615x200x20 (615x200x20mm, 8 bolt holes Ø24, stiffener line ST02).
- `#purlin-cleat-pc210`: Purlin cleat PC210*6 detail (130x210x6mm, 4 bolt holes Ø14, weld symbol).

## Secondary Semantic Groups
- `#sc103-baseplate`, `#sc103-shaft`, `#sc103-stiffeners`, `#sc103-capplate`, `#sc103-dimensions`
- `#cutting-pattern`, `#cutting-dimensions`
- `#bp01-drawing`, `#bp01-hole-1` through `#bp01-hole-4`, `#bp01-weld-footprint`
- `#cp615-drawing`
- `#pc210-drawing`, `#pc210-weld`

## Important Path IDs
- `bp01-elevation`, `sc103-elevation-body`, `sc103-flange-outer`, `sc103-flange-inner`, `stiffener-st01-line`, `cp615-elevation`
- `cut-piece-1`, `cut-piece-2`, `cut-shear-line`
- `bp01-rect`, `cp615-rect`, `pc210-rect`

## Recommended Drawing Order (Scroll-Scrubbed)
1. **0% – 25%:** Base plate BP01 and purlin cleat PC210 outlines and bolt centers appear.
2. **25% – 50%:** Cutting web plate layout displays mother plate boundary and diagonal shear line.
3. **50% – 80%:** SC103 column shaft and eave cap plate CP615 form, indicating stiffener welds.
4. **80% – 100%:** All engineering dimension strings, tolerances, bolt notations (Ø24, Ø14), and material specifications resolve.

## Mobile Simplification
- On small viewports, the side fabrication details (`#cutting-web` or `#purlin-cleat-pc210`) can be scaled or displayed in a focused tabbed/carousel view, prioritizing the main `#column-assembly` and `#base-plate-bp01`.
- Secondary dimension annotations can be hidden while keeping primary dimension callouts (3038, 300, 250).

## Reduced-Motion Final State
Complete engineering drawing composition displayed in sharp monoline black and technical blue/red accents without animation.

## Known Limitations
- Excludes title sheet border and engineering stamps to maintain a clean digital portfolio aesthetic.
- Standardized SVG monospace typography replaces CAD stroke fonts.

## Source Fidelity Notes & Geometry Reconstruction
- **Extracted Geometry:** Exact fabrication dimensions from Drawing ST-10:
  - Column web: 238~484*6, flange: 200*8, length: 2998mm
  - Base plate BP01: 300x250x20mm, hole pitch 120x120mm, Ø24 holes
  - Cap plate CP615: 615x200x20mm, 8 holes Ø24
  - Cleat PC210: 130x210x6mm, 4 holes Ø14, spacing 35, 80, 95mm
- **Reconstructed Geometry:** 
  - Layout reorganized from the CAD sheet into an editorial technical showcase.
  - Bolt holes rendered as crisp circles with technical red and charcoal fills.
