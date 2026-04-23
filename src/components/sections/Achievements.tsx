"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Trophy, Code } from "lucide-react";

const achievements = [
  {
    title: "Competitive Programming",
    desc: "300+ DSA problems solved on LeetCode; consistent contest performer.",
    icon: Code,
  },
  {
    title: "Imagine Cup Participant",
    desc: "Developed SmartShield.AI for real-time fraud detection.",
    icon: Trophy,
  },
  {
    title: "Hackathon Finalist",
    desc: "Active participant in Bennovate, Innovate 3.0, and Ride Hack (JIIT).",
    icon: Award,
  },
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading 
        title="Achievements" 
        subtitle="Recognition and milestones in software development and competitive coding."
        label="RECOGNITION_LOGS"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-8 h-full flex flex-col items-center text-center group bg-card rounded-3xl border border-border shadow-sm transition-all hover:border-accent/30">
              <div className="p-4 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed font-bold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
