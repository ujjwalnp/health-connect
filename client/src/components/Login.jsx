import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeartImage from '../assets/loding.gif';

export default function Login() {
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
          <TextField fullWidth label="User ID" id="user_id" />
        </div>
        <div>
          <TextField
            fullWidth
            label="Password"
            id="password"
            className="mt-10"
          />
        </div>
        <div className="mt-5">
          <Button variant="contained" size="medium">
            Login
          </Button>
        </div>
      </Box>
    </div>
    </div>
   
  );
}
