"use client";

import React, { useState, useEffect, useCallback } from "react";
import { soundEngine } from "@/lib/AudioEngine";

const GRID_SIZE = 20;
const CELL_SIZE = 15; // pixels

type Point = { x: number; y: number };

export const SnakeGame = ({ onExit }: { onExit: () => void }) => {
  const [snake, setSnake] = useState<Point[]>([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: -1 }); // moving up
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prev) => {
      const head = prev[0];
      const newHead = { x: head.x + direction.x, y: head.y + direction.y };

      // Check collision with walls
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        soundEngine.playBoot(); // Play crash sound
        return prev;
      }

      // Check collision with self
      if (prev.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        soundEngine.playBoot();
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        soundEngine.playPop();
        setScore((s) => s + 10);
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        });
      } else {
        newSnake.pop(); // remove tail
      }

      return newSnake;
    });
  }, [direction, food, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrows
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 100);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050505] font-mono text-sm">
      <div className="flex justify-between w-full max-w-[300px] mb-4 text-accent">
        <span>SCORE: {score}</span>
        <button onClick={onExit} className="hover:text-white transition-colors">
          [ EXIT ]
        </button>
      </div>

      <div 
        className="relative bg-black border border-[#1f1f1f]"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
      >
        {/* Food */}
        <div
          className="absolute bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />

        {/* Snake */}
        {snake.map((segment, i) => (
          <div
            key={i}
            className="absolute bg-accent"
            style={{
              width: CELL_SIZE - 1,
              height: CELL_SIZE - 1,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              opacity: i === 0 ? 1 : 0.7,
              boxShadow: i === 0 ? "0 0 10px var(--accent)" : "none",
            }}
          />
        ))}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white backdrop-blur-sm">
            <span className="text-red-500 font-bold mb-2">SYSTEM FAILURE</span>
            <span className="mb-4">SCORE: {score}</span>
            <button 
              onClick={() => {
                setSnake([{ x: 10, y: 10 }]);
                setDirection({ x: 0, y: -1 });
                setScore(0);
                setGameOver(false);
              }}
              className="px-4 py-1 border border-accent text-accent hover:bg-accent hover:text-black transition-colors mb-2"
            >
              REBOOT
            </button>
          </div>
        )}
      </div>

      {/* Mobile-Friendly On-Screen Controls */}
      <div className="mt-6 grid grid-cols-3 gap-2 w-[180px]">
        <div />
        <button 
          onClick={() => direction.y !== 1 && setDirection({ x: 0, y: -1 })}
          className="bg-[#1f1f1f] text-white p-3 rounded flex justify-center active:bg-accent active:text-black transition-colors"
        >▲</button>
        <div />
        <button 
          onClick={() => direction.x !== 1 && setDirection({ x: -1, y: 0 })}
          className="bg-[#1f1f1f] text-white p-3 rounded flex justify-center active:bg-accent active:text-black transition-colors"
        >◄</button>
        <button 
          onClick={() => direction.y !== -1 && setDirection({ x: 0, y: 1 })}
          className="bg-[#1f1f1f] text-white p-3 rounded flex justify-center active:bg-accent active:text-black transition-colors"
        >▼</button>
        <button 
          onClick={() => direction.x !== -1 && setDirection({ x: 1, y: 0 })}
          className="bg-[#1f1f1f] text-white p-3 rounded flex justify-center active:bg-accent active:text-black transition-colors"
        >►</button>
      </div>

      <div className="mt-4 text-[#666] text-xs text-center">
        USE ARROW KEYS OR BUTTONS TO NAVIGATE.<br />
        AVOID WALLS AND SYSTEM CORRUPTION.
      </div>
    </div>
  );
};
