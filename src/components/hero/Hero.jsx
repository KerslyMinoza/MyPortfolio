import './hero.css';
import KerslyGif from "../../assets/images/kersly.gif";
import { motion } from 'framer-motion';
import { bounceUp } from "../../components/animation.js";

function Hero(){

    const { variants, initial, whileInView, transition } = bounceUp(0.3);

    return(
        <motion.div
        variants={variants}
        initial={initial}
        animate="visible"
        transition={transition}
        viewport={{ once: true, amount: 0.2 }}
        className="container">
            <div className="hero-text">
                <div className="myname">Kersly Miñoza</div>
                <div

                className="myexperience">
                    <h1>
                        <span >UI/UX </span>
                        <span>Designer</span>
                        <span>with </span>
                        <span>almost </span>
                        <span>8</span>
                        <span>years</span>
                        <span>of</span>
                        <span>experience.</span>
                    </h1>
                </div>
            </div>
            
            <div className="hero">
                <img 
                    src={KerslyGif}
                    className="img-gif"
                />
            </div>


        </motion.div>
    );
}

export default Hero