
import Nav from '../../components/nav/Nav.jsx';
import ThumbnailBlog from '../../pages/Blogs/ThumbnailBlog.jsx';
import { BLOG } from '../../pages/Blogs/blogs.js';
import { bounceUp } from "../../components/animation.js";

function Blogs(){
 
    const { variants, initial, whileInView, transition } = bounceUp(0.3);

    return (
        <div>
            <Nav/>
            <div className="blog_wrapper margin-s">
            
                <div className="blog_title"> Something Worth Sharing</div>
                    <div className="blog_works">
                        <div
                            className="featured_works">
                            {BLOG.map((blog) => (
                            <ThumbnailBlog blog={blog}/>      
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Blogs
