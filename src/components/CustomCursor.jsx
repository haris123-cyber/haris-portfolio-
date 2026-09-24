"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '2px solid var(--accent-color)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <motion.div
        className="cursor-dot-inner"
        variants={{
            default: {
                x: mousePosition.x - 4,
                y: mousePosition.y - 4,
            }
        }}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
};
