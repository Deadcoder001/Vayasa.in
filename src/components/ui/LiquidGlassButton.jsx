import React from 'react';
import { motion } from 'framer-motion';
import LiquidGlass from './LiquidGlass';
import TextFlip from '../TextFlip';

/**
 * LiquidGlassButton - High-precision Apple Liquid Glass interactive button
 * Used for primary actions, navbar CTAs, and service booking buttons.
 */
export const LiquidGlassButton = ({
  children,
  text,
  onClick,
  variant = 'light', // 'light' | 'dark' | 'amber' | 'clear'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  disabled = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-[10px] tracking-[0.18em]',
    md: 'px-5 py-2.5 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs tracking-[0.22em]',
    lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-[0.25em]'
  }[size] || sizeClasses.md;

  const textColors = {
    light: 'text-charcoal hover:text-black',
    dark: 'text-white hover:text-white',
    amber: 'text-[#181716] hover:text-black',
    clear: 'text-charcoal hover:text-black'
  }[variant] || textColors.light;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none whitespace-nowrap shrink-0 ${className}`}
      {...props}
    >
      <LiquidGlass
        variant={variant}
        interactive={true}
        rounded="rounded-full"
        className={`${sizeClasses} ${textColors} font-sans uppercase font-medium flex items-center justify-center space-x-1.5 sm:space-x-2 flex-nowrap whitespace-nowrap shrink-0`}
      >
        <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 flex-nowrap whitespace-nowrap">
          {text ? (
            <span className="font-sans whitespace-nowrap inline-block shrink-0">
              <TextFlip text={text} stagger />
            </span>
          ) : (
            children
          )}

          {icon && (
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-75 group-hover:opacity-100 shrink-0 inline-block"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
            </svg>
          )}
        </div>
      </LiquidGlass>
    </motion.button>
  );

};

export default LiquidGlassButton;
