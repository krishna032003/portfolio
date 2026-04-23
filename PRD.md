1. Run the command `npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes` to scaffold the Next.js project. Ensure `package.json` is created.
2. Run the command `npm install framer-motion next-themes lucide-react clsx tailwind-merge` to install required UI dependencies.
3. Update `src/app/globals.css` to define CSS variables for theming. Set the default dark mode background to `#0f1115` and add a neon electric blue accent `#00f3ff`.
4. Update `tailwind.config.ts` to consume the CSS variables from `globals.css` instead of hardcoding hex values.
5. Create a new client component at `src/components/ThemeProvider.tsx` that exports the `ThemeProvider` from `next-themes`.
6. Update `src/app/layout.tsx` to wrap the `children` in the `ThemeProvider` (set `attribute="class"` and `defaultTheme="dark"`), and set the metadata title to "Krishna Sahu - Portfolio".