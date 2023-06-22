import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./changepassword.scss";
import TransitionsModal from "../../common/modal";
const ChangePassword = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="main">
      <div className="sub-main">
        <Typography className="forget-typo">Forgot Password</Typography>
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
            onClick={() => setModalOpen(true)}
            variant="contained"
            className="submit-button"
          >
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

export default ChangePassword;
