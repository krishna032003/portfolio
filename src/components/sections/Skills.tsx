"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Monitor, Database, Brain, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Intelligence",
    icon: Brain,
    description: "Building autonomous systems with LLMs and RAG architectures.",
    skills: ["Generative AI", "RAG", "LangGraph", "NLP", "Gemini API"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Frontend",
    icon: Monitor,
    description: "High-performance, interactive web interfaces.",
    skills: ["Next.js", "React", "Tailwind", "Framer Motion", "TS"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Backend",
    icon: Database,
    description: "Scalable APIs and distributed system architectures.",
    skills: ["Node.js", "Express", "FastAPI", "Flask", "Docker"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Languages",
    icon: Code2,
    description: "Core programming foundations and data structures.",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Tools & Infrastructure",
    icon: Settings,
    description: "Streamlined development and cloud database management.",
    skills: ["Git", "Postman", "MongoDB", "Firebase", "Vercel"],
    className: "md:col-span-1 md:row-span-1",
  },
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading 
        title="Technical Expertise" 
        subtitle="A modular tech stack focused on scalability and intelligence."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.05 
            }}
            className={category.className}
          >
            <GlassCard className="h-full p-8 flex flex-col group relative overflow-hidden">
              {/* Background Decoration */}
              <category.icon 
                size={80} 
                className="absolute -bottom-4 -right-4 text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-[#00f3ff]/[0.08] transition-colors duration-500" 
              />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 text-[#00f3ff] border border-[var(--card-border)] group-hover:bg-[#00f3ff] group-hover:text-black transition-all duration-300">
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{category.title}</h3>
              </div>

              <p className="text-sm text-muted mb-6 relative z-10 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/5 dark:bg-white/5 border border-[var(--card-border)] text-[11px] font-mono font-bold text-muted group-hover:text-foreground group-hover:border-[#00f3ff]/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
