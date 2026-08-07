import './sitefooter.css';
import IconEmail from '../../../assets/images/icon_email.svg';
import IconLinkedin from '../../../assets/images/icon_linkedin.svg';

/* The quiet end of a page, as against Footer.jsx — the sign-off with the two
   contact cards, which is the contact page's own content and would be asking
   for the same thing twice if every page carried it.

   This one is a rule across the page, the year, and the two ways to reach me.
   Nothing else. It carries no copy of the navigation: .site_nav is sticky, so
   the row is already there at the bottom of a page the same as at the top, and
   a second set of the same six links is only a second set of the same six
   links.

   It runs the full width rather than sitting in the page's measure — it is the
   floor under the content, not another block of it. */

const EMAIL = 'kerslyminoza@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/kersly-mi%C3%B1oza-70586360/';

function SiteFooter() {
  /* Read at render rather than written in: the line would otherwise go stale
     on New Year's Day and nobody would notice for months. */
  const year = new Date().getFullYear();

  return (
    <footer className="site_footer">
      <span className="site_footer_copy">&copy; {year} Kersly Miñoza</span>

      <div className="site_footer_links">
        <a className="site_footer_link" href={`mailto:${EMAIL}`}>
          <img src={IconEmail} alt="" aria-hidden="true" />
          Email
        </a>

        <a
          className="site_footer_link"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer">
          <img src={IconLinkedin} alt="" aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
