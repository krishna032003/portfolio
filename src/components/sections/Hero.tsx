"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GridBackground } from "@/components/ui/GridBackground";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Magnetic } from "@/components/ui/Magnetic";
import { Terminal } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logIndex, setLogIndex] = useState(0);
  const logs = [
    "system_init...",
    "loading_agentic_workflows...",
    "verifying_scalability... ok",
    "engineer_status: ready."
  ];

  const resumeUrl = "https://drive.google.com/file/d/1iIifcnLDq2k1-YPRqerrJdB1uhW1Ycc4/view?usp=sharing";

  // Magnetic 3D Effect for Portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(rotateX, springConfig);
  const smoothY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (logIndex < logs.length - 1) {
      const timer = setTimeout(() => setLogIndex(prev => prev + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [logIndex]);

  const snappyTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    duration: 0.6
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: snappyTransition,
    },
  };

  return (
    <SectionWrapper id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-24 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8 text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-accent font-mono text-xs md:text-sm tracking-[0.3em] uppercase font-bold inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  Full Stack & AI Software Engineer
                </h2>
                <div className="hidden xl:flex items-center gap-2 font-mono text-[10px] text-muted tracking-widest bg-muted/5 px-4 py-1.5 rounded-md border border-border">
                  <Terminal size={12} className="text-accent-secondary" />
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={logIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-[180px]"
                    >
                      {logs[logIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase italic">
                  Hi, I&apos;m <span className="text-accent">
                    <ScrambleText text="Krishna Sahu" duration={2} />
                  </span>
                </h3>
                <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tight text-foreground leading-[0.85] max-w-5xl">
                  Engineering <br />
                  <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                    <ScrambleText text="Intelligent" duration={2.5} />
                  </span> <br />
                  Systems.
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed font-bold border-l-4 border-accent/30 pl-6">
                B.Tech CSE @ JIIT — Specializing in autonomous AI agents and high-performance full-stack architectures.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
              <Magnetic strength={0.2}>
                <Button 
                  size="lg" 
                  className="px-12 h-16 text-xl bg-foreground text-background hover:bg-foreground/90 transition-all font-black shadow-2xl" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Projects
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="px-12 h-16 text-xl bg-card border border-border text-foreground hover:bg-muted/10 transition-all font-black"
                  onClick={() => window.open(resumeUrl, '_blank')}
                >
                  Resume
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Hero Portrait: Advanced 3D Magnetic Effect */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 flex-shrink-0 relative group perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: smoothX, rotateY: smoothY }}
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-card transition-all duration-300 group-hover:shadow-accent/20">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-border z-20" />
              <Image 
                src="/assets/photobg.png" 
                alt="Krishna Sahu"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="relative object-cover rounded-2xl z-10 isolate transition-transform duration-500 group-hover:scale-105"
                style={{
                  maskImage: 'radial-gradient(circle, white 90%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, white 90%, transparent 100%)'
                }}
              />
              
              {/* Dynamic Overlay Shine */}
              <div className="absolute inset-0 z-15 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
