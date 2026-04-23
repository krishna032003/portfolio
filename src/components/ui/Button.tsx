"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Atomic Button primitive with glassmorphic secondary variant,
 * neon accent primary variant, and ghost variant.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // sizes
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-5 py-2.5 text-base",
          size === "lg" && "px-7 py-3 text-lg",

          // variants
          variant === "primary" &&
            "bg-[var(--accent)] text-[#0f1115] font-semibold shadow-[0_0_20px_rgba(0,243,255,0.35)] hover:shadow-[0_0_30px_rgba(0,243,255,0.55)] hover:scale-[1.03] active:scale-[0.98]",

          variant === "secondary" &&
            "backdrop-blur-md bg-white/5 border border-white/10 text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:bg-white/10 active:scale-[0.98]",

          variant === "ghost" &&
            "text-[var(--foreground)] hover:bg-white/5 active:scale-[0.97]",

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
