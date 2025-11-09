import './featuredworks.css';
import Thumbnail from '../../../pages/projects/Thumbnail.jsx';
import { PROJECT } from '../../../data/projects.js';
import { bounceUp } from "../../utils/animation.js";

function FeaturedWorks() {
  const { variants, initial, whileInView, transition } = bounceUp(0.3);

  return (
    <div className="featured_wrapper margin-m">
      <div className="featured_title"> Featured Works </div>

      <div className="featured_works">
        {PROJECT
          .sort((a, b) => a.id - b.id) // ✅ sort by id (ascending)
          .map((project) => (
            <Thumbnail key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
}

export default FeaturedWorks;