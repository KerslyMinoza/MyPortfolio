import './thumbnail.css';
import { PROJECT } from './project.js';
import Orcaa from "../../assets/images/orcaa_thumbnail.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Thumbnail(project){

    let proj = project.project;


    return (
        <Link 
        to={proj.path} 
        state={{ projectId: proj.id }}
        className="thumbnail">
            <motion.img 
            src={proj.image} 
            alt="Tilted Image"
            className="w-64 h-64 object-cover rounded-xl"
            whileHover={{ rotate: -1 }}
            transition={{ type: "spring", stiffness: 400 }}

            ></motion.img>

            <div className = "title">{proj.title}</div>
            <div className = "description">{proj.description}</div>
            
        </Link>
    );
}

export default Thumbnail