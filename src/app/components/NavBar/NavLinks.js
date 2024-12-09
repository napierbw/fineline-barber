import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <Link
        className="px-4 font-extrabold text-white hover:text-yellow-400"
        href="/"
      >
        Home
      </Link>
      <Link
        className="px-4 font-extrabold text-white hover:text-yellow-400"
        href="/services"
      >
        Services
      </Link>
      <Link
        className="px-4 font-extrabold text-white hover:text-yellow-400"
        href="/gallery"
      >
        Gallery
      </Link>
      <Link
        className="px-4 font-extrabold text-white hover:text-yellow-400"
        href="/staff"
      >
        Staff
      </Link>
      <Link
        className="px-4 font-extrabold text-white hover:text-yellow-400"
        href="/testimonials"
      >
        Testimonials
      </Link>
    </>
  );
};

export default NavLinks;
