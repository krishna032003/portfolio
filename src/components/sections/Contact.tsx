"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

const GitHubIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.805.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const Contact = () => {

  const [copied, setCopied] = useState(false);
  const email = "krishna032003@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading 
        title="Get in Touch" 
        subtitle="Let's build something amazing together."
      />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Card */}
        <GlassCard className="p-8 flex flex-col items-center text-center group border-[#00f3ff]/10 hover:border-[#00f3ff]/30 transition-all">
          <div className="p-4 rounded-2xl bg-[#00f3ff]/5 text-[#00f3ff] mb-6">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
          <p className="text-gray-400 mb-6 text-sm">{email}</p>
          
          <button 
            onClick={copyToClipboard}
            aria-label="Copy email address to clipboard"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95 relative"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span 
                  key="check"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-[#00f3ff]"
                >
                  <Check size={18} /> Copied!
                </motion.span>
              ) : (
                <motion.span 
                  key="copy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <Copy size={18} /> Copy Email
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </GlassCard>

        {/* Socials Card */}
        <GlassCard className="p-8 flex flex-col items-center text-center group border-[#00f3ff]/10 hover:border-[#00f3ff]/30 transition-all">
          <div className="p-4 rounded-2xl bg-[#00f3ff]/5 text-[#00f3ff] mb-6">
            <GitHubIcon size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Profiles</h3>
          <p className="text-gray-400 mb-6 text-sm">Explore my code and contributions.</p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/krishna032003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#00f3ff] hover:border-[#00f3ff]/30 transition-all"
              title="GitHub Profile"
            >
              <GitHubIcon size={24} />
            </a>
            <a 
              href="https://leetcode.com/krishna032003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#00f3ff] hover:border-[#00f3ff]/30 transition-all"
              title="LeetCode Profile"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </GlassCard>
      </div>

      <div className="mt-24 text-center">
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          Designed & Built by Krishna Sahu &copy; 2026
        </p>
      </div>
    </SectionWrapper>
  );
};
