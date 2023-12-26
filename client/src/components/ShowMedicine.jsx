import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';

const ShowMedicine = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call to fetch medicines
    const mockMedicines = ['Medicine A', 'Medicine B', 'Medicine C'];
    setMedicines(mockMedicines);
  }, []);

  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Active Medication</h1>

      <ul className="flex flex-col items-start list-none pl-5 text-white">
        {medicines.map((medicine, index) => (
          <li
            key={index}
            className="flex items-center mb-4 py-2 border-t border-b border-white w-full"
          >
            <FontAwesomeIcon icon={faCapsules} className="mr-4" />
            <span className="font-semibold text-lg">{medicine}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowMedicine;
