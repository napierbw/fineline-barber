import * as contentful from "contentful";

// Contentful client setup
const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

// Fetch data directly in the component
export default async function ClosureBanner() {
  let closure;
  try {
    // Fetch data from Contentful
    closure = await client.getEntry("3bJF2GEDwqUEK9JGHJQ24X");
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
  }

  return (
    <>
      {closure.fields.closureDescription ? (
        <div
          id="closure"
          className="w-full bg-red-600 text-white text-center py-4"
        >
          <p className="font-semibold max-w-6xl m-auto px-4">
            {closure.fields.closureDescription}
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
