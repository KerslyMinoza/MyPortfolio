import './footer.css';
import { motion } from 'framer-motion';
import { bounceUp } from "../../utils/animation.js";
import IconEmail from "../../../assets/images/icon_email.svg";
import IconLinkedin from "../../../assets/images/icon_linkedin.svg";


function Footer(){


    const { variants, initial, whileInView, transition } = bounceUp(0.3);
    
    return (
            <div className="footer_wrapper margin-m">
                <motion.div
                variants={variants}
                initial={initial}
                whileInView={whileInView}
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
                className="message">

                    {/* the break falls after "Build" rather than after "Apps":
                        "Let's Build Apps" on one line runs wider than the
                        footer at the display size on a large monitor */}
                    Let's Build<br/>Apps Together

                </motion.div>

                <div className="contacts_wrapper">

                    <div className="contact_box">
                        <div className="icon_holder"><img src={IconEmail}/></div>
                        <div className="contact_text">
                            You can always reach me at <br/>
                            <span style={{ fontWeight: '400',  fontStyle: 'italic' }}>kerslyminoza@gmail.com</span>
                        </div>
                        <a
                         href="mailto:kerslyminoza@gmail.com">

                            <div className="button_holder">
                                <span className="button-fill"></span>
                                <span className="button-text">Email Me</span>
                            </div>

                        </a>
                    </div>


                    <div className="contact_box">
                        <div className="icon_holder"><img src={IconLinkedin}/></div>
                        <div className="contact_text">
                            Add me to your Linkedin Network <br/> and send me a message!
                        </div>
                        <a
                            href="https://www.linkedin.com/in/kersly-mi%C3%B1oza-70586360/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            
                            <div className="button_holder">
                                <span className="button-fill"></span>
                                <span className="button-text">Connect</span>
                            </div>

                        </a>
                    </div>
                </div>
            </div>
        
    );
}

export default Footer