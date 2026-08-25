import { useEffect, useState } from 'react';

/** Tracks a media query so animation can adapt to layout and input capability. */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

/**
 * Whether a scroll-triggered entrance should fade as well as slide.
 *
 * A fade races the scroll. A finger flick covers 2000-4000px/s, so any practical
 * head start is a few dozen milliseconds against a ~500ms animation: the element
 * lands on screen still part-transparent, then snaps opaque, which reads as a
 * flash. Sliding alone has no opacity to catch mid-flight — the element is fully
 * visible on every frame — so narrow screens slide without fading.
 */
export const useFadeIn = (): boolean => useMediaQuery('(min-width: 640px)');
