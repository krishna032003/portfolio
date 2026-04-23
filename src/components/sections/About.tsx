"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const metrics = [
  { label: "DSA Problems", value: "300+", sub: "LeetCode & GFG" },
  { label: "Current CGPA", value: "7.84", sub: "JIIT Noida" },
  { label: "Active Years", value: "3+", sub: "Dev & AI" },
  { label: "Projects", value: "5+", sub: "Full Stack & AI" },
];

export const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging modern frontend architectures with advanced AI integrations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bio Text */}
        <div className="lg:col-span-2 space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            I am a Full Stack Developer and AI Engineer with a strong focus on building scalable, 
            secure, and data-driven web applications. My expertise bridges modern frontend 
            architectures (Next.js, Framer Motion) and advanced AI integrations 
            (Generative AI, RAG, LangGraph).
          </p>
          <p>
            With a deep algorithmic foundation and over 300 DSA problems solved, I build 
            high-performance software designed to solve complex, real-world problems. 
            Currently pursuing B.Tech in CSE at Jaypee Institute of Information Technology.
          </p>
        </div>

        {/* Education/Quick Facts Sidebar */}
        <div className="space-y-4">
          <GlassCard className="p-6 border-[#00f3ff]/10">
            <h3 className="text-white font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#00f3ff]">2023 - 2027 (Expected)</p>
                <p className="text-white font-medium">B.Tech in CSE</p>
                <p className="text-sm text-gray-500">JIIT, Noida</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-sm text-gray-500">Secondary Education</p>
                <p className="text-white font-medium font-sm">ASVM, Ayodhya</p>
                <p className="text-xs text-gray-500">XII: 87% | X: 91%</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6 text-center group hover:border-[#00f3ff]/40 transition-colors">
              <p className="text-3xl font-black text-white group-hover:text-[#00f3ff] transition-colors">
                {metric.value}
              </p>
              <p className="text-sm font-bold text-gray-400 mt-1">{metric.label}</p>
              <p className="text-xs text-gray-600 mt-1">{metric.sub}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
