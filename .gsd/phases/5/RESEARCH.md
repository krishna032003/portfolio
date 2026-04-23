# Phase 5 Research: Optimization & Accessibility

## Performance Targets
- **LCP (Largest Contentful Paint)**: Ensure the Hero text/image loads instantly using `priority` in `next/image` if applicable.
- **CLS (Cumulative Layout Shift)**: Verify that glassmorphic cards and grids have reserved space to prevent jumping.
- **Bundle Size**: Audit `framer-motion` and `lucide-react` imports to ensure tree-shaking is effective.

## Accessibility (A11y) Focus
- **Contrast**: Check neon blue (#00f3ff) against dark background (#0f1115).
- **Interactive Elements**: Ensure buttons have descriptive `aria-label`s.
- **Keyboard Navigation**: Verify focus rings are visible and logical.

## SEO Strategy
- **Meta Tags**: Implement dynamic titles and meta descriptions.
- **Semantics**: Ensure `h1`-`h4` hierarchy is strictly followed.
