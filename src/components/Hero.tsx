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
  const fullstackTextRef = useRef<HTMLHeadingElement>(null);
  const developerTextRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);
  const resumeContainerRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Initial State setup
      gsap.set(fullstackTextRef.current, { yPercent: 110, rotateX: 45, opacity: 0 });
      gsap.set(developerTextRef.current, { yPercent: 110, rotateX: -45, opacity: 0 });
      gsap.set(resumeContainerRef.current, { scale: 0.5, opacity: 0, y: 20 });
      gsap.set(missionTextRef.current, { opacity: 0, y: 30, filter: 'blur(8px)' });
      if (socialsRef.current?.children) {
        gsap.set(socialsRef.current.children, { opacity: 0, y: 35, scale: 0.8 });
      }
      gsap.set(bottomBarRef.current, { opacity: 0, y: 20 });
      gsap.set(floorRef.current, { opacity: 0, scale: 0.95 });

      // 2. Kinetic Entrance Timeline
      tl.to(floorRef.current, {
        opacity: 0.35,
        scale: 1,
        duration: 1.6,
        ease: 'power3.out',
      })
      .to(
        fullstackTextRef.current,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=1.2'
      )
      .to(
        resumeContainerRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'back.out(1.8)',
        },
        '-=0.8'
      )
      .to(
        developerTextRef.current,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'power4.out',
        },
        '-=0.9'
      )
      .to(
        missionTextRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.7'
      );

      if (socialsRef.current?.children) {
        tl.to(
          socialsRef.current.children,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'back.out(1.6)',
          },
          '-=0.6'
        );
      }

      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4'
      );

      // 3. Interactive Mouse Parallax in Hero
      const heroElement = heroRef.current;
      if (heroElement && floorRef.current && glowRef.current) {
        const floorQuickX = gsap.quickTo(floorRef.current, 'rotateY', { duration: 0.6, ease: 'power2.out' });
        const floorQuickY = gsap.quickTo(floorRef.current, 'rotateX', { duration: 0.6, ease: 'power2.out' });
        const glowQuickX = gsap.quickTo(glowRef.current, 'x', { duration: 0.8, ease: 'power3.out' });
        const glowQuickY = gsap.quickTo(glowRef.current, 'y', { duration: 0.8, ease: 'power3.out' });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = heroElement.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          floorQuickX(relX * 12);
          floorQuickY(60 - relY * 10);
          glowQuickX(relX * 120);
          glowQuickY(relY * 100);
        };

        heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Dot Matrix Pattern with Radial Glow */}
      <div className="absolute inset-0 pointer-events-none dot-matrix opacity-40 z-0"></div>
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl pointer-events-none z-0"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto">
        {/* Massive Typography Grid */}
        <div className="relative">
          {/* Row 1: "Full-stack" + Resume Pill & Arrow */}
          <div className="flex flex-wrap items-baseline gap-4 sm:gap-8 justify-start">
            <div className="overflow-hidden py-1">
              <h1
                ref={fullstackTextRef}
                className="font-serif font-bold text-[13vw] sm:text-[9vw] lg:text-[8.5rem] text-white tracking-tight leading-none select-none drop-shadow-sm will-change-transform"
              >
                Full-stack
              </h1>
            </div>

            {/* Resume Pill with Download Arrow */}
            <div ref={resumeContainerRef} className="inline-flex items-center gap-2 mb-2 sm:mb-4 will-change-transform">
              <Magnetic strength={0.4}>
                <button
                  onClick={onOpenResume}
                  className="group flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl font-sans text-xs sm:text-sm font-medium cursor-pointer hover:shadow-white/20"
                  aria-label="Open Resume"
                >
                  <span className="italic font-serif font-bold">Resume...</span>
                </button>
              </Magnetic>

              <Magnetic strength={0.5}>
                <button
                  onClick={onOpenResume}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-2xl cursor-pointer hover:shadow-white/20 group"
                  aria-label="Download Resume"
                >
                  <HiArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 duration-300" />
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Row 2: Left Mission Statement + Right "Developer" */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start mt-2 sm:mt-4">
            {/* Left Column: Mission statement */}
            <div className="md:col-span-4 lg:col-span-4 pt-2 md:pt-4">
              <p
                ref={missionTextRef}
                className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-xs will-change-transform"
              >
                My goal is to{' '}
                <strong className="text-white font-medium italic">
                  write maintainable, clean
                </strong>{' '}
                and{' '}
                <strong className="text-white font-medium italic">
                  understandable code
                </strong>{' '}
                to make development process enjoyable.
              </p>
            </div>

            {/* Right Column: Massive "Developer" */}
            <div className="md:col-span-8 lg:col-span-8 flex justify-start md:justify-center overflow-hidden py-1">
              <h1
                ref={developerTextRef}
                className="font-serif font-bold text-[13vw] sm:text-[9vw] lg:text-[8.5rem] text-white tracking-tight leading-none select-none drop-shadow-sm will-change-transform"
              >
                Developer
              </h1>
            </div>
          </div>
        </div>

        {/* Social Pills Bar with Magnetic Physics */}
        <div
          ref={socialsRef}
          className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {socials.map((social: SocialLink, index: number) => (
            <Magnetic key={index} strength={0.3}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn group hover:border-white/80 hover:bg-white/15"
                aria-label={`Visit ${social.name}`}
              >
                <span className="transition-transform group-hover:scale-125 duration-300">
                  {renderSocialIcon(social.name)}
                </span>
                <span className="font-medium text-xs sm:text-sm">{social.name}</span>
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Bottom Section: Transition with Perspective Grid and About Snippet */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full mt-16 sm:mt-24">
        {/* 3D Perspective Grid receding into bottom floor */}
        <div
          ref={floorRef}
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none perspective-grid-floor opacity-30 z-0 will-change-transform"
        ></div>

        <div
          ref={bottomBarRef}
          className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-8 border-t border-white/10 will-change-transform"
        >
          {/* Left: Monospace section tag */}
          <div className="font-mono text-xs sm:text-sm text-gray-400 tracking-wider">
            <span className="text-white font-semibold">... /About me ...</span>
          </div>

          {/* Right: Intro snippet */}
          <div className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed text-left sm:text-right max-w-sm">
            <p>
              Hello! I'm{' '}
              <strong className="text-white font-semibold">
                {profile.firstName}
              </strong>
              , a full-stack developer.
            </p>
            <p>
              With more than{' '}
              <strong className="text-white font-semibold">
                {profile.yearsExperience} years
              </strong>{' '}
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
