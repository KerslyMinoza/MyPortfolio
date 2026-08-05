import './blogs.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { arriveIn } from '../../components/utils/animation.js';

const MotionLink = motion.create(Link);

function ThumbnailBlog({ blog, index = 0 }){

    // cards in the same row cascade in one after another, as on the projects grid
    const { variants, initial, whileInView, viewport, transition } = arriveIn((index % 3) * 0.14);

    return (
        <MotionLink
        to={blog.path}
        state={{ blogId: blog.id }}
        className="thumbnailblog"
        variants={variants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}>
            {/* the frame the hover zoom is clipped to: the image grows, the
                card it sits in does not */}
            <div className="thumbnailblog_media">
                <img src={blog.image} alt={blog.title} />
            </div>

            <div className = "title">{blog.title}</div>
            <div className = "description">{blog.description}</div>

        </MotionLink>
    );
}

export default ThumbnailBlog
