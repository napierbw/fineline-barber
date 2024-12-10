"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function ClientLayoutEffect() {
  useEffect(() => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: true, // Animation happens only once
      });
    }, []);
  }, []);

  return null; // No UI needed; this component runs logic only
}
