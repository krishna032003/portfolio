"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { soundEngine } from "@/lib/AudioEngine";

import { Magnetic } from "@/components/ui/Magnetic";

export const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.8; // Slightly robotic/deep
      utterance.rate = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCommand = useCallback((cmd: string) => {
    const text = cmd.toLowerCase();
    setTranscript(text);

    const routes = [
      { trigger: "project", id: "projects", response: "Accessing Project Modules." },
      { trigger: "skill", id: "skills", response: "Displaying Core Competencies." },
      { trigger: "about", id: "about", response: "Loading Identity Profile." },
      { trigger: "contact", id: "contact", response: "Opening Global Communication Channel." },
      { trigger: "home", id: "hero", response: "Returning to Base Node." },
      { trigger: "top", id: "hero", response: "Returning to Base Node." },
      { trigger: "hack", id: "hero", response: "Warning. Unauthorized access detected. Just kidding." },
    ];

    let matched = false;
    for (const route of routes) {
      if (text.includes(route.trigger)) {
        speak(route.response);
        const element = document.getElementById(route.id);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
        matched = true;
        break;
      }
    }

    if (!matched) {
      speak("Command unverified. State your destination.");
    }

    setTimeout(() => setTranscript(""), 3000);
  }, []);

  const toggleListen = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setSupported(false);
      return;
    }

    if (isListening) {
      setIsListening(false);
      soundEngine.playPop();
      return;
    }

    soundEngine.playBoot();
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const result = event.results[current][0].transcript;
      handleCommand(result);
    };

    recognition.onerror = () => {
      setIsListening(false);
      speak("Vocal link severed.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  if (!supported) return null;

  return (
    <>
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed bottom-24 left-1/2 z-[100] px-6 py-3 rounded-full bg-black/90 border border-accent/50 shadow-[0_0_30px_var(--accent)] backdrop-blur-xl flex items-center gap-3"
          >
            <Volume2 className="text-accent animate-pulse" size={16} />
            <span className="text-white font-mono text-sm tracking-widest uppercase">{transcript}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-40 right-4 md:bottom-24 md:right-8 z-[60]">
        <Magnetic strength={0.4}>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.5 }}
            onClick={toggleListen}
            className={`w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-all shadow-lg group ${
              isListening 
                ? "bg-red-500/20 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse" 
                : "bg-card/80 border-border text-muted hover:text-accent"
            }`}
          >
            {isListening ? <Mic size={18} /> : <MicOff size={18} />}
            
            <div className="absolute right-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
              {isListening ? "LISTENING..." : "VOICE CONTROL"}
            </div>
          </motion.button>
        </Magnetic>
      </div>
    </>
  );
};
