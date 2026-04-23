---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Hero Section Implementation

## Objective
Implement a high-impact Hero section with bold typography, a dynamic tagline, and a premium "Spotlight" mouse-follow background effect, using data from `raw/krishna_context.txt`.

## Context
- .gsd/SPEC.md
- raw/krishna_context.txt
- .gsd/phases/3/RESEARCH.md
- src/components/ui/Button.tsx
- src/components/ui/SectionWrapper.tsx

## Tasks

<task type="auto">
  <name>Create Spotlight Component</name>
  <files>src/components/ui/Spotlight.tsx</files>
  <action>
    Create a `Spotlight` background component.
    - Use `framer-motion` to track mouse position.
    - Render a radial gradient that follows the cursor with a subtle "glow" effect.
    - Ensure it is positioned absolutely behind section content.
  </action>
  <verify>Test-Path src/components/ui/Spotlight.tsx</verify>
  <done>Spotlight component is functional and follows the mouse.</done>
</task>

<task type="auto">
  <name>Create Hero Component</name>
  <files>src/components/sections/Hero.tsx</files>
  <action>
    Build the `Hero` component inside `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` for the base layout.
    - Include the `Spotlight` component as a background element.
    - Layout: Centered or Split-screen (User's choice).
    - Title: "Krishna Sahu" (`text-5xl md:text-8xl`).
    - Tagline: "Full Stack & AI Software Engineer" (from context).
    - Animation: Staggered entrance for all text elements using `framer-motion`.
    - CTA: "View Projects" and "Download CV".
  </action>
  <verify>Test-Path src/components/sections/Hero.tsx</verify>
  <done>Hero component is created with spotlight effect and premium animations.</done>
</task>

<task type="auto">
  <name>Add Hero to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render the `Hero` component in `src/app/page.tsx`.
    Clean up `src/app/page.tsx` boilerplate.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Hero"</verify>
  <done>Hero section is active on the home page.</done>
</task>

## Success Criteria
- [ ] Hero section features a smooth, high-performance Spotlight mouse-follow effect.
- [ ] Typography is bold and matches the premium "AI Engineer" aesthetic.
- [ ] All entrance animations are implemented with `framer-motion`.

