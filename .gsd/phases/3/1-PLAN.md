---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Hero Section Implementation

## Objective
Implement a high-impact Hero section with bold typography, a dynamic tagline, and a premium "simulated terminal" code block to showcase AI identity, using data from `raw/krishna_context.txt`.

## Context
- .gsd/SPEC.md
- raw/krishna_context.txt
- .gsd/phases/3/RESEARCH.md
- src/components/ui/Button.tsx
- src/components/ui/SectionWrapper.tsx

## Tasks

<task type="auto">
  <name>Create Hero Component</name>
  <files>src/components/sections/Hero.tsx</files>
  <action>
    Build the `Hero` component inside `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` for the base layout.
    - Title: "Krishna Sahu" in large, bold typography (`text-5xl md:text-8xl`).
    - Tagline: "Full Stack & AI Software Engineer" with a typewriter animation or neon glow.
    - Code Block (Agentic Preview): Include a small, stylized terminal window (using `GlassCard` or similar) that displays a JSON-like object representing Krishna's status (e.g., `status: "Building AI futures"`, `location: "Noida, IN"`).
    - CTA: "View Projects" (primary variant) and "Download CV" (secondary variant).
    - Animation: Staggered entry for all elements using Framer Motion.
    
    AVOID: Hallucinating any personal details not present in `krishna_context.txt`.
  </action>
  <verify>Test-Path src/components/sections/Hero.tsx</verify>
  <done>Hero component is created with high-impact typography and terminal-style preview.</done>
</task>

<task type="auto">
  <name>Add Hero to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render the `Hero` component in `src/app/page.tsx`.
    Clean up `src/app/page.tsx` to remove default Next.js starter content.
    Ensure `Navbar` is working correctly with the Hero section.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Hero"</verify>
  <done>Hero section is the primary entry point on the home page.</done>
</task>

## Success Criteria
- [ ] Hero section displays Krishna's name and role with premium typography.
- [ ] Simulated terminal effect adds a "WOW" factor for tech-savvy visitors.
- [ ] Responsive layout looks great on mobile (stacking) and desktop (split/centered).

