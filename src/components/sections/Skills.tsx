"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Monitor, Database, Brain, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Advanced CS",
    icon: Brain,
    skills: ["Generative AI", "RAG Architecture", "LangGraph", "NLP", "Gemini API"],
    className: "md:col-span-2 md:row-span-2 border-[#00f3ff]/20",
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Docker"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "Python", "JavaScript", "SQL"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Tools & DB",
    icon: Settings,
    skills: ["Git", "Postman", "MongoDB", "Firebase"],
    className: "md:col-span-1 md:row-span-1",
  },
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading 
        title="Technical Expertise" 
        subtitle="Modular, scalable, and data-driven technology stack."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={category.className}
          >
            <GlassCard className="h-full p-6 flex flex-col group hover:border-[#00f3ff]/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#00f3ff]/10 text-[#00f3ff] group-hover:bg-[#00f3ff] group-hover:text-black transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff]/30 transition-colors"
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
