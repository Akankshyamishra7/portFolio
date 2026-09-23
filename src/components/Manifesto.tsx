'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rail stats animation
      if (railRef.current?.children) {
        gsap.from(railRef.current.children, {
          scrollTrigger: {
            trigger: railRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
        });
      }

      // Manifesto text kinetic reveal
      if (textRef.current) {
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        });
      }

      // Subtitle reveal
      if (subTextRef.current) {
        gsap.from(subTextRef.current, {
          scrollTrigger: {
            trigger: subTextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="py-24 sm:py-36 bg-[#0E0E0D] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Rail: studiors.be Manifesto Stats */}
          <div ref={railRef} className="lg:col-span-4 flex flex-col space-y-10">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              (The Engineer)
            </p>

            <div className="space-y-8">
              <div className="border-l border-emerald-500/40 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  01
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Dedicated full-stack engineer, from architectural concept to live production deployment.
                </span>
              </div>

              <div className="border-l border-white/20 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  3+
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Years of hands-on engineering across Next.js, TypeScript, APIs, and modern reactive ecosystems.
                </span>
              </div>

              <div className="border-l border-white/20 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Clean, tested, understandable code with uncompromising craftsmanship and accessibility.
                </span>
              </div>
            </div>
          </div>

          {/* Right Body: Big Editorial Philosophy Statement */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <p
              ref={textRef}
              className="font-serif text-2xl sm:text-4xl lg:text-[2.6rem] text-[#F4F3EF] leading-[1.3] tracking-tight will-change-transform"
            >
              Every software project deserves better than an assembly of disconnected blocks. I architect and engineer bespoke interfaces and robust systems so that creative intent and performance remain <em className="italic font-normal text-white">pristine all the way into production.</em>
            </p>

            <p
              ref={subTextRef}
              className="text-sm sm:text-base text-[#8A8985] font-sans leading-relaxed max-w-2xl will-change-transform"
            >
              Direct engineering ownership from the first code commit to cloud launch. You always know who designs the system, who writes the backend logic, and who optimizes every micro-interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
