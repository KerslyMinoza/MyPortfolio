
import './ui_components.css';
import Back from "../../assets/images/back.svg";
import { Link } from 'react-router-dom';

function Backbutton(){
    return(
        <Link to="/">
            <div>
                    <div className="backbutton">
                        <img src={Back}></img>
                    </div>
            </div>
        </Link>

    );
}

export default Backbutton