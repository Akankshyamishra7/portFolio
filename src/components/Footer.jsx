import React from 'react';
import {
  Github, Linkedin, Mail, MapPin, GraduationCap,
  Zap, Code, Atom, FileCode, Palette, GitBranch, Grid3X3, Smartphone, Wind
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Profile', href: '#profile-summary' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#technical-skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#hackathon' },
    { name: 'Contact', href: '#declaration' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:akankshyam4@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Akankshya Mishra
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions 
              and building meaningful software that makes a difference.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Odisha, India</span>
              <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> ITER, SOA University</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {React.createElement(social.icon, { className: "w-4 h-4" })}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Summary */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Technologies I Work With</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Technologies with Lucide icons */}
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Zap className="w-4 h-4" /> JavaScript
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Code className="w-4 h-4" /> Python
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Atom className="w-4 h-4" /> ReactJS
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <FileCode className="w-4 h-4" /> HTML
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Palette className="w-4 h-4" /> CSS
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <GitBranch className="w-4 h-4" /> Git
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Github className="w-4 h-4" /> GitHub
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Grid3X3 className="w-4 h-4" /> Bootstrap
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Smartphone className="w-4 h-4" /> Material UI
              </span>
              <span className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                <Wind className="w-4 h-4" /> Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Akankshya Mishra. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Back to Top ↑
              </button>
              <div className="text-gray-400 text-sm">
                Built with ❤️ using React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;