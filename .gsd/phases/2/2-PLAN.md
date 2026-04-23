---
phase: 2
plan: 2
wave: 1
---

# Plan 2.2: Navigation Bar & Theme Toggle

## Objective
Build the glassmorphic navigation bar with a dark/light theme toggle button. This is the primary persistent UI element across all sections.

## Context
- .gsd/SPEC.md
- src/components/ThemeProvider.tsx (next-themes already integrated)
- src/components/ui/GlassCard.tsx (glassmorphism pattern)
- src/app/layout.tsx

## Tasks

<task type="auto">
  <name>Create ThemeToggle component</name>
  <files>src/components/ui/ThemeToggle.tsx</files>
  <action>
    Create a client component `src/components/ui/ThemeToggle.tsx`.

    Requirements:
    - Import `useTheme` from `next-themes`.
    - Render a button that toggles between "dark" and "light" themes.
    - Use `lucide-react` icons: `Sun` for dark mode (click to switch to light), `Moon` for light mode (click to switch to dark).
    - Wrap icon swap in a Framer Motion `AnimatePresence` with a rotate+fade transition for polish.
    - Handle hydration mismatch: use a `mounted` state (useEffect) to avoid SSR/client icon mismatch.
    - Style: round button with subtle border, hover glow using accent color.
  </action>
  <verify>Test-Path src/components/ui/ThemeToggle.tsx</verify>
  <done>ThemeToggle.tsx renders the correct icon for current theme and toggles on click.</done>
</task>

<task type="auto">
  <name>Create Navbar component</name>
  <files>src/components/Navbar.tsx</files>
  <action>
    Create a client component `src/components/Navbar.tsx`.

    Requirements:
    - Fixed position at top (`sticky top-0 z-50`).
    - Glassmorphism background: `backdrop-blur-xl`, `bg-background/60`, subtle bottom border.
    - Left side: Name "Krishna Sahu" as a logo/text link (bold, accent color on hover).
    - Right side: Navigation links (About, Projects, Contact) as smooth-scroll anchor links (`href="#about"`, `href="#projects"`, `href="#contact"`).
    - Right side: ThemeToggle component after the nav links.
    - Mobile: hamburger menu icon (from lucide-react) that toggles a slide-down mobile menu with Framer Motion `AnimatePresence`.
    - Use `cn()` for class merging.

    AVOID: Using Next.js Link for same-page anchor navigation — use standard `<a>` tags with smooth scroll behavior.
  </action>
  <verify>Test-Path src/components/Navbar.tsx</verify>
  <done>Navbar.tsx renders a sticky glassmorphic nav with links, theme toggle, and mobile menu.</done>
</task>

<task type="auto">
  <name>Integrate Navbar into layout</name>
  <files>src/app/layout.tsx</files>
  <action>
    Import and render the Navbar component inside the ThemeProvider in `src/app/layout.tsx`, above `{children}`.
    Add `scroll-behavior: smooth` to the `html` element in globals.css (or as a Tailwind class `scroll-smooth` on the html tag).

    AVOID: Placing Navbar inside page.tsx — it belongs in the layout for persistence.
  </action>
  <verify>Get-Content src/app/layout.tsx | Select-String "Navbar"</verify>
  <done>Navbar renders on every page via layout.tsx, smooth scrolling is enabled.</done>
</task>

## Success Criteria
- [ ] ThemeToggle toggles dark/light with animated icon swap.
- [ ] Navbar is sticky with glassmorphism, contains nav links and ThemeToggle.
- [ ] Mobile hamburger menu works with Framer Motion animation.
- [ ] Navbar is rendered from layout.tsx (persistent across routes).
