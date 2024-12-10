"use client"

import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer"
import Gallery from "../components/GalleryPage"
import AOS from "aos";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return <div className="bg-black">
    <NavBar/>
    <Gallery/>
    <Footer/>
  </div>;
}