import './footer.css';
import { motion } from 'framer-motion';
import { bounceUp } from "../../components/animation.js";
import IconEmail from "../../assets/images/icon_email.svg";
import IconLinkedin from "../../assets/images/icon_linkedin.svg";


function Footer(){


    const { variants, initial, whileInView, transition } = bounceUp(0.3);
    
    return (
            <div className="footer_wrapper margin-m">
                <div className="section_contact">Contact Me</div>
                
                <motion.div
                variants={variants}
                initial={initial}
                whileInView={whileInView}
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
                className="message">

                    Let's Build  <br/>SomethingTogether!
                    
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

                            <div className="button_holder">Email Me</div>

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
                            
                            <div className="button_holder">Connect</div>

                        </a>
                    </div>
                </div>
            </div>
        
    );
}

export default Footer