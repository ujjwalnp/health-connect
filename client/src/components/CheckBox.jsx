import React from 'react';

const CheckBox = () => {
  return (
    <div className="space-x-4">
      <a href="#" className="accept space inline-block bg-green-500 text-white px-8 py-4 shadow-md hover:bg-green-600">
        ACCEPT <span className="fa fa-check"></span>
      </a>
      <a href="#" className="deny inline-block bg-red-500 text-white px-8 py-4 shadow-md hover:bg-red-600">
        DENY <span className="fa fa-close"></span>
      </a>
    </div>
  );
};

export default CheckBox;
