import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';
import ProjectGrid from '../components/features/ProjectGrid/ProjectGrid.jsx';
import SiteFooter from '../components/layout/SiteFooter/SiteFooter.jsx';

/* Not the sign-off footer — Contact is one of the links in the row along the
   top, so the page would be offering the same thing twice. The slim one
   instead, which is a rule and the year rather than a second ask. */

function Allprojects() {
  return (
    <div>
      <SiteNav />
      {/* no heading — the navigation names the page, and the work speaks next */}
      <ProjectGrid />
      <SiteFooter />
    </div>
  );
}

export default Allprojects;
