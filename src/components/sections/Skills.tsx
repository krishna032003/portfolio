"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Monitor, Database, Brain, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "AI & ML",
    icon: Brain,
    description: "Autonomous agents, LLM orchestration, and RAG architectures.",
    skills: ["GenAI", "LangGraph", "LLMs", "RAG", "Prompt Eng.", "NLP"],
    stats: "98% Efficiency",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Languages",
    icon: Code2,
    description: "Core logic and type-safe systems.",
    skills: ["C++", "Python", "TS", "SQL"],
    stats: "Native",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Web Stack",
    icon: Monitor,
    description: "Modern high-performance frameworks.",
    skills: ["Next.js", "React", "Node", "FastAPI"],
    stats: "Full Cycle",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Tools",
    icon: Settings,
    description: "Automation & Infrastructure.",
    skills: ["Git", "Docker", "Vercel", "Firebase"],
    stats: "Optimized",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Data Systems",
    icon: Database,
    description: "Relational & Vector storage.",
    skills: ["MongoDB", "Pinecone", "Supabase", "Postgres"],
    stats: "Scalable",
    className: "md:col-span-1 md:row-span-1",
  },
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading 
        title="Technical Stack" 
        subtitle="A high-performance toolkit for the next generation of intelligent software."
        label="SYSTEM_CAPABILITIES"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense gap-4 min-h-[600px]">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className={category.className}
          >
            <div className="h-full p-6 md:p-8 flex flex-col group relative overflow-hidden bg-card rounded-[2rem] border border-border transition-all duration-500 hover:border-accent/40">
              {/* Background Tech Icon */}
              <category.icon 
                size={120} 
                className="absolute -bottom-6 -right-6 text-foreground/[0.02] group-hover:text-accent/[0.05] transition-all duration-700 pointer-events-none" 
              />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                  <category.icon size={24} />
                </div>
                <div className="px-3 py-1 rounded-full bg-muted/5 border border-border text-[10px] font-mono font-black text-muted group-hover:text-accent transition-colors">
                  {category.stats}
                </div>
              </div>

              <div className="space-y-2 relative z-10 mb-6">
                <h3 className="text-xl font-black text-foreground tracking-tight uppercase italic">{category.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-bold">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10 pb-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-muted/5 border border-border text-[10px] font-mono font-black text-foreground group-hover:border-accent/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Technical Scan Decoration */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
