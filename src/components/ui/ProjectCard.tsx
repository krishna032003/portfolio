"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const GithubIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.805.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  metrics: string;
  tech: string[];
  github?: string;
  live?: string | null;
  image: string;
}

/**
 * Vibrant Premium Project Card.
 * Replaced the 'gloomy' grayscale with an 'Indigo Aura' theme.
 * Features:
 * 1. Indigo Glow: Soft background aura that breathes on hover.
 * 2. High-Saturation Images: Vivid colors with a subtle warm overlay.
 * 3. Glassmorphic Depth: Cards feel airy and light rather than solid black.
 */
export const ProjectCard = ({
  title,
  description,
  problem,
  solution,
  metrics,
  tech,
  github,
  live,
  image,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        perspective: "1000px",
      }}
      className="group relative flex flex-col h-full bg-card/60 backdrop-blur-xl rounded-[2.5rem] border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]"
    >
      {/* Background Aura Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px] group-hover:bg-accent-secondary/15 transition-all duration-700" />

      {/* Image Container with Vivid Colors */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-1000 scale-[1.02] group-hover:scale-110 saturate-[1.2] brightness-[1.05]"
        />
        
        {/* Dynamic Interactive Shine */}
        <div className="absolute inset-0 z-15 bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Live Badge with Soft Glow */}
        <div className="absolute top-6 right-6 z-30">
          {live && (
            <div className="px-4 py-1.5 rounded-full bg-accent/90 text-white dark:text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live System
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex-1 flex flex-col space-y-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter italic leading-none group-hover:text-accent transition-colors">
              {title}
            </h3>
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-all">
              <ArrowUpRight size={20} />
            </div>
          </div>
          <p className="text-muted text-base leading-relaxed font-bold">
            {description}
          </p>
        </div>

        {/* Tech Stack - Colored Badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-accent/5 border border-accent/10 text-[10px] font-mono font-black text-accent uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Impact Metric - Uplifting Design */}
        <div className="pt-4 mt-auto">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 space-y-2 group-hover:border-accent/40 transition-all">
            <div className="flex items-center gap-2 text-accent">
              <Zap size={16} fill="currentColor" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Key Performance Indicator</span>
            </div>
            <p className="text-sm font-black text-foreground leading-snug">{metrics}</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 flex items-center gap-4 border-t border-border/30">
          {github && (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 h-12 rounded-2xl bg-muted/5 border border-border text-foreground font-black text-xs uppercase tracking-widest gap-2 hover:bg-muted/10 transition-all"
              onClick={() => window.open(github, "_blank")}
            >
              <GithubIcon size={16} /> Source
            </Button>
          )}
          {live && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1 h-12 rounded-2xl font-black text-xs uppercase tracking-widest gap-2"
              onClick={() => window.open(live, "_blank")}
            >
              <ExternalLink size={16} /> Deploy
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
