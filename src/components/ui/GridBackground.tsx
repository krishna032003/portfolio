"use client";

import React from "react";

export const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full">
      {/* 1px Grid Lines - Theme Aware */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 95%)",
          color: "rgba(100, 116, 139, 0.2)" // slate-500 equivalent
        }}
      />
      
      {/* Noise / Grain Filter */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette Effect - Subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-80" />

      {/* Subtle dots for extra texture - Theme Aware */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          color: "rgba(100, 116, 139, 0.1)"
        }}
      />
    </div>
  );
};
