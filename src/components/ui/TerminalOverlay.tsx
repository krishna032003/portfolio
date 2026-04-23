"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2 } from "lucide-react";
import { soundEngine } from "@/lib/AudioEngine";
import { Magnetic } from "@/components/ui/Magnetic";
import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("@/components/ui/MatrixRain").then(mod => mod.MatrixRain), { ssr: false });
const SnakeGame = dynamic(() => import("@/components/ui/SnakeGame").then(mod => mod.SnakeGame), { ssr: false });
const SelfDestruct = dynamic(() => import("@/components/ui/SelfDestruct").then(mod => mod.SelfDestruct), { ssr: false });

const commands: Record<string, string> = {
  help: "Available commands: \n- whoami\n- skills\n- clear\n- exit\n- sudo hack\n- play snake\n- sudo destroy",
  whoami: "Krishna Sahu - Intelligent Systems Engineer. Currently operating from India. Building mission-critical systems and scalable architectures.",
  skills: "[ CORE ]: React, Next.js, Node.js, Python\n[ DATA ]: MongoDB, PostgreSQL, Redis\n[ AI ]: Langchain, OpenAI API, Gemini API\n[ INFRA ]: Vercel, Docker, AWS",
  "sudo hack": "INITIATING OVERRIDE PROTOCOL...",
  "sudo destroy": "WARNING: PROTOCOL 0 INITIATED. BRACE FOR IMPACT.",
};

export const TerminalOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHacking, setIsHacking] = useState(false);
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const [isDestroying, setIsDestroying] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "res", text: string }[]>([
    { type: "res", text: "K.S. CORE TERMINAL v2.4.1" },
    { type: "res", text: "Type 'help' for a list of available commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ctrl+K Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => {
          if (!prev) soundEngine.playBoot();
          return !prev;
        });
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "cmd" as const, text: input }];

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "exit") {
      setIsOpen(false);
    } else if (cmd === "play snake" || cmd === "snake") {
      soundEngine.playBoot();
      setIsPlayingGame(true);
      setInput("");
      return;
    } else if (cmd === "sudo destroy") {
      newHistory.push({ type: "res", text: commands["sudo destroy"] });
      setHistory(newHistory);
      soundEngine.playBoot();
      setTimeout(() => {
        setIsDestroying(true);
        setIsOpen(false);
      }, 1000);
    } else if (cmd === "sudo hack") {
      newHistory.push({ type: "res", text: commands["sudo hack"] });
      setHistory(newHistory);
      soundEngine.playBoot();
      setTimeout(() => {
        setIsHacking(true);
        setIsOpen(false);
      }, 500);
    } else {
      const response = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
      newHistory.push({ type: "res", text: response });
      setHistory(newHistory);
    }
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isHacking && <MatrixRain onComplete={() => setIsHacking(false)} />}
        {isDestroying && <SelfDestruct onComplete={() => setIsDestroying(false)} />}
      </AnimatePresence>

      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[60]">
        <Magnetic strength={0.4}>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 }}
            onClick={() => {
              setIsOpen(true);
              soundEngine.playBoot();
            }}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center text-muted hover:text-accent transition-colors shadow-lg group"
          >
            <TerminalIcon size={18} />
            <div className="absolute right-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              Ctrl + K
            </div>
          </motion.button>
        </Magnetic>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-3xl h-[60vh] md:h-[70vh] bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="h-12 bg-[#141414] border-b border-[#1f1f1f] flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] font-mono text-[#666666] flex items-center gap-2">
                  <TerminalIcon size={12} />
                  guest@krishna-core:~
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Terminal Body */}
              {isPlayingGame ? (
                <SnakeGame onExit={() => setIsPlayingGame(false)} />
              ) : (
                <div 
                  ref={scrollRef}
                  className="flex-1 p-6 font-mono text-sm overflow-y-auto"
                >
                  {history.map((line, i) => (
                    <div key={i} className={`mb-2 ${line.type === 'cmd' ? 'text-white' : 'text-[#a3a3a3]'}`}>
                      {line.type === 'cmd' && <span className="text-[#27c93f] mr-2">➜</span>}
                      {line.type === 'cmd' && <span className="text-[#0ea5e9] mr-2">~</span>}
                      <span className="whitespace-pre-wrap leading-relaxed">{line.text}</span>
                    </div>
                  ))}
                  
                  <form onSubmit={handleSubmit} className="flex items-center mt-2">
                    <span className="text-[#27c93f] mr-2">➜</span>
                    <span className="text-[#0ea5e9] mr-2">~</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if(e.key !== 'Enter' && e.key !== 'Backspace') soundEngine.playTick();
                      }}
                      className="flex-1 bg-transparent outline-none text-white font-mono caret-white"
                      spellCheck={false}
                      autoFocus
                    />
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
