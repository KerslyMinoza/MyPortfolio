
import SiteNav from '../../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.jsx';
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

            {/* the spacer that used to close the page is gone — the footer
                carries its own clearance above the rule */}
            <SiteFooter/>
        </div>
    );
}

export default Allblogs
