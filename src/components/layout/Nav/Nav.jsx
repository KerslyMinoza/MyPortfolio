import { Link, useLocation } from 'react-router-dom';
import './nav.css'
import { useState } from 'react';
import HamburgerIcon from "../../../assets/images/hamburger.png";
import CloseIcon from "../../../assets/images/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Nav(){

    const [isOpen, setIsopen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

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
                        <li><Link to="/projects" className={isActive("/projects") ? "activenav" : ""}>All projects</Link></li>
                        <li><Link to="/aboutme" className={isActive("/aboutme") ? "activenav" : ""}>About Me</Link></li>
                        <li><Link to="/blog" className={isActive("/blog") ? "activenav" : ""}>Random Blog</Link></li>
                        <li><Link to="/contact" className={isActive("/contact") ? "activenav" : ""}>Contact</Link></li>
                    </ul>
                </motion.div>
                )}
            </div>
               


            <div className="nav_desktop">
                {/* the portrait the hero used to carry, now leading the links.
                    Home sits right beside it, so it is left as an image rather
                    than a second link to the same page */}
                <div className="nav_lead">
                    {/* lives in public/, so it is served straight off the root */}
                    <img className="nav_avatar" src="/avatar.png" alt="Kersly Miñoza" />

                    <ul>
                        <li><Link to="/" className={isActive("/") ? "activenav" : ""}>Home</Link></li>
                        <li><Link to="/projects" className={isActive("/projects") ? "activenav" : ""}>All projects</Link></li>
                        <li><Link to="/aboutme" className={isActive("/aboutme") ? "activenav" : ""}>About Me</Link></li>
                        <li><Link to="/blog" className={isActive("/blog") ? "activenav" : ""}>Random Blog</Link></li>
                    </ul>
                </div>

                <Link
                    to="/contact"
                    className={`nav_contact ${isActive("/contact") ? "activecontact" : ""}`}>
                    Contact
                </Link>
            </div>





        </div>
    );
}

export default Nav