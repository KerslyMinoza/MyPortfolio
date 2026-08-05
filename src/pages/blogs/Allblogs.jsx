
import SiteNav from '../../components/layout/SiteNav/SiteNav.jsx';
import ThumbnailBlog from './ThumbnailBlog.jsx';
import { BLOG } from '../../data/blogs.js';

/* Laid out like the projects page: the navigation names the page, so there is
   no heading, and the cards carry the animation themselves — cascading along
   each row as they come into view — rather than the grid arriving as one
   block. */

function Allblogs(){

    return (
        <div>
            <SiteNav/>

            <div className="blog_wrapper">
                <div className="blog_works">
                    {BLOG.map((blog, index) => (
                        <ThumbnailBlog key={blog.id} blog={blog} index={index} />
                    ))}
                </div>
            </div>

            <div className="margin-m"></div>
        </div>
    );
}

export default Allblogs
