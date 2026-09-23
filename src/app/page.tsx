'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import AboutSkills from '@/components/AboutSkills';
import Projects from '@/components/Projects';
import Feed from '@/components/Feed';
import ExperienceEducation from '@/components/ExperienceEducation';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ArticlesModal from '@/components/ArticlesModal';
import ContactModal from '@/components/ContactModal';
import SmoothScrollProvider from '@/components/animation/SmoothScrollProvider';
import CustomCursor from '@/components/animation/CustomCursor';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToFeed = () => {
    const el = document.getElementById('feed');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <div className="min-h-screen bg-[#0E0E0D] text-[#F4F3EF] selection:bg-[#F4F3EF] selection:text-black">
      {/* Top Navigation */}
      <Header
        onOpenArticles={() => setIsArticlesOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: studiors.be Manifesto */}
        <Manifesto />

        {/* Section 3: About & Capabilities */}
        <AboutSkills />

        {/* Section 3: Projects */}
        <Projects />

        {/* Section 4: Feed */}
        <Feed />

        {/* Section 5: Experience & Education Timeline */}
        <ExperienceEducation />
      </main>

      {/* Section 6: Footer & Contacts */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ArticlesModal
        isOpen={isArticlesOpen}
        onClose={() => setIsArticlesOpen(false)}
        onScrollToFeed={scrollToFeed}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      </div>
    </SmoothScrollProvider>
  );
}
