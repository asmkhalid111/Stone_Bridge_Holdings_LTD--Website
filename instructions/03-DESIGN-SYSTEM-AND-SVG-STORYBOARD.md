# Architectural Visual System + SVG Storyboard

## Purpose

Use this document before generating detailed SVG artwork.

It defines the visual grammar of the site so that every illustration belongs to the same architectural language.

This is a planning document, not a requirement to create every scene listed below.

---

# 1. Visual concept

The website represents the architectural process as a progressive drawing.

The visitor should feel that they are moving through the stages of making a building:

```text
SITE
  ↓
IDEA
  ↓
STRUCTURE
  ↓
ARCHITECTURE
  ↓
CONSTRUCTION
  ↓
COMPLETION
```

The visual language should remain restrained enough that the actual projects and architectural information remain the focus.

---

# 2. Core SVG scenes

## Scene 01 — Hero building

### Purpose

Introduce the company and establish the visual language.

### Composition

A contemporary architectural building in perspective/elevation.

### Drawing sequence

```text
A. site/reference
B. foundation
C. primary structure
D. slabs/floors
E. walls/envelope
F. roof
G. windows/doors
H. balconies/stairs
I. facade details
J. landscape/context
```

### Final state

A complete architectural line drawing.

### Optional transition

The final state can become a render or photograph.

---

# 3. Scene 02 — Floor plan

### Purpose

Communicate spatial planning and architectural thinking.

### Drawing sequence

```text
site boundary
→ structural grid
→ external walls
→ internal partitions
→ doors
→ windows
→ circulation
→ furniture/context
→ selected annotations
```

### Important rule

Do not overcrowd the plan.

Only include enough information to communicate spatial organization.

---

# 4. Scene 03 — Building section

### Purpose

Communicate vertical organization and construction logic.

### Drawing sequence

```text
ground
→ foundation
→ structural frame
→ slabs
→ walls
→ roof
→ openings
→ selected services/details
```

The section should make the relationship between floors and structure visually obvious.

---

# 5. Scene 04 — Construction sequence

### Purpose

Connect architectural design with physical construction.

Possible sequence:

```text
01 Foundation
02 Structural frame
03 Floor slabs
04 Envelope
05 Openings
06 Finishes
07 Landscape
```

This can be a simplified technical diagram rather than a literal building drawing.

---

# 6. Scene 05 — Architectural detail

### Purpose

Introduce precision and craftsmanship.

Choose one or more real or representative details:

- facade
- window
- stair
- wall section
- structural connection

Do not create five details if one excellent detail communicates the idea.

---

# 7. Scene 06 — Project-specific scene

### Purpose

Give individual projects a recognizable architectural identity.

Preferred project presentation:

```text
project title
      ↓
line drawing
      ↓
render
      ↓
photograph
      ↓
project information
```

Only use the stages that are available for the actual project.

---

# 8. Visual hierarchy

Recommended line hierarchy:

```text
PRIMARY
1.4–1.8px

SECONDARY
0.9–1.2px

DETAIL
0.5–0.8px

REFERENCE
0.3–0.5px
```

These are starting values.

The final values should be tested at actual rendered sizes.

---

# 9. Composition

Favor:

- large negative space
- asymmetric balance
- strong architectural silhouette
- editorial typography
- restrained technical annotations
- generous margins
- visual breathing room

Avoid:

- decorative clutter
- generic geometric backgrounds
- excessive grids
- random circles/lines
- fake blueprint aesthetics everywhere

Architectural drawings should feel intentional, not like a "blueprint theme."

---

# 10. Color strategy

Start monochrome.

Introduce one restrained accent only if it improves the brand system.

The SVG should not depend on a large number of colors to communicate hierarchy.

Where practical, allow stroke/fill styling to be controlled by CSS.

---

# 11. Motion hierarchy

Not everything should move equally.

### Primary motion
Architectural drawing progression.

### Secondary motion
Text/image reveals synchronized with major drawing milestones.

### Tertiary motion
Small details such as subtle image scale or line emphasis.

This hierarchy prevents visual fatigue.

---

# 12. Section choreography

A recommended first-pass homepage rhythm:

```text
HERO
Full architectural construction sequence
        ↓
ABOUT
Quiet typography
        ↓
DESIGN
Floor plan / section drawing
        ↓
PROJECT
Large photography
        ↓
PROCESS
Construction sequence
        ↓
PROJECTS
Drawing → image transitions
        ↓
EXPERTISE
Small technical diagrams
        ↓
CONTACT
Minimal final composition
```

This is a starting storyboard. Change it if actual business content suggests a stronger narrative.

---

# 13. SVG-to-website contract

Every SVG handed to development must document:

```text
Scene name
Purpose
Primary animated groups
Secondary animated groups
Important path IDs
Recommended drawing order
Mobile simplification
Reduced-motion final state
```

This contract prevents the design agent and coding agent from making incompatible assumptions.

---

# 14. Mobile strategy

For every scene, explicitly identify what can be removed on mobile.

Example:

```text
Desktop:
site + structure + envelope + openings + details + landscape

Mobile:
structure + envelope + openings + one detail layer
```

Do not let mobile become an unreadable miniature technical drawing.

---

# 15. Final quality target

The site should feel as though:

**an architect designed the motion system first, and then the web technology was used to realize it.**

It should not feel like:

**a normal website with architectural SVGs added afterward.**
