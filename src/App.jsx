import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion'
import Home from './pages/Home.jsx';
import Orcaa from './pages/projects/project/Orcaa.jsx';
import Ironwit from './pages/projects/project/Ironwit.jsx';
import Waggle from './pages/projects/project/Waggle.jsx';
import Mednotes from './pages/projects/project/Mednotes.jsx';
import Valhalla from './pages/projects/project/Valhalla.jsx';
import Trux from './pages/projects/project/Trux.jsx';
import Poktfund from './pages/projects/project/Poktfund.jsx';
import Avatar from './pages/projects/project/Avatar.jsx';
import Nodies from './pages/projects/project/Nodies.jsx';
import Aboutme from './pages/projects/project/Aboutme.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contact from "./pages/Contact.jsx";
import Moreworks from "./pages/Moreworks.jsx";
import Hippomathics from "./pages/projects/project/Hippomathics.jsx";



function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="aboutme" element={<Aboutme />} />
      <Route path="contact" element={<Contact />} />
      <Route path="moreworks" element={<Moreworks />} />
    </Routes>
  </BrowserRouter>
  )

}

export default App
