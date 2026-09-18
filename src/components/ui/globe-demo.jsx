import React from 'react';
import { Globe } from '@/registry/magicui/globe';

export function GlobeDemo() {
  return (
    <div className="bg-white/80 relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-charcoal/10 px-8 pt-8 pb-36 md:pb-52 shadow-xs">
      <span className="pointer-events-none bg-gradient-to-b from-charcoal/20 to-transparent bg-clip-text text-center text-8xl leading-none font-semibold font-serif whitespace-pre-wrap text-transparent select-none">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
    </div>
  );
}

export default GlobeDemo;
