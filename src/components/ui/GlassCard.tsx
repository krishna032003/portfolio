"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Extra glow effect on hover */
  hover?: boolean;
}

/**
 * Glassmorphic card primitive with backdrop-blur, thin semi-transparent
 * border, and an optional hover glow effect.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // glass surface
          "rounded-2xl backdrop-blur-lg bg-white/[0.03] border border-white/[0.08]",
          "shadow-[0_4px_30px_rgba(0,0,0,0.25)]",
          "p-6",

          // optional hover interaction
          hover &&
            "transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,243,255,0.12)] hover:bg-white/[0.06]",

          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
