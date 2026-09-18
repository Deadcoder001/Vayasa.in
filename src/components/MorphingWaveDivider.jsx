import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MorphingWaveDivider({ className = "" }) {
  const { scrollY } = useScroll();
  
  // Smoothly transform and flatten the organic curve as the user initiates scroll
  const scaleY = useTransform(scrollY, [0, 350], [1, 0]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0.95]);

  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none -mt-8 sm:-mt-12 md:-mt-16 relative z-20 ${className}`}>
      <motion.svg
        className="w-full h-8 sm:h-12 md:h-16 fill-alabaster dark:fill-obsidian block transition-colors duration-500 origin-bottom will-change-transform"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ scaleY, opacity }}
      >
        <path d="M0,0 C480,50 960,50 1440,0 L1440,60 L0,60 Z" />
      </motion.svg>
    </div>
  );
}
