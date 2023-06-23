import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./profilescreen.scss";
import TransitionsModal from "../../../common/modal";

const ProfileScreen = () => {
 const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Typography className="edit-profile">Edit Profile</Typography>
      <Typography className="my-profile">My Profile</Typography>
      <Grid container justifyContent="center">
        <Grid xs={6} p={5} className="first-grid">
          <Typography className="form-label">Full Name</Typography>
          <TextField variant="standard" className="text-feild" fullWidth />
          <Typography className="form-label">Email Id</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
          <Typography className="form-label">Desgination</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
          <Typography className="form-label">Block</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
        </Grid>

        <Grid xs={6} p={5}>
          <Typography className="form-label">User Name</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
          <Typography className="form-label">Mobile Number</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
          <Typography className="form-label">District</Typography>
          <TextField variant="standard"  className="text-feild" fullWidth />
        </Grid>
        <Button onClick={() => setModalOpen(true)} type="submit" variant="contained" className="submit-button">
          Submit
        </Button>
      </Grid>
 
      <TransitionsModal isOpen={isModalOpen} handleOpen={() => setModalOpen(false)} title={"Your Profile has been updated successfully"} />
    
    </div>
  );
};

export default ProfileScreen;
