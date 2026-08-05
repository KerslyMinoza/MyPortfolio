import './project.css';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';
import DesignProcess from "../../../assets/images/waggle/design_process.png";
import Branding from "../../../assets/images/waggle/branding.png";
import Illustrations from "../../../assets/images/waggle/illustrations.png";
import Icons from "../../../assets/images/waggle/icons.png";
import Wireframe from "../../../assets/images/waggle/wireframe.png";
import Design1 from "../../../assets/images/waggle/waggle_1.png";
import Design2 from "../../../assets/images/waggle/waggle_2.png";
import Design3 from "../../../assets/images/waggle/waggle_3.png";
import Design4 from "../../../assets/images/waggle/waggle_4.png";
import Design5 from "../../../assets/images/waggle/waggle_5.png";
import Design6 from "../../../assets/images/waggle/waggle_6.png";
import Design7 from "../../../assets/images/waggle/waggle_7.png";
import Design8 from "../../../assets/images/waggle/waggle_8.png";
import Design9 from "../../../assets/images/waggle/waggle_9.png";

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Waggle(){

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
                <div className="content">
                    <div className="project_name"> Waggle </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                     Waggle is a pet care app that helps you track vaccinations, locate your pet, find nearby clinics and grooming spots, and connect with other pet owners.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Design</li>
                        <li>Branding</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    Waggle is a personal project I created to solve a problem I had with managing my pet’s vaccine schedules—I often missed important ones. The idea is to have a centralized app where I can track vaccinations, locate my pet if they go missing using a smart collar, and discover nearby top-rated vet clinics and grooming stations. It’s also designed to be a pet community where users can connect and even find mates for their pets.
                    </div>



                    <div className="section_title"> Research</div>

                    <div className="project_content">
                        <span className="bold">To be honest. I only referenced myself (as a pet mommy of 4) and my friend's dilema</span>
                        <ul className="less_padding">
                            <li>Forgets Vaccine Schedules</li>
                            <li>Wanted an app where they can be notified via email or sms about their near upcoming vect schedule</li>
                            <li>Tracking pet's location if lost</li>
                        </ul>
                    </div>

                    <div className="section_title"> Design Process</div>
                    <div className="image_holder"><img src={DesignProcess} onClick={() => openModal(DesignProcess)}></img></div>


                    <div className="section_title">Branding & Illustrations</div>
                     <div className="project_content">
                     I was really excited to start building the app, so due to time constraints, I kept the branding simple. Despite that, I'm actually happy with how it turned out. It includes a logo, color swatches, a few illustrations, and an overall look and feel that fits the app. I also designed some custom icons specifically for it.
                    </div>

                    <div className="image_holder"><img src={Branding} onClick={() => openModal(Branding)}></img></div>
                    <div className="image_holder"><img src={Illustrations} onClick={() => openModal(Illustrations)}></img></div>
                    <div className="image_holder"><img src={Icons} onClick={() => openModal(Icons)}></img></div>



                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
                    There's no formal wireframe for this project, as I jumped straight into prototyping using final colors and design elements. Since it's a proof of concept and not a real client project, I focused more on exploring the look and feel through the prototype itself rather than starting with traditional wireframes.
                    </div>
                    <div className="image_holder"><img src={Wireframe} onClick={() => openModal(Wireframe)}></img></div>


                    <div className="section_title center_text">Final Design</div>
                    <div className="project_content">
                    <div className="project_content">
                    There’s no formal wireframe for this project, as I jumped straight into prototyping using final colors and design elements. Since it’s a proof of concept and not a real client project, I focused more on exploring the look and feel through the prototype itself rather than starting with traditional wireframes.
                    </div>
                    </div>                        
                        <div className="image_holder" id="high_fidelity">
                            <img src={Design1} onClick={() => openModal(Design1)}></img>
                            <img src={Design2} onClick={() => openModal(Design2)}></img>
                            <img src={Design3} onClick={() => openModal(Design3)}></img>
                            <img src={Design4} onClick={() => openModal(Design4)}></img>
                            <img src={Design5} onClick={() => openModal(Design5)}></img>
                            <img src={Design6} onClick={() => openModal(Design6)}></img>
                            <img src={Design7} onClick={() => openModal(Design7)}></img>
                            <img src={Design8} onClick={() => openModal(Design8)}></img>
                            <img src={Design9} onClick={() => openModal(Design9)}></img>
                            </div>

                    <div className="section_title center_text">Prototype</div>
                    <div className="project_content">
                    Feel free to try the prototype.
                    </div>     
                    <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width="100%"
                    height="1000"
                    src="https://embed.figma.com/proto/AbzLPzonTw1JEfpqn4qCVq/My-UI-UX-Projects?node-id=524-41&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=524%3A41&embed-host=share"
                    allowFullScreen
                    ></iframe>

                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                        This has been a fun project for me, and I’ve really enjoyed the process. While it’s still just a prototype focusing on a single feature and not fully complete yet, I’m planning to expand it further. As I continue to develop my skills, I hope to fully build and implement the app myself in the future.
                    </div>
                <NextPrevious project_id={projectId}/>
            </div>

        </div>

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

export default Waggle