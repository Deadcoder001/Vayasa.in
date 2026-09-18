import React from 'react';
import { motion } from 'framer-motion';

const defaultItems = [
  'Vayasa Luxury Spa',
  'Botanical Alchemy',
  'Thermal Hydrotherapy',
  'Sound Bath Meditation',
  'Ayurvedic Rituals',
  'Bespoke Pavilion Suites',
  'Brahmaputra Serenity',
  'Cellular Renewal'
];

export default function InfiniteMarquee({ items = defaultItems, speed = 35, reverse = false, className = "" }) {
  // Duplicate array to guarantee seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden border-y border-gray-300/40 py-4 sm:py-5 bg-alabaster/50 select-none ${className}`}>
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 sm:space-x-10 mx-3 sm:mx-5">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase font-light text-charcoal/80">
              {item}
            </span>
            <span className="text-[8px] text-gray-400 font-serif">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
