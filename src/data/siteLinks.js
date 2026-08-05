/**
 * The site's one navigation row, shared by the home page and every page that
 * carries it along the top. Home is dropped on the home page itself — you are
 * already there — which is why it is the only entry without a `reel`.
 *
 * `reel` is the pair of stretches of the hero clip, in seconds, that the link
 * drives when it is hovered: `out` while you travel right along the row, `back`
 * while you travel left. They are different footage, not the same seconds
 * replayed — `back` runs from a later second to an earlier one, which is what
 * makes it a reverse.
 */
export const SITE_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Projects',
    to: '/projects',
    reel: {
      out: { from: 1.03, until: 1.21 },
      back: { from: 2.25, until: 2.01 },
    },
  },
  {
    label: 'Career',
    to: '/aboutme',
    reel: {
      out: { from: 1.31, until: 2.15 },
      back: { from: 3.19, until: 2.25 },
    },
  },
  {
    label: 'About Me',
    to: '/moreworks',
    reel: {
      out: { from: 2.15, until: 3.18 },
      back: { from: 3.29, until: 3.2 },
    },
  },
  {
    label: 'Journal',
    to: '/blog',
    reel: {
      out: { from: 3.21, until: 4.03 },
      back: { from: 4.12, until: 4.03 },
    },
  },
  {
    label: 'Contact',
    to: '/contact',
    reel: {
      out: { from: 4.03, until: 4.5 },
      back: { from: 4.2, until: 4.11 },
    },
  },
];

export default SITE_LINKS;
