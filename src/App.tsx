import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/HomePage";
import Footer from "./components/organs/Footer";
import Projects from "./components/pages/ProjectPage";
import Team from "./components/pages/TeamPage";
import Contacts from "./components/pages/ContactPage";
import Gallery from "./components/pages/GalleryPage";
import Aboutus from "./components/pages/AboutPage";



function App() {

  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full h-full bg-zinc-900 font-nunito relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App