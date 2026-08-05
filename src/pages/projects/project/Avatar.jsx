import './project.css';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import Design1 from "../../../assets/images/avatar_thumbnail.gif";

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Avatar(){

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
                    <div className="project_name"> Poktfund Avatar </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    One feature of the wallet includes dynamic, randomly generated avatars. I designed a set of customizable elements like accessories and features to support this concept. These avatars are intended to be unique for each user and may potentially be minted as NFTs in the future. This feature was developed specifically for the Pokftund wallet.
                    </div>


                    <div className="image_holder"><img src={Design1} onClick={() => openModal(Design1)}></img></div>
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

export default Avatar