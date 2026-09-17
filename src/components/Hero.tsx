import React from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTelegram, 
  FaFacebookF, 
  FaInstagram 
} from 'react-icons/fa6';
import { HiArrowDown } from 'react-icons/hi2';
import { portfolioData, SocialLink } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile, socials } = portfolioData;

  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedinIn className="w-3.5 h-3.5 text-blue-400" />;
      case 'telegram':
        return <FaTelegram className="w-3.5 h-3.5 text-sky-400" />;
      case 'facebook':
        return <FaFacebookF className="w-3.5 h-3.5 text-blue-500" />;
      case 'instagram':
        return <FaInstagram className="w-3.5 h-3.5 text-pink-400" />;
      default:
        return <FaGithub className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#0a0a0c]">
      {/* Background Dot Matrix Pattern with Radial Glow */}
      <div className="absolute inset-0 pointer-events-none dot-matrix opacity-40 z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto">
        {/* Massive Typography Grid matching Screenshot 1 */}
        <div className="relative">
          {/* Row 1: "Full-stack" + Resume Pill & Arrow */}
          <div className="flex flex-wrap items-baseline gap-4 sm:gap-8 justify-start">
            <h1 className="font-serif font-bold text-[13vw] sm:text-[9vw] lg:text-[8.5rem] text-white tracking-tight leading-none select-none drop-shadow-sm">
              Full-stack
            </h1>

            {/* Resume Pill with Download Arrow */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2.5 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-xl font-sans text-xs sm:text-sm font-medium cursor-pointer hover:scale-105"
                aria-label="Open Resume"
              >
                <span className="italic font-serif">Resume...</span>
              </button>
              <button
                onClick={onOpenResume}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                aria-label="Download Resume"
              >
                <HiArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Row 2: Left Mission Statement + Right "Developer" */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start mt-2 sm:mt-4">
            {/* Left Column: Mission statement under "Full-stack" */}
            <div className="md:col-span-4 lg:col-span-4 pt-2 md:pt-4">
              <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-xs">
                My goal is to{' '}
                <strong className="text-white font-medium italic">
                  write maintainable, clean
                </strong>{' '}
                and{' '}
                <strong className="text-white font-medium italic">
                  understandable code
                </strong>{' '}
                to make development process enjoyable.
              </p>
            </div>

            {/* Right Column: Massive "Developer" */}
            <div className="md:col-span-8 lg:col-span-8 flex justify-start md:justify-center">
              <h1 className="font-serif font-bold text-[13vw] sm:text-[9vw] lg:text-[8.5rem] text-white tracking-tight leading-none select-none drop-shadow-sm">
                Developer
              </h1>
            </div>
          </div>
        </div>

        {/* Social Pills Bar matching Screenshot 1 */}
        <div className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socials.map((social: SocialLink, index: number) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn"
              aria-label={`Visit ${social.name}`}
            >
              {renderSocialIcon(social.name)}
              <span className="font-medium text-xs sm:text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section: Transition with Perspective Grid and About Snippet */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full mt-16 sm:mt-24">
        {/* 3D Perspective Grid receding into bottom floor */}
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none perspective-grid-floor opacity-30 z-0"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-8 border-t border-white/10">
          {/* Left: Monospace section tag */}
          <div className="font-mono text-xs sm:text-sm text-gray-400 tracking-wider">
            <span className="text-white font-semibold">... /About me ...</span>
          </div>

          {/* Right: Intro snippet */}
          <div className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed text-left sm:text-right max-w-sm">
            <p>
              Hello! I'm{' '}
              <strong className="text-white font-semibold">
                {profile.firstName}
              </strong>
              , a full-stack developer.
            </p>
            <p>
              With more than{' '}
              <strong className="text-white font-semibold">
                {profile.yearsExperience} years
              </strong>{' '}
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
