import './project.css';

import Design1 from "../../../assets/images/nodies/dashboard.png";
import Design2 from "../../../assets/images/nodies/stat.png";
import Design3 from "../../../assets/images/nodies/billing_and_payment.png";
import Design4 from "../../../assets/images/nodies/api_page.png";
import Design5 from "../../../assets/images/nodies/add_money_modal.png";
import Design6 from "../../../assets/images/nodies/enterprise.png";
import Wireframe1 from "../../../assets/images/nodies/wireframe1.png";
import Wireframe2 from "../../../assets/images/nodies/wireframe2.png";

import Penguin from "../../../assets/images/nodies/penguin.png";
import Branding from "../../../assets/images/nodies/branding.png";

import Backbutton from '../../../components/ui_components/Backbutton';
import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';



function Nodies(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="orcaa">
                <div className="project_name"> Nodies </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    <a href="https://nodies.app" target="_blank" rel="noopener noreferrer">vist www.nodies.app </a>
                    </div>

                    <div className="project_content">
                    This developer-focused platform helps users easily build Web3 applications using fast APIs, real-time tracking, and detailed analytics. The design prioritizes clarity, ease of use, and efficiency, making it simple for developers to get started, track progress, and scale their apps quickly.
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
                    At the time of this project, I was still gaining a deeper understanding of blockchain. While I grasped the basics, the technical aspects were challenging, so I worked closely with the client for guidance. Due to a tight deadline, I conducted competitor research to gather inspiration and ensure the app aligned with industry standards. Although our target audience is technically inclined, I aimed to create a UI that felt approachable and easy to navigate. Exploring similar platforms helped me gain confidence and quickly adapt to the design requirements, even under time pressure.
                    </div>

                    <div className="section_title"> Branding</div>
                    <div className="project_content">
                    I created the logo and branding.
                    </div>

                    <div className="image_holder"><img src={Branding}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
                    At the time of this project, I was still gaining a deeper understanding of blockchain. While I grasped the basics, the technical aspects were challenging, so I worked closely with the client for guidance. Due to a tight deadline, I conducted competitor research to gather inspiration and ensure the app aligned with industry standards. Although our target audience is technically inclined, I aimed to create a UI that felt approachable and easy to navigate. Exploring similar platforms helped me gain confidence and quickly adapt to the design requirements, even under time pressure.
                    </div>

                    <div className="image_holder"><img src={Wireframe1}></img></div>
                    <div className="image_holder"><img src={Wireframe2}></img></div>

                    <div className="section_title center_text">Design</div>       
 
                    <div className="image_holder"><img src={Design1}></img></div>
                    <div className="image_holder"><img src={Design2}></img></div>
                    <div className="image_holder"><img src={Design3}></img></div>
                    <div className="image_holder"><img src={Design4}></img></div>
                    <div className="image_holder"><img src={Design5}></img></div>
                    <div className="image_holder"><img src={Design6}></img></div>


                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     I created the full page-by-page flow for this project, though I’m only showing a few screens here due to client confidentiality. If given the chance, I’d like to revamp the entire design. While it functions well and users haven’t raised concerns, I now see it as too playful and not aligned with my current design style. This project was a stretch for me—especially since I’m still learning the technical side of blockchain—but it was a valuable experience. The client was particular, which challenged me under pressure, but it helped me grow and better understand how to work within unfamiliar spaces.
                    </div> 

                    <div className="image_holder"><img src={Penguin} style={{ width: '300px' }}></img></div>
  
            </div>
        <NextPrevious project_id={projectId}/>      
        </div>

    <Footer/>
    </>   
        
    );
}

export default Nodies