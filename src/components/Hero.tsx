'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTelegram, 
  FaFacebookF, 
  FaInstagram 
} from 'react-icons/fa6';
import { HiArrowDown } from 'react-icons/hi2';
import gsap from 'gsap';
import { portfolioData, SocialLink } from '../data/portfolioData';
import Magnetic from './animation/Magnetic';

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile, socials } = portfolioData;

  const heroRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const asideDescRef = useRef<HTMLParagraphElement>(null);
  const asideIndexRef = useRef<HTMLUListElement>(null);
  const actionPillRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Initial state
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 110,
        opacity: 0,
        rotateX: 35,
      });
      gsap.set(asideDescRef.current, { opacity: 0, y: 25, filter: 'blur(6px)' });
      if (asideIndexRef.current?.children) {
        gsap.set(asideIndexRef.current.children, { opacity: 0, x: -20 });
      }
      gsap.set(actionPillRef.current, { scale: 0.8, opacity: 0 });
      if (socialsRef.current?.children) {
        gsap.set(socialsRef.current.children, { opacity: 0, y: 25, scale: 0.85 });
      }
      gsap.set(floorRef.current, { opacity: 0 });

      // Kinetic timeline sequence
      tl.to(floorRef.current, {
        opacity: 0.35,
        duration: 1.5,
        ease: 'power3.out',
      })
      .to(
        line1Ref.current,
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
        },
        '-=1.2'
      )
      .to(
        line2Ref.current,
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
        },
        '-=0.9'
      )
      .to(
        line3Ref.current,
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
        },
        '-=0.9'
      )
      .to(
        actionPillRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.8)',
        },
        '-=0.8'
      )
      .to(
        asideDescRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.7'
      );

      if (asideIndexRef.current?.children) {
        tl.to(
          asideIndexRef.current.children,
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.6'
        );
      }

      if (socialsRef.current?.children) {
        tl.to(
          socialsRef.current.children,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.07,
            duration: 0.7,
            ease: 'back.out(1.6)',
          },
          '-=0.5'
        );
      }

      // Background studiors marquee loop
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: 'none',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedinIn className="w-3.5 h-3.5 text-blue-400" />;
      case 'telegram':
        return <FaTelegram className="w-3.5 h-3.5 text-sky-400" />;
      case 'facebook':
        return <FaFacebookF className="w-3.5 h-3.5 text-blue-500" />;
      case 'instagram':
        return <FaInstagram className="w-3.5 h-3.5 text-pink-400" />;
      default:
        return <FaGithub className="w-3.5 h-3.5" />;
    }
  };

  const featuredProjects = [
    { num: '01', title: 'Responsive Portfolio', cat: 'Next.js & GSAP' },
    { num: '02', title: 'Interactive Quiz App', cat: 'Python & Tkinter' },
    { num: '03', title: 'E-Commerce Platform', cat: 'Full-Stack Architecture' },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 overflow-hidden bg-[#0E0E0D]"
    >
      {/* Background Dot Matrix Pattern with Radial Glow */}
      <div className="absolute inset-0 pointer-events-none dot-matrix opacity-25 z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-white/6 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: studiors.be Massive Kinetic Typography */}
          <div className="lg:col-span-8">
            <h1 className="select-none tracking-tight leading-[0.88] text-[#F4F3EF]">
              <span className="block overflow-hidden py-1">
                <span
                  ref={line1Ref}
                  className="block font-sans font-black text-[11.2vw] xs:text-[12vw] sm:text-[11vw] lg:text-[8rem] tracking-tighter uppercase will-change-transform"
                >
                  {profile.firstName}
                </span>
              </span>

              <span className="block overflow-hidden py-1">
                <span
                  ref={line2Ref}
                  className="block font-serif italic font-normal text-[11.2vw] xs:text-[12vw] sm:text-[11vw] lg:text-[7.8rem] text-gray-300 ml-2 sm:ml-12 will-change-transform"
                >
                  Full-stack
                </span>
              </span>

              <span className="block overflow-hidden py-1">
                <span
                  ref={line3Ref}
                  className="block font-sans font-black text-[11.2vw] xs:text-[12vw] sm:text-[11vw] lg:text-[8rem] tracking-tighter uppercase will-change-transform"
                >
                  Developer
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column: studiors.be Hero Aside & Quick Project Index */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pb-3">
            {/* Description */}
            <p
              ref={asideDescRef}
              className="text-[#8A8985] text-xs sm:text-sm font-sans leading-relaxed max-w-sm will-change-transform"
            >
              Akankshya Mishra is a full-stack engineer crafting scalable applications with clean code, modern web architectures, and fine-tuned micro-interactions.
            </p>

            {/* Quick Project Index matching studiors.be */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#5C5B57] mb-3">
                (Featured Index)
              </p>
              <ul ref={asideIndexRef} className="space-y-2.5 font-sans text-xs">
                {featuredProjects.map((p, idx) => (
                  <li key={idx} className="group">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="flex items-center justify-between w-full py-1 text-left text-gray-300 group-hover:text-white transition-colors cursor-pointer border-b border-white/5 pb-2"
                    >
                      <span className="flex items-center gap-3">
                        <i className="font-mono text-[10px] text-emerald-400 not-italic">
                          {p.num}
                        </i>
                        <span className="font-medium">{p.title}</span>
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 group-hover:text-gray-300">
                        {p.cat}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume Pill Action */}
            <div ref={actionPillRef} className="pt-2 flex items-center gap-3">
              <Magnetic strength={0.35}>
                <button
                  onClick={onOpenResume}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all shadow-xl font-sans text-xs sm:text-sm font-bold cursor-pointer"
                  aria-label="View Resume"
                >
                  <span className="font-serif italic font-normal">Resume...</span>
                  <HiArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                </button>
              </Magnetic>

              <div className="font-mono text-[11px] text-[#8A8985]">
                <span>{profile.yearsExperience}+ Years Exp.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Pills Bar */}
        <div
          ref={socialsRef}
          className="mt-16 sm:mt-20 flex flex-wrap items-center justify-start gap-3 sm:gap-4"
        >
          {socials.map((social: SocialLink, index: number) => (
            <Magnetic key={index} strength={0.25}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="studiors-pill group"
                aria-label={`Visit ${social.name}`}
              >
                <span className="transition-transform group-hover:scale-110 duration-200">
                  {renderSocialIcon(social.name)}
                </span>
                <span className="font-medium text-xs sm:text-sm">{social.name}</span>
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Looping studiors-inspired marquee track */}
      <div className="w-full overflow-hidden border-t border-b border-white/10 py-3 mt-14 bg-[#121211] select-none">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 font-mono text-xs tracking-widest text-[#8A8985] uppercase"
            >
              <span>{profile.firstName.toLowerCase()}</span>
              <span className="text-gray-500 ml-2">· full-stack developer</span>
              <span className="mx-4 text-emerald-400">✦</span>
              <span>portfolio 2026</span>
              <span className="mx-4 text-gray-600">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Perspective Grid Floor */}
      <div
        ref={floorRef}
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none perspective-grid-floor opacity-30 z-0 will-change-transform"
      ></div>
    </section>
  );
};

export default Hero;
