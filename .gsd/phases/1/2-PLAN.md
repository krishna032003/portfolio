---
phase: 1
plan: 2
wave: 1
---

# Plan 1.2: Theming & Global Layout

## Objective
Configure the dark/light mode theme using next-themes, define the global styling variables (dark mode #0f1115 and neon electric blue accents), and wrap the application.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- tailwind.config.ts
- src/app/globals.css

## Tasks

<task type="auto">
  <name>Configure Tailwind and CSS Variables</name>
  <files>tailwind.config.ts, src/app/globals.css</files>
  <action>
    Update `src/app/globals.css` to define the base theme colors. Use a deep off-black (`#0f1115`) for the default dark mode background, and standard colors for light mode. Define a neon electric blue accent (`#00f3ff`).
    Update `tailwind.config.ts` to consume these CSS variables and configure the theme colors correctly.
    AVOID: Hardcoding hex values directly in Tailwind config without CSS variables, to support `next-themes` seamlessly.
  </action>
  <verify>Get-Content tailwind.config.ts | Select-String "colors"</verify>
  <done>CSS variables and tailwind.config.ts correctly set up for theming.</done>
</task>

<task type="auto">
  <name>Implement Theme Provider</name>
  <files>src/components/ThemeProvider.tsx, src/app/layout.tsx</files>
  <action>
    Create a new client component `src/components/ThemeProvider.tsx` that exports `next-themes` ThemeProvider.
    Update `src/app/layout.tsx` to wrap the `children` in this `ThemeProvider` with `attribute="class"` and `defaultTheme="dark"`.
    Include standard metadata for the portfolio (title: "Krishna Sahu - Portfolio").
  </action>
  <verify>Get-Content src/app/layout.tsx | Select-String "ThemeProvider"</verify>
  <done>The app is wrapped in the ThemeProvider and defaults to dark mode.</done>
</task>

## Success Criteria
- [ ] Theme configuration is set up properly with dark and light modes.
- [ ] Next-themes is integrated into the global App layout.
