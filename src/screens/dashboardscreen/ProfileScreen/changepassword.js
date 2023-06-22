import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./changepassword.scss"
const ChangeProfilePassword = () => {

  return (
    <div className="main">
      <div className="sub-main">

        <Typography className="forget-typo">Change password</Typography>
        <Typography className="oldpassword-typo">Old Password</Typography>
        <TextField
          variant="standard"
          className="new-field"
          placeholder="Please enter your password"
          fullWidth
        />

        <Typography className="newpassword-typo">New Password</Typography>
        <TextField
          variant="standard"
          className="new-field"
          placeholder="Please enter your password"
          fullWidth
        />
        <Typography className="confirm-typo">Confirm Password</Typography>
        <TextField
          variant="standard"
          className="confirm-field"
          placeholder="Please confirm your password"
          fullWidth
        />
        <div>
          <Button
            
            variant="contained"
            className="submit-button"
          >
            Submit
          </Button>
        </div>
      </div>
     
    </div>
  );
};

export default ChangeProfilePassword;
