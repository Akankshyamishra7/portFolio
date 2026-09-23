'use client';

import React, { useEffect, useRef } from 'react';
import { HiX, HiExternalLink } from 'react-icons/hi';
import { FaBookOpen } from 'react-icons/fa6';
import gsap from 'gsap';

interface ArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToFeed: () => void;
}

const ArticlesModal: React.FC<ArticlesModalProps> = ({ isOpen, onClose, onScrollToFeed }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && backdropRef.current && boxRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        boxRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (backdropRef.current && boxRef.current) {
      gsap.to(boxRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  const articles = [
    {
      title: "Building Modern & Accessible Web Applications with React and Tailwind CSS",
      date: "Feb 2026",
      readTime: "5 min read",
      tags: ["React", "Tailwind CSS", "Accessibility"],
      snippet: "A practical guide to crafting responsive, performant user interfaces with component-driven architectures and WCAG standards."
    },
    {
      title: "From Problem Statement to Functional Prototype: Hackathon Engineering Lessons",
      date: "Jan 2026",
      readTime: "7 min read",
      tags: ["Hackathon", "Prototyping", "Teamwork"],
      snippet: "How our team delivered an innovative working solution under strict time pressure, maintaining code clarity and effective sprint execution."
    },
    {
      title: "Building Interactive GUI Applications with Python and Clean Code Principles",
      date: "Dec 2025",
      readTime: "6 min read",
      tags: ["Python", "Algorithms", "Clean Code"],
      snippet: "Architecture breakdown of interactive applications in Python, covering data structures, event dispatching, and robust error management."
    }
  ];

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={boxRef}
        className="bg-[#121316] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <FaBookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Technical Articles & Writing
            </h3>
            <p className="text-xs text-gray-400 font-sans">
              Deep dives on web engineering, AI systems, and systems programming
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-left"
            >
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                <span>{art.date}</span>
                <span>{art.readTime}</span>
              </div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                {art.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
                {art.snippet}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {art.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    handleClose();
                    onScrollToFeed();
                  }}
                  className="text-xs font-sans text-white hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View in Feed <HiExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesModal;
