import { useEffect, useRef, useState } from 'react';

export type DrawPhase = 'idle' | 'armed' | 'in';

// Lets a figure draw itself the first time it scrolls into view. A figure
// already on screen at load draws straight away; without IntersectionObserver
// it is simply shown.
export const useDrawOnView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<DrawPhase>('idle');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window) || element.getBoundingClientRect().top <= window.innerHeight) {
      setPhase('in');
      return;
    }

    setPhase('armed');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase('in');
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, phase] as const;
};
