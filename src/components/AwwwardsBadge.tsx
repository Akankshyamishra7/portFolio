'use client';

import React from 'react';

export const AwwwardsBadge: React.FC = () => {
  return (
    <div
      id="awwwards"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block"
      aria-label="Awwwards Recognition"
    >
      <a
        href="https://www.awwwards.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center bg-white text-black px-2 py-4 rounded-l-xl shadow-2xl transition-all duration-300 hover:pr-4 hover:bg-neutral-100"
        title="Featured Developer Portfolio"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest font-black [writing-mode:vertical-lr] rotate-180 mb-2">
          HONORABLE
        </span>
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default AwwwardsBadge;
