'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { HiExternalLink, HiX } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import Magnetic from './animation/Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectSpotlightCard: React.FC<{
  project: ProjectItem;
  index: number;
  onOpenDetails: () => void;
}> = ({ project, index, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 hover:shadow-2xl transition-all duration-300 will-change-transform"
    >
      <div className="relative z-10">
        {/* Top bar with index and status */}
        <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="font-mono text-xs text-emerald-400 font-bold">
              0{index + 1}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#8A8985] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F3EF] mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-[#8A8985] font-mono mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#C4C3BE] font-sans leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Actions Footer */}
      <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <Magnetic strength={0.25}>
          <button
            onClick={onOpenDetails}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all font-sans text-xs sm:text-sm font-semibold cursor-pointer shadow-lg hover:shadow-white/20"
          >
            <span>View Project</span>
            <span className="font-mono text-xs">↗</span>
          </button>
        </Magnetic>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Magnetic strength={0.3}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="circle-btn hover:border-white/60"
                aria-label="View Source Code on GitHub"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          )}
          {project.liveUrl && (
            <Magnetic strength={0.3}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="circle-btn hover:border-white/60"
                aria-label="Visit Live Project"
              >
                <HiExternalLink className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current?.children) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }

      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Modal GSAP Zoom Animation
  useEffect(() => {
    if (activeProject && modalBackdropRef.current && modalBoxRef.current) {
      gsap.fromTo(
        modalBackdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalBoxRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.6)' }
      );
    }
  }, [activeProject]);

  const closeModal = () => {
    if (modalBackdropRef.current && modalBoxRef.current) {
      gsap.to(modalBoxRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(modalBackdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => setActiveProject(null),
      });
    } else {
      setActiveProject(null);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Projects Section Header */}
        <div ref={headerRef} className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              (02 / Selected Works)
            </p>
            <span className="font-mono text-xs text-[#8A8985]">
              01 – 0{projects.length}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F3EF] tracking-tight mb-4">
            Featured <span className="font-serif italic font-normal text-white/70">Engineering Projects</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-b border-white/10 pb-5">
            <p className="text-[#8A8985] text-xs sm:text-sm font-sans max-w-2xl">
              Production-ready applications, developer tools, and scalable systems engineered with clean code and modern component architecture.
            </p>
            <span className="font-mono text-sm text-[#8A8985] hidden sm:inline" aria-hidden="true">
              ↘
            </span>
          </div>
        </div>

        {/* Projects Grid with 3D Cascade & Spotlight Effect */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, idx) => (
            <ProjectSpotlightCard
              key={project.id}
              project={project}
              index={idx}
              onOpenDetails={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            ref={modalBoxRef}
            className="bg-[#141413] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-2 text-[#F4F3EF]">
              {activeProject.title}
            </h3>
            <p className="text-sm font-mono text-[#8A8985] mb-6">
              {activeProject.subtitle}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A8985] mb-3">
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
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A8985] mb-2">
                Overview
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                {activeProject.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              {activeProject.githubUrl && (
                <Magnetic strength={0.25}>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn hover:border-white/60"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </Magnetic>
              )}
              {activeProject.liveUrl && (
                <Magnetic strength={0.3}>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4F3EF] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-colors shadow-lg"
                  >
                    <span>Visit Live App</span>
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
