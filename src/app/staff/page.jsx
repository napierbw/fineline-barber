"use client"

import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import AOS from "aos";
import { useEffect } from "react";

const Staff = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <>
      <div className="bg-black ">
        <NavBar />
        <div className="h-[20vh] mb-48"></div>
        <p className="h-[20vh] mb-48 text-white text-center">Coming soon!</p>
      </div>
      <Footer />
    </>
  );
};

export default Staff;