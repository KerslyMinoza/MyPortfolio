import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';
import Design from "../../../assets/images/mednotes/mednotes.png";

import Design12 from "../../../assets/images/orcaa/orcaa_12.png";
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
                <div className="project_name"> Mednotes </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    Clinical Mednotes is an MVP AI-powered audio transcription app designed for doctors. It records sessions and automatically generates notes or letters for patients, making it easy to summarize consultations efficiently.
                    </div>

                    <div className="section_title"> Role</div>

                    <div className="project_content">
                    <ul className="less_padding">
                        <li>UI UX Design</li>
                    </ul>
                    </div>

                    <div className="section_title"> The Problem</div>

                    <div className="project_content">
                    Clinical MedNotes, an existing app, needed a UI enhancement due to its outdated design. I created a cleaner, more focused redesign where the recording buttons are clearly visible, making it easier for users to start recording. The new design simplifies the process with fewer clicks, allowing users to immediately begin recording and generate notes effortlessly.
                    </div>


                    <div className="section_title"> Research</div>

                    <div className="project_content">
                    There wasn't much formal research involved; I was given a document and asked to redesign the app. I explored the app myself and identified a few issues. For instance, I found myself getting lost at times, and there was too much going on in a single page, which made it feel a bit chaotic—not necessarily bad, but certainly something that could be improved. This challenge motivated me to elevate the design, so I focused on creating more prominent, obvious buttons. I made sure that when recording, it’s clear and unmistakable, ensuring users can easily see that the recording is in progress.
                    </div>

                    <div className="section_title"> Design Process</div>
                    <div className="margin-m"></div>
                    <div className="image_holder"><img src={Design}></img></div>

                    <div className="section_title"> Prototype</div>
                    <div className="project_content">
                    Feel free to try out the prototype i made.
                    </div>
               
            </div>


        </div>

        <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height="1000"
            src="https://embed.figma.com/proto/AbzLPzonTw1JEfpqn4qCVq/My-UI-UX-Projects?node-id=548-773&scaling=min-zoom&content-scaling=fixed&page-id=356%3A2648&starting-point-node-id=548%3A773&embed-host=share"
            allowFullScreen
            >

            </iframe>*
        
            <div className="project" >
                <NextPrevious project_id={projectId}/>  
            </div> 
        <Footer/>
    </>   
        
    );
}

export default Mednotes