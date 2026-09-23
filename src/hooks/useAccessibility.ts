import { useEffect, useState, useCallback, useSyncExternalStore } from 'react';

// Hook for managing focus and keyboard navigation
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  const trapFocus = useCallback((containerElement: HTMLElement) => {
    const focusableElements = containerElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    containerElement.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      containerElement.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  const manageFocus = useCallback((element: HTMLElement | null) => {
    setFocusedElement(element);
    element?.focus();
  }, []);

  return { trapFocus, manageFocus, focusedElement };
};

// Hook for screen reader announcements
export const useScreenReader = () => {
  const [announcement, setAnnouncement] = useState<string>('');

  const announce = useCallback((message: string, _priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement('');
    setTimeout(() => {
      setAnnouncement(message);
    }, 100);
  }, []);

  const clearAnnouncement = useCallback(() => {
    setAnnouncement('');
  }, []);

  return { announcement, announce, clearAnnouncement };
};

// Hook for keyboard navigation
export const useKeyboardNavigation = (
  onEnter: ((e: KeyboardEvent) => void) | null,
  onEscape: ((e: KeyboardEvent) => void) | null,
  onArrowKeys: ((e: KeyboardEvent) => void) | null
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
          onEnter?.(e);
          break;
        case 'Escape':
          onEscape?.(e);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          onArrowKeys?.(e);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEnter, onEscape, onArrowKeys]);
};

const getServerSnapshot = () => false;

// Hook for reduced motion preferences
function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const useReducedMotion = () => {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getServerSnapshot);
};

// Hook for high contrast mode
function subscribeHighContrast(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-contrast: high)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getHighContrastSnapshot() {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

export const useHighContrast = () => {
  return useSyncExternalStore(subscribeHighContrast, getHighContrastSnapshot, getServerSnapshot);
};
