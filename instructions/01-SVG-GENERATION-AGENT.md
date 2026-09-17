# SVG Generation Agent — Architectural Scene System

## Mission

Create production-quality architectural SVG scenes for the website.

These are not generic illustrations. They are structured animation assets.

The SVG must be designed so a web animation system can progressively construct, reveal, hide, emphasize, and transform individual architectural elements.

## First rule: do not generate SVGs blindly

Before creating an SVG:

1. Inspect the current website storyboard.
2. Determine which section needs the scene.
3. Identify the story the scene must communicate.
4. Determine the drawing sequence.
5. Determine which elements need independent animation.
6. Only then create the SVG.

Never generate a large collection of decorative SVGs without a confirmed use in the website narrative.

---

## Preferred scene types

Create only those that serve the actual site. The following are recommended candidates:

### A. Hero architectural perspective
A building progressively assembled from site/reference geometry to a complete architectural composition.

### B. Floor plan
A clean architectural plan revealed in logical drafting order:

```text
site boundary
→ structural grid
→ walls
→ openings
→ circulation
→ furniture/context
→ dimensions/annotations
```

### C. Building section
Reveal:

```text
ground/reference
→ foundation
→ columns/structure
→ slabs
→ walls
→ roof
→ services/details
```

### D. Structural/construction sequence
Show the physical logic of construction:

```text
foundation
→ columns
→ beams
→ slabs
→ envelope
→ finishes
```

### E. Architectural detail
Use a focused detail such as:

- facade section
- window detail
- stair
- wall build-up
- structural connection

### F. Project-specific scene
For a real project, derive geometry from authoritative project information whenever possible. Never invent technical data.

---

## Visual style

Default direction:

- contemporary architectural drafting
- monoline / technical linework
- generous negative space
- restrained geometry
- precise perspective
- no cartoon outlines
- no fake hand-drawn wobble unless specifically requested
- minimal fills
- fills used only when they support hierarchy or a reveal
- consistent line-weight system

The reference video should guide motion and composition, not be copied literally.

---

## SVG structure

Use semantic groups.

Example:

```xml
<svg
  viewBox="0 0 1600 1000"
  role="img"
  aria-labelledby="title desc"
>
  <title id="title">Contemporary building construction sequence</title>
  <desc id="desc">Architectural line drawing showing the building from foundation to completed facade.</desc>

  <g id="site">
    ...
  </g>

  <g id="reference">
    ...
  </g>

  <g id="structure">
    ...
  </g>

  <g id="architecture">
    ...
  </g>

  <g id="openings">
    ...
  </g>

  <g id="details">
    ...
  </g>

  <g id="landscape">
    ...
  </g>

  <g id="annotations">
    ...
  </g>
</svg>
```

Within groups, use descriptive IDs.

---

## ID naming convention

Use:

```text
<category>-<element>-<number>
```

Examples:

```text
foundation-main
foundation-secondary
column-01
column-02
beam-01
slab-ground
slab-level-01
wall-north
wall-east
window-living-01
door-entry
roof-main
balcony-01
facade-detail-01
tree-01
reference-grid-01
dimension-overall-width
```

IDs must be unique within the SVG.

Do not use spaces.

---

## Drawing order

Construct scenes in an intelligible architectural order.

### Perspective

```text
reference/site
→ ground
→ foundation
→ primary structure
→ floor plates
→ envelope
→ roof
→ openings
→ balconies/stairs
→ facade details
→ landscape
```

### Floor plan

```text
site/boundary
→ structural grid
→ external walls
→ internal walls
→ openings
→ circulation
→ furniture
→ fixtures
→ dimensions/annotations
```

### Section

```text
ground
→ foundation
→ structure
→ slabs
→ walls
→ roof
→ openings
→ services/details
```

---

## Geometry quality

Prioritize:

- clean joins
- sensible Bézier curves
- no accidental duplicate paths
- no unnecessary points
- consistent alignment
- accurate perspective
- no microscopic decorative details that cannot survive responsive scaling

Simplify geometry where possible.

A simpler SVG that animates beautifully is preferable to a huge SVG full of unnecessary points.

---

## Animation readiness

For paths intended to draw:

- use `<path>` where practical
- avoid converting everything to one compound path
- preserve separable elements
- ensure paths have sensible start/end geometry
- avoid hidden geometry that makes `getTotalLength()` or path measurement unreliable
- keep decorative fills separate from animated strokes

Do not flatten all groups into a single path.

---

## Construction/reference lines

Reference lines can make the scene feel genuinely architectural.

Examples:

- structural grids
- centerlines
- perspective guides
- dimension lines
- site boundaries
- dashed construction guides

But use them sparingly.

They should support the drawing sequence rather than clutter it.

---

## Text inside SVG

Prefer HTML/CSS for website typography.

Only place text inside the SVG when it is genuinely part of the drawing, such as:

- architectural dimensions
- labels
- technical annotations

Keep marketing copy outside the SVG.

---

## Color

Default to a monochrome or very restrained palette.

Do not turn the architectural drawing into a colorful illustration unless the site's established visual system requires it.

Use CSS variables where possible rather than hard-coding presentation values throughout the SVG.

---

## Accessibility

Include:

```xml
<title>
<desc>
```

when the SVG communicates meaningful content.

If the SVG is purely decorative, the website implementation may use an appropriate decorative treatment.

Do not rely on SVG text alone to communicate essential information.

---

## Deliverables

For each scene provide:

1. SVG file
2. short README or metadata note describing:
   - scene purpose
   - intended section
   - animation sequence
   - important IDs/groups
   - mobile simplification
3. optimized version when necessary

Do not create duplicate SVG variants unless there is a real responsive or content reason.

---

## Validation checklist

Before handing an SVG to the animation agent:

- [ ] Opens correctly in a browser
- [ ] ViewBox is correct
- [ ] No broken paths
- [ ] No accidental clipping
- [ ] IDs are unique
- [ ] Groups are semantic
- [ ] Important paths are independently selectable
- [ ] Stroke hierarchy is coherent
- [ ] Geometry is clean
- [ ] SVG is reasonably small
- [ ] Desktop composition works
- [ ] Mobile simplification is defined
- [ ] No unnecessary raster images are embedded
