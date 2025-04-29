import './project.css';

import Design from "../../../assets/images/valhalla/valhalla.png";
import Backbutton from '../../../components/ui_components/Backbutton';
import Footer from '../../../components/footer/Footer';

function Nodies(){

    return (
        <>
            <Backbutton/>
            <div className="project" id="orcaa">
                <div className="project_name"> Nodies </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    <a href="https://nodies.app" target="_blank" rel="noopener noreferrer"> www.vist nodies.app </a>
                    </div>

                    <div className="project_content">
                     Valhalla is a landing page design project for a company that connects you with top talent from the Philippines. They aim for a clean, branded website that aligns with their guidelines and logo. The design focuses on simplicity and clarity, especially on the case study page. 
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Designer</li>
                        <li>UI UX Designer</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    This project was a web design refresh for Valhalla, who already had an existing website that looked a bit outdated. The client wanted a more modern and minimal look while still staying true to their brand colors. Their main goal was to make the site clean, user-friendly, and easy to navigate—so visitors immediately understand what Valhalla offers. They also wanted to put the spotlight on their services, keeping everything else minimal and secondary. The turnaround time for the design was quick—just three days—so it was a fast-paced project that needed to be delivered right away.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    There wasn’t any formal research involved for this project since it was based on a quick call between the client, myself, and a few team members. With a fast turnaround time—roughly 12 hours—I had to jump straight into the design phase. The goal was to finalize everything quickly and hand it off to the development team. I used the existing website as a reference, simplifying the content and layout to fit the new, modern design approach.
                    </div>


                    <div className="section_title center_text">Design Sheet</div>       
 
                    <div className="image_holder"><img src={Design}></img></div>




                     <div className="section_title center_text">Reflection</div> 
                     <div className="project_content">
                     I'm really glad the client was satisfied with the outcome, especially considering the short turnaround time. Designing two pages was a bit of a challenge, mainly because the old website had so much content. Condensing that information and making it more concise and clear was a tricky process. I focused on including only the most essential and relevant details to highlight their services effectively.
                    </div> 

                    <div className="project_content">
                    My goal was to create a cleaner, more straightforward design so users could immediately understand what the website and company are all about. I genuinely enjoyed working on this project. If there’s one thing I’d change next time, it would be to minimize the use of boxes for the services section and maybe use color instead to make it feel lighter. But overall, I’m happy with how everything turned out.
                    </div>    
            </div>
        </div>

    <Footer/>
    </>   
        
    );
}

export default Nodies