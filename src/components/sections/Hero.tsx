"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GridBackground } from "@/components/ui/GridBackground";

export const Hero = () => {
  const snappyTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    duration: 0.4
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: snappyTransition,
    },
  };

  return (
    <SectionWrapper id="hero" className="relative min-h-[85vh] flex items-center pt-20">
      <GridBackground />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
        <div className="max-w-4xl space-y-8 text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-[#00f3ff] font-mono text-sm tracking-[0.25em] uppercase font-bold">
              Full Stack & AI Software Engineer
            </h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
              KRISHNA <br />
              <span className="text-muted italic">SAHU</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
          >
            Building high-performance software at the intersection of 
            <span className="text-foreground font-medium"> Full Stack Architecture</span> and 
            <span className="text-foreground font-medium"> AI Intelligence</span>. 
            Focused on scalability, security, and data-driven solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button variant="secondary" size="lg" className="px-8 border-slate-200">
              Download CV
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
