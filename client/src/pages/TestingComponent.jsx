import React from "react";
import InputField from "../components/InputField";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards"
import CheckBox from "../components/CheckBox";
import Login from "../components/Login";
import UploadPdf from '../components/UploadPdf'
import Signup from "../components/Signup";


export default function TestingComponent() {
    return (
        <div>
        {/* <InputField /> */}
        <Cards />
        {/* <SearchBar /> */}
        {/* <CheckBox checkbox_data={"Check h"} /> */}
        {/* <Login /> */}
        {/* <UploadPdf /> */}
        <Signup whoAmI={"patient"}/>
        </div>
    );
    }