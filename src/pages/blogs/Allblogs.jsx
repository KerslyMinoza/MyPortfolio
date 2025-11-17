
import Nav from '../../components/layout/Nav/Nav.jsx';
import ThumbnailBlog from './ThumbnailBlog.jsx';
import { BLOG } from '../../data/blogs.js';
import { bounceUp } from "../../components/utils/animation.js";
import { motion } from 'framer-motion';

function Allblogs(){

    const { variants, initial, whileInView, transition } = bounceUp(0.3);

    return (
        <div>
            <Nav/>
            <motion.div
            variants={variants}
            initial={initial}
            animate="visible"
            transition={transition}
            viewport={{ once: true, amount: 0.2 }}
            className="blog_wrapper">

                <div className="blog_title"> Something Worth Sharing</div>

                        <div
                            className="blog_works">
                            {BLOG.map((blog) => (
                            <ThumbnailBlog blog={blog}/>
                            ))}
                        </div>

            </motion.div>

            <div className="margin-m"></div>
        </div>
    );
}

export default Allblogs
