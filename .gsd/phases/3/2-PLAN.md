---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: About & Skills Sections

## Objective
Implement the "About Me" narrative and a high-impact **Bento Grid** Skills layout using data from `raw/krishna_context.txt`.

## Context
- raw/krishna_context.txt
- .gsd/phases/3/RESEARCH.md
- src/components/ui/SectionWrapper.tsx
- src/components/ui/SectionHeading.tsx
- src/components/ui/GlassCard.tsx

## Tasks

<task type="auto">
  <name>Create About Section</name>
  <files>src/components/sections/About.tsx</files>
  <action>
    Build the `About` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="about"`.
    - Use `SectionHeading` with "About Me".
    - Content: Use the full "About Me" text from `krishna_context.txt`.
    - Layout: Two-column layout on desktop.
      - Column 1: Bio text with high readability.
      - Column 2: Stylized `GlassCard` showing Education details (JIIT B.Tech, ASVM Secondary).
  </action>
  <verify>Test-Path src/components/sections/About.tsx</verify>
  <done>About section is created with accurate biographical and education data.</done>
</task>

<task type="auto">
  <name>Create Skills Bento Grid</name>
  <files>src/components/sections/Skills.tsx</files>
  <action>
    Build the `Skills` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="skills"`.
    - Use `SectionHeading` with "Technical Expertise".
    - Layout: Implement a **Bento Grid** (asymmetric grid layout).
    - Content: Categorize skills (Languages, Frontend, Backend, AI/ML, Tools) from `krishna_context.txt`.
    - Visuals: Use `GlassCard` for each bento item. Add subtle `lucide-react` icons.
    - Animation: Use `whileInView` with stagger for the grid items.
  </action>
  <verify>Test-Path src/components/sections/Skills.tsx</verify>
  <done>Skills are categorized and displayed in a premium Bento Grid layout.</done>
</task>

<task type="auto">
  <name>Add Sections to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render `About` and `Skills` components in `src/app/page.tsx` below the `Hero`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Skills"</verify>
  <done>About and Skills sections are integrated into the home page flow.</done>
</task>

## Success Criteria
- [ ] About section accurately reflects the content in `krishna_context.txt`.
- [ ] Skills grid uses a modern Bento layout with glassmorphic elements.
- [ ] Transitions between sections are smooth and visually consistent.

