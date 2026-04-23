"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Terminal, Cpu, Shield, Zap, Quote } from "lucide-react";

export const About = () => {
  const snappyTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    duration: 0.4
  };

  const philosophy = [
    {
      title: "Scale First",
      desc: "Architecting for production readiness from day one.",
      icon: Cpu
    },
    {
      title: "Security Logic",
      desc: "Implementing RBAC and secure data flows by design.",
      icon: Shield
    },
    {
      title: "AI Integration",
      desc: "Engineering autonomous agents using RAG and LLMs.",
      icon: Zap
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Jaypee Institute of Information Technology",
      year: "2023 - 2027",
      details: "Current CGPA: 7.84. Specialized in AI integrations and scalable full-stack systems.",
      icon: GraduationCap,
    },
    {
      degree: "Secondary Education (XII & X)",
      institution: "Anil Saraswati Vidya Mandir, Ayodhya",
      year: "2021 - 2023",
      details: "Class XII: 87% | Class X: 91%.",
      icon: MapPin,
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7">
          <SectionHeading 
            title="Technical Identity" 
            subtitle="Full Stack & AI Engineer dedicated to data-driven scalability."
            label="TECHNICAL_IDENTITY"
          />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={snappyTransition}
            className="space-y-6 text-muted text-lg leading-relaxed font-bold"
          >
            <p>
              I am a <span className="text-foreground font-black underline decoration-accent/30">Full Stack Developer</span> and 
              <span className="text-accent font-black italic"> AI Engineer</span> with a rigorous focus on building 
              scalable, secure, and data-driven web applications. My expertise bridges modern frontend 
              architectures like <span className="text-foreground">Next.js</span> and advanced AI integrations 
              including <span className="text-foreground">RAG</span> and <span className="text-foreground">LangGraph</span>.
            </p>
            <p>
              With a deep algorithmic foundation and over <span className="text-foreground font-black italic">300+ DSA problems solved</span>, 
              I approach software engineering with a problem-solving mindset, ensuring high performance 
              even in complex, real-world distributed systems.
            </p>
            
            {/* Mission Quote: High Contrast semantic */}
            <div className="pt-6 relative group">
              <Quote className="absolute -top-2 -left-4 text-accent/20" size={48} />
              <p className="text-sm italic text-muted/80 pl-8 border-l-4 border-accent/40 font-bold">
                "My mission is to build software that doesn't just process data, but actively solves human complexity through 
                intelligent, autonomous systems. I believe in engineering for clarity, reliability, and impact."
              </p>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...snappyTransition, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border space-y-2 group hover:border-accent/30 transition-colors shadow-sm"
              >
                <item.icon size={20} className="text-accent" />
                <h4 className="text-sm font-black text-foreground uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-muted leading-tight font-bold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <h3 className="text-xl font-bold text-foreground mb-12 flex items-center gap-4">
            <Terminal className="text-accent-secondary" size={24} />
            Academic Foundation
          </h3>
          
          <div className="space-y-8 relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-border/40" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...snappyTransition, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 p-3 rounded-2xl bg-card border border-border shadow-md z-10 text-accent group hover:scale-110 transition-transform">
                  <edu.icon size={22} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-foreground leading-tight tracking-tight">{edu.degree}</h4>
                  <p className="text-sm text-accent font-mono font-black uppercase tracking-wider">{edu.institution}</p>
                  <p className="text-xs text-muted font-mono font-bold">{edu.year}</p>
                  <p className="text-sm text-muted/90 leading-relaxed pt-2 font-bold">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
