
import './ui_components.css';
import { PROJECT } from '../../data/projects.js';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function nextPrevious(project_id){


   const proj_id = project_id.project_id;
   console.log("PROJECT ID FROM NEXTPREVIOUS");
    console.log(proj_id);

console.log ("NEXTPREVIOUS COMPONENT:" + proj_id)
    return(
        <div className="nextPrevious_container">

                {proj_id > 0 ? (
                <div className="nextButton prev">
                    <Link
                    to={PROJECT[proj_id - 1].path}
                    state={{ projectId: PROJECT[proj_id - 1].id }}
                    >
                     <ChevronLeftIcon className="chevron-icon" />
                     <span className="project-title-desktop">{PROJECT[proj_id - 1].title}</span>
                     <span className="nav-text-mobile">Prev</span>
                    </Link>
                </div>
                ) : (
                <span className="invisiblePlaceholder"></span>
                )}

                {proj_id < PROJECT.length - 1 ? (
                <div className="nextButton next">
                    <Link
                    to={PROJECT[proj_id + 1].path}
                    state={{ projectId: PROJECT[proj_id + 1].id }}
                    >
                    <span className="nav-text-mobile">Next</span>
                    <span className="project-title-desktop">{PROJECT[proj_id + 1].title}</span>
                    <ChevronRightIcon className="chevron-icon" />
                    </Link>
                </div>
                ) : (
                <div className="invisiblePlaceholder"></div>
                )}
        </div>

    );
}

export default nextPrevious