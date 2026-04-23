"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Server, Globe2 } from "lucide-react";

export const Footer = () => {
  const [time, setTime] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      setTime(new Date().toISOString().replace("T", " ").slice(0, -5) + " UTC");
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    // Mocking an uptime of 99 days + actual session seconds
    return `99D ${h}H ${m}M ${s}S`;
  };

  return (
    <footer className="relative w-full border-t border-border/50 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-black tracking-tighter">
              KS
            </div>
            <div>
              <p className="text-foreground font-black uppercase tracking-widest text-sm">Krishna Sahu</p>
              <p className="text-muted font-mono text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} CORE_SYSTEMS</p>
            </div>
          </div>

          {/* System Status Dashboard */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 p-4 rounded-2xl bg-card border border-border shadow-inner">
            
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">ALL_SYSTEMS_NOMINAL</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-muted">
              <Server size={14} />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">UPTIME: {formatUptime(uptime)}</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-muted">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">CONNECTION_SECURE</span>
            </div>

            <div className="flex items-center gap-2 text-accent">
              <Globe2 size={14} />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em]">{time}</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
