import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Form9.scss";

const FormNine = () => {
  return (
    <div>
        <Grid>
        

      <Grid container justifyContent="center">
      
        <Grid xs={6} p={5} className="first-grid">
          <Typography className="form-label">Numerator</Typography>
          <TextField placeholder="Population covered under Aadhar" variant="standard" className="text-feild" fullWidth />
          <Typography   className="form-label">Unit</Typography>
          <TextField placeholder="Percentage" variant="standard" className="text-feild" fullWidth />
          <Typography className="form-label">SDG Mapping</Typography>
          <TextField placeholder="16.9.2 Percentage of population covered under Aadhar" variant="standard" className="text-feild" fullWidth />
        </Grid>

        <Grid xs={6} p={5}>
          <Typography className="form-label">Denominator</Typography>
          <TextField placeholder="Total Population" variant="standard" className="text-feild" fullWidth />
          <Typography className="form-label">Data Source</Typography>
          <TextField placeholder="Total Population" variant="standard" className="text-feild" fullWidth />
        </Grid>
      </Grid>
      
      </Grid>
    </div>
  );
};

export default FormNine;
