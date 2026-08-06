import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion } from 'framer-motion'
import Home from './pages/Home.jsx';
import Allblogs from './pages/blogs/Allblogs.jsx';
import Orcaa from './pages/projects/project/Orcaa.jsx';
import Ironwit from './pages/projects/project/Ironwit.jsx';
import Waggle from './pages/projects/project/Waggle.jsx';
import Mednotes from './pages/projects/project/Mednotes.jsx';
import Valhalla from './pages/projects/project/Valhalla.jsx';
import Trux from './pages/projects/project/Trux.jsx';
import Poktfund from './pages/projects/project/Poktfund.jsx';
import Avatar from './pages/projects/project/Avatar.jsx';
import Nodies from './pages/projects/project/Nodies.jsx';
import Zipcode from './pages/projects/project/Zipcode.jsx';
import Aboutme from './pages/Aboutme.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';
import Contact from "./pages/Contact.jsx";
import Moreworks from "./pages/Moreworks.jsx";
import Hippomathics from "./pages/projects/project/Hippomathics.jsx";
import Axis from "./pages/projects/project/Axis.jsx";
import Uxconference from "./pages/blogs/blog/Uxconference.jsx";
import DevconBangkok from "./pages/blogs/blog/DevconBangkok.jsx";
import MalaysiaNodies from "./pages/blogs/blog/MalaysiaNodies.jsx";
import Fx from "./pages/projects/project/Fx.jsx";
import Rikka from "./pages/projects/project/Rikka.jsx";
import Boldmade from "./pages/projects/project/Boldmade.jsx";
import Allprojects from "./pages/Allprojects.jsx";
import { PROJECT } from "./data/projects.js";
import { BLOG } from "./data/blogs.js";


/* Every path the site used to answer on, against where that page lives now.
   Anything already linked or indexed still lands rather than hitting nothing.

   The project entries are derived rather than listed: the move was mechanical —
   /nodies became /projects/nodies — so a new project needs nothing added here.
   The journal's slugs also lost their underscores, which is not derivable, so
   each entry carries its old path in blogs.js. */
const REDIRECTS = [
  ['/aboutme', '/career'],
  ['/moreworks', '/about-me'],
  ['/blog', '/journal'],
  ...PROJECT.map((project) => [project.path.replace('/projects/', '/'), project.path]),
  ...BLOG.map((blog) => [blog.legacyPath, blog.path]),
];



function App() {

  return (

    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />

      {/* the navigation's own six, each one named after the link that reaches it */}
      <Route path="projects" element={<Allprojects />} />
      <Route path="career" element={<Aboutme />} />
      <Route path="about-me" element={<Moreworks />} />
      <Route path="journal" element={<Allblogs />} />
      <Route path="contact" element={<Contact />} />

      {/* the work itself, under the section it belongs to */}
      <Route path="projects/nodies" element={<Nodies />} />
      <Route path="projects/functionchat" element={<Fx />} />
      <Route path="projects/ironwit" element={<Ironwit />} />
      <Route path="projects/waggle" element={<Waggle />} />
      <Route path="projects/orcaa" element={<Orcaa />} />
      <Route path="projects/mednotes" element={<Mednotes />} />
      <Route path="projects/valhalla" element={<Valhalla />} />
      <Route path="projects/trux" element={<Trux />} />
      <Route path="projects/poktfund" element={<Poktfund />} />
      <Route path="projects/avatar" element={<Avatar />} />
      <Route path="projects/rikka" element={<Rikka />} />
      <Route path="projects/hippomathics" element={<Hippomathics />} />
      <Route path="projects/zipcode" element={<Zipcode />} />
      <Route path="projects/axis" element={<Axis />} />
      <Route path="projects/boldmade" element={<Boldmade />} />

      <Route path="journal/malaysia-nodies" element={<MalaysiaNodies />} />
      <Route path="journal/devcon-bangkok" element={<DevconBangkok />} />
      <Route path="journal/ux-conference" element={<Uxconference />} />

      {/* replace rather than push, so the back button returns to wherever the
          old link was followed from instead of bouncing through it again */}
      {REDIRECTS.map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
    </Routes>
  </BrowserRouter>
  )

}



export default App
