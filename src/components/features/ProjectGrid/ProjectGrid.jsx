import './projectgrid.css';
import Thumbnail from '../../../pages/projects/Thumbnail.jsx';
import { PROJECT } from '../../../data/projects.js';
import { motion } from 'framer-motion';
import { bounceUp } from '../../utils/animation.js';

/* Both title and subtitle are optional: with neither, the grid is the whole of
   the page and starts straight under the navigation. */
function ProjectGrid({ title, subtitle }) {
  const { variants, initial, whileInView, transition } = bounceUp(0);

  // copy before sorting — PROJECT is a shared module-level array
  const sorted = [...PROJECT].sort((a, b) => a.id - b.id);

  return (
    <div id="projects" className="projects_wrapper">
      {(title || subtitle) && (
        <motion.div
          className="projects_heading"
          variants={variants}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={{ once: true, amount: 0.5 }}>
          {title && <div className="projects_title">{title}</div>}
          {subtitle && <p className="projects_subtitle">{subtitle}</p>}
        </motion.div>
      )}

      <div className="projects_grid">
        {sorted.map((project, index) => (
          <Thumbnail key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
