
import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';

import Design1 from "../../../assets/images/zipcode team/amanda.png";
import Design2 from "../../../assets/images/zipcode team/stacey.png";
import Design3 from "../../../assets/images/zipcode team/bonnie.png";
import Design4 from "../../../assets/images/zipcode team/tracey.png";
import Design5 from "../../../assets/images/zipcode team/amanda.png";
import Design6 from "../../../assets/images/zipcode team/josie.png";
import Design7 from "../../../assets/images/zipcode team/jewell.png";
import Design8 from "../../../assets/images/zipcode team/kate.png";
import Design9 from "../../../assets/images/zipcode team/carl.png";
import Design10 from "../../../assets/images/zipcode team/marissa.png";
import Design11 from "../../../assets/images/zipcode team/doggie.png";

import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Zipcode(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="pokfund">
                <div className="project_name"> Zipcode Team </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    I created this as a commissioned piece to be used as a hover effect on their team section.
                    </div>


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
                     </div>
            <NextPrevious project_id={projectId}/>    
            </div>
             
        </div>

      <Footer/>  

    </>   
        
    );
}

export default Zipcode