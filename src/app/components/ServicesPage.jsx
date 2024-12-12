import React from "react";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

const Services = async () => {
  let services = [];
  try {
    const serviceMenu = await client.getEntry("6vXcyToT0GgDLpswKUxziD");
    services = serviceMenu.fields.serviceItems.map((svc, index) => (
      <div
        key={svc.sys.id}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-8 px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="100" // Staggered animations
      >
        {/* Image Section */}
        {svc.fields.photo && (
          <div className="flex justify-center lg:justify-end">
            <img
              src={`https:${svc.fields.photo.fields.file.url}`}
              alt={svc.fields.photo.fields.title || "Service image"}
              className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          {/* Service Name and Price */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {svc.fields.service}
            {svc.fields.price && (
              <span className="text-gray-800 font-semibold ml-2">
                - {svc.fields.price}
              </span>
            )}
          </h2>

          {/* Description */}
          {svc.fields.description && (
            <p className="text-gray-600 leading-relaxed">
              {svc.fields.description.split("/n").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index <
                    svc.fields.description.split("/n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </div>
    ));
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {/* Header Section */}
      <div
        className="p-6 md:p-12 h-[400px] flex flex-col items-center justify-center bg-gray-900 text-white text-center services"
        data-aos="zoom-in"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Service Menu
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Explore our premium services tailored for your style and comfort.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-8">
        {services.length > 0 ? (
          <>{services}</>
        ) : (
          <p className="h-[20vh] mb-48 text-gray-800 text-center text-lg">
            Coming soon!
          </p>
        )}
      </div>
    </>
  );
};

export default Services;
