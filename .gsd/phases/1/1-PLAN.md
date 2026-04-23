---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Project Setup & Dependencies

## Objective
Scaffold the Next.js App Router project and install required dependencies.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Initialize Next.js Project</name>
  <files>package.json, next.config.ts</files>
  <action>
    Run `npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes`.
    Wait for the installation to complete.
    AVOID: Running interactively. The `--yes` and exact flags ensure it runs autonomously.
  </action>
  <verify>Get-Content package.json | Select-String "next"</verify>
  <done>package.json exists and contains Next.js dependency.</done>
</task>

<task type="auto">
  <name>Install Required Dependencies</name>
  <files>package.json</files>
  <action>
    Install specific libraries required for the project.
    Run `npm install framer-motion next-themes lucide-react clsx tailwind-merge`
    These packages are needed for animations, theming, icons, and utility classes respectively.
  </action>
  <verify>Get-Content package.json | Select-String "framer-motion"</verify>
  <done>framer-motion, next-themes, and lucide-react are successfully added to dependencies.</done>
</task>

## Success Criteria
- [ ] The Next.js project is fully scaffolded in the current directory.
- [ ] All essential UI dependencies are installed.
