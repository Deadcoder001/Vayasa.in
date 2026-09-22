import React from 'react';

export default function TextFlip({ text, className = "", stagger = false }) {
  if (stagger) {
    return (
      <span className={`inline-flex items-center whitespace-nowrap flex-nowrap overflow-hidden relative group/flip ${className}`}>
        <span className="inline-flex items-center whitespace-nowrap flex-nowrap transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/flip:-translate-y-full group-hover:-translate-y-full">

          {text.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ transitionDelay: `${i * 15}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
        <span className="absolute top-0 left-0 inline-flex transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/flip:translate-y-0 group-hover:translate-y-0">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ transitionDelay: `${i * 15}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span className={`relative inline-flex flex-col overflow-hidden leading-none group/flip ${className}`}>
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-[-120%] group-hover/flip:translate-y-[-120%]">
        {text}
      </span>
      <span className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0 group-hover/flip:translate-y-0">
        {text}
      </span>
    </span>
  );
}
