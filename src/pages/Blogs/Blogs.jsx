
import Nav from '../../components/nav/Nav.jsx';
import ThumbnailBlog from '../../pages/Blogs/ThumbnailBlog.jsx';
import { BLOG } from '../../pages/Blogs/blogs.js';
import { bounceUp } from "../../components/animation.js";
import { motion } from 'framer-motion';

function Blogs(){
 
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
            className="blog_wrapper margin-s">
            
                <div className="blog_title"> Something Worth Sharing</div>

                        <div
                            className="blog_works">
                            {BLOG.map((blog) => (
                            <ThumbnailBlog blog={blog}/>      
                            ))}
                        </div>

            </motion.div>
        </div>
    );
}

export default Blogs
