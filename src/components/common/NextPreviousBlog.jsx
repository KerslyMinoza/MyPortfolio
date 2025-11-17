
import './ui_components.css';
import { BLOG } from '../../data/blogs.js';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function NextPreviousBlog(blog_id){


   const blg_id = blog_id.blog_id;
   console.log("BLOG ID FROM NEXTPREVIOUS");
    console.log(blg_id);

console.log ("NEXTPREVIOUS BLOG COMPONENT:" + blg_id)
    return(
        <div className="nextPrevious_container">

                {blg_id > 1 ? (
                <div className="nextButton prev">
                    <Link
                    to={BLOG.find(b => b.id === blg_id - 1).path}
                    state={{ blogId: blg_id - 1 }}
                    >
                     <ChevronLeftIcon className="chevron-icon" />
                     <span>Prev</span>
                    </Link>
                </div>
                ) : (
                <span className="invisiblePlaceholder"></span>
                )}

                {blg_id < BLOG.length ? (
                <div className="nextButton next">
                    <Link
                    to={BLOG.find(b => b.id === blg_id + 1).path}
                    state={{ blogId: blg_id + 1 }}
                    >
                    <span>Next</span>
                    <ChevronRightIcon className="chevron-icon" />
                    </Link>
                </div>
                ) : (
                <div className="invisiblePlaceholder"></div>
                )}
        </div>

    );
}

export default NextPreviousBlog
