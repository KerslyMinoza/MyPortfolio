
import Footer from '../components/layout/footer/Footer';
import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';

/* The footer stays here — on this page it is the content, not a repeat of the
   navigation above it. */

function Contact(){

    return (
        <div>
            <SiteNav/>
            <div className="reduceMargin"></div>
            <Footer/>
        </div>
    );
}

export default Contact