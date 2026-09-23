'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  onOpenArticles?: () => void;
  onOpenResume?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenArticles, onOpenResume }) => {
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Stacked Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex flex-col font-serif font-bold text-base sm:text-lg tracking-tight leading-tight text-white hover:opacity-80 transition-opacity"
        >
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </a>

        {/* Center: Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-sans text-gray-300">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('feed')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Feed
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Articles pill & GitHub circle button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenArticles) onOpenArticles();
              else scrollToSection('feed');
            }}
            className="pill-nav cursor-pointer"
            aria-label="View Articles and Feed"
          >
            Articles
          </button>

          <a
            href={portfolioData.socials.find(s => s.name.toLowerCase() === 'github')?.url || 'https://github.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0e0f12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col space-y-4 text-sm font-mono text-gray-300">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-1 hover:text-white"
            >
              ./About me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left py-1 hover:text-white"
            >
              ./Projects
            </button>
            <button
              onClick={() => scrollToSection('feed')}
              className="text-left py-1 hover:text-white"
            >
              ./Feed
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left py-1 hover:text-white"
            >
              ./Experience & Education
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-left py-1 hover:text-white"
            >
              ./Contacts
            </button>
            {onOpenResume && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mt-2 text-left text-white bg-white/10 px-4 py-2 rounded-full w-max border border-white/20"
              >
                Resume... ↓
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
