import './aboutme.css';
import Nav from '../components/layout/Nav/Nav.jsx';
import { motion } from 'framer-motion';
import AboutmeGif from "../assets/images/aboutme/aboutme.gif";
import Testimonials from '../components/features/Testimonials/Testimonials.jsx';
import { CLIENTS } from '../data/clients.js';
import { bounceUp } from "../components/utils/animation.js";
import Footer from '../components/layout/components/layout/footer/Footer.jsx';


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
                            <p className="intro">You could say I’m a jack of all trades. I love exploring different creative paths. I started as a book illustrator, moved into graphic design, and eventually shifted into front-end development. Along the way I earned my Master’s in IT and discovered my passion for UI/UX design, the place where everything I love comes together.  </p>
                             <p className="intro">I have a bit of knowledge in almost everything and I’m now learning the ropes of project management while continuing to build my own app with fun, playful interfaces.</p>
                            <p className="intro">  When I’m not working, I’m usually painting, writing songs, traveling, or spending time with my fur babies. I’ve even released two albums on Spotify.</p>
                            <p className="intro">Life’s a mix of things, and honestly, that’s how I like it.</p>
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
                                <p>UI/UX Designer at Nodies</p>
                            </div>
                            

                            <div className="service_box">
                                <h2>2021-2022</h2>
                                <p>UI/UX Designer for AXIS Martial Arts</p>
                            </div>

                            <div className="service_box">
                                <h2>2018-2021</h2>
                                <p>Graphic Designer/Illustrator at Goodhangups</p>
                            </div>

                            <div className="service_box">
                                <h2>2017-2018</h2>
                                <p>Sotware Engineer/ UIUX Designer at IdeaRobin</p>
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