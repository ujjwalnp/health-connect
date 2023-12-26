import React, { useState, useEffect } from 'react';
import InputField from './InputField';
const ShowMedicine = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Fetch medicines from the backend endpoint (replace '/api/medicines' with your actual endpoint)
    fetch('/api/medicines')
      .then(response => response.json())
      .then(data => setMedicines(data))
      .catch(error => console.error('Error fetching medicines:', error));
  }, []);

  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border border-black'>
      <h1 className="font-bold">Active Medication</h1>

      <ul className="flex flex-col items-start list-none pl-5 mt-5">
        {medicines.map((medicine, index) => (
          <li key={index}>{`${index + 1}. ${medicine}`}</li>
        ))}
      </ul>
      <InputField />
      
    </div>
  );
}

export default ShowMedicine;
