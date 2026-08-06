import './home.css';
import Hero from '../components/layout/Hero/Hero.jsx';
import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';

/* On a wide screen the hero carries the site's links in its own row, so a top
   nav would only repeat them — which is why SiteNav is asked for the hamburger
   alone. It hides itself above 760px, and below it the hero's row hides instead
   and this becomes the navigation, the same hamburger every other page has.

   Standing at the top of the page, it is also what moves the reel, the name and
   the taglines down the screen on a phone.

   An older top nav is parked rather than removed — restore these and the <Nav/>
   below to bring it back:

   import Nav from '../components/layout/Nav/Nav.jsx';
   import useStackMode from '../components/utils/useStackMode.js';

   The page no longer locks its scroll either. That was there to hold the page
   still under the wheel-driven project deck, which is parked too — see
   Hero.jsx — and locking a page that has nothing to scroll just traps it. */

function Home(){

    return (
        <div className="home">
            {/* <Nav/> */}
            <SiteNav mobileOnly/>
            <Hero/>
        </div>
    );
}

export default Home
