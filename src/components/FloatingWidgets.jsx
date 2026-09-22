import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, ArrowUp } from 'lucide-react';
import ThemePaletteSwitcher from './ThemePaletteSwitcher';


const FloatingWidgets = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Smooth scroll progress for circular indicator
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.05);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Minimal Sound Toggle (Bottom Left - Desktop with Scroll Compression) - Only on Home Page */}
      {isHomePage && (
        <div className="hidden md:block fixed bottom-5 left-5 z-[9000] pointer-events-auto">
          <button
            onClick={toggleAudio}
            className={`flex items-center space-x-2 rounded-full bg-white/80 text-charcoal border border-charcoal/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:bg-white hover:border-charcoal/20 transition-all duration-500 cursor-pointer select-none group ${
              isVisible ? 'p-2.5 hover:px-3.5 hover:py-2' : 'px-3.5 py-2'
            }`}
            aria-label="Toggle Sound"
          >
            {isPlaying ? (
              <Volume2 className="w-3.5 h-3.5 text-charcoal opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 transition-opacity" strokeWidth={1.5} />
            )}
            <span className={`text-[9px] uppercase tracking-[0.25em] font-light text-charcoal/80 overflow-hidden transition-all duration-300 ${
              isVisible ? 'max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100' : 'max-w-xs opacity-100'
            }`}>
              {isPlaying ? 'Sound' : 'Muted'}
            </span>
          </button>
        </div>
      )}

      {/* Minimal Scroll to Top Button (Bottom Right - Desktop) */}
      <div className="hidden md:block fixed bottom-5 right-5 z-[9000]">
        <motion.button
          onClick={scrollToTop}
          className="relative w-10 h-10 flex items-center justify-center bg-white/80 text-charcoal rounded-full border border-charcoal/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:bg-white hover:border-charcoal/20 transition-all duration-300 group focus:outline-none pointer-events-auto cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: 15 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none p-[2px]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-gray-200/50 fill-transparent"
              strokeWidth="3"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-charcoal fill-transparent"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Minimal Arrow */}
          <ArrowUp className="w-4 h-4 text-charcoal/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-charcoal relative z-10" strokeWidth={1.5} />
        </motion.button>
      </div>

      {/* Floating Theme Palette Switcher */}
      <ThemePaletteSwitcher />
    </>
  );
};


export default FloatingWidgets;
