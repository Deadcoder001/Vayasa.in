import React from 'react';
import { motion } from 'framer-motion';

export default function SvgCornerFrame({ children, className = "", cornerSize = 12, offset = 6 }) {
  return (
    <div className={`relative group/corner ${className}`}>
      {/* Top-Left Corner */}
      <svg
        className="absolute pointer-events-none text-charcoal/40 dark:text-pearl/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/corner:text-charcoal dark:group-hover/corner:text-pearl group-hover/corner:-translate-x-1.5 group-hover/corner:-translate-y-1.5 z-20"
        style={{ top: `-${offset}px`, left: `-${offset}px`, width: `${cornerSize}px`, height: `${cornerSize}px` }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="square" d="M24 2H2v22" />
      </svg>

      {/* Top-Right Corner */}
      <svg
        className="absolute pointer-events-none text-charcoal/40 dark:text-pearl/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/corner:text-charcoal dark:group-hover/corner:text-pearl group-hover/corner:translate-x-1.5 group-hover/corner:-translate-y-1.5 z-20"
        style={{ top: `-${offset}px`, right: `-${offset}px`, width: `${cornerSize}px`, height: `${cornerSize}px` }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="square" d="M0 2h22v22" />
      </svg>

      {/* Bottom-Left Corner */}
      <svg
        className="absolute pointer-events-none text-charcoal/40 dark:text-pearl/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/corner:text-charcoal dark:group-hover/corner:text-pearl group-hover/corner:-translate-x-1.5 group-hover/corner:translate-y-1.5 z-20"
        style={{ bottom: `-${offset}px`, left: `-${offset}px`, width: `${cornerSize}px`, height: `${cornerSize}px` }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="square" d="M24 22H2V0" />
      </svg>

      {/* Bottom-Right Corner */}
      <svg
        className="absolute pointer-events-none text-charcoal/40 dark:text-pearl/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/corner:text-charcoal dark:group-hover/corner:text-pearl group-hover/corner:translate-x-1.5 group-hover/corner:translate-y-1.5 z-20"
        style={{ bottom: `-${offset}px`, right: `-${offset}px`, width: `${cornerSize}px`, height: `${cornerSize}px` }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="square" d="M0 22h22V0" />
      </svg>

      {/* Content */}
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
