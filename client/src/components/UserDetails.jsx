import React, { useState } from 'react';

const UserDetails = ({ status_check }) => {
  const [showDetails, setShowDetails] = useState(status_check);

  const handleToggle = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (status_check=="True")? (
    <div className="max-w-[500px] overflow-hidden mx-auto my-4">
      <main className="p-4">
        <dl className="space-y-2">
          <div className="flex items-center">
            <dt className="w-1/3 font-bold">Full name</dt>
            <dd className="w-2/3">Nischal Khanal</dd>
          </div>
          <div className="flex items-center">
            <dt className="w-1/3 font-bold">HID</dt>
            <dd className="w-2/3">200120</dd>
          </div>
          <div className="flex items-center">
            <dt className="w-1/3 font-bold">Age</dt>
            <dd className="w-2/3">20</dd>
          </div>
          <div className="flex items-center">
            <dt className="w-1/3 font-bold">Blood Group</dt>
            <dd className="w-2/3">A+</dd>
          </div>
        </dl>
      </main>
    </div>
  ) : null;
};

export default UserDetails;
