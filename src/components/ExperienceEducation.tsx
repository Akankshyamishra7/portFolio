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
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            x: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            ease: 'power3.out',
          });

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
                  start: 'top 80%',
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
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            x: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            ease: 'power3.out',
          });

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
                  start: 'top 80%',
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
    <section ref={sectionRef} id="experience" className="py-20 sm:py-28 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div ref={headerRef} className="mb-16">
          <h2 className="font-mono text-2xl sm:text-4xl text-white font-bold mb-3 tracking-tight">
            ./Experience & Education
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans max-w-2xl">
            Professional trajectory, roles shipped, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Experience Column */}
          <div ref={expColRef}>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              Work Experience
            </h3>

            <div className="space-y-8 relative pl-7">
              {/* Static Background Track Line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-white/10"></div>
              {/* Scrubbed Animated Laser Beam Line */}
              <div
                ref={expBeamRef}
                className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-white via-emerald-400 to-white shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"
              ></div>

              {experience.map((exp, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Glowing Milestone Dot */}
                  <div className="timeline-dot absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-white/40 transition-all duration-300 z-10"></div>

                  <div className="bg-[#111215] border border-white/15 rounded-3xl p-6 sm:p-7 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4">
                      {exp.company} · {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 text-xs text-gray-400 font-sans">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="text-white/60">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
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
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              Education & Degrees
            </h3>

            <div className="space-y-8 relative pl-7">
              {/* Static Background Track Line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-white/10"></div>
              {/* Scrubbed Animated Laser Beam Line */}
              <div
                ref={eduBeamRef}
                className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-white via-cyan-400 to-white shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"
              ></div>

              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Glowing Milestone Dot */}
                  <div className="timeline-dot absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-white/40 transition-all duration-300 z-10"></div>

                  <div className="bg-[#111215] border border-white/15 rounded-3xl p-6 sm:p-7 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4">
                      {edu.institution} · {edu.location}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
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
