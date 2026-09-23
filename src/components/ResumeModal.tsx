'use client';

import React from 'react';
import { HiX, HiDownload, HiPrinter } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { profile, skills, experience, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-900 rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider bg-gray-900 text-white px-3 py-1 rounded-full">
              Curriculum Vitae
            </span>
            <span className="text-xs text-gray-500 font-mono">
              Last updated: 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <HiPrinter className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-left">
          {/* Header info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-gray-100 pb-5">
            <div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-gray-950">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-sm font-sans font-medium text-gray-600">
                {profile.role} · {profile.location}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-600">
              <a
                href="https://github.com/Akankshyamishra7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black flex items-center gap-1"
              >
                <FaGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/akankshya-mishra"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black flex items-center gap-1"
              >
                <FaLinkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
              Profile Summary
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              {profile.tagline} Experienced in full-stack architecture, performant modern UI design, state management, and real-time AI tools.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
              Core Technical Skills
            </h3>
            <div className="text-xs space-y-1 font-mono text-gray-800">
              <p><strong>Frontend:</strong> {skills.frontend}</p>
              <p><strong>Backend:</strong> {skills.backend}</p>
              <p><strong>Design & Styles:</strong> {skills.styles}</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3">
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs sm:text-sm text-gray-950">
                      {exp.role} — {exp.company}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-0.5 font-sans">
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
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
              Education
            </h3>
            <div className="space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-gray-950">{edu.degree}</span>
                    <span className="text-gray-600 block">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-gray-500">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 text-xs sm:text-sm font-medium font-sans"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 text-xs sm:text-sm font-medium font-sans shadow-md cursor-pointer"
          >
            <HiDownload className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
