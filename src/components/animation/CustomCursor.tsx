'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Fast quickTo setters for 60fps+ hardware-accelerated tracking
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });

    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      const { clientX, clientY } = e;
      setDotX(clientX);
      setDotY(clientY);
      setRingX(clientX);
      setRingY(clientY);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Interactive element detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, [data-cursor-hover], .pill-btn, .circle-btn, .pill-nav, [role="button"]'
      );

      if (interactive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, [data-cursor-hover], .pill-btn, .circle-btn, .pill-nav, [role="button"]'
      );

      if (interactive) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  return (
    <>
      {/* Precision Center Point */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${isHovered ? 'scale-150 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''}`}
        aria-hidden="true"
      />

      {/* Fluid Trailing Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'cursor-hover' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
