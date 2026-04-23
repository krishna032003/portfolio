"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Terminal, Mail, Cpu } from "lucide-react";

import { soundEngine } from "@/lib/AudioEngine";
import { Magnetic } from "@/components/ui/Magnetic";

const NAV_ITEMS = [
  { name: "Core", id: "hero", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Specs", id: "skills", icon: Cpu },
  { name: "Projects", id: "projects", icon: Code },
  { name: "Contact", id: "contact", icon: Mail },
];

export const Navigation = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (active !== NAV_ITEMS[i].id) {
            setActive(NAV_ITEMS[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const scrollTo = (id: string) => {
    soundEngine.playPop();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-accent/10 pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <Magnetic key={item.id} strength={0.3}>
            <button
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => soundEngine.playTick()}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group ${
                active === item.id ? "text-background" : "text-muted hover:text-foreground hover:bg-muted/10"
              }`}
              aria-label={item.name}
            >
              {active === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_var(--accent)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10"><item.icon size={18} /></span>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-card border border-border text-[10px] font-mono uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                {item.name}
              </div>
            </button>
          </Magnetic>
        ))}
      </div>
    </motion.div>
  );
};
