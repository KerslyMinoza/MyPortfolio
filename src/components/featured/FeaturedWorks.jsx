import './featuredworks.css';
import Thumbnail from '../../pages/projects/Thumbnail.jsx';
import Filter from '../ui_components/Filter.jsx';
import { PROJECT } from '../../pages/projects/project.js';
import { motion } from 'framer-motion';
import { bounceUp } from "../../components/animation.js";

function FeaturedWorks(){
 
    const { variants, initial, whileInView, transition } = bounceUp(0.3);

    return (
            <div className="featured_wrappe margin-m">
                <div className="featured_title"> Featured Works </div>
                    <div
                        className="featuredworks">
                        {PROJECT.map((project) => (
                         <Thumbnail project={project}/>      
                        ))}
                    </div>
            </div>
        
    );
}

export default FeaturedWorks