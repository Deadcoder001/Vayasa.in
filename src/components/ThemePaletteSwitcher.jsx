import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles } from 'lucide-react';

export const PALETTES = [
  {
    id: 'champagne',
    name: 'Champagne',
    tagline: 'Warm & Radiant Luxury',
    bg: '#F7F3E9',
    card: '#FFFFFF',
    text: '#181716',
    border: '#E2D9C8',
    isBest: true
  },
  {
    id: 'mushroom',
    name: 'Warm Mushroom',
    tagline: 'Modern Organic Mineral',
    bg: '#EBE4DC',
    card: '#F7F2EC',
    text: '#1C1B1A',
    border: '#D5CBC0',
    isBest: false
  },
  {
    id: 'ivory',
    name: 'Soft Ivory',
    tagline: 'Pure Minimalist Sanctuary',
    bg: '#FAF8F5',
    card: '#FFFFFF',
    text: '#191817',
    border: '#E8E3DA',
    isBest: false
  },
  {
    id: 'taupe',
    name: 'Taupe',
    tagline: 'Earthy Grounded Stone',
    bg: '#E2DAD3',
    card: '#EDE5DE',
    text: '#1A1918',
    border: '#CFC3B8',
    isBest: false
  }
];

const ThemePaletteSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState('champagne');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vayasa_palette') || 'champagne';
    setActiveTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const selectTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('vayasa_palette', themeId);
  };

  const current = PALETTES.find((p) => p.id === activeTheme) || PALETTES[0];

  return (
    <div className="fixed bottom-5 left-5 md:left-24 z-[9000] pointer-events-auto select-none">
      <div className="relative">
        {/* Toggle Pill */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white/85 text-charcoal border border-charcoal/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-md hover:bg-white hover:border-charcoal/20 transition-all duration-300 cursor-pointer group"
          aria-label="Palette Switcher"
          title="Try Background Color Themes"
        >
          {/* Active color circle */}
          <span
            className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-sm transition-colors duration-300"
            style={{ backgroundColor: current.bg }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-charcoal/90">
            {current.name}
          </span>
          <Palette className="w-3 h-3 text-charcoal/60 group-hover:text-charcoal transition-colors ml-0.5" />
        </button>

        {/* Dropdown / Floating Palette Picker */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop dismiss */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-12 left-0 z-20 w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-charcoal/10 p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] text-charcoal"
              >
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-charcoal/10">
                  <div className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700/80" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal/80">
                      Luxury Palette Trial
                    </span>
                  </div>
                  <span className="text-[9px] tracking-wide text-charcoal/50">
                    Text: Deep Charcoal
                  </span>
                </div>

                <div className="space-y-1.5">
                  {PALETTES.map((item) => {
                    const isSelected = activeTheme === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => selectTheme(item.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 cursor-pointer text-left group ${isSelected
                          ? 'bg-charcoal/8 shadow-xs border border-charcoal/15'
                          : 'hover:bg-charcoal/4 border border-transparent'
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          {/* Color preview circle with border */}
                          <div
                            className="w-6 h-6 rounded-full border border-black/15 shadow-inner flex items-center justify-center relative overflow-hidden"
                            style={{ backgroundColor: item.bg }}
                          >
                            {isSelected && (
                              <Check className="w-3 h-3 text-[#181716] stroke-[2.5]" />
                            )}
                          </div>

                          <div>
                            <div className="flex items-center space-x-1.5">
                              <span className="text-xs font-medium text-charcoal tracking-tight">
                                {item.name}
                              </span>
                            </div>
                            <span className="text-[10px] text-charcoal/60 leading-tight block">
                              {item.tagline}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-2.5 pt-2 border-t border-charcoal/8 text-[9px] text-charcoal/50 text-center">
                  Click any swatch to test live across all pages
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemePaletteSwitcher;
