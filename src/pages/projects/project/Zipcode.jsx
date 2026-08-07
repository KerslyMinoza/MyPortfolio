
import './project.css';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../../components/layout/SiteFooter/SiteFooter.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import Design1 from "../../../assets/images/zipcode_team/amanda.png";
import Design2 from "../../../assets/images/zipcode_team/stacey.png";
import Design3 from "../../../assets/images/zipcode_team/bonnie.png";
import Design4 from "../../../assets/images/zipcode_team/tracey.png";
import Design5 from "../../../assets/images/zipcode_team/amanda.png";
import Design6 from "../../../assets/images/zipcode_team/josie.png";
import Design7 from "../../../assets/images/zipcode_team/jewell.png";
import Design8 from "../../../assets/images/zipcode_team/kate.png";
import Design9 from "../../../assets/images/zipcode_team/carl.png";
import Design10 from "../../../assets/images/zipcode_team/marissa.png";
import Design11 from "../../../assets/images/zipcode_team/doggie.png";


import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Zipcode(){

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
                    <div className="project_name"> Zipcode Team </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    I created this as a commissioned piece to be used as a hover effect on their team section.
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
                        <img src={Design10} onClick={() => openModal(Design10)}></img>
                        <img src={Design11} onClick={() => openModal(Design11)}></img>
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

export default Zipcode