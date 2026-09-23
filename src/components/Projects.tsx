'use client';

import React, { useState } from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa6';
import { HiExternalLink, HiX } from 'react-icons/hi';
import { portfolioData, ProjectItem } from '../data/portfolioData';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12">
          <h2 className="font-mono text-2xl sm:text-4xl text-white font-bold mb-3">
            ./Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans">
            A selection of production-grade web applications, developer tools, and scalable systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111216] border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/40 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group"
            >
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs text-gray-400 font-mono mb-4">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all font-sans text-xs sm:text-sm font-medium cursor-pointer"
                >
                  <span>Project Details</span>
                  <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="circle-btn"
                      aria-label="View Source Code on GitHub"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="circle-btn"
                      aria-label="Visit Live Project"
                    >
                      <HiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#121316] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-2 text-white">
              {activeProject.title}
            </h3>
            <p className="text-sm font-mono text-gray-400 mb-6">
              {activeProject.subtitle}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Overview
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                {activeProject.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-200 transition-colors shadow-lg"
                >
                  <span>Visit Live App</span>
                  <HiExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
