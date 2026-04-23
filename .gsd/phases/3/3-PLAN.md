---
phase: 3
plan: 3
wave: 2
---

# Plan 3.3: Achievements & Leadership Sections

## Objective
Implement sections for Achievements & Leadership to showcase Krishna's competitive programming success and organizational experience, using data from `raw/krishna_context.txt`.

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
    - Use `SectionHeading` with "Achievements".
    - Content: List competitive programming stats (300+ DSA on LeetCode) and hackathon participation (Bennovate, Ride Hack, etc.) from `krishna_context.txt`.
    - Layout: Use a grid of small, elegant `GlassCard` items with icons.
  </action>
  <verify>Test-Path src/components/sections/Achievements.tsx</verify>
  <done>Achievements are displayed in a clean, professional grid layout.</done>
</task>

<task type="auto">
  <name>Create Leadership Section</name>
  <files>src/components/sections/Leadership.tsx</files>
  <action>
    Build the `Leadership` component in `src/components/sections/`.
    
    Requirements:
    - Use `SectionWrapper` with `id="leadership"`.
    - Use `SectionHeading` with "Leadership & Experience".
    - Content: Detail the role as Coordinator for Jaypee Youth Club (JYC) and orchestration of events like Synergy '25.
    - Layout: Use a timeline-style or large card-based layout to emphasize the impact (e.g., "500+ attendees", "20% boost in participation").
  </action>
  <verify>Test-Path src/components/sections/Leadership.tsx</verify>
  <done>Leadership experience is highlighted with a focus on measurable impact.</done>
</task>

<task type="auto">
  <name>Add Sections to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render `Achievements` and `Leadership` components in `src/app/page.tsx` below `Skills`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Leadership"</verify>
  <done>Achievements and Leadership sections are integrated into the main page flow.</done>
</task>

## Success Criteria
- [ ] Achievements accurately reflect the competitive programming and hackathon data.
- [ ] Leadership section highlights the JYC coordinator role and event successes.
- [ ] All sections maintain the premium dark mode and glassmorphic aesthetic.
