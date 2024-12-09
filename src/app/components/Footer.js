import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer w-full px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-black p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <p className="font-bold text-4xl mb-4 text-black">
                  Fine Line Barbershop LLC
                </p>
                <div className="text-md font-medium text-gray-700">
                  <p>Est. 2019</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <p className="text-gray-100 text-xl font-bold mb-4">LINKS</p>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/gallery"
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/staff"
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Staff
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/testimonials"
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ml-7 md:ml-16 lg:ml-16 mx-auto">
              <p className="text-gray-100 text-xl font-bold mb-4">CONTACT US</p>
              <ul className="text-md">
                <li className="mb-2">
                  <a
                    className="text-gray-100 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out"
                    href="tel:(804) 396-9174"
                  >
                    (804) 396-9174
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-gray-100 hover:text-gray-300 transition duration-250 ease-in-out"
                    href="mailto:finelinebarbershop2019@gmail.com"
                  >
                    finelinebarbershop2019@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-white">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li className="ml-4">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/p/Fine-Line-Barbershop-100063117825367/"
                      className="flex justify-center items-center text-blue-900 hover:text-blue-300 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Website created by Benjamin Napier. <br />
                Contact me:&nbsp;
                <a className="text-blue-900" href="mailto:napierbw51@gmail.com">
                  napierbw51@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
