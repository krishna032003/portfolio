"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

/**
 * Advanced Section Wrapper with 3D Perspective Entrance and Parallax.
 * Features:
 * 1. Perspective Tilt-up on enter
 * 2. Subtle Parallax Content Shift
 * 3. Theme-aware backgrounds
 */
export function SectionWrapper({ children, className, id, fullWidth = false }: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Perspective Entrance Logic
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothScale = useSpring(scale, springConfig);
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothY = useSpring(y, springConfig);

  return (
    <motion.section
      id={id}
      ref={containerRef}
      style={{
        opacity,
        scale: smoothScale,
        rotateX: smoothRotateX,
        y: smoothY,
        perspective: "1000px"
      }}
      className={cn(
        "relative w-full py-32 md:py-56 transition-colors duration-500 will-change-transform",
        "bg-section",
        className
      )}
    >
      <div className={cn(
        "px-6 relative z-10",
        fullWidth ? "w-full" : "max-w-7xl mx-auto"
      )}>
        {children}
      </div>
    </motion.section>
  );
}
