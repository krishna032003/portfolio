"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, Award, MapPin } from "lucide-react";

export const About = () => {
  const snappyTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    duration: 0.4
  };

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Jaypee Institute of Information Technology",
      year: "2023 - 2027 (Expected)",
      details: "Focusing on Distributed Systems, AI, and Full Stack Architecture. Current CGPA: 7.84",
      icon: GraduationCap,
    },
    {
      degree: "Secondary Education (XII & X)",
      institution: "Anil Saraswati Vidya Mandir, Ayodhya",
      year: "Completed 2023",
      details: "Class XII: 87% | Class X: 91%",
      icon: MapPin,
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Bio Section */}
        <div className="lg:col-span-7">
          <SectionHeading 
            title="System.log(Krishna)" 
            subtitle="Bridging the gap between robust backend systems and intelligent AI interfaces."
          />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={snappyTransition}
            className="space-y-6 text-muted text-lg leading-relaxed"
          >
            <p>
              I am a <span className="text-foreground font-bold">Full Stack Developer</span> and 
              <span className="text-[#00f3ff] font-bold"> AI Engineer</span> based in Noida, UP. 
              My expertise lies in building scalable web applications using the Next.js ecosystem 
              and integrating advanced AI workflows using tools like LangGraph and Gemini.
            </p>
            <p>
              With a deep foundation in algorithms (300+ solved problems), I approach 
              development with a performance-first mindset. Whether it's architecting 
              secure blood bank platforms or engineering real-time fraud detection systems, 
              I thrive on solving complex, real-world technical challenges.
            </p>
          </motion.div>

          {/* Metrics / Achievement Bar */}
          <div className="mt-16 flex flex-wrap gap-12">
            <div className="flex flex-col">
              <span className="text-5xl font-black text-foreground font-mono tracking-tighter">300+</span>
              <span className="text-[10px] text-[#00f3ff] font-mono uppercase tracking-[0.2em] font-bold mt-2">Problems Solved</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-foreground font-mono tracking-tighter">7.84</span>
              <span className="text-[10px] text-[#00f3ff] font-mono uppercase tracking-[0.2em] font-bold mt-2">Current CGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-foreground font-mono tracking-tighter">10+</span>
              <span className="text-[10px] text-[#00f3ff] font-mono uppercase tracking-[0.2em] font-bold mt-2">Projects Built</span>
            </div>
          </div>
        </div>

        {/* Education Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-xl font-bold text-foreground mb-10 flex items-center gap-3">
            <Award className="text-[#00f3ff]" size={20} />
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...snappyTransition, delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header: Icon and Title centered */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 dark:bg-white/5 text-[#00f3ff] border border-[var(--card-border)]">
                        <edu.icon size={20} />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-lg font-bold text-foreground leading-tight">{edu.degree}</h4>
                        <p className="text-sm text-[#00f3ff] font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    {/* Content below */}
                    <div className="pl-[68px]">
                      <p className="text-xs text-muted font-mono tracking-wider mb-2">{edu.year}</p>
                      <p className="text-sm text-muted leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
