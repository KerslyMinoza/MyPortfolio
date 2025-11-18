import './project.css';

import Design1 from "../../../assets/images/nodies/dashboard.png";
import Design2 from "../../../assets/images/nodies/stat.png";
import Design3 from "../../../assets/images/nodies/billing_and_payment.png";
import Design4 from "../../../assets/images/nodies/api_page.png";
import Design5 from "../../../assets/images/nodies/add_money_modal.png";
import Design6 from "../../../assets/images/nodies/team_settings.png";
import Proto from "../../../assets/images/nodies/proto.png";
import Wireframe1 from "../../../assets/images/nodies/wireframe1.png";
import Wireframe2 from "../../../assets/images/nodies/wireframe2.png";
import Landing from "../../../assets/images/nodies/landing_page.png";
import Mobile_Landing from "../../../assets/images/nodies/mobile_landing.png";


import Design_System1 from "../../../assets/images/nodies/design_system1.png";
import Design_System2 from "../../../assets/images/nodies/design_system2.png";
import Design_System3 from "../../../assets/images/nodies/design_system3.png";
import Design_System4 from "../../../assets/images/nodies/design_system4.png";
import Design_System5 from "../../../assets/images/nodies/design_system5.png";

import Nodie1 from "../../../assets/images/nodies/nodie_waving.gif";
import Nodie2 from "../../../assets/images/nodies/nodie_flying.gif";
import Nodie3 from "../../../assets/images/nodies/nodie_crying.gif";
import Nodie4 from "../../../assets/images/nodies/nodie_working.gif";
import Nodie5 from "../../../assets/images/nodies/price_free.svg";
import Nodie6 from "../../../assets/images/nodies/price_pro.svg";
import Nodie7 from "../../../assets/images/nodies/price_starter.svg";



import Penguin from "../../../assets/images/nodies/wink.png";
import Branding from "../../../assets/images/nodies/branding.png";

import Nav from '../../../components/layout/Nav/Nav.jsx';
import Footer from '../../../components/layout/footer/Footer';

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Nodies(){

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
            <Nav/>
            <div className="project" id="orcaa">
                <div className="content">
                    <div className="project_name"> Nodies </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    <a href="https://nodies.app" target="_blank" rel="noopener noreferrer">visit www.nodies.app </a>
                    </div>

                    <div className="project_content">
                    Nodies is a developer-focused platform that empowers users to build Web3 applications with ease. It offers fast APIs, real-time tracking, and detailed analytics. The design emphasizes clarity, efficiency, and accessibility, allowing developers to start quickly, monitor their progress, and scale their applications without unnecessary complexity.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Designer</li>
                        <li>Branding</li>
                    </ul>
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    When I started this project, my understanding of blockchain was still developing. While I had a grasp of the fundamentals, I leaned on the client for technical insights. Because of a tight timeline, I conducted competitor research to understand how leading platforms positioned themselves. This helped me identify patterns that developers were already comfortable with and areas where the experience could be simplified.

                    Although our target audience consisted of highly technical users or let's say Web3 Developers, I wanted to create an interface that felt approachable and intuitive. Studying similar products gave me confidence and allowed me to translate complex requirements into a user-friendly experience, even under pressure.
                    </div>

                    <div className="section_title"> Branding</div>
                    <div className="project_content">
                    I designed the logo and branding system to reflect a balance of trust, innovation, and simplicity.

The primary color is tech purple, chosen because it conveys a sense of modernity and forward-thinking design. Purple is often associated with creativity, technology, and imagination, making it a fitting choice for a platform that aims to simplify complex Web3 tools.

To give the brand more personality, I introduced a penguin character. Penguins are highly collaborative creatures that thrive in communities, which reflects the spirit of developers building together in a shared ecosystem. They are also approachable and friendly animals, making the product feel less intimidating and more welcoming for new users. By combining the modern energy of purple with the warmth of a penguin mascot, the brand strikes a unique balance of professionalism and playfulness.
                    </div>

                    <div className="image_holder"><img src={Branding} onClick={() => openModal(Branding)}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
              For this project, I created wireframes to establish the core navigation flow and structure. They helped ensure that key features were prioritized and that the client could visualize the product early on.

Sometimes I skip wireframing and design directly, especially when I am already familiar with the flow. In this case, however, wireframes were useful for aligning quickly with the client and saving time under a tight deadline.
                    </div>

                    <div className="image_holder"><img src={Wireframe1} onClick={() => openModal(Wireframe1)}></img></div>
                    <div className="image_holder"><img src={Wireframe2} onClick={() => openModal(Wireframe2)}></img></div>


                     <div className="section_title"> Design System</div>
                    <div className="project_content">
                        To ensure consistency across all screens, I built a design system in Figma. It included typography scales, a color palette centered on tech purple, reusable components, and spacing guidelines. This system allowed me to quickly design new features without breaking visual harmony and gave the client a reliable foundation for future iterations.
                        By setting up interactive components and auto-layout, the design system not only sped up my workflow but also made handoff smoother for developers. It ensured that every button, card, and chart followed the same rules, reducing guesswork and keeping the experience cohesive.
                    </div>


                    <div className="masonry_images">
                        <img src={Design_System1} onClick={() => openModal(Design_System1)}></img>
                        <img src={Design_System2} onClick={() => openModal(Design_System2)}></img>
                        <img src={Design_System3} onClick={() => openModal(Design_System3)}></img>
                        <img src={Design_System4} onClick={() => openModal(Design_System4)}></img>
                        <img src={Design_System5} onClick={() => openModal(Design_System5)}></img>
                    </div>

                    <div className="section_title center_text">UI Design</div>       

                    <div className="project_content">
                     The final design reflects a clean and purposeful aesthetic. I prioritized legibility through a structured grid system, clear typography hierarchy, and thoughtful spacing. The color scheme combines bold accents with neutral backgrounds to highlight key actions without overwhelming the user.
                     <br/><br/>
                     Interactive elements, such as cards and buttons, were crafted to be easily recognizable and consistent across screens. Data visualization was given particular attention, with charts and tracking components designed to present information at a glance while still offering depth for power users.
                     <br/><br/>
                     The overall look and feel strike a balance between professional and playful, ensuring the platform stands out without losing clarity.
                    </div>
 
                    <div className="image_holder"><img src={Design1} onClick={() => openModal(Design1)}></img></div>
                    <div className="image_holder"><img src={Design2} onClick={() => openModal(Design2)}></img></div>
                    <div className="image_holder"><img src={Design3} onClick={() => openModal(Design3)}></img></div>
                    <div className="image_holder"><img src={Design4} onClick={() => openModal(Design4)}></img></div>
                    <div className="image_holder"><img src={Design5} onClick={() => openModal(Design5)}></img></div>
                    <div className="image_holder"><img src={Design6} onClick={() => openModal(Design6)}></img></div>


                     <div className="section_title center_text">Prototyping</div>

                     <div className="project_content">
                    To demonstrate the user journey, I developed an interactive prototype in Figma that showcased onboarding, project creation, and analytics tracking. The prototype highlighted how smooth transitions and micro-interactions guide users without interrupting their workflow.
                    <br/><br/>
                     In addition to the clickable prototype, I also recorded video walkthroughs for the client. These videos explained my intentions and design reasoning step by step, making sure the client fully understood the flow and vision. I found this approach especially helpful because sometimes clients do not read the Figma file flow in detail, and the videos prevent confusion by showing exactly how the experience is meant to work.
                     <br/><br/>
                     This combination of prototype and walkthrough ensured the design was not only presented visually but also clearly communicated.
                    </div>

                     <div className="image_holder"><img src={Proto} onClick={() => openModal(Proto)}></img></div>


                    <div className="section_title center_text">Landing Page</div>
                    <div className="project_content">
                    For the landing page, I focused on creating a clear and modern first impression. I used tech purple to emphasize a futuristic yet approachable feel, supported by bold headlines and a strong call to action. Navigation was kept simple for quick access to docs, pricing, and resources, while subtle gradients and icons added polish without distraction. My goal was to make the page feel both trustworthy and inviting for developers exploring Nodies.
                    </div>

                      <div className="image_holder"><img src={Landing} onClick={() => openModal(Landing)}></img></div>

                      <div className="masonry_images">
                        <img src={Mobile_Landing} onClick={() => openModal(Mobile_Landing)}></img>
                    </div>

                     <div className="section_title center_text">Before we end, Meet Mr. Nodie!</div>
                    <div className="project_content">
                    Meet Mr. Nodie, the penguin mascot of the platform. Penguins are naturally collaborative and adaptable, which reflects how developers work together in the Web3 space.
                    </div>


                    <div className="masonry_images">
                        <img src={Nodie1} onClick={() => openModal(Nodie1)}></img>
                        <img src={Nodie2} onClick={() => openModal(Nodie2)}></img>
                        <img src={Nodie3} onClick={() => openModal(Nodie3)}></img>
                        <img src={Nodie4} onClick={() => openModal(Nodie4)}></img>
                        <img src={Nodie5} onClick={() => openModal(Nodie5)}></img>
                        <img src={Nodie6} onClick={() => openModal(Nodie6)}></img>
                        <img src={Nodie7} onClick={() => openModal(Nodie7)}></img>

                    </div>
                    

                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     Launching the design allowed me to hear directly from users, which has been an invaluable part of the process. Receiving real feedback from developers, who each have different levels of familiarity with blockchain, helped me see where certain flows could be clarified or improved. This inspires me to continuously refine the user experience based on actual needs rather than assumptions.
                    <br/><br/>
                    I especially appreciate how the brand has developed its own quirky personality. From the vibrant colors to the playful character, the design feels unique and memorable, which makes the platform stand out in the Web3 space.
                     <br/><br/>
                     What excites me most is the potential for expansion. There are still many opportunities to evolve the experience and add features while keeping everything aligned with the strong brand foundation we’ve built.
                     <br/><br/>
                    </div>

                    

                    <div className="image_holder"><img src={Penguin} onClick={() => openModal(Penguin)} style={{ width: '300px' }}></img></div>
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

    <Footer/>
    </>

    );
}

export default Nodies