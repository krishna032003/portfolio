"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
}

/**
 * Premium Section Heading with High-Reliability Reveal.
 * Fixed visibility by removing strict container-level hiding.
 */
export const SectionHeading = ({ 
  title, 
  subtitle, 
  label = "ENGINEERING_LOG",
  centered = false 
}: SectionHeadingProps) => {
  const words = title.split(" ");

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any 
      }
    })
  };

  return (
    <div className={`mb-16 md:mb-20 ${centered ? "text-center mx-auto" : "text-left"} max-w-4xl`}>
      <div className="space-y-6">
        {/* Aesthetic Label Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={itemVariants}
          className={`flex items-center gap-4 ${centered ? "justify-center" : "justify-start"}`}
        >
          <div className="h-[1px] w-16 bg-accent" />
          <span className="text-accent font-mono text-[10px] font-black uppercase tracking-[0.6em]">
            {label}
          </span>
        </motion.div>
        
        {/* Staggered Word Reveal */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter uppercase italic leading-[0.9] flex flex-wrap gap-x-[0.3em]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={itemVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        
        {/* Subtitle Reveal */}
        {subtitle && (
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={words.length + 1}
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted font-bold leading-tight max-w-2xl pt-2 border-l-2 border-accent/20 pl-6"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};