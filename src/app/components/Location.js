import React from "react";

const Location = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12" id="location">
        <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
          Location & Hours
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-black mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="justify-center">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.4665493297434!2d-77.66610792370896!3d37.40244603351958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b177cfceb0b9ff%3A0xd10828d7b3821421!2sFine%20Line%20Barbershop%20LLC!5e0!3m2!1sen!2sus!4v1732309698366!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Fine Line Barbershop Location Map"
                ></iframe>
                <p className="text-gray-700 text-lg font-medium">
                  Fine Line Barbershop LLC
                  <br />
                  13965 Raised Antler Cir
                  <br />
                  MIDLOTHIAN, Virginia 23112
                </p>
                <a className="text-blue-900" href="tel:(804) 396-9174">
                  (804) 396-9174
                </a>
                <br />
                <a
                  className="text-blue-900"
                  href="mailto:finelinebarbershop2019@gmail.com"
                >
                  finelinebarbershop2019@gmail.com
                </a>
              </div>
            </div>

            <div className="px-6 py-8">
              <div>
                <div className="flex flex-col items-center rounded-lg p-4 shadow-sm">
                  <p className="text-lg font-semibold text-gray-700">Monday</p>
                  <p className="text-sm text-gray-600">Closed</p>
                </div>

                <div className="flex flex-col items-center rounded-lg p-4 shadow-sm">
                  <p className="text-lg font-semibold text-gray-700">
                    Tuesday-Friday
                  </p>
                  <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
                </div>

                <div className="flex flex-col items-center rounded-lg p-4 shadow-sm">
                  <p className="text-lg font-semibold text-gray-700">
                    Saturday
                  </p>
                  <p className="text-sm text-gray-600">9:00 AM - 3:00 PM</p>
                </div>

                <div className="flex flex-col items-center rounded-lg p-4 shadow-sm">
                  <p className="text-lg font-semibold text-gray-700">Sunday</p>
                  <p className="text-sm text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
