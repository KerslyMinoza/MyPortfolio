import './sitenav.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_LINKS } from '../../../data/siteLinks.js';
import HamburgerIcon from '../../../assets/images/hamburger.png';
import CloseIcon from '../../../assets/images/close.png';

/* The same row the home page carries under the name, lifted to the top of the
   page with Home added back — on the home page that link would only point at
   itself.

   Below 760px the row has no width left to sit in, so it folds behind the
   hamburger. Every page renders its own SiteNav, so following a link unmounts
   this one and the drawer closes on its own — there is nothing to reset. */
function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  /* Home is compared exactly — every other path starts with "/", so a prefix
     test would light it up on every page of the site. */
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  /* With the row folded away there is nothing to say where you are, so the bar
     names the page beside the hamburger. A project or blog post sits under no
     nav route, so there it stays empty rather than guessing. */
  const current = SITE_LINKS.find((link) => isActive(link.to));

  return (
    <nav className={open ? 'site_nav site_nav--open' : 'site_nav'}>
      <div className="site_nav_bar">
        <button
          type="button"
          className="site_nav_toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((wasOpen) => !wasOpen)}>
          <img src={open ? CloseIcon : HamburgerIcon} alt="" />
        </button>

        {current && <span className="site_nav_current">{current.label}</span>}
      </div>

      <div className="site_nav_links">
        {SITE_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={isActive(link.to) ? 'site_link site_link--active' : 'site_link'}
            aria-current={isActive(link.to) ? 'page' : undefined}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default SiteNav;
