"use client"

import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer"
import ServicesPage from "../components/ServicesPage"
import AOS from "aos";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return <div className="services">
    <NavBar/>
    <ServicesPage/>
    <Footer/>
  </div>;
}