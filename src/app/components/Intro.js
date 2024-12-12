import React from "react";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-8">
            <h2 className="text-3xl  text-black font-bold text-center">
              Superior Service & Personalized Attention!
            </h2>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                Full Service Barbershop with over 20 years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
