# Structural Sequence SVG Metadata

**Purpose:** 
Shows the physical logic of construction, building the structure from the ground up.

**Section:** 
Process / Construction (Scene 03)

**Drawing Order:**
1. `ground`: The abstract site perspective grid.
2. `foundation`: The concrete raft base and its depth.
3. `columns`: Vertical structural members rising up.
4. `beams`: Horizontal connections between column tops.
5. `slabs`: The upper floor slab dropped onto the frame.
6. `envelope`: Dashed wireframe indicating the final architectural volume.

**Important Groups:**
- `#ground`, `#foundation`, `#columns`, `#beams`, `#slabs`, `#envelope`

**Important IDs:**
- `foundation-slab`
- `slab-1` (the upper level slab)
- `mass-left`, `mass-right` (envelope boundaries)

**Mobile Simplification:**
- Hide the `#ground` perspective grid completely.
- Keep the drawing centered and scale it to fit.
- The entire sequence remains as it communicates the core process effectively even on small screens.

**Reduced-Motion Final State:**
- Instantly render the full structure.
