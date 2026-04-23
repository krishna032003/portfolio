"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform, useMotionTemplate } from "framer-motion";

/**
 * Advanced Reactive Grid with Mouse Displacement and Parallax.
 * Features:
 * 1. Mouse-driven line glow (Spotlight)
 * 2. Perspective depth displacement
 * 3. Theme-synced vignette
 */
export const GridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const springConfig = { damping: 50, stiffness: 300 };
  
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Reactive Background Template
  const gridGlow = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, var(--accent), transparent 100%)`;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full select-none">
      {/* 1px Technical Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 90%)",
          color: "rgba(100, 116, 139, 0.4)",
          y: parallaxY
        }}
      />
      
      {/* Interactive Line Glow (Displacement simulation) */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
        style={{
          background: gridGlow,
          y: parallaxY
        }}
      />

      {/* Crosshair Dots - High Contrast */}
      <motion.div 
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          color: "rgba(100, 116, 139, 0.3)",
          y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])
        }}
      />

      {/* Aesthetic Technical Vignette */}
      <div 
        className="absolute inset-0 opacity-60 dark:opacity-80"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, var(--background) 100%)"
        }}
      />
    </div>
  );
};
