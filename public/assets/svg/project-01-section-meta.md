# Project 01 — Section SVG Metadata

## Scene Name
`project-01-section.svg`

## Source PDF
`project-source/project-01/project-01-Car_Showroom-structural-drawings.pdf`

## Source Page
Page 6 ("CROSS SECTION OF GRID: 02~05", Drawing ST-09)

## Purpose
Structural cross-section and construction-sequence scene communicating the physical structural assembly of the steel portal frame building.

## Primary Semantic Groups
- `#reference`: Structural grid lines (Grids D, C, B, A), grid bubbles, elevation datums (+0.000 GL, +3.635m, +4.488m).
- `#ground`: Finished ground level line and technical earth hatching.
- `#foundation`: RCC column pedestals, footing pads, and grout bedding pads.
- `#steel-columns`: Left and right tapered steel portal columns SC103, base plates BP01, eave haunches CP615.
- `#roof-rafters`: Roof rafters R201, R202, R203 (flanges, webs, splice plates, ridge apex connection).
- `#secondary-structure`: C-Purlins (160*1.6), purlin cleats, and roof sag-rod struts.
- `#annotations`: Technical span dimensions (6457, 3228, 3229, 6457, total 19371 [63'-7"]), height dimensions (3635, 4488), member specifications (SC103, R201, R202, R203).

## Secondary Semantic Groups
- `#grid-bubble-d`, `#grid-bubble-c`, `#grid-bubble-b`, `#grid-bubble-a`
- `#foundation-pedestal-d`, `#foundation-pedestal-a`
- `#column-sc103-left`, `#column-sc103-right`
- `#rafter-left`, `#rafter-right`, `#apex-connection`
- Individual purlins `#purlin-l1` through `#purlin-l8`, `#purlin-apex`, `#purlin-r1` through `#purlin-r8`

## Important Path IDs
- `grid-line-d`, `grid-line-c`, `grid-line-b`, `grid-line-a`
- `ground-datum`, `ground-hatching`
- `pedestal-d-stem`, `pedestal-d-footing`, `pedestal-a-stem`, `pedestal-a-footing`
- `sc103-left-profile`, `sc103-left-flange-outer`, `sc103-left-flange-inner`, `bp01-left`
- `sc103-right-profile`, `sc103-right-flange-outer`, `sc103-right-flange-inner`, `bp01-right`
- `rafter-left-top-flange`, `rafter-left-bottom-flange`, `rafter-left-body`, `splice-r201-r202`, `splice-r202-r203`
- `rafter-right-top-flange`, `rafter-right-bottom-flange`, `rafter-right-body`
- `apex-splice-plate`

## Recommended Drawing Order (Scroll-Scrubbed)
1. **0% – 15%:** Reference grid lines (D, C, B, A), grid bubbles, and ground baseline.
2. **15% – 35%:** RCC column foundation pedestals and footing pads emerge from ground.
3. **35% – 60%:** Steel columns SC103 erect from baseplates to eave haunch elevation.
4. **60% – 85%:** Roof rafters R201, R202, and R203 ascend from eaves and meet at the ridge apex.
5. **85% – 100%:** Purlins, cleats, sag rods, and structural span/height annotations resolve.

## Mobile Simplification
- Group `#secondary-structure` (individual purlins and cleats) can be set to reduced opacity or hidden on mobile screens < 640px to avoid visual clutter.
- The detailed dimension strings (`#annotations`) can toggle to primary overall dimensions (`19371 [63'-7"]`) to maintain legibility.

## Reduced-Motion Final State
All groups rendered at full opacity with static architectural line weights, no stroke-dashoffset transitions.

## Known Limitations
- Drawing ST-09 depicts typical Grid 02~05 portal frame; gable end frames (Grid 01 & 06) have slightly different post configurations.
- AutoCAD SHX text from original sheet has been replaced with scalable SVG typography for crisp cross-platform rendering.

## Source Fidelity Notes & Geometry Reconstruction
- **Extracted Geometry:** Exact portal frame span ratios (6457mm + 3228mm + 3229mm + 6457mm = 19371mm), roof pitch angle (10.8°), column eave height (3635mm), and ridge apex height (4488mm) directly derived from CAD vector primitives.
- **Reconstructed Geometry:** 
  - Over 3,000 tiny AutoCAD soil hatching strokes were replaced with a clean, restrained 45-degree architectural earth hatch pattern.
  - CAD title block, approval signatures, and border frames were omitted to focus on the architectural subject.
