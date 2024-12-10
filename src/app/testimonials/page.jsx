"use client"

import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import AOS from "aos";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <>
      <div className="testimonial">
        <NavBar />
        <div
          className="p-2 md:p-12 h-[600px] flex items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-8 justify-center text-center items-center">
            <div
              className="lg:w-7/8 flex flex-col justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                Customer Testimonials
              </h1>
            </div>
          </div>
        </div>

        <section className="bg-gray-100 p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "Bruce has been cutting me and my family for years now, and I
              wouldn't trust anyone else. One of the best cuts in town and won't
              beat you over the head with pricing!"
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Walleed A. 11/19/24
            </p>
          </div>
        </section>

        <section className="bg-white p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "I have been going to this shop for over 4 years, Bruce does a
              fantastic job every time. If he is not available Kim steps right
              in and gets it done. Highly Recommend. "
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              <a
                href="https://www.google.com/maps/contrib/112212550664375170018/reviews?hl=en-US"
                className="underline"
              >
                David G. - Nov. 2024
              </a>
            </p>
          </div>
        </section>

        <section className="bg-gray-100 p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              “ I was looking for a backup Barbershop and found this place this
              morning. They did an outstanding job on my cut, paid attention to
              my requests and had me in and out in no time. Great cut, excellent
              service and affordable pricing.”
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Nathan R. - July 2024
            </p>
          </div>
        </section>

        <section className="bg-white p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              “ I finally found a real Barbershop! They gave me a great haircut,
              cleaned up my beard, and they actually know how to use a straight
              razor. This place is reasonably priced and the service is
              excellent.”
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              David W. - Dec. 2023
            </p>
          </div>
        </section>

        <section className="bg-gray-100 p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              “One of the best experiences I’ve had at a Barbershop.”
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Nicholas J.- Nov. 2023
            </p>
          </div>
        </section>

        <section className="bg-white p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "We just moved to this area and I sent my husband to get a haircut
              before our vacation. He came back with a Haircut that made him
              look 10 years younger. I am definitely going to send him there
              again!"
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Mimi S. -Sept. 2023
            </p>
          </div>
        </section>

        <section className="bg-gray-100 p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "The team at Fine Line knows exacly what they are doing! Very
              clean & efficient. I just took my son there and I go there myself,
              we will be life long customers!"
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Andy R. - 2/12/22
            </p>
          </div>
        </section>

        <section className="bg-white p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              Excellent place to get a haircut and Bruce is hands down one of
              best Barbers to give me a haircut...kills it every time! And I'm
              very picky! But he kills it every time! I highly recommend!"
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              Mike W. - 3/16/21
            </p>
          </div>
        </section>

        <section className="bg-gray-100 p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "It's not often I write reviews but this place is AWESOME!
              Outstanding customer service and a perfect haircut. Bruce's
              attention to detail was unmatched this morning and he's a very
              skilled barber. It was my first time there and I will definitely
              go back! To say these guys are highly recommended is an
              understatement! Thanks again!"
            </p>
            <p className="my-3 text-l text-gray-600 font-semibold text-center">
              James S. - 10/3/20
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;