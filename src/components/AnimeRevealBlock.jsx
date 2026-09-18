import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimeRevealBlock({ children, delay = 0, className = "" }) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        {
          clipPath: 'inset(12% 0% 0% 0%)',
          scale: 1.06,
          opacity: 0.2,
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          delay: delay,
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`${className} overflow-hidden`}>
      <div ref={targetRef} className="w-full h-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
