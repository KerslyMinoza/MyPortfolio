import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';

import Design1 from "../../../assets/images/poktfund/1.webp";
import Design2 from "../../../assets/images/poktfund/2.webp";
import Design3 from "../../../assets/images/poktfund/3.webp";
import Design4 from "../../../assets/images/poktfund/4.webp";
import Video from "../../../assets/images/poktfund/poktfund_video.mp4";
import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Poktfund(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="pokfund">
                <div className="project_name"> Poktfund Wallet </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    This project aims to design a community-driven mobile wallet for POKT, addressing the absence of an official wallet solution. The goal is to provide users with seamless, user-friendly access to their POKT and real-time on-chain data. With a focus on simplicity, security, and accessibility, the mobile wallet empowers users to stay connected to their funds—putting POKT directly in their pocket.
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
                    POKT currently lacks a dedicated mobile wallet, making it difficult for users to access, manage, and interact with their funds and on-chain data in a seamless and user-friendly way. This gap limits accessibility and hinders the overall user experience for the POKT community.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    This was my first time working with a blockchain and cryptocurrency client, and I initially found it challenging to understand the space due to its highly technical nature—especially concepts like POKT and network infrastructure. With limited experience in this area, I struggled at first, but fortunately, my client was very supportive and guided me throughout the process. While there were still moments where I didn’t fully grasp certain aspects, the client was mainly focused on having the design delivered, so I relied heavily on their feedback to move forward. Over time, through continuous research and hands-on experience, I began to better understand the space and iterated on the UI accordingly. The longer project timeline was a big help, as it gave me room to dive deeper into blockchain and cryptocurrency and refine the design as I learned.
                    </div>

                    <div className="section_title"> Teaser Video</div>

                    <video width="100%" controls>
                    <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                             

                    <div className="section_title"> App Features</div>

                    <div className="project_content">
                    Since the app didn’t fully launch and remains in the prototype stage, and due to its confidential nature, I’ll only be showcasing select key features along with mock-ups I previously created for the website. Out of respect for the client, I won’t be sharing the full UI, user flow, or detailed design process—just a glimpse into the core functionality of the app.
                    </div>


                    <div className="section_feature" id="recolor">1. Send and Receive POKT with ease</div>

                    <div className="project_content">
                    Streamline your POKT transactions with our user-friendly mobile application. Benefit from multiple options for sending and receiving funds, including the quick and convenient QR code scanning feature using your device's camera. Effortlessly manage transactions with a simple swipe to add new contacts or initiate direct sends without manual address input.
                    </div>

                    <div className="image_holder"><img src={Design1} style={{ width: '70%' }}></img></div>


                    <div className="section_feature" id="recolor">2. Contacts</div>

                    <div className="project_content">
                    Easily store and manage your known addresses with our contact feature, eliminating the need for manual address entry for each transaction. Enjoy seamless integration with Unstoppable Domains for an effortless POKT experience..
                    </div>

                    <div className="image_holder"><img src={Design2} style={{ width: '70%' }}></img></div>



                    <div className="section_feature" id="recolor">3. Multi-Wallet Industry Standard</div>

                    <div className="project_content">
                    Leverage the industry standard BIP-32 specification with ease to generate multiple accounts from a mnemonic passphrase. Wallet creation is now a matter of a simple tap, with each wallet assigned a unique POKT avatar for easy identification.
                    </div>

                    <div className="image_holder"><img src={Design3} style={{ width: '70%' }}></img></div>


                    <div className="section_feature" id="recolor">4. Up to Date On-chain data</div>

                    <div className="project_content">
                    Discover and visualize POKT's on-chain data, including your node's performance and relay breakdown, through our mobile application. Act as your own blockchain explorer and enjoy a comprehensive POKT experience.
                    </div>

                    <div className="image_holder"><img src={Design4} style={{ width: '50%' }}></img></div>
            <NextPrevious project_id={projectId}/> 
            </div>
           
        </div>

        <Footer/>
    </>   
        
    );
}

export default Poktfund