import './project.css';
import Reveal from '../../../components/common/Reveal.jsx';
import SiteNav from '../../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../../components/layout/SiteFooter/SiteFooter.jsx';
import Backbutton from '../../../components/common/Backbutton.jsx';

import Design from "../../../assets/images/trux/trux.png";

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Trux(){

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
                    <div className="project_name"> Trux </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    Trux is a privately-owned trading and logistics company specializing in delivering shipment containers from point A to point B. This includes unloading containers and ensuring they are delivered to warehouses. Currently, the management faces challenges in tracking trucks in real-time and managing extensive paperwork. They are seeking an in-house system that can provide live tracking of their trucks and easy access to transportation history.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Design</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    Finding the right caregiver can be really hard. In Australia, patients are often matched based on schedules, not personality or experience. But it makes a big difference when a caregiver truly fits — someone who connects and brings comfort, not just care.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                        <ul className="less_padding">
                            <li>I conducted interviews with the actual users of the app to understand their manual processes.</li>
                            <li>I also interviewed the CEO, who served as my main point of contact throughout the project.</li>
                            <li>One of the main challenges they shared was the need for automation.</li>
                            <li>I also had to consider that many of the employees aren’t very tech-savvy.</li>
                            <li>Drivers are often on the road and extremely busy, which adds another layer of complexity to the app's usability.</li>
                        </ul>
                    </div>

                    <div className="section_title"> Design Process</div>

                    <div className="project_content">
                    Out of respect for the client’s request for privacy, I made sure to keep their company name confidential. I did ask for permission to include the app in my portfolio, and they were okay with it—as long as I concealed their identity and created my own branding for the presentation. So, I designed a dummy brand while keeping the original UI and functionality intact. Since this is a private system, the client didn’t want the exact interface to be copied for the same use case, which I completely understand. The app itself is quite extensive—it includes a payroll system, a diesel tracking system, and even a tablet app for drivers that allows the admin to monitor deliveries. It’s a large-scale application, so for the sake of confidentiality, I’m only showcasing select parts of the project in my portfolio.
                    </div>

                    <div className="image_holder"><img src={Design} onClick={() => openModal(Design)}></img></div>

                    <div className="section_title"> Reflection</div>

                    <div className="project_content">
                    This project turned out to be quite challenging due to multiple factors, especially scheduling conflicts. It was difficult to connect with potential users for interviews since they were caught up in manual processes and day-to-day operations. Although I initially had the chance to speak with a few of them, follow-up questions during the design process often had to go through the CEO of the hiring company, and responses would sometimes take a couple of days to arrive. That delay made it tough to keep momentum.

                    </div>
                    <div className="project_content">
On top of that, there was clear tension between the CEO and the company I was designing for. Their strained relationship made the whole working environment feel uncomfortable, especially since the CEO wasn't exactly the most approachable person. Eventually, meetings started getting canceled without notice, which became really frustrating. At that point, I paused the project—I had already completed about 80% of the tablet version of the app, which was a significant amount of work given the compensation.

Despite all the chaos and stress, I actually enjoyed the design process itself. It was a fast-paced project with lots of pressure, but creatively, it was fulfilling. I just wish the experience had been smoother on the collaboration side.
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

export default Trux