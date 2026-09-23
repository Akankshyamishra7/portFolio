'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import Magnetic from './animation/Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  isLight?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', isLight = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;

    const quickRotateX = gsap.quickTo(card, 'rotateX', { duration: 0.4, ease: 'power2.out' });
    const quickRotateY = gsap.quickTo(card, 'rotateY', { duration: 0.4, ease: 'power2.out' });
    const quickScale = gsap.quickTo(card, 'scale', { duration: 0.4, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -9;
      const rotY = ((x - centerX) / centerX) * 9;

      quickRotateX(rotX);
      quickRotateY(rotY);
      quickScale(1.02);

      if (glare) {
        gsap.to(glare, {
          x: x,
          y: y,
          opacity: 0.6,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      quickRotateX(0);
      quickRotateY(0);
      quickScale(1);
      if (glare) {
        gsap.to(glare, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {/* Dynamic Cursor Light Glare */}
      <div
        ref={glareRef}
        className={`pointer-events-none absolute -top-32 -left-32 w-64 h-64 rounded-full blur-2xl opacity-0 transition-opacity ${
          isLight
            ? 'bg-gradient-to-r from-gray-300/40 to-white/60'
            : 'bg-gradient-to-r from-white/20 to-emerald-400/20'
        }`}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
};

const AboutSkills: React.FC = () => {
  const { profile, skills, languages } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header scroll trigger reveal
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

      // 2. Bento Cards Entrance with 3D Pop
      if (cardsContainerRef.current) {
        gsap.from(cardsContainerRef.current.children, {
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 70,
          scale: 0.9,
          opacity: 0,
          stagger: 0.14,
          duration: 1.1,
          ease: 'power4.out',
        });
      }

      // 3. Languages Row Entrance
      if (languagesRef.current) {
        gsap.from(languagesRef.current.children, {
          scrollTrigger: {
            trigger: languagesRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.5)',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-28 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-12">
          <h2 className="font-mono text-2xl sm:text-4xl text-white font-bold mb-4 tracking-tight">
            ./About me
          </h2>
          <p className="text-gray-300 text-base sm:text-xl font-sans leading-relaxed max-w-3xl">
            I'm <strong className="text-white font-semibold">{profile.firstName}</strong>, a full-stack developer with{' '}
            <strong className="text-white font-semibold">over {profile.yearsExperience} years of experience.</strong>
          </p>
        </div>

        {/* 4 Cards Grid matching Bento Layout with 3D Tilt */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-14">
          {/* Card 1: Front-end (White Highlight Card) */}
          <TiltCard
            isLight={true}
            className="bg-white text-gray-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-black">
                Front-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-800">
                {skills.frontend}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 text-xs font-mono text-gray-600 uppercase tracking-wider font-semibold">
              High Performance & UI/UX
            </div>
          </TiltCard>

          {/* Card 2: Back-end (Dark Card) */}
          <TiltCard className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Back-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-300">
                {skills.backend}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Scalable APIs & Microservices
            </div>
          </TiltCard>

          {/* Card 3: Styles (Dark Card) */}
          <TiltCard className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Styles
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-300">
                {skills.styles}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Modern Responsive Systems
            </div>
          </TiltCard>

          {/* Card 4: Also (Dark Card) */}
          <TiltCard className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Also
              </h3>
              <p className="text-xs text-white/70 italic mb-3 font-sans">
                Some of my favorite technologies, topics or tools that I worked with
              </p>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-300">
                {skills.also}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Craftsmanship & Integrity
            </div>
          </TiltCard>
        </div>

        {/* Languages Proficiency Row with Magnetic interaction */}
        <div ref={languagesRef} className="flex flex-wrap items-center gap-4 justify-start">
          {languages.map((item, idx) => (
            <Magnetic key={idx} strength={0.2}>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/20 bg-[#121316] text-xs sm:text-sm font-mono text-gray-300 hover:border-white/50 hover:bg-[#18191d] transition-all cursor-default shadow-lg">
                <span className="text-lg">{item.flag}</span>
                <span className="font-semibold text-white">{item.language}</span>
                <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] text-white/80 uppercase tracking-wider bg-white/5">
                  {item.level}
                </span>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
