import { useEffect, useState } from 'react';

/**
 * Tracks a media query and re-renders when it flips.
 * Used to swap the scroll-driven project deck for a plain list on small screens.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    setMatches(list.matches); // query may have changed between render and effect
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
