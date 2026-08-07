
import Footer from '../components/layout/footer/Footer';
import SiteFooter from '../components/layout/SiteFooter/SiteFooter.jsx';
import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';

/* The sign-off footer stays here — on this page it is the content, not a repeat
   of the navigation above it.

   The slim one closes the page underneath it, the same as everywhere else. The
   two are not the same thing said twice: one is the ask, the other is the rule
   and the year that every page on the site now ends on. */

function Contact(){

    return (
        <div>
            <SiteNav/>
            <div className="reduceMargin"></div>
            <Footer/>
            <SiteFooter/>
        </div>
    );
}

export default Contact