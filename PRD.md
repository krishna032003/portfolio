1. Create `src/lib/utils.ts` and implement a `cn()` utility function using `clsx` and `tailwind-merge` for clean class management.
2. Create `src/components/ui/Button.tsx` and `src/components/ui/GlassCard.tsx` as atomic UI primitives with backdrop-blur and thin borders.
3. Create `src/components/ui/ThemeToggle.tsx` using `next-themes` and `lucide-react`, adding a Framer Motion rotate+fade animation for the sun/moon icons.
4. Build `src/components/Navbar.tsx` as a sticky, glassmorphic header with smooth-scroll links (About, Projects, Contact) and a mobile hamburger menu.
5. Integrate the `Navbar` into `src/app/layout.tsx` so it persists across all sections.
6. Create `src/components/ui/SectionWrapper.tsx` using `motion.section` to add a fade-in and slide-up scroll reveal animation to every section.
7. Create `src/components/ui/SectionHeading.tsx` to render bold headings with a neon blue accent underline.