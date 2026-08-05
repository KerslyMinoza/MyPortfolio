import './thumbnail.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { arriveIn } from '../../components/utils/animation.js';

const MotionLink = motion.create(Link);

function Thumbnail({ project: proj, index = 0 }){

    // cards in the same row cascade in one after another
    const { variants, initial, whileInView, viewport, transition } = arriveIn((index % 3) * 0.14);

    return (
        <MotionLink
        to={proj.path}
        state={{ projectId: proj.id }}
        className="thumbnail"
        variants={variants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}>

            {/* the frame the hover zoom is clipped to: the image grows, the
                card it sits in does not */}
            <div className="thumbnail_media">
                <img src={proj.image} alt={proj.title} />
            </div>

            <div className = "title">{proj.title}</div>
            <div className = "description">{proj.description}</div>
            <div className="type-wrapper">
                {proj.type?.map((t, i) => (
                    <span className="type" key={i}>{t}</span>
                ))}
            </div>

        </MotionLink>
    );
}

export default Thumbnail
