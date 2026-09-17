import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ExperienceEducation: React.FC = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-14">
          <h2 className="font-mono text-2xl sm:text-4xl text-white font-bold mb-3">
            ./Experience & Education
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans">
            Professional trajectory, roles shipped, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Experience Column */}
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              Work Experience
            </h3>

            <div className="space-y-6 relative pl-6 border-l border-white/15">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0c] border-2 border-white group-hover:scale-125 transition-transform"></div>

                  <div className="bg-[#111215] border border-white/15 rounded-3xl p-6 hover:border-white/30 transition-all">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4">
                      {exp.company} · {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-4 text-xs text-gray-400 font-sans">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-white/60">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              Education & Degrees
            </h3>

            <div className="space-y-6 relative pl-6 border-l border-white/15">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0c] border-2 border-white group-hover:scale-125 transition-transform"></div>

                  <div className="bg-[#111215] border border-white/15 rounded-3xl p-6 hover:border-white/30 transition-all">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4">
                      {edu.institution} · {edu.location}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
