import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Determine size based on hover state
  const size = isHovering ? 48 : 24;
  const offset = size / 2;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[100000] mix-blend-difference"
      animate={{
        x: mousePosition.x - offset,
        y: mousePosition.y - offset,
        width: size,
        height: size
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400,
        mass: 0.2
      }}
    />
  );
}

export default CustomCursor;
