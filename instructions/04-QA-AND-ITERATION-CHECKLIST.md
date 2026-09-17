# Architecture Website QA + Iteration Checklist

## Purpose

Use this after each significant agent implementation.

---

# Visual quality

- [ ] Does the first viewport immediately communicate architecture/construction?
- [ ] Is the drawing visually coherent before animation begins?
- [ ] Does the drawing sequence have a logical construction order?
- [ ] Are line weights consistent?
- [ ] Is there enough negative space?
- [ ] Does typography remain readable?
- [ ] Does the site feel premium without becoming decorative?
- [ ] Are animations restrained?

---

# SVG quality

- [ ] SVGs have semantic groups
- [ ] Important paths have meaningful IDs
- [ ] No accidental duplicate paths
- [ ] No unnecessary geometry
- [ ] No embedded raster assets unless explicitly required
- [ ] ViewBox is correct
- [ ] SVGs scale correctly
- [ ] SVGs are optimized
- [ ] Mobile simplification exists

---

# Scroll behavior

Test:

- [ ] Slow downward scroll
- [ ] Fast downward scroll
- [ ] Slow upward scroll
- [ ] Fast upward scroll
- [ ] Start at top and scroll normally
- [ ] Reload page
- [ ] Jump to section
- [ ] Resize browser during animation

Look specifically for:

- jitter
- jumps
- disappearing paths
- wrong drawing order
- desynchronization
- pinned-section problems
- text collisions
- incorrect ScrollTrigger measurements

---

# Responsive

Test at least:

- [ ] Large desktop
- [ ] Standard laptop
- [ ] Tablet
- [ ] Mobile portrait
- [ ] Mobile landscape

Check:

- [ ] No horizontal scrolling
- [ ] SVG remains legible
- [ ] Text remains readable
- [ ] Buttons are touch-friendly
- [ ] Pinning does not trap the user
- [ ] Animation density is appropriate

---

# Accessibility

- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Semantic headings exist
- [ ] Images have appropriate alternative text
- [ ] Decorative SVGs are not unnecessarily announced
- [ ] Meaningful SVGs have accessible descriptions
- [ ] `prefers-reduced-motion` works
- [ ] Site remains understandable with motion disabled

---

# Performance

Inspect:

- [ ] Initial page load
- [ ] JavaScript bundle
- [ ] SVG file sizes
- [ ] Image sizes
- [ ] Number of animated SVG nodes
- [ ] Long tasks
- [ ] Scroll smoothness
- [ ] Layout shifts

If performance is poor:

1. simplify SVG geometry
2. reduce simultaneous animated paths
3. optimize images
4. reduce unnecessary effects
5. simplify mobile scenes
6. only then consider more complex technical changes

---

# Agent iteration rule

When something looks wrong:

Do not immediately add another animation, CSS override, or arbitrary delay.

First identify:

```text
Is the problem:
- SVG geometry?
- SVG grouping?
- path measurement?
- ScrollTrigger timing?
- layout?
- font loading?
- image loading?
- responsive breakpoint?
- excessive DOM complexity?
```

Fix the root cause.

---

# Final browser verification

Before declaring the project finished:

- [ ] Run production build
- [ ] Test production output
- [ ] Check browser console
- [ ] Check network failures
- [ ] Test all navigation
- [ ] Test contact interactions
- [ ] Test all major scroll scenes
- [ ] Test mobile
- [ ] Test reduced motion
- [ ] Visually inspect complete page from top to bottom

Do not mark the task complete merely because the development server starts successfully.
