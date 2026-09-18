import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import TextFlip from './TextFlip';

export default function AudioEntryGate() {
  const { isModalOpen, enterWithSound, enterWithoutSound } = useAudio();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99990] flex items-center justify-center bg-alabaster/95 backdrop-blur-2xl px-6 select-none"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-black/[0.02] blur-[100px] pointer-events-none"></div>

          {/* Minimal Content Container */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: -15, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative flex flex-col items-center text-center max-w-lg mx-auto"
          >
            {/* VAYASA Brand Logo */}
            <div className="mb-10 sm:mb-12">
              <img
                src="/Vayasa-Logo-Final-File-01.png"
                alt="VAYASA"
                className="h-6 sm:h-8 w-auto object-contain mx-auto"
              />
            </div>

            {/* Subtle Eyebrow */}
            <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-4 font-light">
              IMMERSIVE SENSORY EXPERIENCE
            </span>

            {/* Editorial Headline */}
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-charcoal mb-4 tracking-tight leading-snug">
              Enter the Sanctuary
            </h2>

            {/* Clean Subtext */}
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-12 max-w-xs sm:max-w-sm">
              Our sanctuary is accompanied by ambient meditative acoustics. Would you like to experience the space with sound?
            </p>

            {/* Modern Minimal Action Pills */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* With Sound Pill */}
              <button
                onClick={enterWithSound}
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full bg-charcoal text-pearl text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] cursor-pointer"
              >
                <TextFlip text="WITH SOUND" stagger />
              </button>

              {/* Without Sound Pill */}
              <button
                onClick={enterWithoutSound}
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full border border-charcoal/30 text-charcoal hover:border-charcoal text-[10px] sm:text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 hover:bg-black/5 active:scale-[0.98] cursor-pointer"
              >
                <TextFlip text="IN SILENCE" stagger />
              </button>
            </div>

            {/* Footnote */}
            <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-12 font-light">
              YOU CAN TOGGLE SOUND ANYTIME AT THE BOTTOM
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
