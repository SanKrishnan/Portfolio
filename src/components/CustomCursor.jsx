import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ visible: false, label: '', variant: 'default' });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer and hover support
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!cursorState.visible) {
        setCursorState(prev => ({ ...prev, visible: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, visible: false }));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorAttr = target.getAttribute('data-cursor');
        const labelAttr = target.getAttribute('data-cursor-label') || '';
        setCursorState({
          visible: true,
          label: labelAttr,
          variant: cursorAttr || 'hover'
        });
      } else {
        setCursorState(prev => ({
          ...prev,
          label: '',
          variant: 'default'
        }));
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorState.visible]);

  if (!isFinePointer || !cursorState.visible) return null;

  const isLabel = Boolean(cursorState.label);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center transition-opacity duration-300"
      animate={{
        x: position.x,
        y: position.y,
        scale: isLabel ? 1 : cursorState.variant === 'hover' ? 1.4 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5
      }}
      style={{
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      {isLabel ? (
        <div className="bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack text-xs font-pixel-line tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg border border-flame/40 flex items-center gap-1.5 whitespace-nowrap">
          {cursorState.label}
        </div>
      ) : (
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorState.variant === 'hover'
              ? 'w-8 h-8 bg-flame/25 border border-flame backdrop-blur-xs'
              : 'w-4 h-4 bg-cabernet/20 dark:bg-cream-100/30 border border-cabernet/40 dark:border-cream-100/50'
          }`}
        />
      )}
    </motion.div>
  );
};
