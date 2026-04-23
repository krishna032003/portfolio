"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Theme toggle button with a Framer Motion rotate + fade animation
 * between sun and moon icons. Uses `next-themes` for theme state.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — render nothing until mounted on client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl p-2 transition-colors",
          "hover:bg-white/10",
          className,
        )}
        aria-label="Toggle theme"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl p-2 cursor-pointer",
        "transition-colors duration-300",
        "hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Sun className="h-5 w-5 text-[var(--accent)]" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Moon className="h-5 w-5 text-[var(--foreground)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
