"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.805.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const ProjectCard = ({ title, description, tech, links }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (-12 to 12 degrees for snappier feel)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full perspective-1000"
    >
      <GlassCard className="h-full p-8 flex flex-col group border-white/5 hover:border-[#00f3ff]/20 transition-colors duration-300">
        <div style={{ transform: "translateZ(40px)" }} className="flex flex-col h-full text-left">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black text-white group-hover:text-[#00f3ff] transition-colors leading-tight">
              {title}
            </h3>
            <div className="flex gap-3">
              {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="View Source">
                  <GitHubIcon size={20} />
                </a>
              )}
              {links.demo && (
                <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Live Demo">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600 font-bold">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span 
                  key={t}
                  className="px-3 py-1 text-[11px] font-bold rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-[#00f3ff]/30 group-hover:text-white transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
