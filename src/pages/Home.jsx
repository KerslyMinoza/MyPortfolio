import Nav from '../components/nav/Nav.jsx';
import Hero from '../components/hero/Hero.jsx';
import FeaturedWorks from '../components/featured/FeaturedWorks.jsx';
import Footer from '../components/footer/Footer.jsx';


function Home(){

    return (
        <div>
            <Nav/>
            <Hero/>
            <FeaturedWorks/>
            <Footer/>
        </div>
    );
}

export default Home