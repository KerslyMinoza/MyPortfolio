
import './project.css';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import box from "../../../assets/images/boldmade/box.png";
import bm1 from "../../../assets/images/boldmade/bm_1.png";
import bm2 from "../../../assets/images/boldmade/bm_2.png";
import bm3 from "../../../assets/images/boldmade/bm_3.png";
import bm4 from "../../../assets/images/boldmade/bm_4.png";
import bm5 from "../../../assets/images/boldmade/bm_5.png";
import bm6 from "../../../assets/images/boldmade/bm_6.png";
import bm7 from "../../../assets/images/boldmade/bm_7.png";
import bm8 from "../../../assets/images/boldmade/bm_8.png";
import bm9 from "../../../assets/images/boldmade/bm_9.png";
import bm10 from "../../../assets/images/boldmade/bm_10.png";
import bm11 from "../../../assets/images/boldmade/bm_11.png";
import bm12 from "../../../assets/images/boldmade/bm_12.png";
import bm13 from "../../../assets/images/boldmade/bm_13.png";
import bm14 from "../../../assets/images/boldmade/bm_14.png";
import bm15 from "../../../assets/images/boldmade/bm_15.png";
import bm16 from "../../../assets/images/boldmade/bm_16.png";
import bm17 from "../../../assets/images/boldmade/bm_17.png";
import bm18 from "../../../assets/images/boldmade/bm_18.png";
import bm19 from "../../../assets/images/boldmade/bm_19.png";
import bm20 from "../../../assets/images/boldmade/bm_20.png";
import bm21 from "../../../assets/images/boldmade/bm_21.png";
import bm22 from "../../../assets/images/boldmade/bm_22.png";
import bm23 from "../../../assets/images/boldmade/bm_23.png";
import bm24 from "../../../assets/images/boldmade/bm_24.png";
import bm25 from "../../../assets/images/boldmade/bm_25.png";
import bm26 from "../../../assets/images/boldmade/bm_26.png";
import bm27 from "../../../assets/images/boldmade/bm_27.png";
import bm28 from "../../../assets/images/boldmade/bm_28.png";
import bm29 from "../../../assets/images/boldmade/bm_29.png";
import bm30 from "../../../assets/images/boldmade/bm_30.png";
import bm31 from "../../../assets/images/boldmade/bm_31.png";
import bm32 from "../../../assets/images/boldmade/bm_32.png";
import bm33 from "../../../assets/images/boldmade/bm_33.png";
import bm34 from "../../../assets/images/boldmade/bm_34.png";
import bm35 from "../../../assets/images/boldmade/bm_35.png";
import bm36 from "../../../assets/images/boldmade/bm_36.png";
import bm37 from "../../../assets/images/boldmade/bm_37.png";
import bm38 from "../../../assets/images/boldmade/bm_38.png";
import bm39 from "../../../assets/images/boldmade/bm_39.png";
import bm40 from "../../../assets/images/boldmade/bm_40.png";
import bm41 from "../../../assets/images/boldmade/bm_41.png";
import bm42 from "../../../assets/images/boldmade/bm_42.png";
import bm43 from "../../../assets/images/boldmade/bm_43.png";
import bm44 from "../../../assets/images/boldmade/bm_44.png";
import bm45 from "../../../assets/images/boldmade/bm_45.png";
import bm46 from "../../../assets/images/boldmade/bm_46.png";
import bm47 from "../../../assets/images/boldmade/bm_47.png";
import bm48 from "../../../assets/images/boldmade/bm_48.png";
import bm49 from "../../../assets/images/boldmade/bm_49.png";
import bm50 from "../../../assets/images/boldmade/bm_50.png";
import bm51 from "../../../assets/images/boldmade/bm_51.png";
import bm52 from "../../../assets/images/boldmade/bm_52.png";
import bm53 from "../../../assets/images/boldmade/bm_53.png";
import bm54 from "../../../assets/images/boldmade/bm_54.png";
import bm55 from "../../../assets/images/boldmade/bm_55.png";
import bm56 from "../../../assets/images/boldmade/bm_56.png";
import bm57 from "../../../assets/images/boldmade/bm_57.png";
import bm58 from "../../../assets/images/boldmade/bm_58.png";
import bm59 from "../../../assets/images/boldmade/bm_59.png";
import bm60 from "../../../assets/images/boldmade/bm_60.png";
import bm61 from "../../../assets/images/boldmade/bm_61.png";
import bm62 from "../../../assets/images/boldmade/bm_62.png";



import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Boldmade(){

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
            <div className="project" id="boldmade">
                <div className="content">
                    <div className="project_name">Bold Made</div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    Bold Made is a modern twist on the classic card game Old Maid, redesigned to celebrate and highlight the achievements of inspiring women worldwide. By replacing outdated stereotypes with bold role models, the game encourages fun, learning, and empowerment for all ages.
                    </div>
                    
                    <div className="project_content">
                    <a href="https://www.amazon.com/Bold-Made-Popular-Upgrade-Created/dp/B08GV8L2TC" target="_blank" rel="noopener noreferrer">Buy on Amazon Here </a>
                    </div>                   


                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>Illustrator</li>
                        <li>Graphic Designer</li>
                    </ul>
                    </div>

                    <div className="margin-m"></div>
                    <div className="image_holder" id="boldmade_box"><img src={box} onClick={() => openModal(box)}></img></div>

                    <div className="margin-m"></div>
                    <div className="video_wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/5WIlTNCC3jI?si=xb5sG8yIWGX7dR9o"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div className="section_title"> Featured Women</div>

                    <div className="project_content">
                    The women featured come from diverse fields like science, arts, business, politics, entertainment, music or sports. Each representing bravery. I illustrated them in Adobe Photoshop, developing a semi-realistic yet cartoony style that keeps their faces recognizable. After four iterations with my client, we refined and finalized this distinct visual approach.
                    </div>

                    <div className="margin-m"></div>

                    <div className="image_holder" id="portraits">
                        <img src={bm1} onClick={() => openModal(bm1)}></img>
                        <img src={bm2} onClick={() => openModal(bm2)}></img>
                        <img src={bm3} onClick={() => openModal(bm3)}></img>
                        <img src={bm4} onClick={() => openModal(bm4)}></img>
                        <img src={bm5} onClick={() => openModal(bm5)}></img>
                        <img src={bm6} onClick={() => openModal(bm6)}></img>
                        <img src={bm7} onClick={() => openModal(bm7)}></img>
                        <img src={bm8} onClick={() => openModal(bm8)}></img>
                        <img src={bm9} onClick={() => openModal(bm9)}></img>
                        <img src={bm10} onClick={() => openModal(bm10)}></img>
                        <img src={bm11} onClick={() => openModal(bm11)}></img>
                        <img src={bm12} onClick={() => openModal(bm12)}></img>
                        <img src={bm13} onClick={() => openModal(bm13)}></img>
                        <img src={bm14} onClick={() => openModal(bm14)}></img>
                        <img src={bm15} onClick={() => openModal(bm15)}></img>
                        <img src={bm16} onClick={() => openModal(bm16)}></img>
                        <img src={bm17} onClick={() => openModal(bm17)}></img>
                        <img src={bm18} onClick={() => openModal(bm18)}></img>
                        <img src={bm19} onClick={() => openModal(bm19)}></img>
                        <img src={bm20} onClick={() => openModal(bm20)}></img>
                        <img src={bm21} onClick={() => openModal(bm21)}></img>
                        <img src={bm22} onClick={() => openModal(bm22)}></img>
                        <img src={bm23} onClick={() => openModal(bm23)}></img>
                        <img src={bm24} onClick={() => openModal(bm24)}></img>
                        <img src={bm25} onClick={() => openModal(bm25)}></img>
                        <img src={bm26} onClick={() => openModal(bm26)}></img>
                        <img src={bm27} onClick={() => openModal(bm27)}></img>
                        <img src={bm28} onClick={() => openModal(bm28)}></img>
                        <img src={bm29} onClick={() => openModal(bm29)}></img>
                        <img src={bm30} onClick={() => openModal(bm30)}></img>
                        <img src={bm31} onClick={() => openModal(bm31)}></img>
                        <img src={bm32} onClick={() => openModal(bm32)}></img>
                        <img src={bm33} onClick={() => openModal(bm33)}></img>
                        <img src={bm34} onClick={() => openModal(bm34)}></img>
                        <img src={bm35} onClick={() => openModal(bm35)}></img>
                        <img src={bm36} onClick={() => openModal(bm36)}></img>
                        <img src={bm37} onClick={() => openModal(bm37)}></img>
                        <img src={bm38} onClick={() => openModal(bm38)}></img>
                        <img src={bm39} onClick={() => openModal(bm39)}></img>
                        <img src={bm40} onClick={() => openModal(bm40)}></img>
                        <img src={bm41} onClick={() => openModal(bm41)}></img>
                        <img src={bm42} onClick={() => openModal(bm42)}></img>
                        <img src={bm43} onClick={() => openModal(bm43)}></img>
                        <img src={bm44} onClick={() => openModal(bm44)}></img>
                        <img src={bm45} onClick={() => openModal(bm45)}></img>
                        <img src={bm46} onClick={() => openModal(bm46)}></img>
                        <img src={bm47} onClick={() => openModal(bm47)}></img>
                        <img src={bm48} onClick={() => openModal(bm48)}></img>
                        <img src={bm49} onClick={() => openModal(bm49)}></img>
                        <img src={bm50} onClick={() => openModal(bm50)}></img>
                        <img src={bm51} onClick={() => openModal(bm51)}></img>
                        <img src={bm52} onClick={() => openModal(bm52)}></img>
                        <img src={bm53} onClick={() => openModal(bm53)}></img>
                        <img src={bm54} onClick={() => openModal(bm54)}></img>
                        <img src={bm55} onClick={() => openModal(bm55)}></img>
                        <img src={bm56} onClick={() => openModal(bm56)}></img>
                        <img src={bm57} onClick={() => openModal(bm57)}></img>
                        <img src={bm58} onClick={() => openModal(bm58)}></img>
                        <img src={bm59} onClick={() => openModal(bm59)}></img>
                        <img src={bm60} onClick={() => openModal(bm60)}></img>
                        <img src={bm61} onClick={() => openModal(bm61)}></img>
                        <img src={bm62} onClick={() => openModal(bm62)}></img>
                    </div>
                    <div className="margin-m"></div>
                    <div className="project_content">
                        Here are some videos unboxling Bold Made
                    </div>
                    <div className="margin-s"></div>

                    <div className="video_wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/R9P0sw1inz0?si=V4IeJUXdz7ics7I2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div className="margin-m"></div>
                    <div className="video_wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/N_1Q4kq2GYA?si=9Ld1cccAeqkSr82S"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div className="margin-m"></div>
                    <div className="project_content">
                        I also created a simple instruction video on How to Play Bold Made.
                    </div>
                     <div className="margin-s"></div>
                    <div className="video_wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/EFXoO-pgSUk?si=v2vb2wP2sISzCPyZ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
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

export default Boldmade