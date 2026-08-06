import './sitenav.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE_LINKS } from '../../../data/siteLinks.js';
import useMediaQuery from '../../utils/useMediaQuery.js';
import HamburgerIcon from '../../../assets/images/hamburger.png';
import CloseIcon from '../../../assets/images/close.png';

/* The same row the home page carries under the name, lifted to the top of the
   page with Home added back — on the home page that link would only point at
   itself.

   Below 760px the row has no width left to sit in, so it folds behind the
   hamburger, which sits at the top right. Every page renders its own SiteNav,
   so following a link unmounts this one and the drawer closes on its own —
   there is nothing to reset.

   `mobileOnly` is for the home page, which already carries these links in the
   hero. There it is rendered for the hamburger alone and hides itself once the
   row is wide enough to appear. */

/* The width the row folds away at, shared with sitenav.css. Matched here rather
   than left to CSS alone because the drawer is mounted and unmounted by React
   now, and only the phone should be doing that. */
const PHONE = '(max-width: 760px)';

/* The drawer grows out of the bar rather than arriving at full height, and the
   links follow it in one after the next.

   Closing is not the opening played backwards: it runs faster and the links
   leave in reverse, the last one first, so the drawer looks like it is being
   drawn back up rather than falling apart. */
const DRAWER = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.18 },
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.22 },
      delayChildren: 0.1,
      staggerChildren: 0.055,
    },
  },
};

/* The arrival the rest of the site uses, tightened: a drawer is a short
   distance to travel, so the 40px the hero name rises through would read as a
   lurch at this size.

   Without the blur the rest of the site opens with, deliberately. Six of them
   animating a filter at once, over a panel that is itself still resizing, is
   work the compositor cannot hand off — it was visibly costing frames on a
   phone. Transform and opacity are free by comparison, and at 12px the blur was
   never doing much anyway. */
const DRAWER_LINK = {
  hidden: { y: 12, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

const DRAWER_LINK_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

/* The two icons are the same 34px box, so they cross over in place: the one
   leaving turns and shrinks out while the one arriving turns in behind it. The
   directions are opposite so the pair reads as a single object rotating. */
const ICON = {
  initial: (spin) => ({ opacity: 0, rotate: spin, scale: 0.65 }),
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: (spin) => ({ opacity: 0, rotate: -spin, scale: 0.65 }),
};

function SiteNav({ mobileOnly = false }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isPhone = useMediaQuery(PHONE);

  /* Home is compared exactly — every other path starts with "/", so a prefix
     test would light it up on every page of the site. */
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  /* With the row folded away there is nothing to say where you are, so the bar
     names the page beside the hamburger. Now that the detail pages sit under
     the section they belong to — /projects/axis, /journal/devcon-bangkok — the
     prefix test above reaches them too, and one names its section rather than
     coming up empty.

     Home is the exception and is skipped: naming it would only tell you that
     you are on the page you are looking at. */
  const current = SITE_LINKS.find((link) => link.to !== '/' && isActive(link.to));

  /* The name sits at the far left of the bar, which on a project or journal
     page is the corner the back button is pinned to. Those are the pages one
     level inside a section, so the route is enough to know — and knowing lets
     the name step aside for the button rather than land underneath it. The
     alternative was indenting it on every page, including the ones with
     nothing there to clear. */
  const hasBackButton = /^\/(projects|journal)\/.+/.test(pathname);

  const links = SITE_LINKS.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      className={isActive(link.to) ? 'site_link site_link--active' : 'site_link'}
      aria-current={isActive(link.to) ? 'page' : undefined}>
      {link.label}
    </Link>
  ));

  return (
    <nav
      className={[
        'site_nav',
        open ? 'site_nav--open' : '',
        mobileOnly ? 'site_nav--mobile-only' : '',
        hasBackButton ? 'site_nav--with-back' : '',
      ]
        .filter(Boolean)
        .join(' ')}>
      <div className="site_nav_bar">
        <button
          type="button"
          className="site_nav_toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((wasOpen) => !wasOpen)}>
          {/* initial={false} so the icon is simply there on first paint rather
              than spinning in at the top of every page */}
          <span className="site_nav_toggle_icon">
            <AnimatePresence initial={false}>
              <motion.img
                key={open ? 'close' : 'menu'}
                src={open ? CloseIcon : HamburgerIcon}
                alt=""
                custom={open ? -90 : 90}
                variants={ICON}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </span>
        </button>

        {current && <span className="site_nav_current">{current.label}</span>}
      </div>

      {/* On a wide screen the row is simply there. On a phone it is the drawer,
          mounted only while it is open — which is what gives it something to
          animate in and out of, and why the CSS no longer switches it on. */}
      {isPhone ? (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="site_nav_links"
              variants={DRAWER}
              initial="hidden"
              animate="open"
              exit="hidden">
              {links.map((link) => (
                <motion.div
                  key={link.key}
                  className="site_nav_link_row"
                  variants={DRAWER_LINK}
                  transition={DRAWER_LINK_TRANSITION}>
                  {link}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="site_nav_links">{links}</div>
      )}
    </nav>
  );
}

export default SiteNav;
