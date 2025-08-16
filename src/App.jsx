import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'
import Home from './pages/Home.jsx';
import Blog from './pages/Blogs/Blogs.jsx';
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
import Aboutme from './pages/projects/project/Aboutme.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contact from "./pages/Contact.jsx";
import Moreworks from "./pages/Moreworks.jsx";
import Hippomathics from "./pages/projects/project/Hippomathics.jsx";
import Axis from "./pages/projects/project/Axis.jsx";
import Uxconference from "./pages/Blogs/blog/ Uxconference.jsx";
import DevconBangkok from "./pages/Blogs/blog/DevconBangkok.jsx";
import MalaysiaNodies from "./pages/Blogs/blog/MalaysiaNodies.jsx";





function App() {

  return (

    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="uxplusconference" element={<Uxconference />} />
      <Route path="devcon_bangkok" element={<DevconBangkok />} />
      <Route path="malaysia_nodies" element={<MalaysiaNodies />} />
      <Route path="orcaa" element={<Orcaa />} />
      <Route path="ironwit" element={<Ironwit />} />
      <Route path="waggle" element={<Waggle />} />
      <Route path="mednotes" element={<Mednotes />} />
      <Route path="trux" element={<Trux />} />
      <Route path="valhalla" element={<Valhalla />} />
      <Route path="poktfund" element={<Poktfund />} />
      <Route path="hippomathics" element={<Hippomathics />} />
      <Route path="avatar" element={<Avatar />} />
      <Route path="nodies" element={<Nodies />} />
      <Route path="zipcode" element={<Zipcode />} />
      <Route path="axis" element={<Axis />} />
      <Route path="aboutme" element={<Aboutme />} />
      <Route path="contact" element={<Contact />} />
      <Route path="moreworks" element={<Moreworks />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
  )

}



export default App
