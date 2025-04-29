import './project.css';
import Backbutton from '../../../components/ui_components/Backbutton';

import Design1 from "../../../assets/images/avatar_thumbnail.gif";
import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Avatar(){

    const location = useLocation();
    const projectId = location.state?.projectId;

    return (
        <>
            <Backbutton/>
            <div className="project" id="pokfund">
                <div className="project_name"> Poktfund Avatar </div>
                

                <div className="content">
                    <div className="section_title"> Project Overview</div>

                    <div className="project_content">
                    One feature of the wallet includes dynamic, randomly generated avatars. I designed a set of customizable elements like accessories and features to support this concept. These avatars are intended to be unique for each user and may potentially be minted as NFTs in the future. This feature was developed specifically for the Pokftund wallet.
                    </div>


                    <div className="image_holder"><img src={Design1}></img></div>
            <NextPrevious project_id={projectId}/>    
            </div>
             
        </div>

      <Footer/>  

    </>   
        
    );
}

export default Avatar