"use client";

import React, { useEffect, useRef } from "react";

/**
 * Zero-Lag High-Performance Cursor.
 * Bypasses React render cycle for mouse positioning to ensure absolute 0-latency.
 * Uses CSS variables and direct DOM manipulation for maximum efficiency.
 */
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const updatePosition = () => {
      // Lerp for smooth follow without React state lag
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${currentPos.current.x}px`;
        ringRef.current.style.top = `${currentPos.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .group, input, textarea');
      if (ringRef.current) {
        if (isInteractive) {
          ringRef.current.classList.add('cursor-active');
        } else {
          ringRef.current.classList.remove('cursor-active');
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <style jsx global>{`
        .cursor-ring {
          position: fixed;
          width: 24px;
          height: 24px;
          border: 1px solid var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s;
          mix-blend-difference: difference;
        }
        .cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
        }
        .cursor-active {
          width: 50px;
          height: 50px;
          background-color: rgba(99, 102, 241, 0.1);
          border-color: var(--accent);
        }
      `}</style>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};
