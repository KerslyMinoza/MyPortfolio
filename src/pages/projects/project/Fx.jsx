import './project.css';

import Design1 from "../../../assets/images/functionchat/default_screen.png";
import Design2 from "../../../assets/images/functionchat/stop.png";
import Design3 from "../../../assets/images/functionchat/loading.png";
import Design4 from "../../../assets/images/functionchat/sidebar_collapsed.png";
import Branding from "../../../assets/images/functionchat/branding.png";

import Proto1 from "../../../assets/images/functionchat/web_proto.png";
import Proto2 from "../../../assets/images/functionchat/mobile_proto.png";

import Mobile1 from "../../../assets/images/functionchat/mobile_splash.png";
import Mobile2 from "../../../assets/images/functionchat/mobile_default.png";
import Mobile4 from "../../../assets/images/functionchat/mobile_typing.png";
import Mobile5 from "../../../assets/images/functionchat/mobile_model.png";
import Mobile6 from "../../../assets/images/functionchat/mobile_scroll.png";


import Image1 from "../../../assets/images/functionchat/functionnetwork.png";







import Nav from '../../../components/layout/Nav/Nav.jsx';
import Footer from '../../../components/layout/footer/Footer';

import NextPrevious from '../../../components/common/NextPrevious';
import { useLocation } from 'react-router-dom';



function Fx(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Nav/>
            <div className="project" id="orcaa">
                <div className="content">
                    <div className="project_name"> Function Chat </div>
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    <a href="https://chat.function.network/" target="_blank" rel="noopener noreferrer">visit chat.function.network  </a>
                    </div>

                    <div className="project_content">
                   Function chat app is a new way to experience AI conversations. Instead of relying on a single server, it’s powered by distributed inference, A network of connected nodes that work together to run the latest state-of-the-art large language models. Basically powered by Function Network.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Designer</li>
                    </ul>
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                        Before diving into the chat app, let me introduce the core concept behind our product: Function Network.
                        <br/><br/>
                        Function Network leads the way in distributed AI technology, delivering high-quality, powerful AI performance that’s accessible to everyone. The innovative system is designed for unmatched reliability and cost-efficiency, empowering both businesses and individuals to achieve more.
                        <br/><br/>
                        The chat app, still recently launched, is a practical example of this technology in action. It demonstrates how distributed inference works—giving you the chance to experience the speed, scalability, and intelligence of the network firsthand. Available on both web and mobile, the app is completely free for all users, ensuring everyone can explore the future of AI conversations.
                        <br/><br/>
                        While doing my research, I explored several chat apps such as ChatGPT and Gemini for inspiration. I became familiar with the user experiences they offer, but my goal was to design the chat app in a way that gives users that same sense of familiarity while also letting them experience the unique speed and power of distributed inference.
                    
                    <br/><br/>
                    <a href="https://function.network/" target="_blank" rel="noopener noreferrer">visit function.network</a>
                    </div>

                    

                    <div className="image_holder"><img src={Image1}></img></div>

                    <div className="section_title"> Branding</div>
                    <div className="project_content">
                        Although I wasn’t the one who designed the logo, I collaborated with the designer by shaping the color palette and overall brand feel, ensuring it reflects both modernity and trust.
                    </div>

        


                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
                        Given the time constraints, I skipped the wireframing stage for this project. Since chat apps are already a familiar space, I decided to move straight into high-fidelity design.
                    </div>


                    <div className="section_title center_text">Web UI Design</div>       

                    <div className="project_content">
                        The Web App is designed to be straightforward, offering the same core features you’d expect from other AI chat applications, except without attachment support for now. Due to time constraints, I quickly built a high-fidelity design within a few days, covering the full flow from user sign-up to deleting history and managing account settings. While I can’t display all screens because of confidentiality, I’ll highlight the main chat feature as the centerpiece of the experience.
                        <br/><br/>
                    </div>
 
                    <div className="image_holder"><img src={Design1}></img></div>
                    <div className="image_holder"><img src={Design2}></img></div>
                    <div className="image_holder"><img src={Design3}></img></div>
                    <div className="image_holder"><img src={Design4}></img></div>


                     <div className="section_title center_text">Prototyping</div>

                     <div className="project_content">
                    When prototyping, I record user flows with QuickTime and share them with my client on Slack. We use threaded videos to go back and forth with suggestions and comments, covering everything from sign-up and error states to interactions like collapsing the sidebar.
                    <br/><br/>
                    </div>

                    <div className="image_holder"><img src={Proto1}></img></div>

                    

                    <div className="section_title center_text">Mobile UI Design</div>       

                    <div className="project_content">
                        Aside from the web app, we also built a mobile version available on the App Store. As an MVP, it delivers a smooth experience with fast response times.
                        <br/><br/>
                        <a href="https://apps.apple.com/us/app/function-chat/id6737006521" target="_blank" rel="noopener noreferrer">Download IOS Function Chat Here ↗ </a>
                        <br/>
                        <a href="https://play.google.com/store/apps/details?id=network.function.chat" target="_blank" rel="noopener noreferrer">Download Android Function Chat Here ↗ </a>
                    </div>

                    <div className="masonry_images">
                        <img src={Mobile1}></img>
                        <img src={Mobile2}></img>
                        <img src={Mobile4}></img>
                        <img src={Mobile5}></img>
                        <img src={Mobile6}></img>
                    </div>

                    <div className="section_title center_text">Mobile App Prototyping</div>

                    <div className="project_content">
                        Following the web app, I designed and prototyped the mobile app as the second priority. Using the web UI as a foundation, I created complete mobile flows—from splash screen animations to logging out—ensuring consistency and usability across platforms.forth with suggestions and comments, covering everything from sign-up and error states to interactions like collapsing the sidebar.
                    <br/><br/>
                    </div>

                    <div className="image_holder"><img src={Proto2}></img></div>

                    <div className="section_title center_text">Reflection</div>                  

                    <div className="project_content">
                       I really enjoyed designing for function, it was brief but fulfilling. Communication was a bit challenging since I wasn’t fully part of the dev team, and some minor design details weren’t implemented due to their time crunch. Still, I understand the situation and hope there will be space to refine the frontend in the future.
                        <br/><br/>
                       Overall, it was a fun and challenging experience, especially seeing how fast the distributed inference and chat responses perform. While the function team is now focused on the DevPortal tool I also designed, They might add more features later but not prio. For now, I’m working on marketing tasks while waiting for future UI improvements.
 
                    </div>                  
                    

             <NextPrevious project_id={projectId}/>    
            </div>
  
        </div>

    <Footer/>
    </>   
        
    );
}

export default Fx