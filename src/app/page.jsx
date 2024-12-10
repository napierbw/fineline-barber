"use client"

import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Location from "./components/Location"
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return <div>
    <NavBar/>
    <Hero/>
    <Intro/>
    <Services/>
    <Location/>
    <Footer/>
  </div>;
}