"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Sticky glassmorphic Navbar with smooth-scroll navigation links,
 * a ThemeToggle, and a mobile hamburger menu with animated overlay.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to intensify the glass backdrop after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // glass background
          "backdrop-blur-lg border-b",
          scrolled
            ? "bg-[var(--background)]/80 border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
            : "bg-transparent border-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo / brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-bold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <span className="text-[var(--accent)]">&lt;</span>
            KS
            <span className="text-[var(--accent)]"> /&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className={cn(
                    "relative text-sm font-medium text-[var(--foreground)]/70",
                    "transition-colors duration-300 hover:text-[var(--accent)]",
                    // animated underline on hover
                    "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0",
                    "after:bg-[var(--accent)] after:transition-all after:duration-300",
                    "hover:after:w-full",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={cn(
                "md:hidden inline-flex items-center justify-center rounded-xl p-2 cursor-pointer",
                "text-[var(--foreground)] transition-colors duration-300",
                "hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[var(--accent)]",
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "relative mt-[72px] mx-4 rounded-2xl",
                "backdrop-blur-xl bg-[var(--background)]/90 border border-white/[0.08]",
                "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
                "p-6",
              )}
            >
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleSmoothScroll(e, href)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium",
                        "text-[var(--foreground)] transition-colors duration-300",
                        "hover:bg-white/[0.06] hover:text-[var(--accent)]",
                      )}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
