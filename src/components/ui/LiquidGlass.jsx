import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * LiquidGlass - Apple-inspired VisionOS / macOS Liquid Glass container
 * Implements multi-layered specular reflections, chromatic border highlights,
 * and cursor-tracked refractive liquid sheen.
 */
export const LiquidGlass = ({
  children,
  className = '',
  interactive = true,
  variant = 'light', // 'light' | 'dark' | 'amber' | 'clear'
  borderWidth = '1px',
  rounded = 'rounded-full',
  ...props
}) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 350, damping: 25 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const sheenLeft = useTransform(springX, (val) => `${val * 100}%`);
  const sheenTop = useTransform(springY, (val) => `${val * 100}%`);

  const handleMouseMove = (e) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const variantStyles = {
    light: {
      bg: 'bg-white/65 hover:bg-white/80',
      border: 'border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1.5px_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_0_rgba(0,0,0,0.03)]',
      sheen: 'radial-gradient(circle 80px at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)',
      edgeRefract: 'from-white/80 via-white/20 to-white/60'
    },
    dark: {
      bg: 'bg-black/30 hover:bg-black/45',
      border: 'border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.25),inset_0_1.5px_1px_0_rgba(255,255,255,0.4),inset_0_-1px_2px_0_rgba(0,0,0,0.2)]',
      sheen: 'radial-gradient(circle 90px at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
      edgeRefract: 'from-white/40 via-white/10 to-white/30'
    },
    amber: {
      bg: 'bg-[#F7F3E9]/80 hover:bg-[#F7F3E9]/95',
      border: 'border-[#DFD3BE]/60 shadow-[0_8px_32px_0_rgba(180,140,80,0.08),inset_0_1.5px_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_0_rgba(180,140,80,0.05)]',
      sheen: 'radial-gradient(circle 80px at center, rgba(255,248,235,0.8) 0%, rgba(255,248,235,0) 70%)',
      edgeRefract: 'from-white/90 via-amber-200/30 to-amber-300/40'
    },
    clear: {
      bg: 'bg-white/40 hover:bg-white/55',
      border: 'border-white/35 shadow-[0_6px_24px_0_rgba(0,0,0,0.04),inset_0_1px_1px_0_rgba(255,255,255,0.6)]',
      sheen: 'radial-gradient(circle 70px at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
      edgeRefract: 'from-white/70 via-white/15 to-white/50'
    }
  }[variant] || variantStyles.light;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden backdrop-blur-2xl backdrop-saturate-200 border transition-all duration-300 ${rounded} ${variantStyles.bg} ${variantStyles.border} ${className}`}
      {...props}
    >
      {/* 1. Dynamic Cursor-Following Refractive Liquid Sheen */}
      {interactive && (
        <motion.div
          className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: sheenLeft,
            top: sheenTop,
            width: '240px',
            height: '240px',
            background: variantStyles.sheen,
          }}
        />
      )}

      {/* 2. Top Specular Rim Reflection (Apple Beveled Edge) */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r ${variantStyles.edgeRefract}`} />

      {/* 3. Subtle Bottom Diffuse Reflection */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 4. Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LiquidGlass;
