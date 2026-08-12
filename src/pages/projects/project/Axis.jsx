import './project.css';
import Reveal from '../../../components/common/Reveal.jsx';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../../components/layout/SiteFooter/SiteFooter.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';
import DesignProcess from "../../../assets/images/axis/design_process.png";
import PainPoints from "../../../assets/images/axis/painpoints.png";
import Userpersona1 from "../../../assets/images/axis/userpersona1.png";
import Userpersona2 from "../../../assets/images/axis/userpersona2.png";
import Styleguide from "../../../assets/images/axis/styleguide.png";
import Wireframe from "../../../assets/images/axis/wireframes.png";
import Design1 from "../../../assets/images/axis/design1.png";
import Design2 from "../../../assets/images/axis/design2.png";
import Design3 from "../../../assets/images/axis/design3.png";
import Design4 from "../../../assets/images/axis/design4.png";
import Design5 from "../../../assets/images/axis/design5.png";
import Design6 from "../../../assets/images/axis/design6.png";




import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Mednotes(){


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
                    <div className="project_name"> AXIS </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    AXIS is a web-based application designed for managing martial arts schools primarily in Australia, New Zealand, and the UK. Its main function is to provide a secure and organized database for storing various records such as schedules, student history, grading, and statistics. Given the diverse and specialized nature of martial arts, this project allows for personalized customization of grading and ranking systems to align with individual school rules.
                    </div>

                    <div className="project_content">
                        <a href="https://axismartialarts.com/" target="_blank" rel="noopener noreferrer">Visit Axis Martial Arts </a>
                    </div>                   


                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Design</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    AXIS, formerly known as Whitebelt, is an established application that offers similar fundamental features as described earlier. However, Whitebelt's user experience (UX) and software planning are currently disorganized and require a comprehensive restructuring. The primary challenge lies in smoothly transitioning our existing users from Whitebelt to AXIS while ensuring a seamless migration process. As the school management app market continues to expand, it is crucial for AXIS to prioritize its competence in user experience.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    I acknowledge that AXIS or Whitebelt is not the sole school management app addressing these issues. 
                    There are other applications available, such as Mindbody, Stark, and Martialytics. To gain a deeper understanding, I created a dummy account and examined the functionality of these apps. While each app has its unique features, they all share a common objective. This exploration allowed me to identify pain points in their applications and ensure they are addressed in AXIS. Furthermore, I took the opportunity to offer suggestions and ideas to simplify the user experience and provide effective solutions to any UX-related challenges.
                    </div>

                    <div className="image_holder"><img src={PainPoints} onClick={() => openModal(PainPoints)}></img></div>


                    <div className="section_title"> Design Process</div>
                    <div className="margin-m"></div>
                    <div className="image_holder"><img src={DesignProcess} onClick={() => openModal(DesignProcess)}></img></div>

                    <div className="section_title"> User Persona</div>


                    <div className="image_holder"><img src={Userpersona1} onClick={() => openModal(Userpersona1)}></img></div>
                    <div className="image_holder"><img src={Userpersona2} onClick={() => openModal(Userpersona2)}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="image_holder"><img src={Wireframe} onClick={() => openModal(Wireframe)}></img></div>

                    <div className="section_title"> Design System</div>
                    <div className="image_holder"><img src={Styleguide} onClick={() => openModal(Styleguide)}></img></div>

                    <div className="section_title"> High Fidelity</div>
                    <div className="image_holder">
                        <img src={Design1} onClick={() => openModal(Design1)}></img>
                        <img src={Design2} onClick={() => openModal(Design2)}></img>
                        <img src={Design3} onClick={() => openModal(Design3)}></img>
                        <img src={Design4} onClick={() => openModal(Design4)}></img>
                        <img src={Design5} onClick={() => openModal(Design5)}></img>
                        <img src={Design6} onClick={() => openModal(Design6)}></img>
                    </div>

                    <div className="section_title"> Reflection</div>
                    <div className="project_content">
                    Managing a large-scale project with tight deadlines has been my biggest challenge, but it has also been a valuable learning experience. AXIS is one of the largest systems I have designed, and time constraints are a concern as I am only able to work part-time on this project. Currently, the project is still in the development phase, and I eagerly await the feedback from Beta Testers to gain insights into their experiences. Since Martial Arts is not my personal domain, it is crucial for me to take note of the actual users' input.
                    </div>      

                    <div className="project_content">
                    Throughout the process, I have come to realize that design is an ongoing and iterative process. Nothing is set in stone. As a designer, if you feel the need to make design changes that enhance the system, I encourage you to push for those changes. In my two years of working with AXIS, I have learned the importance of being open-minded to comments and feedback while prioritizing the user experience. In a large company, there are often numerous comments and suggestions, but it is essential to trust your judgment and follow what you believe is right. You are the designer.
                    </div>             
               
            </Reveal>


        </div>


            <div className="project" >
                <NextPrevious project_id={projectId}/>
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

export default Mednotes