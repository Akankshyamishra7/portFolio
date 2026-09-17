import React, { useState } from 'react';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { profile } = portfolioData;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-[#121316] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <FaEnvelope className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-white">
              Get in touch
            </h3>
            <p className="text-xs text-gray-400 font-sans">
              Send a direct message to {profile.firstName}
            </p>
          </div>
        </div>

        {formSubmitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
              <HiCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-white">Message Sent!</h4>
            <p className="text-xs text-gray-400">
              Thank you! I will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-white text-xs sm:text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-white text-xs sm:text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Akankshya, I'd like to talk about..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-white text-xs sm:text-sm focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href="mailto:akankshyam4@gmail.com"
                className="text-xs font-mono text-gray-400 hover:text-white underline"
              >
                or email directly
              </a>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-200 transition-all cursor-pointer shadow-lg"
              >
                <span>Send</span>
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
