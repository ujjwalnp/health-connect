import React from 'react';

const ShowMedicine = () => {
  const medicines = ['Penicillin', 'Paracetamol', 'Aspirin', 'Ibuprofen', 'Antibiotics']; // Add more medicines as needed

  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border border-black'>
      <h1 className="font-bold">Active Medication</h1>

      <ul className="flex flex-col items-start list-none pl-5 mt-5">
        {medicines.map((medicine, index) => (
          <li key={index}>{`${index + 1}. ${medicine}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowMedicine;
