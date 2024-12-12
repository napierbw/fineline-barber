import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

const Testimonials = async () => {
  let testimonialItems = [];
  try {
    const testimonialList = await client.getEntry("VisbNeRrpazEML8U2eH73");
    testimonialItems = testimonialList.fields.testimonials.map(
      (testimonial, index) => (
        <section className="testimonialItem p-12">
          <div className="max-w-2xl m-auto">
            <p className="text-2xl text-black font-bold text-center">
              "{testimonial.fields.review}"
            </p>

            {testimonial.fields.reviewLink ? (
              <p className="my-3 text-gray-600 font-semibold text-center">
                <a href={testimonial.fields.reviewLink} className="underline">
                  {testimonial.fields.author}
                </a>{" "}
                - {testimonial.fields.date}
              </p>
            ) : (
              <p className="my-3 text-gray-600 font-semibold text-center">
                {testimonial.fields.author} - {testimonial.fields.date}
              </p>
            )}
          </div>
        </section>
      )
    );
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <NavBar />
      <div className="p-2 md:p-12 h-[60vh] flex items-center justify-center testimonial">
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
      <section className="testimonialItem p-12 flex items-center justify-center">
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            We Value Your Feedback!
          </h2>
          <p className="text-gray-600 mb-6">
            Help us improve by sharing your experience.
          </p>
          <a
            href="https://g.page/r/CSEUgrPXKAjREBM/review"
            className="inline-block bg-black hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Leave Us a Review
          </a>
        </div>
      </section>
      {testimonialItems}
      <Footer />
    </>
  );
};

export default Testimonials;
