// src/pages/Patient.jsx

import React from "react";
import Cards from "../components/Cards";
import ShowMedicine from "../components/ShowMedicine";
import Reports from "../components/Reports";

const Patient = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-10">
        <div className="col-span-4 mx-auto bg-white rounded-lg p-8 shadow-md">
          <div className="flex justify-center">
            <img
              src="https://placekitten.com/150/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
            <p className="text-lg text-gray-600">Age: 25</p>
            <p className="text-lg text-gray-600">Blood Pressure: 120/80 mmHg</p>
            <p className="text-lg text-gray-600">Height: 6ft 2in</p>
          </div>
        </div>
        <div className="col-span-4">
          <Cards />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4 mt-5">
        <div className="col-span-4 bg-white rounded-lg p-8 shadow-md">
          <ShowMedicine />
        </div>
        <div className="col-span-4 bg-white rounded-lg p-8 shadow-md">
          <Reports />
        </div>
      </div>
    </>
  );
};

export default Patient;
