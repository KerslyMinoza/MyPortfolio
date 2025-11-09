import Nav from '../components/layout/Nav/Nav.jsx';
import Hero from '../components/layout/Hero/Hero.jsx';
import FeaturedWorks from '../components/features/FeaturedWorks/FeaturedWorks.jsx';
import Footer from '../components/layout/components/layout/footer/Footer';


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