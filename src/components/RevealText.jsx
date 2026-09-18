import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealText({ children, delay = 0, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.reveal-word');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.03,
          delay: delay,
          scrollTrigger: {
            trigger: container,
            start: 'top 92%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, children]);

  // Utility to split text into word spans if children is a string
  const renderContent = () => {
    if (typeof children === 'string') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em] align-top">
          <span className="reveal-word inline-block will-change-transform">{word}</span>
        </span>
      ));
    }

    return (
      <span className="inline-block overflow-hidden pb-1 align-top">
        <span className="reveal-word inline-block will-change-transform">{children}</span>
      </span>
    );
  };

  return (
    <span ref={containerRef} className={`${className} inline-block`}>
      {renderContent()}
    </span>
  );
}
