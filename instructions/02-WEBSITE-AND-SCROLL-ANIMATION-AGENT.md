# Website + Scroll Animation Agent

## Mission

Build the architecture/construction website around the approved SVG scene system.

The site must feel like one continuous architectural narrative rather than a collection of animated sections.

## Primary stack

Prefer:

- Next.js
- React
- TypeScript
- GSAP
- GSAP ScrollTrigger
- SVG
- CSS/Tailwind where appropriate

Reuse the existing project stack if already established.

Do not add a framework merely because it is familiar.

---

## Core animation architecture

Create reusable animation utilities/components instead of hard-coding every scene independently.

Conceptual structure:

```text
ArchitectureScene
├── SVG
├── scene configuration
├── scroll timeline
├── text synchronization
├── media transition
└── responsive behavior
```

A scene configuration might conceptually contain:

```ts
{
  id: "hero-building",
  groups: [
    "site",
    "structure",
    "architecture",
    "openings",
    "details",
    "landscape"
  ],
  scrollStart: 0,
  scrollEnd: 1
}
```

Keep actual implementation consistent with the project architecture.

---

## Scroll behavior

The principal interaction should be scroll-scrubbing.

Example:

```text
scroll progress
      ↓
GSAP timeline progress
      ↓
SVG path visibility
      +
text state
      +
image state
```

Use ScrollTrigger appropriately.

Do not build the animation around a timer and merely start it when the section enters the viewport.

---

## SVG line drawing

For a path-drawing effect, use the standard SVG technique:

```text
stroke-dasharray
+
stroke-dashoffset
```

GSAP should control the drawing state.

Prefer initializing path measurements programmatically rather than assuming every path has the same length.

Do not animate hundreds of paths individually if grouping can provide the same visual result.

Use a hierarchy:

```text
scene
→ group
→ subgroup
→ important individual path
```

Animate at the smallest useful level.

---

## Hero sequence

The hero should establish the visual language immediately.

Recommended sequence:

```text
0%
    minimal site/reference geometry

10–25%
    foundation + primary geometry

25–45%
    structure + floor plates

45–60%
    walls/envelope

60–75%
    windows/doors/balconies

75–90%
    facade details

90–100%
    context/landscape + final composition
```

Synchronize a small amount of typography with this progression.

Do not cover the drawing with excessive text.

---

## Drawing-to-image transition

Where real project imagery exists, consider:

```text
architectural line drawing
        ↓
drawing + render
        ↓
render
        ↓
project photograph
```

Use masks, opacity, or clipping where appropriate.

The transition must preserve spatial continuity where possible. A photograph should feel like the same building becoming real, not an unrelated image appearing.

---

## Section rhythm

Do not animate every section heavily.

Preferred rhythm:

```text
HERO
large scroll-driven scene

ABOUT
quiet typography + restrained motion

DESIGN
floor plan / section animation

PROJECT
photography + subtle drawing overlay

PROCESS
construction sequence

PROJECTS
project-specific scenes

CONTACT
quiet resolution of the visual motif
```

Adapt to the actual content.

---

## Pinning

Use pinned sections only when pinning improves the storytelling.

A pinned scene can be useful for a construction sequence because the user remains in one visual frame while the drawing progresses.

Do not pin the entire website.

Do not create extremely long pinned sections without narrative justification.

---

## Responsiveness

### Desktop

Can support:

- large architectural compositions
- pinned scenes
- detailed SVGs
- layered image transitions

### Tablet

Reduce:

- drawing complexity
- simultaneous animation
- pin duration where necessary

### Mobile

Prefer:

- simplified SVG
- fewer simultaneously animated paths
- shorter pinned sections
- readable text
- touch-friendly interactions
- no horizontal overflow

Never simply scale a complex desktop scene down to mobile and assume it is acceptable.

---

## Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

For reduced motion:

- avoid scroll-scrubbed motion
- show complete or mostly complete SVG artwork
- use minimal opacity transitions only if appropriate
- preserve all information and navigation

The website must remain understandable without animation.

---

## Browser behavior

The animation must remain stable when:

- user enters the page at the top
- user reloads
- user jumps to an anchor
- user resizes the browser
- device orientation changes
- fonts finish loading
- images finish loading
- user scrolls rapidly
- user scrolls upward
- user uses touch scrolling

Refresh ScrollTrigger measurements when layout changes materially.

Avoid layout changes after animation measurements are established.

---

## Performance

Monitor:

- SVG size
- number of DOM nodes
- number of simultaneously animated properties
- image sizes
- paint/composite behavior
- scroll smoothness
- long JavaScript tasks

Prefer transforms and opacity for general UI motion.

For SVG line drawing, keep the number of simultaneously animated paths reasonable.

Do not add a heavy animation library in addition to GSAP unless there is a demonstrated need.

---

## Visual testing

After implementing each major section:

1. Run the website.
2. Open it in a browser.
3. Scroll slowly through the section.
4. Scroll rapidly through the section.
5. Scroll backward.
6. Resize the viewport.
7. Check mobile.
8. Check reduced motion if possible.
9. Inspect the console.

Do not rely solely on code inspection.

---

## Content and real projects

If project content is missing, use clearly marked placeholders.

Never fabricate:

- client names
- project addresses
- project sizes
- completion dates
- structural systems
- certifications
- awards
- construction status
- materials actually used

The visual system can be demonstrated with clearly labeled fictional/demo content, but production content must come from the project owner.

---

## Component architecture

Aim for reusable primitives such as:

```text
ScrollScene
ArchitecturalSVG
DrawPathGroup
RevealMask
ProjectMedia
SectionHeading
ProjectCard
ProcessStep
ReducedMotionFallback
```

Do not create one enormous page component containing the entire animation system.

---

## Definition of done

- [ ] Website works without JavaScript-dependent content being inaccessible
- [ ] Main hero animation is scroll-driven
- [ ] SVGs are independently animatable
- [ ] Text remains readable during animation
- [ ] No visual jitter
- [ ] No horizontal overflow
- [ ] Mobile has an intentional experience
- [ ] Reduced motion is supported
- [ ] Browser console has no significant errors
- [ ] ScrollTrigger refreshes correctly after layout changes
- [ ] Images are optimized
- [ ] SVGs are optimized
- [ ] Navigation remains usable
- [ ] Site has been visually inspected at multiple viewport sizes
