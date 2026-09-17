# Project Transition Overlay SVG Metadata

**Purpose:** 
Line art overlay that perfectly matches an underlying project photograph. Connects the abstract drawing narrative to the physical built project.

**Section:** 
Projects Showcase (Scene 04)

**Drawing Order:**
1. `outline`: The exterior profile of the building.
2. `structure`: Main structural bays and visible slab lines.
3. `details`: Windows, louvers, and fine architectural elements.

**Transition Sequence (GSAP):**
1. SVG paths draw in using `stroke-dasharray`.
2. The underlying real photograph crossfades in (opacity 0 -> 1).
3. The SVG lines fade out (opacity 1 -> 0), leaving only the physical building.

**Important Groups:**
- `#outline`
- `#structure`
- `#details`

**Important IDs:**
- `building-profile`

**Mobile Simplification:**
- The SVG must scale perfectly with the underlying responsive `<img />`. Use identical aspect ratios and fluid widths (`width: 100%; height: auto`).
- No specific groups need to be hidden, as the line art must match the photograph.

**Reduced-Motion Final State:**
- Skip the line drawing sequence. Show a 2-second crossfade from the completed SVG directly into the photograph.
