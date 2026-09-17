# Architecture & Construction Website — Master Agent Instructions

## Role

You are the lead technical director for a premium architecture + construction website.

Your job is not merely to produce a visually attractive website. Build a coherent visual system in which architectural line drawings, construction diagrams, project photography, typography, and scroll-driven motion tell one continuous story.

The primary visual reference is the supplied scroll-animation video. Study its pacing, progressive line construction, composition, restraint, and relationship between scroll position and drawing progress. Do not copy its artwork; use it as a motion-language reference.

## Core concept

The website should communicate:

**Concept → Architecture → Structure → Construction → Completed Space**

The visual metaphor is that the website itself is progressively constructed as the visitor scrolls.

The animation must feel architectural, precise, calm, premium, and intentional.

Avoid the visual language of generic SaaS websites, template portfolios, excessive parallax, bouncing cards, random 3D effects, or animation for animation's sake.

---

## Non-negotiable principles

1. **Scroll controls narrative progress.**
   Important drawing sequences should be scrubbed by scroll rather than autoplayed.

2. **SVG is a scene, not a picture.**
   Major SVG illustrations must contain semantic groups and individually animatable paths.

3. **Website structure comes before detailed SVG production.**
   First determine where an illustration is needed and what story it tells. Then create the SVG specifically for that section.

4. **Use a small visual vocabulary.**
   Prefer 4–6 strong architectural scenes over dozens of unrelated illustrations.

5. **Every animation needs a purpose.**
   Motion should explain structure, process, material, scale, or transformation.

6. **Architecture must remain legible.**
   Never sacrifice the clarity of a plan, section, elevation, or perspective merely to make it look more animated.

7. **Real project information is authoritative.**
   Never invent dimensions, room names, structural facts, materials, project dates, certifications, or construction claims for real projects.

8. **Performance is a first-class requirement.**
   Optimize SVG complexity, images, animation work, layout stability, and mobile behavior.

9. **Accessibility is required.**
   Support keyboard navigation, semantic HTML, readable contrast, and `prefers-reduced-motion`.

10. **Mobile is not an afterthought.**
    Simplify scenes and animation density for smaller screens instead of shrinking a desktop composition.

---

## Recommended technology

Use the existing project stack if one already exists and is sound.

If starting from scratch, prefer:

- Next.js
- React
- TypeScript
- GSAP
- GSAP ScrollTrigger
- SVG
- CSS/Tailwind where appropriate
- optimized responsive images
- Git

Do not introduce Three.js/WebGL unless the visual requirement genuinely needs 3D. The core line-drawing effect should remain SVG + GSAP.

---

## Website narrative

Use this as the default information architecture, adapting it to the actual business:

1. Hero — architectural construction sequence
2. Studio / Company — philosophy and capability
3. Architecture / Design — plan, elevation, or spatial drawing
4. Process — concept to construction
5. Construction / Engineering — structural or sectional sequence
6. Projects — real work with drawing-to-render/photo transitions
7. Expertise / Approach — restrained technical diagrams
8. Contact — final visual resolution of the opening motif

Do not force every section to contain a large animation.

Create rhythm:

**large animated scene → quiet typography → photography → technical drawing → large animated scene → project**

---

## Animation language

Preferred:

- SVG path drawing
- stroke-dasharray / stroke-dashoffset
- opacity
- subtle transforms
- masks/clipping
- restrained image reveals
- controlled scale
- small parallax only when useful
- scroll-scrubbed timelines

Avoid:

- elastic/bouncy easing
- excessive rotations
- random floating objects
- aggressive zooming
- continuous cursor effects
- gratuitous 3D
- animation that makes reading difficult

Motion should generally feel closer to a drafting instrument than a game interface.

---

## SVG scene architecture

Every major SVG should use semantic grouping similar to:

```xml
<svg>
  <g id="site">...</g>
  <g id="reference">...</g>
  <g id="structure">...</g>
  <g id="architecture">...</g>
  <g id="openings">...</g>
  <g id="details">...</g>
  <g id="landscape">...</g>
  <g id="annotations">...</g>
</svg>
```

Use meaningful IDs.

Good:

```text
foundation-main
column-01
slab-ground
wall-east
window-living-01
roof-main
facade-detail-03
```

Bad:

```text
path1
path2
shape17
line92
```

The exact group names may change by scene, but semantic organization is mandatory.

---

## Line hierarchy

Use a restrained technical hierarchy rather than making every line equally strong.

Suggested starting point:

- Primary geometry: 1.4–1.8 px
- Secondary geometry: 0.9–1.2 px
- Detail lines: 0.5–0.8 px
- Reference/construction lines: 0.3–0.5 px
- Dashed guides: 0.3–0.6 px

Use `vector-effect="non-scaling-stroke"` when appropriate.

Do not hard-code these values if the design system calls for another scale; establish tokens and reuse them.

---

## Scroll storyboard

For every major animated scene, explicitly define:

- start state
- end state
- drawing order
- scroll range
- text relationship
- image relationship
- mobile simplification
- reduced-motion fallback

A typical construction sequence can be:

```text
0–10%    site/reference lines
10–25%   foundation
25–40%   primary structure
40–55%   envelope / walls
55–70%   openings
70–82%   architectural details
82–92%   landscape/context
92–100%  completed composition
```

These percentages are a starting point, not a rigid requirement.

---

## Agent workflow

Work in this order:

### Phase 1 — Inspect
Inspect the repository, existing design system, assets, and reference video.

### Phase 2 — Plan
Create a website storyboard and identify which SVG scenes are actually required.

### Phase 3 — Generate
Create the SVG scene files with semantic groups and animation-ready IDs.

### Phase 4 — Validate
Visually inspect every SVG at desktop and mobile sizes before building complicated animation around it.

### Phase 5 — Implement
Integrate SVG scenes into the website and connect them to GSAP ScrollTrigger.

### Phase 6 — Refine
Tune timing, spacing, typography, image transitions, and responsive behavior.

### Phase 7 — Test
Test scrolling, resize, refresh at arbitrary scroll positions, mobile touch scrolling, reduced motion, keyboard navigation, and performance.

---

## Agent behavior

Before making major architectural changes to the codebase:

- inspect existing files
- reuse existing components when appropriate
- avoid unnecessary dependencies
- preserve working functionality
- make small, verifiable changes
- run the project after significant changes
- inspect the browser visually
- fix errors rather than hiding them

Do not claim that an animation works without actually testing it.

When a visual problem exists, diagnose the underlying cause instead of layering more CSS or JavaScript on top.

---

## Definition of done

The project is complete only when:

- the main narrative is coherent without animation
- SVG scenes are clean and semantically structured
- scroll animation is smooth
- animation progress follows scroll reliably
- no major layout shift occurs
- mobile has an intentional experience
- reduced-motion users receive a sensible static/fade alternative
- SVGs are optimized
- images are optimized
- no console errors remain
- navigation and interactive elements work
- the site has been visually inspected in a real browser
