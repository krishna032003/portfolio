"use client";

import React, { useState, useEffect, useCallback } from "react";

const CHARS = "!@#$%^&*()_+{}:<>?|abcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  trigger?: boolean;
}

/**
 * Technical Text Scramble Effect.
 * Animates characters from random symbols to the target text.
 */
export const ScrambleText = ({ text, duration = 1.5, trigger = true }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  const scramble = useCallback(() => {
    let iteration = 0;
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
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
  }, [trigger, scramble]);

  return <span>{displayText}</span>;
};
