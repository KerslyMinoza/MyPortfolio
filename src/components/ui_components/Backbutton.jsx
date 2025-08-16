import './ui_components.css';
import Back from "../../assets/images/back.svg";
import { Link } from 'react-router-dom';

function Backbutton({ page }) {
  // if page is "home" or empty, go to root
  const linkTo = page === "home" || !page ? "/" : `/${page}`;

  return (
    <Link to={linkTo}>
      <div className="backbutton">
        <img src={Back} alt="Back" />
      </div>
    </Link>
  );
}

export default Backbutton;