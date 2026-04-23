"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Copy, Check, Terminal, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

// High-Fidelity Custom SVGs - Using User-Uploaded Icons from public/assets
const GithubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.805.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.763z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z"/>
  </svg>
);

const GFGIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M21.45 14.315c-0.143 0.28 -0.334 0.532 -0.565 0.745a3.691 3.691 0 0 1 -1.104 0.695 4.51 4.51 0 0 1 -3.116 -0.016 3.79 3.79 0 0 1 -2.135 -2.078 3.571 3.571 0 0 1 -0.13 -0.353h7.418a4.26 4.26 0 0 1 -0.368 1.008zm-11.99 -0.654a3.793 3.793 0 0 1 -2.134 2.078 4.51 4.51 0 0 1 -3.117 0.016 3.7 3.7 0 0 1 -1.104 -0.695 2.652 2.652 0 0 1 -0.564 -0.745 4.221 4.221 0 0 1 -0.368 -1.006H9.59c-0.038 0.12 -0.08 0.238 -0.13 0.352zm14.501 -1.758a3.849 3.849 0 0 0 -0.082 -0.475l-9.634 -0.008a3.932 3.932 0 0 1 1.143 -2.348c0.363 -0.35 0.79 -0.625 1.26 -0.809a3.97 3.97 0 0 1 4.484 0.957l1.521 -1.49a5.7 5.7 0 0 0 -1.922 -1.357 6.283 6.283 0 0 0 -2.544 -0.49 6.35 6.35 0 0 0 -2.405 0.457 6.007 6.007 0 0 0 -1.963 1.276 6.142 6.142 0 0 0 -1.325 1.94 5.862 5.862 0 0 0 -0.466 1.864h-0.063a5.857 5.857 0 0 0 -0.467 -1.865 6.13 6.13 0 0 0 -1.325 -1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0 -4.949 0.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484 -0.958c0.47 0.184 0.898 0.46 1.26 0.81 0.368 0.36 0.66 0.792 0.859 1.268 0.146 0.344 0.242 0.708 0.285 1.08l-9.635 0.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 0.345 2.127 4.927 4.927 0 0 0 1.08 1.783c0.528 0.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504 0.457c0.824 0.005 1.64 -0.15 2.404 -0.457a5.986 5.986 0 0 0 1.964 -1.277 6.116 6.116 0 0 0 1.686 -3.076h0.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405 0.457 6.45 6.45 0 0 0 2.502 -0.457 5.42 5.42 0 0 0 1.882 -1.293 4.928 4.928 0 0 0 1.08 -1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0 -0.039 -0.554z"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/krishnasahu03",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/krishnasahu03",
    color: "hover:text-foreground",
  },
  {
    name: "LeetCode",
    icon: LeetCodeIcon,
    href: "https://leetcode.com/u/krishna_sahu/",
    color: "hover:text-[#FFA116]",
  },
  {
    name: "GeeksforGeeks",
    icon: GFGIcon,
    href: "https://www.geeksforgeeks.org/user/krishnasahu03/",
    color: "hover:text-[#2F8D46]",
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "krishna032003@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" className="pb-32 overflow-hidden">
      <SectionHeading 
        title="Establish Connection" 
        subtitle="Available for strategic AI initiatives and high-performance engineering collaborations."
        label="CONNECT_PROTOCOL"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Technical Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase italic leading-[0.9]">
              Let&apos;s Build <br />
              <span className="text-accent">Something Real.</span>
            </h3>
            <p className="text-xl text-muted font-bold leading-relaxed max-w-md border-l-2 border-accent/20 pl-6">
              Currently operating from <span className="text-foreground">India</span>. Signal is open for innovative full-stack and AI agent architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-muted transition-all duration-300 ${social.color} hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5`}
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Technical Metadata Decoration */}
          <div className="pt-8 border-t border-border/50 space-y-3 font-mono text-[10px] text-muted uppercase tracking-[0.3em]">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Location: 26.8467° N, 80.9462° E</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
              <span>Availability: High-Priority Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Command Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative p-10 md:p-12 bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-8 border-b border-border/50 pb-4">
              <Terminal size={16} className="text-accent" />
              <span className="font-mono text-[10px] font-bold text-muted tracking-widest uppercase">Communication_Module.v1</span>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-accent">
                  <Globe size={20} />
                  <span className="font-mono text-xs font-black uppercase tracking-widest">Global Outreach</span>
                </div>
                <h4 className="text-3xl font-black text-foreground">Direct Channel</h4>
              </div>

              {/* Email Copy Box */}
              <div 
                onClick={copyToClipboard}
                className="group/email relative p-6 rounded-3xl bg-muted/5 border border-border cursor-pointer transition-all hover:border-accent/40 hover:bg-muted/10 overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                      <Mail size={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">Active Email</p>
                      <p className="text-lg md:text-xl font-black text-foreground group-hover/email:text-accent transition-colors">{email}</p>
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-accent-secondary"
                      >
                        <Check size={20} />
                      </motion.div>
                    ) : (
                      <div className="text-muted group-hover/email:text-accent transition-colors">
                        <Copy size={20} />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Visual Feedback Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover/email:w-full transition-all duration-500" />
              </div>

              <Button 
                size="lg" 
                className="w-full h-16 rounded-[2rem] text-lg font-black uppercase tracking-widest shadow-xl shadow-accent/10 group-hover:shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95 flex gap-3"
                onClick={() => window.location.href = `mailto:${email}`}
              >
                <Send size={20} /> Launch Inquiry
              </Button>
            </div>

            {/* Aesthetic Grid Mask */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
