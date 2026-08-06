/**
 * The site's one navigation row, shared by the home page and every page that
 * carries it along the top. Home is dropped on the home page itself — you are
 * already there — which is why it is the only entry without a `reel`.
 *
 * `reel` is the stretch of the hero clip the link drives when it is hovered.
 * Travelling right along the row plays it forwards; travelling left plays the
 * same stretch in reverse, which Hero.jsx scrubs by hand — video has no reverse
 * gear.
 */

/* Stretches are in seconds, which is what currentTime wants — no conversion.
 * They run back to back down public/vid3.mp4, which is 6.47s long: each one
 * picks up a hundredth after the last leaves off.
 *
 * What the reel runs when nothing in the row is hovered: forwards, then back to
 * the start, over and over. */
export const IDLE_REEL = { from: 0, until: 1 };
export const SITE_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Projects',
    to: '/projects',
    reel: { from: 1, until: 2.1 },
  },
  {
    label: 'Career',
    to: '/career',
    reel: { from: 2.11, until: 3 },
  },
  {
    label: 'About Me',
    to: '/about-me',
    reel: { from: 3.01, until: 4.13 },
  },
  {
    label: 'Journal',
    to: '/journal',
    reel: { from: 4.14, until: 5 },
  },
  {
    label: 'Contact',
    to: '/contact',
    reel: { from: 5, until: 5.2 },
  },
];

export default SITE_LINKS;
