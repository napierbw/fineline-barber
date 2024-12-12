import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

const Staff = async () => {
  let staff = [];
  try {
    const staffList = await client.getEntry("9W1c5by3H3OoTty8Exax2");
    console.log(staffList);
    staff = staffList.fields.fineLineStaffMembers.map((member, index) => (
      <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
        {member.fields.photo && (
          <img
            src={`https:${member.fields.photo.fields.file.url}`}
            alt={member.fields.photo.fields.title}
            className="aspect-square object-cover rounded-lg overflow-hidden w-full max-w-[400px] h-auto"
          />
        )}
        <h2 className="text-xl font-bold mt-4">{member.fields.name}</h2>
        <p className="text-gray-600 mt-2">{member.fields.description}</p>
      </div>
    ));
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="bg-black ">
        <NavBar />
        <div className="pt-[82px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-16 pb-16 pt-8 md:max-w-6xl max-w-[90%] justify-center m-auto">
          {staff}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Staff;
