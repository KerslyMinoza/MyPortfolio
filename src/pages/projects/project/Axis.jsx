import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';
import DesignProcess from "../../../assets/images/axis/design_process.png";
import PainPoints from "../../../assets/images/axis/painpoints.png";
import Userpersona1 from "../../../assets/images/axis/userpersona1.png";
import Userpersona2 from "../../../assets/images/axis/userpersona2.png";
import Styleguide from "../../../assets/images/axis/styleguide.png";
import Wireframe from "../../../assets/images/axis/wireframes.png";
import Design1 from "../../../assets/images/axis/design1.png";
import Design2 from "../../../assets/images/axis/design2.png";
import Design3 from "../../../assets/images/axis/design3.png";
import Design4 from "../../../assets/images/axis/design4.png";
import Design5 from "../../../assets/images/axis/design5.png";
import Design6 from "../../../assets/images/axis/design6.png";



import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Mednotes(){


const location = useLocation();
const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="orcaa">
                <div className="project_name"> AXIS </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    AXIS is a web-based application designed for managing martial arts schools primarily in Australia, New Zealand, and the UK. Its main function is to provide a secure and organized database for storing various records such as schedules, student history, grading, and statistics. Given the diverse and specialized nature of martial arts, this project allows for personalized customization of grading and ranking systems to align with individual school rules.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Design</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    AXIS, formerly known as Whitebelt, is an established application that offers similar fundamental features as described earlier. However, Whitebelt's user experience (UX) and software planning are currently disorganized and require a comprehensive restructuring. The primary challenge lies in smoothly transitioning our existing users from Whitebelt to AXIS while ensuring a seamless migration process. As the school management app market continues to expand, it is crucial for AXIS to prioritize its competence in user experience.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    I acknowledge that AXIS or Whitebelt is not the sole school management app addressing these issues. 
                    There are other applications available, such as Mindbody, Stark, and Martialytics. To gain a deeper understanding, I created a dummy account and examined the functionality of these apps. While each app has its unique features, they all share a common objective. This exploration allowed me to identify pain points in their applications and ensure they are addressed in AXIS. Furthermore, I took the opportunity to offer suggestions and ideas to simplify the user experience and provide effective solutions to any UX-related challenges.
                    </div>

                    <div className="image_holder"><img src={PainPoints}></img></div>


                    <div className="section_title"> Design Process</div>
                    <div className="margin-m"></div>
                    <div className="image_holder"><img src={DesignProcess}></img></div>

                    <div className="section_title"> User Persona</div>


                    <div className="image_holder"><img src={Userpersona1}></img></div>
                    <div className="image_holder"><img src={Userpersona2}></img></div>

                    <div className="section_title"> Wireframe</div>
                    <div className="image_holder"><img src={Wireframe}></img></div>

                    <div className="section_title"> Design System</div>
                    <div className="image_holder"><img src={Styleguide}></img></div>

                    <div className="section_title"> High Fidelity</div>
                    <div className="image_holder">
                        <img src={Design1}></img>
                        <img src={Design2}></img>
                        <img src={Design3}></img>
                        <img src={Design4}></img>
                        <img src={Design5}></img>
                        <img src={Design6}></img>
                    </div>

                    <div className="section_title"> Reflection</div>
                    <div className="project_content">
                    Managing a large-scale project with tight deadlines has been my biggest challenge, but it has also been a valuable learning experience. AXIS is one of the largest systems I have designed, and time constraints are a concern as I am only able to work part-time on this project. Currently, the project is still in the development phase, and I eagerly await the feedback from Beta Testers to gain insights into their experiences. Since Martial Arts is not my personal domain, it is crucial for me to take note of the actual users' input.
                    </div>      

                    <div className="project_content">
                    Throughout the process, I have come to realize that design is an ongoing and iterative process. Nothing is set in stone. As a designer, if you feel the need to make design changes that enhance the system, I encourage you to push for those changes. In my two years of working with AXIS, I have learned the importance of being open-minded to comments and feedback while prioritizing the user experience. In a large company, there are often numerous comments and suggestions, but it is essential to trust your judgment and follow what you believe is right. You are the designer.
                    </div>             
               
            </div>


        </div>


            <div className="project" >
                <NextPrevious project_id={projectId}/>  
            </div> 
        <Footer/>
    </>   
        
    );
}

export default Mednotes