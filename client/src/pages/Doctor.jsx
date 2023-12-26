import React from "react";
import SearchUser from "../components/SearchUser";
import UserDetails from "../components/UserDetails";
import ShowMedicine from "../components/ShowMedicine";
import InputField from "../components/InputField";

export default function Doctor() {
  return (
    <>
      <h1>Doctor View</h1>
      <div >
        
          <SearchUser />
       
          <UserDetails status_check={false} />
        {/* Additional content in the remaining columns */}
        <div className="flex">
      <div className="flex-1 p-4 border">
        <ShowMedicine role={"doctor"}/>
       
        </div>
      <div className="flex-1 p-4 border">09</div>
    </div>
      </div>
    </>
  );
}
