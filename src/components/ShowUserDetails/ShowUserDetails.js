import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowUserDetails = () => {
  const data = useLoaderData();

  const {
    address: { city, street, suite, zipcode },
    phone,
    // website,
    // company: { name: company_name, bs },
  } = data;
  return (
    <div>
      <div className="space-y-4 mt-16 font-bold italic border border-orange-500 bg-red-200 py-4 mx-10 shadow-red-300 shadow-md">
        <p>City : {city}</p>
        <p>Street : {street}</p>
        <p>Suite : {suite}</p>
        <p>Zipcode : {zipcode}</p>
        <p className="text-sm">Contact : {phone}</p>
      </div>
    </div>
  );
};

export default ShowUserDetails;
