import { useReducedMotion } from 'framer-motion';
import useMediaQuery from './useMediaQuery.js';

/**
 * True when the hero should run the pinned, wheel-driven project deck.
 * Small screens and prefers-reduced-motion get the plain scrolling list, so
 * both the hero and the page shell that locks scrolling have to agree.
 */
export default function useStackMode() {
  const isCompact = useMediaQuery('(max-width: 1000px)');
  const prefersReducedMotion = useReducedMotion();

  return !isCompact && !prefersReducedMotion;
}
