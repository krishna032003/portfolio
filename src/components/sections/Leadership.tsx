"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Calendar, Zap } from "lucide-react";

export const Leadership = () => {
  return (
    <SectionWrapper id="leadership">
      <SectionHeading 
        title="Leadership" 
        subtitle="Orchestrating large-scale events and leading community initiatives."
        label="OPERATIONAL_LOGS"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Coordinator Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative p-10 overflow-hidden border border-border bg-card rounded-3xl shadow-sm">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <span className="shrink-0"><Users size={24} /></span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter">
                    Coordinator
                  </h3>
                  <p className="text-accent font-mono text-xs font-bold uppercase tracking-widest">
                    Jaypee Youth Club (JYC)
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted font-bold leading-relaxed mb-8">
                Orchestrated logistics for <span className="text-foreground font-black underline decoration-accent/30">Synergy &apos;25</span>, 
                Converge &apos;24, and Ebullience, managing <span className="text-accent font-black">500+ attendees</span> 
                and boosting participation by <span className="text-accent font-black">20%</span>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-muted/10 border border-border">
                  <Calendar className="text-muted/60 mb-2" size={16} />
                  <p className="text-foreground font-black font-mono tracking-tight">2023 - 2026</p>
                  <p className="text-[10px] text-muted uppercase font-black tracking-widest">Tenure</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/10 border border-border">
                  <Zap className="text-muted/60 mb-2" size={16} />
                  <p className="text-foreground font-black font-mono tracking-tight">20% Boost</p>
                  <p className="text-[10px] text-muted uppercase font-black tracking-widest">Growth</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Blocks */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">Event Management</h4>
            <p className="text-muted leading-relaxed font-bold">
              Leading teams of 50+ members to execute JIIT&apos;s flagship technical and cultural fests. 
              Focused on operational excellence, vendor management, and student engagement strategies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 p-4 rounded-xl border border-border bg-muted/10"
          >
            <div className="text-accent mt-1 italic font-black">Note:</div>
            <p className="text-sm text-muted font-bold leading-tight">
              Actively involved in mentoring junior coordinators and streamlining 
              logistics workflows for cross-departmental events.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
