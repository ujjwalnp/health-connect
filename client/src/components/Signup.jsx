import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import HeartImage from '../assets/loding.gif';

export default function Signup({ whoAmI }) {
  const [formData, setFormData] = useState({
    nid: "",
    name: "",
    age: "",
    email: "",
    phone_no: "",
    license_no: "",
    registration_no: "",
    hid: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center h-screen ">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <div className="flex justify-center items-center">
            <img src={HeartImage} alt="Heart" className="w-20 h-20 " />
          </div>
          <div className="mb-5">
            <TextField
              fullWidth
              label="NID"
              id="nid"
              value={formData.nid}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <TextField
              fullWidth
              label="Name"
              id="name"
              className="mt-10"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          {whoAmI !== "farma" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="Age"
                id="age"
                className="mt-10"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="mb-5">
            <TextField
              fullWidth
              label="Email"
              id="email"
              className="mt-10"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <TextField
              fullWidth
              label="Phone no"
              id="phone_no"
              className="mt-10"
              value={formData.phone_no}
              onChange={handleInputChange}
            />
          </div>
          {whoAmI === "doctor" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="License no"
                id="license_no"
                className="mt-10"
                value={formData.license_no}
                onChange={handleInputChange}
              />
            </div>
          )}
          {whoAmI === "farma" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="Registration no"
                id="registration_no"
                className="mt-10"
                value={formData.registration_no}
                onChange={handleInputChange}
              />
            </div>
          )}
          {whoAmI === "patient" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="HID"
                id="hid"
                className="mt-10"
                value={formData.hid}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="mb-5">
            <TextField
              fullWidth
              label="Password"
              id="password"
              className="mt-10"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-5">
            <Button variant="contained" size="medium" onClick={handleSignup}>
              Signup
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
