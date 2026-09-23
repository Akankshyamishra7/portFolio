'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

const AboutSkills: React.FC = () => {
  const { profile, skills, languages } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header matching Taisia Design */}
        <div className="mb-10">
          <h2 className="font-mono text-2xl sm:text-4xl text-white font-bold mb-4">
            ./About me
          </h2>
          <p className="text-gray-300 text-base sm:text-xl font-sans leading-relaxed">
            I'm <strong className="text-white font-semibold">{profile.firstName}</strong>, I'm a full-stack developer with{' '}
            <strong className="text-white font-semibold">over {profile.yearsExperience} years of experience.</strong>
          </p>
        </div>

        {/* 4 Cards Grid matching Taisia Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
          {/* Card 1: Front-end (White Highlight Card) */}
          <div className="bg-white text-gray-950 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-white">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-black">
                Front-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-800">
                {skills.frontend}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-mono text-gray-500 uppercase tracking-wider">
              High Performance & UI/UX
            </div>
          </div>

          {/* Card 2: Back-end (Dark Card) */}
          <div className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Back-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-400">
                {skills.backend}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Scalable APIs & Microservices
            </div>
          </div>

          {/* Card 3: Styles (Dark Card) */}
          <div className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Styles
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-400">
                {skills.styles}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Modern Responsive Systems
            </div>
          </div>

          {/* Card 4: Also (Dark Card) */}
          <div className="bg-[#111215] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
                Also
              </h3>
              <p className="text-xs text-white/70 italic mb-3 font-sans">
                Some of my favorite technologies, topics or tools that I worked with
              </p>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-400">
                {skills.also}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 uppercase tracking-wider">
              Craftsmanship & Integrity
            </div>
          </div>
        </div>

        {/* Languages Proficiency Row */}
        <div className="flex flex-wrap items-center gap-4 justify-start">
          {languages.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/20 bg-[#121316] text-xs sm:text-sm font-mono text-gray-300"
            >
              <span className="text-lg">{item.flag}</span>
              <span>{item.language}</span>
              <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] text-white/80 uppercase tracking-wider">
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
