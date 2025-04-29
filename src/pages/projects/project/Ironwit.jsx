import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';
import DesignProcess from "../../../assets/images/ironwit/design_process.png";
import Wireframe from "../../../assets/images/ironwit/wireframe.png";
import PersonaA from "../../../assets/images/ironwit/userpersona.png";
import HighFidelity from "../../../assets/images/ironwit/high_fidelity.png";
import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Ironwit(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="orcaa">
                <div className="project_name"> Ironwit </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    Ironwit is an app designed for advanced gym users focused on strength and body movement. Unlike most workout apps, it integrates diet tracking, offering calorie suggestions alongside workout tracking for more accurate results.
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
                        Advanced gym users often rely on multiple tools to track their fitness progress—one for workouts, another for nutrition, and perhaps others for mobility or recovery. This fragmented experience leads to inconsistencies, extra effort, and a lack of accurate insight into how diet and training truly affect performance and physique.
                    </div>

                    <div className="project_content">
                        Most existing fitness apps either oversimplify tracking or cater to beginners, leaving advanced users with limited control and customization. There's a clear need for a comprehensive, integrated solution that aligns diet and training for strength-focused individuals.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                        <span className="bold">Interviewed 5 gym users and 1 personal coach.</span>
                        <ul className="less_padding">
                            <li>Most of them don't have a personal coach</li>
                            <li>Only relies on google and youtube for exercise references</li>
                            <li>Struggling with the perfect diet</li>
                            <li>Gym goal is unclear</li>
                        </ul>
                    </div>

                    <div className="section_title"> Design Process</div>
                    <div className="image_holder"><img src={DesignProcess}></img></div>


                    <div className="section_title">Branding</div>
                     <div className="project_content">
                        Due to time constraints, I kept the branding process simple and efficient. I designed the logo, selected a primary font, and established two main color combinations to create a cohesive visual identity. While a full brand book hasn’t been developed yet, I focused on delivering quick visual samples to the client—mainly through splash screens and early UI mockups.
                    </div> 
                    <div className="project_content">
                        The client responded positively to the initial design direction, which gave me the green light to move forward with the UI design at a faster pace.
                    </div>  

                    <div className="section_title"> User Persona</div>
                    <div className="project_content">
                    Developed three personas for Orcaa: the carer (the individual receiving care), a likely family member (typically the one managing the care), and the patient.
                    </div>
   
                    <div className="image_holder"><img src={PersonaA}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="project_content">
                    Sometimes, when wireframing, I also create a prototype to give my client a complete experience of the design pitch.
                    </div>
                    <div className="image_holder"><img src={Wireframe}></img></div>


                    <div className="section_title center_text">Final Design</div>       
                    
                    <div className="project_content">
                    The client was insistent on using Axure as the main prototyping tool. While Axure excels in creating highly functional, interactive prototypes, I found its design capabilities to be limited—possibly due to it being my first time working with the platform.
                    </div> 

                    <div className="project_content">
                    To maintain the quality of the UI design, I continued to use Figma for visual design and then transferred the assets and flows into Axure for prototyping. This process required extra effort, juggling between two tools, but it allowed me to deliver both a polished design and a fully interactive prototype that met the client’s expectations.
                    </div> 

                    <div className="image_holder"><img src={HighFidelity}></img></div>

                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     Unfortunately, the project didn’t move forward into full development due to financial constraints and a shift in the client’s priorities. After sharing the prototype with a few potential users, the client realized his true focus was in building a learning platform specifically for developers.
                    </div> 

                    <div className="project_content">
                    From the start, I was aware that the project’s future was uncertain, as the client was still gauging interest and feasibility. One of the key challenges throughout the process was the difficulty in finding a trusted developer to bring the concept to life.
                    </div>

                    <div className="project_content">
                    Despite the outcome, the experience was valuable in terms of rapid prototyping, adapting to shifting goals, and navigating tools like Axure under time pressure.
                    </div>


                    <div className="project_content">
                    I also had the opportunity to deepen my design process, thanks to a client who was generous with resources and time. He provided several case studies, which helped me approach the project with more structured research and thoughtful design decisions. This experience greatly contributed to refining my workflow and improving how I balance creativity with real-world usability.
                    </div>
                    
                    
            <NextPrevious project_id={projectId}/>          
            </div>
        </div>

     <Footer/>
    </>   
        
    );
}

export default Ironwit