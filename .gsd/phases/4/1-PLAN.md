---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: Project Card Primitive & Initial Grid

## Objective
Create a reusable, premium `ProjectCard` component with 3D tilt effects and implement the first three featured projects (WanderGuide, LifeOS, Blood Connect).

## Context
- raw/krishna_context.txt
- .gsd/phases/4/RESEARCH.md
- src/components/ui/GlassCard.tsx
- src/components/ui/SectionWrapper.tsx

## Tasks

<task type="auto">
  <name>Create ProjectCard Component</name>
  <files>src/components/ui/ProjectCard.tsx</files>
  <action>
    Build a premium `ProjectCard` component.
    - Props: `title`, `description`, `tech`, `links`, `image` (optional).
    - Interaction: Implement a **3D Tilt** effect using `framer-motion` (perspective transform based on mouse position).
    - Visuals: Use `GlassCard` as the base. Add a "Glow" border that activates on hover.
    - Content: Staggered reveal of tech badges and links.
  </action>
  <verify>Test-Path src/components/ui/ProjectCard.tsx</verify>
  <done>ProjectCard component is created with high-end hover interactions.</done>
</task>

<task type="auto">
  <name>Implement Projects Section - Part 1</name>
  <files>src/components/sections/Projects.tsx</files>
  <action>
    Create the `Projects` section component.
    - Use `SectionWrapper` with `id="projects"`.
    - Map through the first 3 projects from `krishna_context.txt` (WanderGuide, LifeOS, Blood Connect).
    - Render them using the `ProjectCard` component.
  </action>
  <verify>Test-Path src/components/sections/Projects.tsx</verify>
  <done>Projects section is created with the first 3 projects implemented.</done>
</task>

<task type="auto">
  <name>Add Projects to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render the `Projects` component in `src/app/page.tsx` below `Leadership`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Projects"</verify>
  <done>Projects section is visible on the home page.</done>
</task>

## Success Criteria
- [ ] Project cards feature a smooth, performance-optimized 3D tilt effect.
- [ ] Data for WanderGuide, LifeOS, and Blood Connect is accurately displayed.
- [ ] Responsive grid layout handles mobile and desktop viewports gracefully.
