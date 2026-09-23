'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';
import Magnetic from './animation/Magnetic';

interface HeaderProps {
  onOpenArticles?: () => void;
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenArticles, onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string | HTMLElement, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset: -70, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0E0D]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Akankshya Mishra Personal Monogram & Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
            aria-label="Akankshya Mishra, return to top"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-400/50 group-hover:scale-105 transition-all">
              AM
            </div>
            <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#F4F3EF]">
              {profile.firstName.toLowerCase()}
              <span className="font-serif italic font-normal text-[#8A8985]">
                .{profile.lastName.toLowerCase()}
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-sans tracking-wide text-[#8A8985]">
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('feed')}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Feed
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* studiors.be primary CTA with glowing green availability dot */}
            <Magnetic strength={0.25}>
              <button
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                  else scrollToSection('contacts');
                }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-[#141413] hover:border-white/40 text-xs font-sans font-medium text-[#F4F3EF] transition-all cursor-pointer shadow-lg hover:shadow-emerald-500/5"
              >
                <span className="nav__cta-dot" />
                <span>Let&apos;s talk</span>
              </button>
            </Magnetic>

            {/* Articles button */}
            <button
              onClick={() => {
                if (onOpenArticles) onOpenArticles();
                else scrollToSection('feed');
              }}
              className="pill-nav cursor-pointer text-xs"
              aria-label="View Articles"
            >
              Articles
            </button>

            {/* GitHub button */}
            <a
              href={portfolioData.socials.find(s => s.name.toLowerCase() === 'github')?.url || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="circle-btn"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>

            {/* Mobile 2-line burger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* studiors.be Fullscreen Mobile Drawer (.mnav) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E0E0D]/98 backdrop-blur-2xl flex flex-col justify-between px-8 pt-28 pb-12 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
            (Menu)
          </p>

          <nav className="flex flex-col space-y-6 my-auto text-3xl font-serif text-[#F4F3EF]">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">01</i>
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">02</i>
              <span>About & Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">03</i>
              <span>Experience & Journey</span>
            </button>
            <button
              onClick={() => scrollToSection('feed')}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">04</i>
              <span>Feed & Insights</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
                else scrollToSection('contacts');
              }}
              className="flex items-baseline gap-4 text-left text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">05</i>
              <span className="italic font-editorial">Let&apos;s talk →</span>
            </button>
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#8A8985] gap-2">
            <span>Akankshya Mishra · Full-Stack Engineer</span>
            <a href="mailto:akankshyam4@gmail.com" className="text-white hover:underline">
              akankshyam4@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
