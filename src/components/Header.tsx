import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useFocusManagement, useKeyboardNavigation } from '../hooks/useAccessibility';
import { HiMail } from 'react-icons/hi';

interface NavItem {
  label: string;
  id: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Refs for accessibility
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  
  // Accessibility hooks
  const { trapFocus } = useFocusManagement();

  // Memoized scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    if (newState && mobileMenuRef.current) {
      trapFocus(mobileMenuRef.current);
    } else if (!newState && mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.focus();
    }
  };

  useKeyboardNavigation(
    null,
    () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    },
    null
  );

  const navItems: NavItem[] = [
    { label: 'About', id: 'profile-summary' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'technical-skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'hackathon' },
  ];

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link focus-visible"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          mainContent?.focus();
          mainContent?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Skip to main content
      </a>
      
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-green-500/10 border-b border-green-900/50' : 'bg-black/80 backdrop-blur-sm'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="container mx-auto container-padding py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text font-serif tracking-wide">
                AKANKSHYA MISHRA
              </h1>
              <p className="text-gray-400 font-mono text-xs sm:text-sm hidden sm:block tracking-widest uppercase">
                Developer | Student
              </p>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-green-400 font-mono font-medium transition-all duration-300 hover:scale-105 focus-ring px-3 py-2 text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollToSection('declaration')}
              className="btn-primary hidden lg:inline-flex"
            >
              Get In Touch
            </button>

            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 focus-ring group"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span 
                  className={`block h-0.5 w-full bg-green-400 rounded-full transition-all duration-300 ease-in-out origin-center ${
                    isMobileMenuOpen 
                      ? 'rotate-45 translate-y-[9px] bg-green-300' 
                      : 'group-hover:bg-green-300 group-hover:w-4'
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-green-400 rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                      ? 'opacity-0 translate-x-4' 
                      : 'w-full group-hover:bg-green-300'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-full bg-green-400 rounded-full transition-all duration-300 ease-in-out origin-center ${
                    isMobileMenuOpen 
                      ? '-rotate-45 -translate-y-[9px] bg-green-300' 
                      : 'group-hover:bg-green-300 group-hover:w-5 group-hover:ml-auto'
                  }`}
                />
              </div>
            </button>
          </div>

          <div 
            ref={mobileMenuRef}
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'max-h-96 opacity-100 mt-4 pb-4' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-menu-item"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex flex-col space-y-3">
                  <a href="mailto:akankshyam4@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                    <HiMail className="text-lg text-green-400" />
                    <span className="text-sm">akankshyam4@gmail.com</span>
                  </a>
                  <button
                    onClick={() => scrollToSection('declaration')}
                    className="btn-primary mt-4"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
