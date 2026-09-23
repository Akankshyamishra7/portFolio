'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepItem {
  num: string;
  phase: string;
  name: string;
  description: string;
  meta: string;
}

export const Method: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const steps: StepItem[] = [
    {
      num: '01',
      phase: 'Immersion',
      name: 'Écouter & Architect',
      description:
        'I dive deep into requirements, system constraints, and core objectives. I write no code before thoroughly understanding data structures and performance requirements.',
      meta: 'Requirements · Architecture · Data Schema',
    },
    {
      num: '02',
      phase: 'Direction',
      name: 'Dessiner & Design System',
      description:
        'I establish a rigorous visual direction: typography hierarchy, color tokens, fluid spacing, and modular component design with WCAG accessibility standards.',
      meta: 'UI/UX Design · Component Hierarchy · Prototypes',
    },
    {
      num: '03',
      phase: 'Production',
      name: 'Construire & GSAP Motion',
      description:
        'I develop the full-stack system in Next.js and TypeScript, integrating fluid GSAP animations and responsive APIs where motion genuinely elevates the experience.',
      meta: 'Next.js 16 · TypeScript · GSAP Motion · Scalable APIs',
    },
    {
      num: '04',
      phase: 'Launch',
      name: 'Livrer & Optimization',
      description:
        'I deploy with automated CI/CD pipelines, optimize bundle sizes and SEO metadata, and provide clean documentation to ensure frictionless scaling.',
      meta: 'Cloud Deployment · SEO & Speed · Documentation',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      if (headRef.current) {
        gsap.from(headRef.current.children, {
          scrollTrigger: {
            trigger: headRef.current,
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

      // Step cards cascade
      if (cardsRef.current?.children) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power4.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="methode"
      className="py-24 sm:py-36 bg-[#0E0E0D] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Method Header matching studiors.be */}
        <div ref={headRef} className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              03 · Ma manière de faire
            </p>
            <p className="text-xs sm:text-sm text-[#8A8985] font-sans max-w-md">
              A disciplined trajectory from first discussion to production launch: rigorous enough to scale, agile enough to innovate.
            </p>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F3EF] tracking-tight">
            <span className="font-editorial italic font-normal text-gray-400">La </span>
            Méthode
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-b border-white/10 pb-6 mt-4">
            <p className="font-sans text-sm sm:text-base text-gray-300">
              <span className="font-semibold text-white">Quatre temps. </span>
              <em className="font-editorial italic text-gray-400">Aucun raccourci.</em>
            </p>
            <div className="flex items-center gap-6 font-mono text-xs text-[#8A8985] overflow-x-auto">
              <span>01 Écouter</span>
              <span>·</span>
              <span>02 Dessiner</span>
              <span>·</span>
              <span>03 Construire</span>
              <span>·</span>
              <span>04 Livrer</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Process Grid matching studiors.be */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {steps.map((step, idx) => (
            <article
              key={idx}
              className="bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background large ghost number */}
              <span
                className="absolute right-4 bottom-2 text-7xl font-sans font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors"
                aria-hidden="true"
              >
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-white/10">
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8985]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F4F3EF] mb-3 group-hover:text-white transition-colors">
                  {step.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                {step.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
