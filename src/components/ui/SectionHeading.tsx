"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-20 max-w-2xl text-left", className)}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring" as const,
            stiffness: 300,
            damping: 30,
            duration: 0.4
          }}
          className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring" as const,
            stiffness: 300,
            damping: 30,
            duration: 0.4,
            delay: 0.1 
          }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};