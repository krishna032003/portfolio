"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Calendar, Zap } from "lucide-react";

export const Leadership = () => {
  return (
    <SectionWrapper id="leadership">
      <SectionHeading 
        title="Leadership" 
        subtitle="Orchestrating large-scale events and leading community initiatives."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* JYC Coordinator Badge/Callout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="relative p-10 overflow-hidden border-[#00f3ff]/30 bg-gradient-to-br from-[#00f3ff]/5 to-transparent">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00f3ff]/10 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#00f3ff] text-black">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    Coordinator
                  </h3>
                  <p className="text-[#00f3ff] font-mono text-xs font-bold uppercase tracking-widest">
                    Jaypee Youth Club (JYC)
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Orchestrated logistics for <span className="text-white font-bold">Synergy &apos;25</span>, 
                Converge &apos;24, and Ebullience, managing <span className="text-[#00f3ff] font-bold">500+ attendees</span> 
                and boosting participation by <span className="text-[#00f3ff] font-bold">20%</span>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Calendar className="text-gray-500 mb-2" size={16} />
                  <p className="text-white font-bold">2023 - 2026</p>
                  <p className="text-xs text-gray-500">Tenure</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Zap className="text-gray-500 mb-2" size={16} />
                  <p className="text-white font-bold">20% Boost</p>
                  <p className="text-xs text-gray-500">Participation</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Supporting Leadership Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Event Management</h4>
            <p className="text-gray-400 leading-relaxed">
              Leading teams of 50+ members to execute JIIT&apos;s flagship technical and cultural fests. 
              Focused on operational excellence, vendor management, and student engagement strategies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5"
          >
            <div className="text-[#00f3ff] mt-1 italic">Note:</div>
            <p className="text-sm text-gray-500">
              Actively involved in mentoring junior coordinators and streamlining 
              logistics workflows for cross-departmental events.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
