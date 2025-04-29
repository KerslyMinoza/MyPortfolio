import { Link } from 'react-router-dom';
import './nav.css'
import { useState } from 'react';
import HamburgerIcon from "../../assets/images/hamburger.png";
import CloseIcon from "../../assets/images/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Nav(){

  
    // Helper to check if a link is active
    const isActive = (path) => location.pathname === path;
    const [isOpen, setIsopen] = useState(false);

    console.log(isOpen);

    return(
        <div>
                 {/* if open is false, it'll show hamburger icon */}
            <div className="nav_mobile">
            
                {!isOpen && (
                    
                    <motion.div className="hamburger">
                        <button
                            type="button"
                            onClick={() => {
                                setIsopen(true); 
                            }}
                        >
                        <img src={HamburgerIcon}
                        />
                        </button>
                    </motion.div>

                )}

                {isOpen && ( 
                <motion.div 
                className="close"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <button
                        type="button"
                        onClick={() => {
                            setIsopen(false); 
                        }}
                    >
                    <img src={CloseIcon}
                    />
                    </button>


                    <ul>
                        <li><Link to="/" className={isActive("/") ? "activenav" : ""}>Home</Link></li>
                        <li><Link to="/aboutme" className={isActive("/aboutme") ? "activenav" : ""}>About Me</Link></li>
                        <li><Link to="/moreworks" className={isActive("/moreworks") ? "activenav" : ""}>More Works</Link></li>
                        <li><Link to="/contact" className={isActive("/contact") ? "activenav" : ""}>Contact</Link></li>
                    </ul>
                </motion.div>
                )}
            </div>
               


            <div className="nav_desktop">
                <ul>
                    <li><Link to="/" className={isActive("/") ? "activenav" : ""}>Home</Link></li>
                    <li><Link to="/aboutme" className={isActive("/aboutme") ? "activenav" : ""}>About Me</Link></li>
                    <li><Link to="/moreworks" className={isActive("/moreworks") ? "activenav" : ""}>More Works</Link></li>
                    <li><Link to="/contact" className={isActive("/contact") ? "activenav" : ""}>Contact</Link></li>
                </ul>
            </div>





        </div>
    );
}

export default Nav