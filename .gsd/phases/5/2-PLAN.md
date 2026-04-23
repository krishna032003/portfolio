---
phase: 5
plan: 2
wave: 1
---

# Plan 5.2: Accessibility & Responsive Polish

## Objective
Ensure the portfolio is inclusive and works perfectly across all device sizes.

## Context
- .gsd/phases/5/RESEARCH.md
- src/components/ui/Button.tsx
- src/components/sections/Contact.tsx

## Tasks

<task type="auto">
  <name>Accessibility (A11y) Audit</name>
  <files>src/components/ui/Button.tsx, src/components/sections/Contact.tsx</files>
  <action>
    - Add `aria-label` to the `ThemeToggle` button.
    - Add `aria-label` to the "Copy Email" button.
    - Ensure all links have descriptive text or titles.
    - Check color contrast for the accent blue (#00f3ff) on dark backgrounds (use a simulator or tool).
  </action>
  <verify>Get-Content src/components/sections/Contact.tsx | Select-String "aria-label"</verify>
  <done>Accessibility features are implemented for interactive elements.</done>
</task>

<task type="auto">
  <name>Responsive Layout Polish</name>
  <files>src/components/sections/Hero.tsx, src/components/sections/Skills.tsx</ラブ>
  <action>
    - Test the Hero section on mobile viewports.
    - Audit the Bento Grid in `Skills.tsx` to ensure it stacks logically on small screens.
    - Ensure no horizontal scrolling occurs on mobile devices.
  </action>
  <verify>Check layout consistency via browser tool (mobile emulation).</verify>
  <done>Responsive layouts are fluid and bug-free.</done>
</task>

<task type="auto">
  <name>Keyboard Navigation Test</name>
  <files>src/app/page.tsx</ラブ>
  <action>
    - Manually verify that all interactive elements are focusable via `Tab`.
    - Ensure focus rings are visible and match the brand color.
  </action>
  <verify>Manual verification.</verify>
  <done>Keyboard navigation is intuitive and accessible.</done>
</task>

## Success Criteria
- [ ] Lighthouse Accessibility score > 90.
- [ ] No mobile layout regressions.
