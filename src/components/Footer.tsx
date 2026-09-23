'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTelegram, 
  FaFacebookF, 
  FaInstagram,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import Magnetic from './animation/Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FooterProps {
  onOpenContact?: () => void;
}

interface ContactPill {
  name: string;
  url: string;
  isMail?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { profile, socials, footer } = portfolioData;

  const footerRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Massive Name Typography Reveal with letter-spacing tracking
      if (firstNameRef.current && lastNameRef.current) {
        gsap.from([firstNameRef.current, lastNameRef.current], {
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 80,
          opacity: 0,
          letterSpacing: '0.2em',
          stagger: 0.12,
          duration: 1.2,
          ease: 'power4.out',
        });
      }

      // 2. Info Box & Nav entrance
      if (infoBoxRef.current) {
        gsap.from(infoBoxRef.current, {
          scrollTrigger: {
            trigger: infoBoxRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scale: 0.92,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.5)',
        });
      }

      // 3. Staggered Contact Pills Entrance
      if (pillsRef.current?.children) {
        gsap.from(pillsRef.current.children, {
          scrollTrigger: {
            trigger: pillsRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 40,
          scale: 0.85,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'back.out(1.6)',
        });
      }

      // 4. Infinite Smooth Marquee Ticker with GSAP
      if (marqueeInnerRef.current) {
        gsap.to(marqueeInnerRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: 'none',
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContactIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'e-mail':
      case 'email':
        return <FaEnvelope className="w-3.5 h-3.5" />;
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

  const contactPills: ContactPill[] = [
    { name: "E-Mail", url: "mailto:akankshyam4@gmail.com", isMail: true },
    ...socials
  ];

  const marqueeItems = [
    "FULL-STACK DEVELOPER",
    "NEXT.JS & REACT 19",
    "GSAP HEAVY ANIMATION",
    "CLEAN & MAINTAINABLE CODE",
    "TYPESCRIPT",
    "NODEJS & EXPRESS",
    "SCALABLE ARCHITECTURE",
    "TAILWIND CSS",
    "WCAG ACCESSIBILITY",
    "CONTINUOUS INNOVATION",
  ];

  return (
    <footer
      ref={footerRef}
      id="contacts"
      className="relative pt-16 pb-12 bg-[#090a0c] border-t border-white/10 overflow-hidden"
    >
      {/* Infinite GSAP Marquee Ticker */}
      <div className="w-full overflow-hidden border-b border-white/10 py-4 mb-16 bg-[#0c0d10] select-none">
        <div ref={marqueeInnerRef} className="flex whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center mx-6 font-mono text-xs sm:text-sm tracking-widest text-gray-400"
            >
              <span className="text-white font-bold">{item}</span>
              <span className="mx-4 text-emerald-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Massive Stacked Name & Subtitle */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="overflow-hidden py-1">
              <h2
                ref={firstNameRef}
                className="font-serif font-bold text-[14vw] sm:text-[10vw] lg:text-[7rem] leading-[0.88] text-white tracking-tight select-none will-change-transform"
              >
                {profile.firstName}
              </h2>
              <h2
                ref={lastNameRef}
                className="font-serif font-bold text-[14vw] sm:text-[10vw] lg:text-[7rem] leading-[0.88] text-white tracking-tight select-none mt-2 will-change-transform"
              >
                {profile.lastName}
              </h2>
            </div>
            <div className="mt-6 text-gray-400 font-sans text-xs sm:text-sm tracking-wide">
              <p>Full-stack</p>
              <p>developer</p>
            </div>
          </div>

          {/* Right Column: Monospace Tag, Nav Links, and Info Card */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between h-full space-y-8">
            {/* Monospace Header Tag */}
            <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
              ... /Contacts ...
            </div>

            {/* Clean Navigation Links with Magnetic Attraction */}
            <nav className="flex items-center flex-wrap gap-5 sm:gap-7 font-sans text-xs sm:text-sm text-gray-400">
              <Magnetic strength={0.3}>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Connect
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href={portfolioData.socials.find(s => s.name.toLowerCase() === 'github')?.url || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Source
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <button
                  onClick={scrollToTop}
                  className="circle-btn hover:bg-white hover:text-black transition-all"
                  aria-label="Back to Top"
                  title="Scroll to top"
                >
                  <FaArrowUp className="w-3 h-3" />
                </button>
              </Magnetic>
            </nav>

            {/* Info Box matching Reference Layout */}
            <div
              ref={infoBoxRef}
              className="border border-white/20 rounded-3xl p-6 bg-[#121316]/70 backdrop-blur-md w-full max-w-sm shadow-2xl hover:border-white/40 transition-colors"
            >
              <p className="font-mono text-sm text-white font-bold mb-3">
                {footer.years}
              </p>
              <div className="font-mono text-xs text-gray-400 space-y-1.5 leading-relaxed">
                <p>{footer.handcrafted}</p>
                <p>{footer.designedBy}</p>
                <p className="text-emerald-400">{footer.poweredBy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social / Contact Pills Bar with Magnetic Physics */}
        <div
          ref={pillsRef}
          className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {contactPills.map((pill, index) => (
            <Magnetic key={index} strength={0.25}>
              <a
                href={pill.url}
                onClick={(e) => {
                  if (pill.isMail && onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                target={pill.isMail ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="pill-btn hover:border-white/80 hover:bg-white/15"
                aria-label={`Contact via ${pill.name}`}
              >
                {renderContactIcon(pill.name)}
                <span className="font-medium text-xs sm:text-sm">{pill.name}</span>
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
