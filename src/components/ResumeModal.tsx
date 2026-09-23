'use client';

import React, { useEffect, useRef } from 'react';
import { HiX, HiDownload, HiPrinter } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, skills, experience, education } = portfolioData;

  const backdropRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && backdropRef.current && boxRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        boxRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (backdropRef.current && boxRef.current) {
      gsap.to(boxRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={boxRef}
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-white/15 will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider bg-white/10 text-[#F4F3EF] px-3 py-1 rounded-full font-medium border border-white/10">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[#8A8985] font-mono">
              Édition 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <HiPrinter className="w-5 h-5" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-left">
          {/* Header info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-5">
            <div>
              <h2 className="font-serif font-light text-2xl sm:text-4xl text-[#F4F3EF]">
                {profile.firstName} <span className="font-serif italic font-normal text-white/70">{profile.lastName}</span>
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#8A8985] mt-1">
                {profile.role} · {profile.location}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8A8985]">
              <a
                href="https://github.com/Akankshyamishra7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/akankshya-mishra"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0a66c2] flex items-center gap-1 transition-colors"
              >
                <FaLinkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (01 / Profil & Vision)
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C3BE] leading-relaxed font-sans">
              {profile.tagline} Spécialisée en architecture full-stack, interfaces réactives haute fidélité, micro-animations immersives et intégrations d&apos;outils IA en temps réel.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (02 / Compétences Clés)
            </h3>
            <div className="text-xs space-y-1.5 font-mono text-[#C4C3BE]">
              <p><strong className="text-[#F4F3EF]">Frontend:</strong> {skills.frontend}</p>
              <p><strong className="text-[#F4F3EF]">Backend:</strong> {skills.backend}</p>
              <p><strong className="text-[#F4F3EF]">Design & Styles:</strong> {skills.styles}</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (03 / Expériences)
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-[#F4F3EF]">
                      {exp.role} — <span className="text-[#8A8985]">{exp.company}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#8A8985]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#8A8985] mt-2 space-y-1 font-sans">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (04 / Formation)
            </h3>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs p-3 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <span className="font-semibold text-[#F4F3EF]">{edu.degree}</span>
                    <span className="text-[#8A8985] block mt-0.5">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-[#8A8985] text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-5 py-2 rounded-full border border-white/15 hover:bg-white/10 text-xs sm:text-sm font-mono text-[#8A8985] hover:text-white transition-colors cursor-pointer"
          >
            Fermer
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4F3EF] text-black hover:bg-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <HiDownload className="w-4 h-4" />
            <span>Imprimer / PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
