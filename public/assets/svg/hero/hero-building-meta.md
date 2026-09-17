# Hero Building SVG Metadata

**Purpose:** 
Main scroll-driven introduction. Establishes the visual language. Represents the progression from site grid to finished architecture.

**Section:** 
Hero (Scene 01)

**Drawing Order:**
1. `site`: Ground line and abstract construction grid.
2. `foundation`: Foundation slab and piers.
3. `structure`: Main structural columns and floor/roof slabs.
4. `architecture`: Core exterior and interior walls.
5. `openings`: Windows and entry door bounds.
6. `details`: Window mullions, door panels/handles, balcony railings.
7. `landscape`: Abstract trees.
8. `annotations`: Dimension lines and text.

**Important Groups:**
- `#site` (construction grid lines)
- `#foundation` (foundation geometry)
- `#structure` (columns, slabs)
- `#architecture` (solid walls)
- `#openings` (window & door voids)
- `#details` (fine architectural details)
- `#landscape` (contextual trees)
- `#annotations` (dimensions)

**Important IDs:**
- `site-ground` (base horizon)
- `foundation-main` (the main structural base)
- `slab-level-1`, `slab-roof` (horizontal divisions)

**Mobile Simplification:**
- Hide `#site` grid lines.
- Hide `#landscape` (trees).
- Hide `#annotations` (dimensions).
- Only draw foundation, structure, architecture, openings, and details.

**Reduced-Motion Final State:**
- Instantly render the entire SVG at 100% opacity with all paths fully drawn. (Or a quick 1-second CSS fade-in).
