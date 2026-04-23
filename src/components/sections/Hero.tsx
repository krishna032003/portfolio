"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Spotlight } from "@/components/ui/Spotlight";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };


  return (
    <SectionWrapper id="hero" className="relative min-h-[90vh] flex items-center pt-20">
      <Spotlight />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-[#00f3ff] font-mono text-sm tracking-widest uppercase">
              Full Stack & AI Software Engineer
            </h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              KRISHNA <br />
              <span className="text-gray-500">SAHU</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            I am a Full Stack Developer and AI Engineer with a strong focus on building scalable, 
            secure, and data-driven web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button variant="secondary" size="lg" className="px-8">
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Visual/Split Content */}
        <motion.div 
          variants={itemVariants}
          className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00f3ff]/10 to-transparent border border-[#00f3ff]/20 backdrop-blur-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05),transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-mono text-[#00f3ff]/10 select-none">{"{ AI }"}</span>
            </div>
            {/* Animated accent corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f3ff]/40 m-4 group-hover:m-2 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f3ff]/40 m-4 group-hover:m-2 transition-all duration-500" />
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
