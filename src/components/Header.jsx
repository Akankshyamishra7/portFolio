import { useState, useEffect, useCallback, useRef } from 'react';
import { useDebounce } from '../hooks/usePerformance';
import { useFocusManagement, useKeyboardNavigation } from '../hooks/useAccessibility';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for accessibility
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  
  // Debounce scroll position for better performance
  const debouncedScrollY = useDebounce(scrollY, 10);
  
  // Accessibility hooks
  const { trapFocus } = useFocusManagement();

  // Memoized scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);
  }, []);

  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Manage focus for accessibility
    if (newState && mobileMenuRef.current) {
      trapFocus(mobileMenuRef.current);
    } else if (!newState && mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.focus();
    }
  };

  // Keyboard navigation for mobile menu
  useKeyboardNavigation(
    null, // onEnter - handled by individual buttons
    () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    }, // onEscape - close mobile menu
    null // onArrowKeys - not needed for this component
  );

  return (
    <>
      {/* Skip to main content link for accessibility */}
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/80 backdrop-blur-sm'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="container mx-auto container-padding py-3 sm:py-4">
          <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
              AKANKSHYA MISHRA
            </h1>
            <p className="text-gray-600 font-medium text-xs sm:text-sm hidden sm:block">
              DEVELOPER | STUDENT
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'About', id: 'profile-summary' },
              { label: 'Education', id: 'education' },
              { label: 'Skills', id: 'technical-skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'hackathon' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 focus-ring px-3 py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <button
            onClick={() => scrollToSection('declaration')}
            className="btn-primary hidden lg:inline-flex"
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus-ring"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-2">
            {[
              { label: 'About', id: 'profile-summary' },
              { label: 'Education', id: 'education' },
              { label: 'Skills', id: 'technical-skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'hackathon' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-menu-item"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a href="mailto:akankshyam4@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="text-lg">✉️</span>
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