import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import ProfileSummary from './components/ProfileSummary';
import AccessibilityAnnouncer from './components/AccessibilityAnnouncer';
import { initAllMobileAnimations } from './utils/mobileScrollAnimations';

// Lazy load less critical components for better performance
const Education = lazy(() => import('./components/Education'));
const TechnicalSkills = lazy(() => import('./components/TechnicalSkills'));
const Projects = lazy(() => import('./components/Projects'));
const Hackathon = lazy(() => import('./components/Hackathon'));
const CoreCompetencies = lazy(() => import('./components/CoreCompetencies'));
const Declaration = lazy(() => import('./components/Declaration'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for better UX
const SectionLoader: React.FC = () => (
  <div className="section-padding">
    <div className="container mx-auto container-padding">
      <div className="lazy-placeholder max-w-4xl mx-auto">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
      </div>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    // Initialize simplified scroll animations
    const cleanup = initAllMobileAnimations();
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black gpu-accelerated">
      <AccessibilityAnnouncer />
      <Header />
      <main id="main-content" tabIndex={-1} role="main" aria-label="Main content">
        <ProfileSummary />
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechnicalSkills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Hackathon />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CoreCompetencies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Declaration />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
