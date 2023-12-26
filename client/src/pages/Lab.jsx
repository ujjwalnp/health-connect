import React from "react";
import SearchUser from "../components/SearchUser";
import UserDetails from "../components/UserDetails";
import UploadPdf from "../components/UploadPdf";

export default function Lab() {
  return(
    <>
    <h1>Lab View</h1>
    <SearchUser />
    <UserDetails status_check={"False"} />
    <div className="flex mt-20 justify-center">
        <UploadPdf status_check={"Frue"}/>
    </div>
    </>
  );
}