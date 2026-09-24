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
      phase: 'Discovery',
      name: 'Discover & Architect',
      description:
        'I dive deep into requirements, system constraints, and core objectives. I write no code before thoroughly understanding data structures and performance requirements.',
      meta: 'Requirements · Architecture · Data Schema',
    },
    {
      num: '02',
      phase: 'Design',
      name: 'System & UI Prototype',
      description:
        'I establish a rigorous visual direction: typography hierarchy, color tokens, fluid spacing, and modular component design with WCAG accessibility standards.',
      meta: 'UI/UX Design · Component Hierarchy · Prototypes',
    },
    {
      num: '03',
      phase: 'Engineering',
      name: 'Full-Stack & Motion',
      description:
        'I develop the full-stack system in Next.js and TypeScript, integrating fluid GSAP animations and responsive APIs where motion genuinely elevates the experience.',
      meta: 'Next.js 16 · TypeScript · GSAP Motion · Scalable APIs',
    },
    {
      num: '04',
      phase: 'Delivery',
      name: 'Optimize & Cloud Launch',
      description:
        'I deploy with automated CI/CD pipelines, optimize bundle sizes and SEO metadata, and provide clean documentation to ensure frictionless scaling.',
      meta: 'Cloud Deployment · SEO & Speed · Documentation',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      if (headRef.current?.children) {
        gsap.fromTo(
          headRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: headRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }

      // Step cards cascade
      if (cardsRef.current?.children) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="methode"
      className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Method Header */}
        <div ref={headRef} className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              (03 / Engineering Discipline)
            </p>
            <p className="text-xs sm:text-sm text-[#8A8985] font-sans max-w-md">
              A disciplined trajectory from initial discussion to production launch: rigorous enough to scale, agile enough to innovate.
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F3EF] tracking-tight">
            The Engineering <span className="font-serif italic font-normal text-white/70">Process</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-b border-white/10 pb-5 mt-4">
            <p className="font-sans text-xs sm:text-sm text-[#8A8985]">
              <span className="font-semibold text-white">Four phases. </span>
              <em>Zero shortcuts.</em>
            </p>
            <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-[#8A8985] overflow-x-auto whitespace-nowrap py-1">
              <span>01 Discover</span>
              <span>·</span>
              <span>02 Design</span>
              <span>·</span>
              <span>03 Engineer</span>
              <span>·</span>
              <span>04 Deploy</span>
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
