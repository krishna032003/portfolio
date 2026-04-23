---
phase: 2
plan: 3
wave: 2
---

# Plan 2.3: Section Wrapper & SectionHeading Components

## Objective
Create reusable layout primitives for consistent section structure: a SectionWrapper (handles padding, max-width, scroll-reveal animation) and a SectionHeading (animated heading with accent underline).

## Context
- .gsd/SPEC.md
- src/lib/utils.ts (cn utility)
- src/app/globals.css (CSS variables)

## Tasks

<task type="auto">
  <name>Create SectionWrapper component</name>
  <files>src/components/ui/SectionWrapper.tsx</files>
  <action>
    Create a client component `src/components/ui/SectionWrapper.tsx`.

    Requirements:
    - Wraps section content in a `<section>` element with consistent max-width (`max-w-6xl`), horizontal padding (`px-6`), vertical padding (`py-20 md:py-28`), and `mx-auto`.
    - Accepts `id` prop for anchor linking (e.g., id="about").
    - Uses Framer Motion `motion.section` with `whileInView` to fade-in + slide-up on scroll (initial: opacity 0, y 40; animate: opacity 1, y 0; transition: duration 0.6).
    - `viewport={{ once: true, amount: 0.2 }}` to trigger once when 20% visible.
    - Accept `children` and `className`.
  </action>
  <verify>Test-Path src/components/ui/SectionWrapper.tsx</verify>
  <done>SectionWrapper.tsx wraps content with consistent layout and scroll-reveal animation.</done>
</task>

<task type="auto">
  <name>Create SectionHeading component</name>
  <files>src/components/ui/SectionHeading.tsx</files>
  <action>
    Create a component `src/components/ui/SectionHeading.tsx`.

    Requirements:
    - Renders an `h2` with large bold text (`text-3xl md:text-4xl font-bold`).
    - Below the text, render a short accent-colored bar/line (e.g., `w-16 h-1 bg-accent rounded-full mt-4`).
    - Optionally accept a `subtitle` prop rendered as a `p` tag with muted text below the heading.
    - Accept `children` (the heading text) and `className`.
  </action>
  <verify>Test-Path src/components/ui/SectionHeading.tsx</verify>
  <done>SectionHeading.tsx renders a styled heading with accent underline bar.</done>
</task>

## Success Criteria
- [ ] SectionWrapper provides consistent padding, max-width, and scroll-reveal animation.
- [ ] SectionHeading provides a styled heading with accent underline.
- [ ] Both components are reusable across all portfolio sections.
