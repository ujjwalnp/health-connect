// src/components/Cards.jsx

import React from 'react';
import Height from '../assets/height.png';
import Weight from '../assets/weight.png';
import Bloodpressure from '../assets/bloodpressure.png';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[400px] mx-auto p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl">
      <div className="text-center bg-white p-4 rounded-lg transition-transform transform hover:scale-105">
        <img src={Height} alt="Height" className="h-16 w-16 mb-4 mx-auto" />
        <p className="font-semibold text-gray-800">Height</p>
        <p className="text-gray-600">6ft 9in</p>
      </div>

      <div className="text-center bg-white p-4 rounded-lg transition-transform transform hover:scale-105">
        <img src={Weight} alt="Weight" className="h-16 w-16 mb-4 mx-auto" />
        <p className="font-semibold text-gray-800">Weight</p>
        <p className="text-gray-600">65 kg</p>
      </div>

      <div className="text-center bg-white p-4 rounded-lg transition-transform transform hover:scale-105">
        <img src={Bloodpressure} alt="Blood Pressure" className="h-16 w-16 mb-4 mx-auto" />
        <p className="font-semibold text-gray-800">Blood Pressure</p>
        <p className="text-gray-600">120/80 mmHg</p>
      </div>
    </div>
  );
};

export default Cards;
