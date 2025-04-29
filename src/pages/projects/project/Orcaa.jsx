import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';
import NextPrevious from '../../../components/ui_components/NextPrevious';
import DesignProcess from "../../../assets/images/orcaa/orcaa_design_process.png";
import Wireframe from "../../../assets/images/orcaa/orcaa_wireframe_A.png";
import WireframeB from "../../../assets/images/orcaa/orcaa_wireframe_B.png";
import Branding from "../../../assets/images/orcaa/orcaa_branding.png";
import PersonaA from "../../../assets/images/orcaa/orcaa_userpersona_A.png";
import PersonaB from "../../../assets/images/orcaa/orcaa_userpersona_B.png";
import PersonaC from "../../../assets/images/orcaa/orcaa_userpersona_C.png";

import Design1 from "../../../assets/images/orcaa/orcaa_1.png";
import Design2 from "../../../assets/images/orcaa/orcaa_2.png";
import Design3 from "../../../assets/images/orcaa/orcaa_3.png";
import Design4 from "../../../assets/images/orcaa/orcaa_4.png";
import Design5 from "../../../assets/images/orcaa/orcaa_5.png";
import Design6 from "../../../assets/images/orcaa/orcaa_6.png";
import Design7 from "../../../assets/images/orcaa/orcaa_7.png";
import Design8 from "../../../assets/images/orcaa/orcaa_8.png";
import Design9 from "../../../assets/images/orcaa/orcaa_9.png";
import Design10 from "../../../assets/images/orcaa/orcaa_10.png";
import Design11 from "../../../assets/images/orcaa/orcaa_11.png";
import Design12 from "../../../assets/images/orcaa/orcaa_12.png";
import Footer from '../../../components/footer/Footer';

import { useLocation } from 'react-router-dom';


function Orcaa(){

    const location = useLocation();
    const projectId = location.state?.projectId;
    

    return (
        <>
            <Backbutton/>
            <div className="project" id="orcaa">
                <div className="project_name"> Orcaa </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    This app is designed to simplify care management,
                    enhance community participation, and ensure personalise
                    support for individuals needing care. 
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
                    Finding the right caregiver can be really hard. In Australia, patients are often matched based on schedules, not personality or experience. But it makes a big difference when a caregiver truly fits — someone who connects and brings comfort, not just care.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                        <span className="bold">Interviewed 3 international caregivers from AU.</span>
                        <ul className="less_padding">
                            <li>Most of them is under an agency</li>
                            <li>Should consider agency as care recipient</li>
                            <li>Most patient don't use phone especially elders. Their family member manages the tasks</li>
                            <li>Caregivers can do multiple part times</li>
                            <li>Carer is different from Caregiver</li>
                        </ul>
                    </div>

                    <div className="section_title"> Design Process</div>
                    <div className="image_holder"><img src={DesignProcess}></img></div>


                    <div className="section_title">Branding</div>
                    <div className="project_content">
                    Orcaa represents affection and sociability, and it has a notable presence. While the caregiving industry is very competitive, one brand stands out. To highlight this, I created a comprehensive brand book for Orcaa.
                    </div>
                    <div className="image_holder"><img src={Branding}></img></div>

                    <div className="section_title"> User Persona</div>
                    <div className="project_content">
                    Developed three personas for Orcaa: the carer (the individual receiving care), a likely family member (typically the one managing the care), and the patient.
                    </div>
   
                    <div className="image_holder"><img src={PersonaC}></img></div>          
                    <div className="image_holder"><img src={PersonaB}></img></div>
                    <div className="image_holder"><img src={PersonaA}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
                    Sometimes, when wireframing, I also create a prototype to give my client a complete experience of the design pitch.
                    </div>
                    <div className="image_holder"><img src={Wireframe}></img></div>
                    <div className="image_holder"><img src={WireframeB}></img></div>


                    <div className="section_title center_text">Final Design</div>       
 

                    <div className="image_holder" id="high_fidelity">
                        <img src={Design1}></img>
                        <img src={Design2}></img>
                        <img src={Design3}></img>
                        <img src={Design4}></img>
                        <img src={Design5}></img>
                        <img src={Design6}></img>
                        <img src={Design7}></img>
                        <img src={Design8}></img>
                        <img src={Design9}></img>
                        <img src={Design10}></img>
                        <img src={Design11}></img>
                        <img src={Design12}></img>
                     </div>

                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     This is a large and complex system that ideally should be broken down into separate modules. However, the client follows a unique project management approach, which makes that challenging. Another difficulty is the evolving nature of the business requirements—they're not clearly defined and tend to change over time, which poses a challenge for me as a designer.
                    Because of this, I’ve realized the importance of designing with maximum flexibility, anticipating potential changes and ensuring adaptability throughout the process.
                    </div> 

                    <div className="project_content">
                    The app is still in development, and while version 1 is already quite ambitious, we're hopeful that it will exceed expectations and succeed. I'm proud to be working with such talented developers who are able to bring everything together in just a few months. The development process has been unusual as well, as I don't have direct communication with the foreign development team. Still, we're optimistic and looking forward to a successful beta launch soon.
                    </div> 
            <NextPrevious project_id={projectId}/> 
            </div>
            
        </div>
        

        <Footer/>
    </>   
        
    );
}

export default Orcaa