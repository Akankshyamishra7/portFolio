'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa6';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { profile } = portfolioData;

  const [step, setStep] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Site web',
    budget: '3 K – 5 K',
    message: '',
    consent: true,
  });

  const backdropRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormSubmitted(false);
      if (backdropRef.current && boxRef.current) {
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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setFormSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#22c55e', '#3b82f6', '#ec4899'],
        });
      } catch {
        // safe fallback
      }

      setTimeout(() => {
        handleClose();
      }, 2500);
    }
  };

  if (!isOpen) return null;

  const subjects = ['Site web', 'Full-stack Web App', 'UI/UX Design', 'API & Cloud Architecture'];
  const budgets = ['1,5 K – 3 K', '3 K – 5 K', '5 K – 15 K', '> 15 K'];

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={boxRef}
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* studiors.be Multi-Step Form Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400">
              0{step}
            </span>
            <span className="font-mono text-xs text-[#8A8985]">/ 03</span>
            <span className="text-xs font-mono text-[#8A8985] ml-2">
              {step === 1 && '· Qui êtes-vous ?'}
              {step === 2 && '· Le projet'}
              {step === 3 && '· Racontez-moi'}
            </span>
          </div>

          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {formSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-bounce">
              <HiCheck className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-white">Bien reçu.</h4>
            <p className="text-xs sm:text-sm text-[#8A8985] max-w-xs mx-auto leading-relaxed">
              Message envoyé. Je reviens vers vous sous 48 h ouvrées avec une première lecture de votre projet.
            </p>
          </div>
        ) : (
          <form onSubmit={handleNextStep} className="space-y-5 text-left font-sans">
            {/* Step 1: Contact Details */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">
                    Prénom & nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Camille Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="camille@exemple.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Subject & Budget */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-2.5">
                    Il s'agit de…
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((sub, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: sub })}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          formData.subject === sub
                            ? 'bg-[#F4F3EF] text-black font-semibold'
                            : 'bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-2.5">
                    Budget envisagé <em className="text-gray-500 font-normal">· indicatif</em>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#F4F3EF] text-black font-semibold'
                            : 'bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Message & Consent */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">
                    Votre projet en quelques lignes
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contexte, envies, échéances souhaitées..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-[#8A8985] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-white/20 text-emerald-500 focus:ring-0"
                    required
                  />
                  <span>
                    J'accepte que mes informations soient utilisées pour répondre à ma demande.
                  </span>
                </label>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-mono text-[#8A8985] hover:text-white transition-colors cursor-pointer"
                >
                  ← Retour
                </button>
              ) : (
                <a
                  href="mailto:akankshyam4@gmail.com"
                  className="text-xs font-mono text-[#8A8985] hover:text-white underline"
                >
                  ou email direct
                </a>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4F3EF] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all cursor-pointer shadow-xl hover:shadow-white/20"
              >
                <span>{step === 3 ? 'Envoyer' : 'Continuer'}</span>
                {step === 3 ? (
                  <FaPaperPlane className="w-3.5 h-3.5" />
                ) : (
                  <span className="font-mono text-xs">→</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
