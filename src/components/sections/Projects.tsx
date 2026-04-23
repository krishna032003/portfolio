"use client";

import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "WanderGuide",
    description: "Architected an AI travel planner using the Gemini API. Engineered RESTful APIs with Flask to handle natural language processing (95% relevance).",
    tech: ["React", "Flask", "Gemini API", "Framer Motion"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "LifeOS",
    description: "Developed an AI-driven command center and productivity system focused on task management and autonomous AI agent workflows.",
    tech: ["Python", "FastAPI", "LangGraph"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Blood Connect",
    description: "Built a centralized blood bank platform with Role-Based Access Control (RBAC). Optimized performance by 40% using Next.js SSR and Edge Caching.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "SmartShield.AI",
    description: "Engineered a real-time fraud detection and intelligent analysis system for merchant networks, developed as part of the Imagine Cup.",
    tech: ["AI", "Cybersecurity"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "CareCall",
    description: "Created a voice-activated AI assistant to automate elderly medication reminders, integrating real-time emergency detection workflows.",
    tech: ["Python", "Flask", "NLP"],
    links: { github: "#", demo: "#" },
  },
];


export const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Innovative solutions bridging AI and full-stack development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
