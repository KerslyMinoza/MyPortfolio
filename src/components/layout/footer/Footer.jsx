import './footer.css';
import { motion } from 'framer-motion';
import { introItem, introTransition, INTRO_STAGGER } from "../../utils/animation.js";
import IconEmail from "../../../assets/images/icon_email.svg";
import IconLinkedin from "../../../assets/images/icon_linkedin.svg";

/* The sign-off, a word at a time so each one can arrive on its own — the same
   thing the home page's name does.

   The break falls after "Build" rather than after "Apps": "Let's Build Apps"
   on one line runs wider than the footer at the display size on a large
   monitor. Each line is its own row, and wraps again inside itself on a phone,
   where the type is set larger still. */
const MESSAGE_LINES = [["Let's", 'Build'], ['Apps', 'Together']];

function Footer(){

    return (
            <div className="footer_wrapper margin-m">
                {/* whileInView rather than the hero's animate: on the contact
                    page this is the top of the page and runs on arrival, but
                    everywhere else it is the last thing down the page and
                    should wait to be reached */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: INTRO_STAGGER }}
                viewport={{ once: true, amount: 0.2 }}
                className="message">

                    {MESSAGE_LINES.map((words) => (
                        <span className="message_line" key={words.join(' ')}>
                            {words.map((word) => (
                                <motion.span
                                    key={word}
                                    className="message_word"
                                    variants={introItem}
                                    transition={introTransition}>
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    ))}

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