"use client"

import React from "react";
import * as contentful from "contentful";
import { useState, useEffect } from "react";

const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

// client
//   .getEntry("7DXlCmvt6siZY4k7cq3wLT")
//   .then((entry) => console.log(entry))
//   .catch(console.error);

// const renderGallery = async () => {
//   client
//     .getEntries()
//     .then((entries) => {
//       console.log(entries);
//       entries.items.map((entry) => {
//         <img href={`https:${entry.fields.photo.fields.file.url}`}></img>;
//       });
//     })
//     .catch(console.error);
// };

const Services = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const serviceMenu = await client.getEntry("6vXcyToT0GgDLpswKUxziD");
      const serviceElements = serviceMenu.fields.serviceItems.map((svc) => (
        <div
          className="p-2 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 w-full px-8 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Column */}
          {svc.fields.photo ? (
            <div className="flex justify-center w-full mb-4 lg:mb-0">
              <img
                key={svc.sys.id}
                src={`https:${svc.fields.photo.fields.file.url}`}
                alt={svc.fields.photo.fields.title || "Service image"}
                className="service-image"
              />
            </div>
          ) : (
            <></>
          )}

          {/* Text Column */}
          <div className="flex flex-col items-center justify-center">
            {svc.fields.service && svc.fields.price ? (
              <h2 className="text-3xl text-black font-bold text-center mb-4">
                {svc.fields.service} - {svc.fields.price}
              </h2>
            ) : (
              <h2 className="text-3xl text-black font-bold text-center mb-4">
                {svc.fields.service}
              </h2>
            )}

            {svc.fields.description ? (
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                {svc.fields.description.split("/n").map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < svc.fields.description.split("/n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      ));
      setServices(serviceElements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
        <div
          className="p-2 md:p-12 h-[600px] flex items-center justify-center grey-bg"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-8 justify-center text-center items-center">
            <div
              className="lg:w-7/8 flex flex-col justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                Service Menu
              </h1>
            </div>
          </div>
        </div>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
        {services.length > 0 ? (
          <>
            {services.map((svc, index) => (
              <div
                className="aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
                key={index}
              >
                {svc}
              </div>
            ))}
          </>
        ) : (
          <p className="h-[20vh] mb-48 text-white text-center">Coming soon!</p>
        )}
      </div>
    </>
  );
};

export default Services;