import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeartImage from '../assets/loding.gif';

// choose input field according to props walue of whoAmI

export default function Signup({ whoAmI }) {
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
            <TextField fullWidth label="NID" id="nid" />
          </div>
          <div className="mb-5">
            <TextField
              fullWidth
              label="Name"
              id="name"
              className="mt-10"
            />
          </div>
          {whoAmI !== "farma" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="Age"
                id="age"
                className="mt-10"
              />
            </div>
          )}
          <div className="mb-5">
            <TextField
              fullWidth
              label="Email"
              id="email"
              className="mt-10"
            />
          </div>
          <div className="mb-5">
            <TextField
              fullWidth
              label="Phone no"
              id="phone_no"
              className="mt-10"
            />
          </div>
          {whoAmI === "doctor" && (
            <div className="mb-5">
              <TextField
                fullWidth
                label="License no"
                id="license_no"
                className="mt-10"
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
              />
            </div>
          )}
          <div className="mb-5">
            <TextField
              fullWidth
              label="Password"
              id="password"
              className="mt-10"
            />
          </div>
          <div className="mt-5">
            <Button variant="contained" size="medium">
              Signup
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
