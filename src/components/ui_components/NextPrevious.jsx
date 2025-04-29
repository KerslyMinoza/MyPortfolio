
import './ui_components.css';
import { PROJECT } from '../../pages/projects/project.js';
import { Link } from 'react-router-dom';

function nextPrevious(project_id){

    
   const proj_id = project_id.project_id;
   console.log("PROJECT ID FROM NEXTPREVIOUS");
    console.log(proj_id);

console.log ("NEXTPREVIOUS COMPONENT:" + proj_id)
    return(
        <div className="nextPrevious_container">

                {proj_id > 0 ? (
                <div className="nextButton">
                    <Link 
                    to={PROJECT[proj_id - 1].path}
                    state={{ projectId: PROJECT[proj_id - 1].id }}
                    >
                     {'<'}  Prev
                    </Link>
                </div>
                ) : (
                <span className="invisiblePlaceholder">Prev</span>
                )}

                {proj_id < PROJECT.length - 1 ? (
                <div className="nextButton">
                    <Link 
                    to={PROJECT[proj_id + 1].path}
                    state={{ projectId: PROJECT[proj_id + 1].id }}
                    >
                    Next  {'>'}
                    </Link>
                </div>
                ) : (
                <div className="invisiblePlaceholder">Next</div>
                )}
        </div>

    );
}

export default nextPrevious