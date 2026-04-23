# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
A premium, high-performance developer portfolio for Krishna Sahu. The design will feature a sleek dark mode (#0f1115) with subtle neon electric blue accents, utilizing light glassmorphism for the navigation bar and project cards to give it a modern feel. The goal is to highlight Krishna's expertise in Full-Stack Development and AI/Generative AI with modern, modular Next.js (App Router) architecture and Framer Motion animations.

## Goals
1. Build a responsive, modular Next.js (App Router) web application.
2. Implement a sleek dark mode design system (off-black #0f1115, neon blue accents, glassmorphism).
3. Create premium interactive UI elements with Framer Motion (hover states, atomic component animations).
4. Accurately represent all personal data, skills, and projects from `raw/krishna_context.txt` without hallucination.

## Non-Goals (Out of Scope)
- Complex CMS integration or backend database (static data is fine for now).
- Detailed project case study sub-pages (Phase 1 limits to external links for GitHub/Live Demos).
- Elaborate Light mode features (dark mode is primary, though a basic toggle will be supported).

## Users
Recruiters, hiring managers, and other developers evaluating Krishna's technical skills, projects, and design sensibilities.

## Constraints
- **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion.
- **Data:** All copy must be strictly extracted from `raw/krishna_context.txt`. No external hallucinations.
- **Architecture:** Components must be atomic, modular, and ready for agentic execution.
- **Design:** Simple atomic linking to GitHub/Live demos for projects.

## Success Criteria
- [ ] Portfolio renders perfectly on mobile and desktop.
- [ ] Theme toggle seamlessly switches between dark (primary #0f1115) and light modes.
- [ ] Framer Motion animations trigger correctly on scroll and hover.
- [ ] All 4 major sections (Hero, About & Skills, Projects Grid, Contact) are implemented.
- [ ] Lighthouse performance score > 90.
