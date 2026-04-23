---
phase: 5
plan: 1
wave: 1
---

# Plan 5.1: Performance & SEO Optimization

## Objective
Audit and optimize the portfolio for speed and search engine visibility.

## Context
- .gsd/phases/5/RESEARCH.md
- src/app/layout.tsx
- src/app/page.tsx

## Tasks

<task type="auto">
  <name>SEO & Metadata Implementation</name>
  <files>src/app/layout.tsx, src/app/page.tsx</files>
  <action>
    - Update `src/app/layout.tsx` with a descriptive title ("Krishna Sahu | Full Stack & AI Engineer") and meta description.
    - Add OpenGraph and Twitter cards metadata.
    - Ensure every section has semantic HTML (e.g., `<section>` tags in `SectionWrapper`).
  </action>
  <verify>Get-Content src/app/layout.tsx | Select-String "metadata"</verify>
  <done>SEO metadata is fully implemented for the home page.</done>
</task>

<task type="auto">
  <name>Image & Asset Optimization</name>
  <files>src/components/sections/Hero.tsx</files>
  <action>
    - Audit any images or heavy assets. 
    - Ensure all `next/image` components use appropriate `priority` or `loading` strategies.
    - Check that the Spotlight background is performant (uses `requestAnimationFrame` via `framer-motion`).
  </action>
  <verify>Get-Content src/components/sections/Hero.tsx | Select-String "Spotlight"</verify>
  <done>Visual assets are optimized for LCP.</done>
</task>

<task type="auto">
  <name>Bundle & Import Audit</name>
  <files>package.json</files>
  <action>
    - Review imports in large components.
    - Ensure named imports are used for `lucide-react` to support tree-shaking.
    - (Optional) Run `npm run build` to check final bundle warnings.
  </action>
  <verify>npm run build</verify>
  <done>Build passes without critical performance warnings.</done>
</task>

## Success Criteria
- [ ] Lighthouse Performance score > 90 (simulated).
- [ ] Metadata is correctly reflected in page source.
