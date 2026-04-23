"use client";

import React, { useState, useEffect, useCallback } from "react";

const CHARS = "!@#$%^&*()_+{}:<>?|abcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  trigger?: boolean;
  delay?: number;
}

/**
 * Technical Text Scramble Effect.
 * Animates characters from random symbols to the target text.
 */
export const ScrambleText = ({ text, duration = 1.5, trigger = true, delay = 0 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  const scramble = useCallback(() => {
    let iteration = 0;
    // Calculate interval speed based on duration and text length
    const totalSteps = text.length * 3; // iteration increments by 1/3
    const speed = (duration * 1000) / totalSteps;

    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // To prevent hydration errors, we don't start any scrambling until mounted.
    if (trigger) {
      if (delay > 0) {
        timeoutId = setTimeout(() => {
          scramble();
        }, delay);
      } else {
        scramble();
      }
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [trigger, scramble, delay]);

  return <span>{displayText}</span>;
};
