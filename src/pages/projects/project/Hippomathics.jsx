import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';

import Design1 from "../../../assets/images/hippomathics/hippo.webp";
import Design2 from "../../../assets/images/hippomathics/ui.webp";
import Design3 from "../../../assets/images/hippomathics/highest score.webp";
import Video from "../../../assets/images/hippomathics/video.mp4";
import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Hippomathics(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="pokfund">
                <div className="project_name"> Hippomathics </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    This was a school project I worked on back in 2016, where we were tasked with developing something object-oriented. I built this project using Unity 3D with C#, and I also designed the entire UI and handled everything else myself. I really enjoyed creating it over the span of 2–3 months. One of the biggest challenges was developing a dynamic algorithm — starting with generating islands from just a single function call. It might look simple, but it was definitely a headache at the time! Still, I had a lot of fun working on it.
                    </div>
                    
                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>Developer & Designer</li>
                    </ul>


                    <div className="image_holder"><img src={Design1}></img></div>


                    </div>

                    <div className="section_title"> Some Screen Shots</div>

                    <div className="project_content">
                    These are just the screen grabs I was able to recover since this was from a long time ago. Luckily, I also made a short video of it while playing.
                    </div>

                    <div className="image_holder">
                        <video className="video" width="auto" controls>
                        <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="image_holder" id="hippomathics">
                        <div className="image_holder"><img src={Design2}></img></div>
                        <div className="image_holder"><img src={Design3}></img></div>
                    </div>

  
                    <div className="project_content">
                    Although I can no longer update its features — since I’ve forgotten parts of the code and it’s no longer compatible with the latest Unity versions — it’s still miraculously live on the Play Store!
                    </div>

             <NextPrevious project_id={projectId}/>      
            </div>
            
        </div>

      <Footer/>  

    </>   
        
    );
}

export default Hippomathics