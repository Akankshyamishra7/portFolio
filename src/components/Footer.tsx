import React from 'react';
import { HiLocationMarker, HiAcademicCap, HiArrowUp, HiHeart } from 'react-icons/hi';
import { 
  FiGithub, FiLinkedin, FiMail, FiGitBranch
} from 'react-icons/fi';
import { 
  SiJavascript, SiPython, SiReact, SiHtml5, 
  SiCss3, SiBootstrap, SiMui, SiTailwindcss 
} from 'react-icons/si';

interface QuickLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: QuickLink[] = [
    { name: 'Profile', href: '#profile-summary' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#technical-skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#hackathon' },
    { name: 'Contact', href: '#declaration' }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: FiGithub, href: '#' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
    { name: 'Email', icon: FiMail, href: 'mailto:akankshyam4@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-green-900/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 font-serif">
              Akankshya Mishra
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions 
              and building meaningful software that makes a difference.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <HiLocationMarker className="w-4 h-4 text-green-400" /> Odisha, India
              </span>
              <span className="flex items-center gap-1">
                <HiAcademicCap className="w-4 h-4 text-green-400" /> ITER, SOA University
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-serif">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-serif">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-mono"
                >
                  {React.createElement(social.icon, { className: "w-4 h-4" })}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white font-serif">Technologies I Work With</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiJavascript className="w-4 h-4" /> JavaScript
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiPython className="w-4 h-4" /> Python
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiReact className="w-4 h-4" /> ReactJS
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiHtml5 className="w-4 h-4" /> HTML
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiCss3 className="w-4 h-4" /> CSS
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <FiGitBranch className="w-4 h-4" /> Git
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <FiGithub className="w-4 h-4" /> GitHub
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiBootstrap className="w-4 h-4" /> Bootstrap
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiMui className="w-4 h-4" /> Material UI
              </span>
              <span className="flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-300 font-mono">
                <SiTailwindcss className="w-4 h-4" /> Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-900 bg-black">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 font-mono">
              © {currentYear} Akankshya Mishra. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 flex items-center gap-2 font-mono uppercase tracking-wider"
              >
                Back to Top <HiArrowUp className="w-4 h-4" />
              </button>
              <div className="text-gray-500 text-sm flex items-center gap-1 font-mono">
                Built with <HiHeart className="text-green-500 w-4 h-4" /> using React & Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
