import './project.css';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../../components/layout/SiteFooter/SiteFooter.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import Design1 from "../../../assets/images/hippomathics/hippo.webp";
import Design2 from "../../../assets/images/hippomathics/ui.webp";
import Design3 from "../../../assets/images/hippomathics/highest score.webp";
import Video from "../../../assets/images/hippomathics/video.mp4";

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Hippomathics(){

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
            <div className="project" id="pokfund">
                <div className="content">
                    <div className="project_name"> Hippomathics </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    This was a school project I worked on back in 2016, where we were tasked with developing something object-oriented. I built this project using Unity 3D with C#, and I also designed the entire UI and handled everything else myself. I really enjoyed creating it over the span of 2–3 months. One of the biggest challenges was developing a dynamic algorithm — starting with generating islands from just a single function call. It might look simple, but it was definitely a headache at the time! Still, I had a lot of fun working on it.
                    </div>
                    
                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>Developer & Designer</li>
                    </ul>


                    <div className="image_holder"><img src={Design1} onClick={() => openModal(Design1)}></img></div>


                    </div>

                    <div className="section_title"> Some Screen Shots</div>

                    <div className="project_content">
                    These are just the screen grabs I was able to recover since this was from a long time ago. Luckily, I also made a short video of it while playing.
                    </div>

                    <div className="image_holder">
                        <video className="video" width="auto" controls>
                        <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="image_holder" id="hippomathics">
                        <div className="image_holder"><img src={Design2} onClick={() => openModal(Design2)}></img></div>
                        <div className="image_holder"><img src={Design3} onClick={() => openModal(Design3)}></img></div>
                    </div>

  
                    <div className="project_content">
                    Although I can no longer update its features — since I’ve forgotten parts of the code and it’s no longer compatible with the latest Unity versions — it’s still miraculously live on the Play Store!
                    </div>

             <NextPrevious project_id={projectId}/>
            </div>

            <SiteFooter/>

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

export default Hippomathics