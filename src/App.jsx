import { Routes, Route } from "react-router-dom";



import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Universities from "./pages/Universities";
import Gallery from "./pages/gallery";
import Contact from "./pages/Contact";
import JFT from "./pages/courses/jft";
import JLPT from "./pages/courses/jlpt";
import NAT from "./pages/courses/nat";
import Footer from "./components/Footer";
import About from "./pages/about";
import Services from "./pages/services";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/universities" element={<Universities />} />
         <Route path="/services" element={<Services />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
         <Route path="/contact" element={<Contact />} /> 

        {/* Courses */}
        <Route path="/courses/jft" element={<JFT />} />
        <Route path="/courses/jlpt" element={<JLPT />} />
        <Route path="/courses/nat" element={<NAT />} />
      </Routes>
      <Footer/>
    </>
  );
}