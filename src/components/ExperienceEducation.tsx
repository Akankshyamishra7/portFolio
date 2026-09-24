'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ExperienceEducation: React.FC = () => {
  const { experience, education } = portfolioData;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const expColRef = useRef<HTMLDivElement>(null);
  const eduColRef = useRef<HTMLDivElement>(null);
  const expBeamRef = useRef<HTMLDivElement>(null);
  const eduBeamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header scroll trigger
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
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

      // 2. Experience Laser Line Scrub
      if (expBeamRef.current && expColRef.current) {
        gsap.fromTo(
          expBeamRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: expColRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.5,
            },
          }
        );

        // Experience Cards staggered entrance
        const cards = expColRef.current.querySelectorAll('.timeline-item');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                once: true,
              },
            }
          );

          const dot = card.querySelector('.timeline-dot');
          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0.5, backgroundColor: '#0a0a0c', borderColor: 'rgba(255,255,255,0.3)' },
              {
                scale: 1.25,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                boxShadow: '0 0 15px rgba(255,255,255,0.8)',
                duration: 0.5,
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            );
          }
        });
      }

      // 3. Education Laser Line Scrub
      if (eduBeamRef.current && eduColRef.current) {
        gsap.fromTo(
          eduBeamRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: eduColRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.5,
            },
          }
        );

        // Education Cards staggered entrance
        const eduCards = eduColRef.current.querySelectorAll('.timeline-item');
        eduCards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                once: true,
              },
            }
          );

          const dot = card.querySelector('.timeline-dot');
          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0.5, backgroundColor: '#0a0a0c', borderColor: 'rgba(255,255,255,0.3)' },
              {
                scale: 1.25,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                boxShadow: '0 0 15px rgba(255,255,255,0.8)',
                duration: 0.5,
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8A8985] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF]"></span>
              <span>(04 / Trajectory & Education)</span>
            </div>
            <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-[#F4F3EF] tracking-tight leading-none">
              Experience & <span className="font-serif italic font-normal text-white/70">Academic Journey</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8A8985] font-mono max-w-md">
            History of engineering roles, open-source initiatives, and formal computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Experience Column */}
          <div ref={expColRef}>
            <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#F4F3EF] mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4F3EF] shadow-[0_0_12px_rgba(244,243,239,0.8)]"></span>
              Professional Experience
            </h3>

            <div className="space-y-8 relative pl-7">
              {/* Static Background Track Line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-white/10"></div>
              {/* Scrubbed Animated Laser Beam Line */}
              <div
                ref={expBeamRef}
                className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#F4F3EF] via-emerald-400 to-[#F4F3EF] shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"
              ></div>

              {experience.map((exp, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Glowing Milestone Dot */}
                  <div className="timeline-dot absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full bg-[#0E0E0D] border-2 border-white/30 transition-all duration-300 z-10"></div>

                  <div className="bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-white/25 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-semibold text-base sm:text-lg text-[#F4F3EF]">
                        {exp.role}
                      </h4>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-[#8A8985] border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#8A8985] mb-4">
                      {exp.company} · {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-[#C4C3BE] font-sans leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 text-xs text-[#8A8985] font-sans">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="text-[#F4F3EF]/60">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div ref={eduColRef}>
            <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#F4F3EF] mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4F3EF] shadow-[0_0_12px_rgba(244,243,239,0.8)]"></span>
              Academic Education & Degrees
            </h3>

            <div className="space-y-8 relative pl-7">
              {/* Static Background Track Line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-white/10"></div>
              {/* Scrubbed Animated Laser Beam Line */}
              <div
                ref={eduBeamRef}
                className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#F4F3EF] via-cyan-400 to-[#F4F3EF] shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"
              ></div>

              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Glowing Milestone Dot */}
                  <div className="timeline-dot absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full bg-[#0E0E0D] border-2 border-white/30 transition-all duration-300 z-10"></div>

                  <div className="bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-white/25 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-semibold text-base sm:text-lg text-[#F4F3EF]">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-[#8A8985] border border-white/10">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#8A8985] mb-4">
                      {edu.institution} · {edu.location}
                    </p>

                    <p className="text-xs sm:text-sm text-[#C4C3BE] font-sans leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
