"use client";

import React, { useEffect, useState } from "react";
import { soundEngine } from "@/lib/AudioEngine";

export const SelfDestruct = ({ onComplete }: { onComplete: () => void }) => {
  const [showReboot, setShowReboot] = useState(false);

  useEffect(() => {
    // 1. Play destruction sound sequence
    soundEngine.playBoot();
    setTimeout(() => soundEngine.playBoot(), 500);
    setTimeout(() => soundEngine.playPop(), 1000);

    // 2. Add global screen shake
    document.body.style.animation = "shake 0.5s infinite";

    // 3. Find all major UI elements to destroy
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, a, button, img, span, .bento-card"
    );

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const randomX = (Math.random() - 0.5) * 500;
      const randomRot = (Math.random() - 0.5) * 360;
      const delay = Math.random() * 1000;

      htmlEl.style.transition = `transform 2s cubic-bezier(0.5, 0, 1, 1) ${delay}ms, opacity 2s ease ${delay}ms`;
      htmlEl.style.willChange = "transform, opacity";

      setTimeout(() => {
        htmlEl.style.transform = `translate(${randomX}px, 2000px) rotate(${randomRot}deg)`;
        htmlEl.style.opacity = "0";
      }, 50);
    });

    // 4. Stop screen shake and show Reboot button after destruction finishes
    const buttonTimeout = setTimeout(() => {
      document.body.style.animation = "";
      setShowReboot(true);
    }, 4000);

    // Add keyframes for screen shake dynamically
    const style = document.createElement("style");
    style.id = "destruction-styles";
    style.innerHTML = `
      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(buttonTimeout);
    };
  }, []);

  const handleReboot = () => {
    soundEngine.playBoot();
    const styleEl = document.getElementById("destruction-styles");
    if (styleEl) styleEl.remove();
    document.body.style.animation = "";
    
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, a, button, img, span, .bento-card"
    );
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transition = "transform 1s ease, opacity 1s ease";
      htmlEl.style.transform = "";
      htmlEl.style.opacity = "1";
    });

    // Wait for the restore animation to finish before unmounting
    setTimeout(() => {
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transition = "";
      });
      onComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center">
      <div className="text-red-500 font-mono text-4xl md:text-8xl font-black animate-pulse drop-shadow-[0_0_20px_red] mb-8">
        PROTOCOL 0
      </div>
      
      {showReboot && (
        <button 
          onClick={handleReboot}
          className="pointer-events-auto px-8 py-4 bg-red-500/10 border border-red-500 text-red-500 font-mono font-bold tracking-widest hover:bg-red-500 hover:text-black transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-in fade-in zoom-in duration-500"
        >
          REBOOT SYSTEM
        </button>
      )}
    </div>
  );
};
