"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";

/**
 * ScrollProgress Indicator for a premium feel.
 * Placed at the top of the viewport.
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};
