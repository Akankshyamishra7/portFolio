'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSkills from '@/components/AboutSkills';
import Projects from '@/components/Projects';
import Feed from '@/components/Feed';
import ExperienceEducation from '@/components/ExperienceEducation';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ArticlesModal from '@/components/ArticlesModal';
import ContactModal from '@/components/ContactModal';

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
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <Header
        onOpenArticles={() => setIsArticlesOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About & Skills */}
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
  );
}
