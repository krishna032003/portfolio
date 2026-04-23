---
phase: 3
plan: 3
wave: 2
---

# Plan 3.3: Achievements & Leadership Sections

## Objective
Implement high-performance Achievements & Leadership sections with distinctive callouts and badges for key roles, using data from `raw/krishna_context.txt`.

## Context
- raw/krishna_context.txt
- src/components/ui/SectionWrapper.tsx
- src/components/ui/SectionHeading.tsx
- src/components/ui/GlassCard.tsx

## Tasks

<task type="auto">
  <name>Create Achievements Section</name>
  <files>src/components/sections/Achievements.tsx</files>
  <action>
    Build the `Achievements` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="achievements"`.
    - Content: Highlight hackathons (Imagine Cup, Bennovate) and coding milestones.
    - Layout: Clean grid of glassmorphic cards.
    - Animation: Staggered entry using `framer-motion`.
  </action>
  <verify>Test-Path src/components/sections/Achievements.tsx</verify>
  <done>Achievements section is implemented with premium visuals.</done>
</task>

<task type="auto">
  <name>Create Leadership with Badge</name>
  <files>src/components/sections/Leadership.tsx</files>
  <action>
    Build the `Leadership` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="leadership"`.
    - **JYC Coordinator Badge**: Create a distinct, glassmorphic callout or badge for the "Jaypee Youth Club Coordinator" role.
    - Highlight impact: "Synergy '25", "500+ attendees", "20% boost".
    - Animation: Use a "pop" or "zoom" entrance for the primary badge.
  </action>
  <verify>Test-Path src/components/sections/Leadership.tsx</verify>
  <done>Leadership section highlights the JYC role with a distinctive callout.</done>
</task>

<task type="auto">
  <name>Add Sections to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render `Achievements` and `Leadership` components in `src/app/page.tsx`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Leadership"</verify>
  <done>All Phase 3 sections are integrated and verified.</done>
</task>

## Success Criteria
- [ ] Leadership section features a prominent JYC Coordinator badge/callout.
- [ ] Achievements section is visually consistent and high-performance.
- [ ] All sections use `framer-motion` for a cohesive premium feel.

