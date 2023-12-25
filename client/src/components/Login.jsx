import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeartImage from '../assets/loding.gif';

export default function Login() {
  const handleLogin = async () => {
    // Perform validation on user_id and password fields

    const user_id = document.getElementById("user_id").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, password }),
      });

      if (response.ok) {
        // Successful login, handle authentication token
        const data = await response.json();
        const authToken = data.authToken;

        // Store the authToken securely (e.g., in localStorage or a secure cookie)
        console.log("Login successful! AuthToken:", authToken);
      } else {
        // Handle unsuccessful login (display error message, redirect, etc.)
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
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
            <TextField fullWidth label="User ID" id="user_id" />
          </div>
          <div>
            <TextField
              fullWidth
              label="Password"
              type="password"
              id="password"
              className="mt-10"
            />
          </div>
          <div className="mt-5">
            <Button
              variant="contained"
              size="medium"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
