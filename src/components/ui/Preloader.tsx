"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_SEQUENCE = [
  "INITIALIZING K.S. CORE SYSTEM v2.4...",
  "MOUNTING AI PROTOCOLS...",
  "ESTABLISHING SECURE CONNECTION...",
  "LOADING ASSETS [||||||||||] 100%",
  "SYSTEM_ONLINE",
];

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Sequence timing
    const interval = setInterval(() => {
      setTextIndex(prev => {
        if (prev < BOOT_SEQUENCE.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200); // Fast exit
        return prev;
      });
    }, 200); // 200ms * 5 = 1000ms + 200ms exit = 1.2s total

    return () => clearInterval(interval);
  }, []);

  // Prevent scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="w-full max-w-lg px-6 space-y-4">
            {/* Terminal Mockup */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="font-mono text-sm space-y-2">
              {BOOT_SEQUENCE.slice(0, textIndex + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${index === BOOT_SEQUENCE.length - 1 ? "text-[#27c93f] font-bold" : "text-[#a3a3a3]"}`}
                >
                  <span className="text-accent mr-2">{'>'}</span>
                  {line}
                </motion.div>
              ))}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-accent inline-block ml-1 align-middle"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
