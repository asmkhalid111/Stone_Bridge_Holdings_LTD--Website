# Floor Plan SVG Metadata

**Purpose:** 
Communicate spatial planning and architectural layout.

**Section:** 
Design / Capability (Scene 02)

**Drawing Order:**
1. `site`: Site boundary.
2. `grid`: Structural planning grid (reference dashed lines).
3. `walls-exterior`: Thick structural outer lines.
4. `walls-interior`: Partition lines.
5. `openings`: Doors (arcs) and windows (double thin lines).
6. `circulation`: Dashed flow arrows representing human movement.
7. `furniture`: Abstract geometric representations of spatial use.
8. `annotations`: Dimensions and labels.

**Important Groups:**
- `#grid`
- `#walls-exterior`
- `#walls-interior`
- `#openings`
- `#circulation`
- `#furniture`

**Important IDs:**
- `wall-ext-top`, `wall-ext-bottom`, `wall-ext-left`, `wall-ext-right`
- `circ-flow` (the main arrow path)

**Mobile Simplification:**
- Hide `#grid` to reduce visual clutter.
- Hide `#annotations` if they become unreadable.
- Scale down with `viewBox`, or in a real scenario, potentially crop the SVG to the core circulation area. For now, hide non-essential details (`#grid`, `#furniture`).

**Reduced-Motion Final State:**
- Display immediately. Circulation arrow can have a slow CSS opacity fade-in.
