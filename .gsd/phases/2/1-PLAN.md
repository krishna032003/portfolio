---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Utility Function & Atomic UI Primitives

## Objective
Create the `cn()` utility for merging Tailwind classes, and build the two foundational UI atoms: Button and GlassCard.

## Context
- .gsd/SPEC.md
- src/app/globals.css (CSS variables: --background, --foreground, --accent)
- tailwind.config.ts (Tailwind v4 with @theme inline)

## Tasks

<task type="auto">
  <name>Create cn() utility</name>
  <files>src/lib/utils.ts</files>
  <action>
    Create `src/lib/utils.ts` exporting a `cn()` function that combines `clsx` and `tailwind-merge`.
    This is the standard pattern used across all components for conditional class merging.

    ```typescript
    import { clsx, type ClassValue } from "clsx";
    import { twMerge } from "tailwind-merge";

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    ```
  </action>
  <verify>Test-Path src/lib/utils.ts</verify>
  <done>cn() utility exists and is importable from @/lib/utils.</done>
</task>

<task type="auto">
  <name>Create Button component</name>
  <files>src/components/ui/Button.tsx</files>
  <action>
    Create a client component `src/components/ui/Button.tsx`.

    Requirements:
    - Use `motion.button` from framer-motion for native animation support.
    - Support two variants: `primary` (filled neon blue bg with dark text) and `outline` (transparent bg with neon blue border and text).
    - Hover state: subtle scale-up (1.03) and a glow box-shadow using the accent color.
    - Tap state: scale-down (0.97) for tactile feedback.
    - Accept standard button props plus `variant`, `className`, `children`, and optional `href` (renders as link internally).
    - Use `cn()` for class merging.

    AVOID: Using `onClick` as a required prop — keep it optional.
    AVOID: Inline hex colors — use Tailwind's `bg-accent`, `text-accent`, `border-accent` which map to CSS variables.
  </action>
  <verify>Test-Path src/components/ui/Button.tsx</verify>
  <done>Button.tsx exports a Button component with primary and outline variants, framer-motion animations.</done>
</task>

<task type="auto">
  <name>Create GlassCard component</name>
  <files>src/components/ui/GlassCard.tsx</files>
  <action>
    Create a client component `src/components/ui/GlassCard.tsx`.

    Requirements:
    - Use `motion.div` from framer-motion.
    - Glassmorphism: `backdrop-blur-xl`, semi-transparent background (`bg-white/[0.03]` in dark, `bg-white/60` in light), subtle 1px border (`border-white/[0.08]`).
    - Hover animation: slight Y-lift (-4px translateY), subtle border brightness increase, smooth transition (0.3s).
    - Accept `children`, `className`, and spread remaining props.
    - Use `cn()` for class merging.

    AVOID: Heavy blur values (>20px) that hurt performance on mobile.
    AVOID: Opaque backgrounds — glassmorphism needs transparency.
  </action>
  <verify>Test-Path src/components/ui/GlassCard.tsx</verify>
  <done>GlassCard.tsx exports a GlassCard with glassmorphism styling and hover lift animation.</done>
</task>

## Success Criteria
- [ ] `cn()` utility exists at src/lib/utils.ts.
- [ ] Button component has primary/outline variants with Framer Motion animations.
- [ ] GlassCard component has glassmorphism and hover lift animation.
