import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./forgetpassword.scss";
import TransitionsModal from "../../common/modal";

const Forgetpassword = () => {

  const [isModalOpen,setModalOpen] = useState(false)
  return (
    <div className="main">
      <div className="sub-main">
        <Typography className="forgetpassword-typo">Forgot Password</Typography>
        <Typography className="reset-typo">
          Enter your email address to reset your password
        </Typography>
        <Typography className="email-typo">Email id</Typography>
        <TextField
          variant="standard"
          className="text-field"
          placeholder="Please enter your password"
          fullWidth
        />
        <Button onClick={()=>setModalOpen(true)} variant="contained" className="forget-button">
          Next
        </Button>
      </div>
      <TransitionsModal isOpen = {isModalOpen} handleOpen={()=>setModalOpen(false)} 
     title={"A request has been sent to admin for resetting your password. Kindly contact concerned admin"}
      />
    </div>
  );
};

export default Forgetpassword;
