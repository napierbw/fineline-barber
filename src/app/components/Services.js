import * as contentful from "contentful";
import Link from "next/link";

// Contentful client setup
const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

// Fetch data directly in the component
export default async function Services() {
  let serviceItems = [];

  try {
    // Fetch data from Contentful
    const serviceMenu = await client.getEntry("6vXcyToT0GgDLpswKUxziD");

    serviceItems =
      serviceMenu.fields.serviceItems.map((svc) => (
        <div>
          {svc.fields.service && svc.fields.price ? (
            <p className="m-1 text-sm text-gray-700 font-semibold text-center lg:text-right">
              {svc.fields.service} - {svc.fields.price}
            </p>
          ) : (
            <p className="m-1 text-sm text-gray-700 font-semibold">
              {svc.fields.service}
            </p>
          )}
        </div>
      )) || [];
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
  }

  // Render the services list
  return (
    <div id="services" className="bg-gray-100">
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 lg:text-left lg:justify-between mt-[2rem] md:mt-0">
            <div className="lg:w-1/2 flex flex-col lg:mx-4">
              <h3
                className="text-3xl  text-black
                            font-bold"
              >
                Hair & Shave Services
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-700 font-semibold">
                  As a Full Service Barbershop, here at Fine Line its our
                  passion for you to walk away with that "Ready For The World"
                  attitude. We pride ourselves in providing new and innovative
                  techniques when it comes to your grooming needs. We also
                  service a diverse clientele and deliver top notch customer
                  service!
                </p>
                <p className="my-3 text-xl text-gray-700 font-semibold">
                  We offer $5 discounts on Services $30+ for Seniors, Military
                  Personnel & First Responders!
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    href="/services"
                    className="text-white bg-black hover:bg-yellow-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    View Service Details
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-1 md:gap-2 lg:gap-2 lg:mx-4 justify-center mb-[2rem] lg:mb-0">
                <h3
                  className="text-l  text-black
                            font-bold text-center lg:text-right"
                >
                  Service Menu
                </h3>
                {serviceItems.length > 0 ? (
                  <>
                    {serviceItems.map((svc, index) => (
                      <div key={index}>{svc}</div>
                    ))}
                  </>
                ) : (
                  <p className="text-white text-center">Coming soon!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
