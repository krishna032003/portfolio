---
phase: 4
plan: 2
wave: 1
---

# Plan 4.2: Remaining Projects & Contact Section

## Objective
Complete the projects showcase with SmartShield.AI and CareCall, and implement a high-performance Contact section.

## Context
- raw/krishna_context.txt
- src/components/sections/Projects.tsx
- src/components/ui/SectionWrapper.tsx
- src/components/ui/SectionHeading.tsx

## Tasks

<task type="auto">
  <name>Complete Projects List</name>
  <files>src/components/sections/Projects.tsx</files>
  <action>
    Update the `Projects` component to include the remaining two projects:
    - SmartShield.AI (AI, Cybersecurity)
    - CareCall (Python, Flask, NLP)
    Ensure all project descriptions and tech stacks are strictly from `krishna_context.txt`.
  </action>
  <verify>Get-Content src/components/sections/Projects.tsx | Select-String "SmartShield.AI"</verify>
  <done>All 5 featured projects are implemented and categorized.</done>
</task>

<task type="auto">
  <name>Create Contact Section</name>
  <files>src/components/sections/Contact.tsx</files>
  <action>
    Build the `Contact` component in `src/components/sections/`.
    - Requirements:
      - Use `SectionWrapper` with `id="contact"`.
      - Use `SectionHeading` with "Get in Touch".
      - Display email (krishna032003@gmail.com) and location (Noida, UP).
      - Include Social Links: GitHub, LeetCode, GFG (using profile names from context).
      - Visuals: Use glassmorphic cards for contact methods. Add a "Copy to Clipboard" feature for the email.
  </action>
  <verify>Test-Path src/components/sections/Contact.tsx</verify>
  <done>Contact section is created with functional social links and email interaction.</done>
</task>

<task type="auto">
  <name>Add Contact to Main Page</name>
  <files>src/app/page.tsx</files>
  <action>
    Import and render the `Contact` component in `src/app/page.tsx` below `Projects`.
  </action>
  <verify>Get-Content src/app/page.tsx | Select-String "Contact"</verify>
  <done>Full page flow (Hero to Contact) is complete.</done>
</task>

## Success Criteria
- [ ] All 5 projects from `krishna_context.txt` are accurately represented.
- [ ] Contact section provides easy access to social profiles and email.
- [ ] The transition to the footer/contact area feels premium and consistent.
