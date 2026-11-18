import { useEffect, useState } from 'react';

const QUERY = '(hover: hover) and (pointer: fine)';

// True when the primary input can hover (a mouse or trackpad). Touch screens
// get tap-to-open behaviour instead of hover cards.
export const useHoverCapable = () => {
  const [capable, setCapable] = useState(() =>
    typeof window === 'undefined' || !window.matchMedia ? true : window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia(QUERY);
    const update = () => setCapable(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return capable;
};
