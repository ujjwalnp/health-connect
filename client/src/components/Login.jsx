import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen space-y-4">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <div className="mb-5">
          {" "}
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
      </Box>{" "}
     
    </div>
  );
}
