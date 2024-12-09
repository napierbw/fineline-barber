import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div
          className="p-2 md:p-12 h-[600px] flex items-center justify-center"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-center text-center items-center"
          >
            <div
              className="lg:w-7/8 flex flex-col justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                Fine Line Barbershop LLC
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-white">
                804-396-9174 | 13965 Raised Antler Cir | Midlothian, VA 23112
              </div>
              <div className="text-xl font-semibold tracking-tight mb-5 text-white">
                Walk-ins welcome!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
