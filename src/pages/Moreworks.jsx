
import Footer from '../components/footer/Footer.jsx';
import Nav from '../components/nav/Nav.jsx';
import './moreworks.css';
import Tiger from "../assets/images/moreworks/tiger.jpeg";
import { WORKS } from './works.js';
import { motion } from 'framer-motion';
import { bounceUp } from "../components/animation.js";

function Moreworks(){


    const { variants, initial, whileInView, transition } = bounceUp(0.3);
    return (
        <>
            <Nav/>
            <motion.div 
            variants={variants}
            initial={initial}
            animate="visible"
            transition={transition}
            viewport={{ once: true, amount: 0.2 }}
            className="mansory_moreworks">

            {WORKS.map((work) => (
                                 
            
                <div className="box">
                    <div className="image_box">
                        <img src={work.image}/>
                    </div>

                    <div className="image_title">
                        {work.name}
                    </div>

                    <div className="image_type">
                        {work.type}
                    </div>

                </div>
            ))}
            </motion.div>
            <Footer/>
        </>
    );
}

export default Moreworks