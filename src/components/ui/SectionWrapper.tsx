"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({ children, className, id, fullWidth = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={cn("relative w-full py-32 md:py-48", className)}
    >
      {/* Full-width Neon Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/20 to-transparent" />

      {/* 
          Inner container for content. 
          The outer section is full-width (allowing background grids to span 100vw),
          while this inner div keeps the text within a professional max-width.
      */}
      <div className={cn(
        "px-6 relative z-10",
        fullWidth ? "w-full" : "max-w-7xl mx-auto"
      )}>
        {children}
      </div>
    </motion.section>
  );
}
