---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: About & Skills Sections

## Objective
Implement a high-performance About section with a "Metrics" bar and a categorized "Tech Stack" grid, using data from `raw/krishna_context.txt`.

## Context
- raw/krishna_context.txt
- .gsd/phases/3/RESEARCH.md
- src/components/ui/SectionWrapper.tsx
- src/components/ui/SectionHeading.tsx
- src/components/ui/GlassCard.tsx

## Tasks

<task type="auto">
  <name>Create About Section with Metrics</name>
  <files>src/components/sections/About.tsx</files>
  <action>
    Build the `About` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="about"`.
    - Content: Full "About Me" text.
    - **Metrics Bar**: Implement a stylized horizontal bar or grid of cards highlighting key metrics:
      - "300+ LeetCode Problems Solved"
      - "7.84 CGPA @ JIIT"
      - "Full Stack & AI Expertise"
    - Use `framer-motion` to animate the numbers or bars on scroll.
  </action>
  <verify>Test-Path src/components/sections/About.tsx</verify>
  <done>About section is created with an interactive Metrics bar.</done>
</task>

<task type="auto">
  <name>Create Tech Stack Grid</name>
  <files>src/components/sections/Skills.tsx</files>
  <action>
    Build the `Skills` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="skills"`.
    - Use `SectionHeading` with "Technical Expertise".
    - Layout: Implement a **Bento Grid** for the "Tech Stack".
    - Content: Categorize skills (Languages, Frontend, Backend, AI/ML, Tools) into glassmorphic cards.
    - Animation: Smooth staggered reveal of cards using `framer-motion`.
  </action>
  <verify>Test-Path src/components/sections/Skills.tsx</verify>
  <done>Skills are displayed in a premium Tech Stack grid.</done>
</task>

<task type="auto">
  <name>Add Sections to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render `About` and `Skills` components in `src/app/page.tsx`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Skills"</verify>
  <done>About and Skills sections are integrated with high-performance visuals.</done>
</task>

## Success Criteria
- [ ] About section includes a visually distinct Metrics bar with scroll animations.
- [ ] Skills grid uses a Bento layout with glassmorphic cards and icons.
- [ ] All elements use `framer-motion` for premium entrance animations.


