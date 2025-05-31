import './aboutme.css';
import Nav from '../../../components/nav/Nav';
import { motion } from 'framer-motion';
import AboutmeGif from "../../../assets/images/aboutme/aboutme.gif";
import Testimonials from '../../../components/testimonials/Testimonials';
import { CLIENTS } from '../../../components/testimonials/clients.js';
import { bounceUp } from "../../../components/animation.js";
import Footer from '../../../components/footer/Footer.jsx';


const { variants, initial, whileInView, transition } = bounceUp(0.3);



function Aboutme(){
    return (
        <>
            <Nav/>
            <div className="about_me">

                <div className="section_wrapper">
                    <div className="photo_holder">
                        <img 
                            src={AboutmeGif}
                        />
                    </div>

                    <motion.div 
                    variants={variants}
                    initial={initial}
                     animate="visible"
                    transition={transition}
                    viewport={{ once: true, amount: 0.2 }}
                    className="txt_aboutme">
                        <div className="section">Namaste!</div>
                        <div>
                            <p className="intro">I’m someone who’s always been caught between creativity and curiosity. I started out illustrating books, then moved into multimedia and design, eventually picking up a Master’s in IT along the way. That mix led me to front-end and UI/UX—where I get to blend visuals with real human experiences. I’m still learning the dev side of things, but I love being in a space where design and function meet. </p>
                            <p className="intro">  Outside of work, I’m usually painting, writing music, exploring new places, or hanging out with my fur babies. 
                            Life’s a mix of things, and honestly, that’s how I like it.</p>
                        </div> 
                    </motion.div>
                </div>

                <div className="section_wrapper margin-m">
                    <div className="section_name">What I can Do</div>
                        <motion.div                       
                        variants={variants}
                        initial={initial}
                        whileInView={whileInView}
                        transition={transition}
                        viewport={{ once: true, amount: 0.2 }}
                        className="service_wrapper">
                            <div className="service_box">
                                <h2>UI UX Design</h2>
                                <p>Mobile / Web App Design</p>
                                <p>UX Study</p>
                                <p>Realistic Prototyping</p>
                                <p>Landing Pages</p>
                            </div>

                            <div className="service_box">
                                <h2>Graphic Design</h2>
                                <p>Logo Creation</p>
                                <p>Complete Branding Package</p>
                                <p>Social Media Graphics</p>
                                <p>Photo Manipulation</p>
                                <p>Basic Video Editing</p>
                            </div>

                            <div className="service_box">
                                <h2>Front-End</h2>
                                <p>Basic Front End Development <br></br>using React JS & CSS</p>
                            </div>

                            <div className="service_box">
                                <h2>Illustrations</h2>
                                <p>Vector Drawings</p>
                                <p>Digital Painting</p>

                            </div>
                         </motion.div>
                </div>

                <div className="section_wrapper margin-m">
                    <div className="section_name">Experiences</div>
                    <motion.div 
                    variants={variants}
                    initial={initial}
                    whileInView={whileInView}
                    transition={transition}
                    viewport={{ once: true, amount: 0.2 }}
                    className="service_wrapper">
                            <div className="service_box">
                                <h2>2022 - Present</h2>
                                <p>UI UX Designer at Tensova Business Inc.</p>
                            </div>
                            

                            <div className="service_box">
                                <h2>2021-2022</h2>
                                <p>Full Time UI UX Designer for AXIS Martial Arts</p>
                            </div>

                            <div className="service_box">
                                <h2>2018-2021</h2>
                                <p>Multimedia Designer for Goodhangups</p>
                            </div>

                            <div className="service_box">
                                <h2>2017-2018</h2>
                                <p>Sotware Engineer/UI UX Designer at IdeaRobin</p>
                            </div>

                    </motion.div>
                </div>

                <div className="section_wrapper">
                    <div className="section_name">What They Say</div>

                </div>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-20% 0px" }} // Important!
                className="masonry">

                    {CLIENTS.map((clients) => (
                            <Testimonials clients={clients}/>      
                    ))}

                </motion.div>
            </div>

            <Footer/>


    </>   
        
    );
}

export default Aboutme