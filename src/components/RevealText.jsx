import React from 'react';
import { motion } from 'framer-motion';

export default function RevealText({ children, delay = 0, className = "" }) {
  if (typeof children === 'string') {
    const words = children.split(' ');
    return (
      <span className={`inline-block ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em] align-top">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.025,
              }}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={`inline-block overflow-hidden pb-1 align-top ${className}`}>
      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
        className="inline-block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}
