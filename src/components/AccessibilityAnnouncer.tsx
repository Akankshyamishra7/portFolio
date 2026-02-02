import React from 'react';
import { useScreenReader } from '../hooks/useAccessibility';

const AccessibilityAnnouncer: React.FC = () => {
  const { announcement } = useScreenReader();

  return (
    <div 
      aria-live="polite" 
      aria-atomic="true" 
      className="sr-only"
      id="accessibility-announcements"
    >
      {announcement}
    </div>
  );
};

export default AccessibilityAnnouncer;
