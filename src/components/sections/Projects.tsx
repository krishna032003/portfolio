"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ExternalLink, Zap, Terminal, Cpu, Database, Activity, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Custom Github Icon to resolve lucide-react build errors
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.805.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

import bloodConnectImg from "../../../public/assets/blood_connect.png";

const projects = [
  {
    id: "01",
    title: "WanderGuide",
    description: "Architecting autonomous travel intelligence using LLMs to synthesize adaptive global itineraries.",
    metrics: "95% NLP Relevance | 30% Retention Boost",
    tech: ["Gemini API", "FastAPI", "React", "Vector DB"],
    github: "https://github.com/krishnasahu03/WanderGuide",
    live: "https://wander-guide-ai.vercel.app/",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070",
    color: "from-blue-600/20 to-indigo-600/20",
    icon: Globe,
  },
  {
    id: "02",
    title: "Blood Connect",
    description: "A mission-critical medical logistics platform for real-time blood inventory synchronization.",
    metrics: "40% Latency Reduction | Edge Optimized",
    tech: ["Next.js", "MongoDB", "RBAC", "Vercel Edge"],
    github: "https://github.com/krishnasahu03/Blood-Connect",
    live: "https://blood-connect.example.com",
    image: bloodConnectImg.src,
    color: "from-red-600/20 to-rose-600/20",
    icon: Activity,
  },
  {
    id: "03",
    title: "CareCall",
    description: "Next-gen zero-UI voice orchestration for elderly healthcare and emergency monitoring.",
    metrics: "Sub-second Latency | Voice-to-Action",
    tech: ["Python", "Twilio", "NLP", "Real-time API"],
    github: "https://github.com/krishnasahu03/CareCall",
    live: null,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
    color: "from-emerald-600/20 to-teal-600/20",
    icon: Cpu,
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="py-0" fullWidth>
      <div className="space-y-[10vh]">
        {projects.map((project, index) => (
          <ProjectStrip key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectStrip = ({ project, index }: { project: any, index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div 
      ref={containerRef}
      className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Visual Showcase */}
        <div className="relative order-2 lg:order-1 perspective-1000">
          <motion.div 
            style={{ y: imageY }}
            className="relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl border border-border group"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay z-10 pointer-events-none" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Technical Overlay Decor */}
            <div className="absolute top-8 left-8 z-20 flex gap-2">
              <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white tracking-widest uppercase">
                System_Node_{project.id}
              </div>
            </div>
          </motion.div>
          {/* Background Number */}
          <span className="absolute -top-12 -left-12 text-[15rem] font-black text-foreground/[0.03] select-none pointer-events-none z-0">
            {project.id}
          </span>
        </div>

        {/* Content Details */}
        <motion.div 
          style={{ y: contentY }}
          className="order-1 lg:order-2 space-y-8 relative z-10"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-accent">
              <project.icon size={24} />
              <span className="font-mono text-xs font-black tracking-[0.3em] uppercase">Project_Module</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase italic leading-[0.85]">
              {project.title}
            </h3>
            <p className="text-xl md:text-2xl text-muted font-bold leading-relaxed max-w-xl border-l-4 border-accent/20 pl-8">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-muted/5 border border-border text-[11px] font-mono font-black text-foreground uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>

          {/* Metric KPI Card */}
          <div className="p-6 rounded-3xl bg-card border border-border space-y-3 shadow-xl hover:border-accent/30 transition-all group/kpi">
            <div className="flex items-center gap-2 text-accent-secondary">
              <Activity size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest">Performance Metrics</span>
            </div>
            <p className="text-lg font-black text-foreground group-hover/kpi:text-accent transition-colors">{project.metrics}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.github && (
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-10 h-14 rounded-2xl gap-3 text-xs uppercase font-black tracking-widest"
                onClick={() => window.open(project.github, "_blank")}
              >
                <GithubIcon size={18} /> Codebase
              </Button>
            )}
            {project.live && (
              <Button 
                size="lg" 
                className="px-10 h-14 rounded-2xl gap-3 text-xs uppercase font-black tracking-widest bg-foreground text-background shadow-lg"
                onClick={() => window.open(project.live, "_blank")}
              >
                <ExternalLink size={18} /> Live Deploy
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
