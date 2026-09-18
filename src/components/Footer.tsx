import React from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTelegram, 
  FaFacebookF, 
  FaInstagram,
  FaEnvelope 
} from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenContact?: () => void;
}

interface ContactPill {
  name: string;
  url: string;
  isMail?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { profile, socials, footer } = portfolioData;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContactIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'e-mail':
      case 'email':
        return <FaEnvelope className="w-3.5 h-3.5" />;
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

  // Contacts pill list matching Screenshot 3: E-Mail, Github, Linkedin, Telegram, Facebook, Instagram
  const contactPills: ContactPill[] = [
    { name: "E-Mail", url: "mailto:akankshyam4@gmail.com", isMail: true },
    ...socials
  ];

  return (
    <footer id="contacts" className="relative pt-20 pb-12 bg-[#090a0c] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Massive Stacked Name & Subtitle matching Screenshot 3 */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-serif font-bold text-[14vw] sm:text-[10vw] lg:text-[7rem] leading-[0.88] text-white tracking-tight select-none">
                {profile.firstName}
              </h2>
              <h2 className="font-serif font-bold text-[14vw] sm:text-[10vw] lg:text-[7rem] leading-[0.88] text-white tracking-tight select-none mt-1">
                {profile.lastName}
              </h2>
            </div>
            <div className="mt-6 text-gray-400 font-sans text-xs sm:text-sm tracking-wide">
              <p>Full-stack</p>
              <p>developer</p>
            </div>
          </div>

          {/* Right Column: Monospace Tag, Nav Links, and Info Card matching Screenshot 3 */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between h-full space-y-8">
            {/* Monospace Header Tag */}
            <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
              ... /Contacts ...
            </div>

            {/* Clean Navigation Links */}
            <nav className="flex items-center flex-wrap gap-6 sm:gap-8 font-sans text-xs sm:text-sm text-gray-400">
              <button
                onClick={() => scrollToSection('contacts')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Connect
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <a
                href={portfolioData.socials.find(s => s.name.toLowerCase() === 'github')?.url || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Source
              </a>
            </nav>

            {/* Info Box matching Screenshot 3 */}
            <div className="border border-white/20 rounded-2xl p-5 bg-[#121316]/60 backdrop-blur-md w-full max-w-sm shadow-xl">
              <p className="font-mono text-sm text-white font-bold mb-3">
                {footer.years}
              </p>
              <div className="font-mono text-xs text-gray-400 space-y-1">
                <p>{footer.handcrafted}</p>
                <p>{footer.designedBy}</p>
                <p>{footer.poweredBy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social / Contact Pills Bar matching Screenshot 3 */}
        <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {contactPills.map((pill, index) => (
            <a
              key={index}
              href={pill.url}
              onClick={(e) => {
                if (pill.isMail && onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              target={pill.isMail ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="pill-btn"
              aria-label={`Contact via ${pill.name}`}
            >
              {renderContactIcon(pill.name)}
              <span className="font-medium text-xs sm:text-sm">{pill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
