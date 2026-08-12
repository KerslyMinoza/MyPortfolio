import './project.css';
import Reveal from '../../../components/common/Reveal.jsx';

import Design from "../../../assets/images/rikka/rikka.png";
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../../components/layout/SiteFooter/SiteFooter.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Rikka(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
    };

    return (
        <>
            <SiteNav/>
            <Backbutton page="projects"/>
            <div className="project" id="orcaa">
                <Reveal className="content">
                    <div className="project_name"> Quantum Breakthrough</div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                      Quantum Breakthrough: Embracing Your Life Beyond Limits is a sales funnel landing page designed to promote an online transformational course. The page highlights the program timeline (July 9 – September 10 2024), introduces the mentor, and communicates the course benefits in a clear and inspiring way. The goal was to build trust, inspire action, and drive course enrollments with an emotionally uplifting design that reflects themes of healing, self-discovery, and spiritual empowerment.
                     <br/><br/>
                        This site is no longer active, as access was restricted to a specific timeframe.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>Web Designer</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    The client needed an effective way to communicate the value of the course while connecting emotionally with potential participants. The challenge was to balance the spiritual, uplifting tone of the program with a clear and structured layout that would convert visitors into sign-ups. The design had to immediately capture attention, highlight the program’s benefits, and provide a seamless path to enrollment.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    I explored existing sales funnel pages in both wellness and online learning industries to understand how they engage audiences. Key findings showed that emotional storytelling, strong visuals of the mentor, and clear benefit-driven messaging increase trust and conversions. I also studied color psychology and typography choices for wellness brands, leaning toward soft gradients, warm tones, and approachable handwritten script fonts to reflect transformation and personal growth.
                    </div>


                    <div className="section_title center_text">Design Sheet</div>       
 
                    <div className="image_holder"><img src={Design} onClick={() => openModal(Design)}></img></div>




                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     Working on this sales funnel project gave me valuable insights into creating an engaging user journey that not only informs but also converts. I learned the importance of aligning design decisions with the emotional and aspirational aspects of the course, making sure that the messaging resonated with the audience’s needs.
                    <br/> <br/>
                    One of the challenges was balancing a clean layout with persuasive copy, ensuring that the design didn’t overwhelm but instead guided users smoothly toward enrollment. Despite time constraints, the outcome successfully highlighted the course’s value and provided a seamless experience for potential participants.
                    <br/> <br/>
                    Overall, this project reinforced the significance of storytelling in design. How visuals, tone, and structure can come together to inspire trust and action.
                    </div> 

                    <div className="project_content">
                    My goal was to create a cleaner, more straightforward design so users could immediately understand what the website and company are all about. I genuinely enjoyed working on this project. If there’s one thing I’d change next time, it would be to minimize the use of boxes for the services section and maybe use color instead to make it feel lighter. But overall, I’m happy with how everything turned out.
                    </div>    
                <NextPrevious project_id={projectId}/>
            </Reveal>

        </div>

            <SiteFooter/>

      {/* Modal */}
      <AnimatePresence>
          {selectedImage && (
              <motion.div
                  className="modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
              >
                  <button className="modal-close" onClick={closeModal}>
                      <XMarkIcon className="icon" />
                  </button>

                  <motion.div
                      className="modal-content"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      onClick={(e) => e.stopPropagation()}
                  >
                      <div className="modal-image-container">
                          <img src={selectedImage} alt="Full size" />
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>


    </>
        
    );
}

export default Rikka