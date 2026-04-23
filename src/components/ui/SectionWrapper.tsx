"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * A wrapper component for sections that provides a fade-in and slide-up 
 * scroll reveal animation using Framer Motion.
 */
export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom ease for smoother "premium" feel
      }}
      className={cn("relative w-full py-20 md:py-32 px-6 max-w-6xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}
