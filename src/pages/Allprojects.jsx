import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';
import ProjectGrid from '../components/features/ProjectGrid/ProjectGrid.jsx';

/* No footer here — Contact is one of the links in the row along the top, so
   the page would be offering the same thing twice. Every other page still
   carries it. */

function Allprojects() {
  return (
    <div>
      <SiteNav />
      {/* no heading — the navigation names the page, and the work speaks next */}
      <ProjectGrid />
    </div>
  );
}

export default Allprojects;
