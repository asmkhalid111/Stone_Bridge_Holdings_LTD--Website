# 05-PROJECT-PDF-ANALYSIS

## 1. Inventory

**Project 01:**
- **Name:** Proposed Single-Storied Steel Building (Car Showroom)
- **Location:** Uttara, Dhaka
- **Client:** Mr. Jahangir
- **Source File:** `project-source/project-01/project-01-Car_Showroom-structural-drawings.pdf` (17 pages)
- **Contents:** 
  - RCC Column Layout Plan (ST-01)
  - Steel Column Layout Plan (ST-02)
  - Roof Steel Framing Layout Plan (ST-04)
  - Roofing Layout Plan (ST-06)
  - Cross Sections Grids 02~05, 01 & 06 (ST-09)
  - Detailed Structural Connections and Member Details (Columns, Rafters, Purlins)

**Project 02:**
- **Name:** Proposed G+6 (Seven) Storied Residential Building
- **Location:** Plot-9287, Road-12, Block-N, Basundhara Residential Area, Dhaka
- **Client:** Mahamudal Hassan
- **Source File:** `project-source/project-02/project-02-Apartment_Building-structural-drawings.pdf` (8 pages)
- **Contents:**
  - 3rd Floor Roof Beam Bottom Slab (A-01)
  - 3rd Floor Roof Beam Layout Plan (A-02)
  - 3rd Floor Roof Beam Details (Longitudinal Sections and Cross Sections) (A-03 to A-06)
  - 3rd Floor Roof Slab Reinforcement (A-08)

## 2. SVG Candidates

Based on the architectural animation requirements, the following drawings are strong candidates for conversion into scroll-driven SVGs:

**From Project 01 (Car Showroom):**
- **Structural Cross Section (Grid 02~05):** Excellent candidate for a "Building Section" (Scene 03) or "Construction Sequence" (Scene 04) animation. It clearly shows the steel portal frame (columns and rafters) which can be animated from ground up.
- **Roof Steel Framing Layout:** Good candidate for a plan-based sequence showing the assembly of primary and secondary structural grids.
- **Connection Details (e.g., SC103, R201):** Excellent candidates for the "Architectural Detail" (Scene 05) to showcase engineering precision and craftsmanship.

**From Project 02 (Apartment Building):**
- **3rd Floor Roof Beam Layout Plan:** Strong candidate for a "Floor Plan" (Scene 02) sequence, illustrating the structural grid and beam arrangement.
- **Beam Details (Long Sections):** Can be used for a technical "Expertise / Approach" section showing the detailed reinforcement layout, animating from the concrete outline to the rebar details.

## 3. Extraction Potential

- **Vector Quality:** Since these PDFs originate from CAD/BIM software (based on the clean linework and vector text), the line geometry (paths) can likely be extracted directly as vector data using vector graphics software (e.g., Adobe Illustrator, Inkscape) or CLI tools (e.g., `pdf2svg`). 
- **Grouping/Layering:** Raw extraction will likely result in flattened or poorly grouped paths (e.g., text broken into individual paths, hatching as thousands of discrete lines). 
- **Cleanup Required:** 
  - Extensive semantic grouping will be necessary to meet the `01-SVG-GENERATION-AGENT` standards (e.g., grouping into `<g id="structure">`, `<g id="dimensions">`).
  - Extraneous details (like complex hatching or overlapping construction lines) must be simplified or removed to optimize performance and prevent visual clutter on mobile.
  - Text must be stripped from the SVGs unless absolutely critical for the drawing context (rely on HTML/CSS for typography instead).

## 4. Accuracy Hierarchy

In accordance with the "Zero Fact Fabrication Policy":
- **Dimensions and Grid Spacing:** The exact grid dimensions (e.g., 6457mm, 5536mm in Project 01) must be preserved if dimensions are shown.
- **Structural Member Sizes:** Steel profiles (e.g., Web: 238x6, Flange: 150x6) and concrete beam sizes (e.g., 10"x20") are authoritative and must be reflected accurately in the geometry or annotations.
- **Project Metadata:** Client names (Mr. Jahangir, Mahamudal Hassan), locations (Uttara, Basundhara), and dates must be used exactly as written in any textual descriptions accompanying the SVGs on the website.

## 5. Animation Narrative

**Project 01 (Car Showroom) - Structural Cross Section Narrative:**
1. **0-15%:** Draw reference grid lines (Grids A, B, C, D) and ground level.
2. **15-35%:** Reveal RCC column bases/pedestals.
3. **35-60%:** Animate the erection of steel columns (SC101/SC102) from base to eaves.
4. **60-85%:** Draw the roof rafters (R101/R201) connecting at the apex.
5. **85-100%:** Add secondary elements (purlins, struts) and annotations.

**Project 02 (Apartment Building) - Beam Layout Narrative:**
1. **0-20%:** Establish the building perimeter and reference grids.
2. **20-50%:** Draw the primary column positions (nodes).
3. **50-80%:** Animate the primary roof beams (FB1-FB13) connecting the columns.
4. **80-100%:** Reveal the slab areas, voids (stair/lift), and structural annotations.

## 6. Asset Map

Proposed mapping of source PDFs to final website assets:

- `project-01-Car_Showroom-structural-drawings.pdf` (Page 6) -> `public/assets/svg/project-01-section.svg`
- `project-01-Car_Showroom-structural-drawings.pdf` (Page 8) -> `public/assets/svg/project-01-detail.svg`
- `project-02-Apartment_Building-structural-drawings.pdf` (Page 2) -> `public/assets/svg/project-02-beam-layout.svg`
