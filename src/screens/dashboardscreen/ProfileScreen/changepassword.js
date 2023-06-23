import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./changepassword.scss";
import TransitionsModal from "../../../common/modal";
const ChangeProfilePassword = () => {
  const [isModalOpen,setModalOpen] = useState(false)
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
          <Button onClick={()=>setModalOpen(true)} variant="contained" className="submit-button">
            Submit
          </Button>
        </div>
      </div>
      <TransitionsModal
        isOpen={isModalOpen}
        handleOpen={() => setModalOpen(false)}
       
      />
    </div>
  );
};

export default ChangeProfilePassword;
