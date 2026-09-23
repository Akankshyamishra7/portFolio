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

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { profile, socials } = portfolioData;

  const footerRef = useRef<HTMLElement>(null);
  const contactHeadRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact prompt reveal
      if (contactHeadRef.current) {
        gsap.from(contactHeadRef.current.children, {
          scrollTrigger: {
            trigger: contactHeadRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
        });
      }

      // Giant wordmark entrance
      if (wordmarkRef.current) {
        gsap.from(wordmarkRef.current, {
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
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

  return (
    <footer
      ref={footerRef}
      id="contacts"
      className="relative pt-24 pb-12 bg-[#0E0E0D] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Contact Section Prompt */}
        <div ref={contactHeadRef} className="mb-20 pb-16 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="nav__cta-dot" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Available for full-time engineering & freelance projects
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F3EF] tracking-tight mb-6">
            Have an ambitious project in mind?{' '}
            <span className="font-serif italic font-normal text-white/70 block sm:inline">
              Let&apos;s build together.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
            <a
              href="mailto:akankshyam4@gmail.com"
              className="font-serif text-2xl sm:text-4xl text-[#F4F3EF] hover:text-white underline decoration-white/30 underline-offset-8 transition-colors"
            >
              akankshyam4@gmail.com
            </a>

            <Magnetic strength={0.3}>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F4F3EF] text-black font-semibold text-sm sm:text-base hover:bg-white transition-all shadow-2xl cursor-pointer hover:shadow-white/20"
              >
                <span className="nav__cta-dot" />
                <span>Start a Conversation →</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20 text-xs sm:text-sm font-sans">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
                AM
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {profile.firstName.toLowerCase()}
                <span className="font-serif italic font-normal text-[#8A8985]">
                  .{profile.lastName.toLowerCase()}
                </span>
              </span>
            </div>
            <p className="text-[#8A8985] max-w-sm leading-relaxed">
              Full-stack engineer & creative developer.<br />
              Tailored UI design, GSAP motion & scalable architectures.
            </p>
          </div>

          {/* Nav Column */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Navigation
            </p>
            <div className="flex flex-col space-y-2 text-[#8A8985]">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                About & Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('feed')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Feed
              </button>
            </div>
          </div>

          {/* Socials Column */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Socials
            </p>
            <div className="flex flex-col space-y-2 text-[#8A8985]">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Contact
            </p>
            <div className="space-y-1 text-[#8A8985]">
              <a href="mailto:akankshyam4@gmail.com" className="text-white hover:underline block">
                akankshyam4@gmail.com
              </a>
              <p>Odisha, India</p>
              <p className="text-emerald-400 font-mono text-xs pt-1">
                UTC+05:30 · Open to remote worldwide
              </p>
            </div>
          </div>
        </div>

        {/* studiors.be Giant Wordmark at Bottom */}
        <div
          ref={wordmarkRef}
          className="pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center will-change-transform"
        >
          <div className="w-full flex items-center justify-between text-xs font-mono text-[#5C5B57] mb-6">
            <span>©2026 Akankshya Mishra</span>
            <span>Tous droits réservés</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Retour en haut</span>
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>

          <div className="select-none tracking-tighter leading-none text-[#F4F3EF] opacity-90 py-2">
            <span className="font-sans font-black text-[13vw] sm:text-[11vw] lg:text-[8.5rem] uppercase">
              {profile.firstName}
            </span>
            <span className="font-serif italic font-normal text-[13vw] sm:text-[11vw] lg:text-[8.5rem] text-gray-400 ml-3 sm:ml-6">
              .{profile.lastName.toLowerCase()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
