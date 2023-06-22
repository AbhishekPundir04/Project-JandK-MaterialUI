import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./signup.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";

import { signUpSchema } from "../validation";

const styles = {
  iconButton: {
    maxWidth: "25px",
    color: "black",
  },
};

const initialValues = {
  name: "",
  username: "",
  email: "",
  mobileno: "",
  designation: "",
  district: "",
  block: "",
  createpassword: "",
  confirmpasswod: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema:signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  // const [designation,setDesignation] = useState('')

  // const handleChangeItem = (event) =>{
  //   setDesignation(event.target.value)
  // }

  const handlerPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="main">
      <div className="sub-main">
        <Typography className="sign-up-typo">Sign Up</Typography>
        <Typography className="full-name-typo">Full Name</Typography>
        <TextField
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="standard"
          className="full-name-text"
          placeholder="Please enter your full name"
          fullWidth
        />
        {errors.name && touched.name && (
                <p className="form-error">{errors.name}</p>
              )}
        <Typography variant="standard" className="username-typo">
          User Name
        </Typography>
        <TextField
          name="username"
          value={values.username}
          onChange={handleChange}
          variant="standard"
          className="full-name-text"
          placeholder="Please enter user name"
          fullWidth
        />

        <Typography variant="standard" className="username-typo">
          Email Address
        </Typography>
        <TextField
          name="email"
          value={values.email}
          onChange={handleChange}
          variant="standard"
          className="full-name-text"
          placeholder="Please enter user name"
          fullWidth
        />
        <Typography variant="standard" className="username-typo">
          Mobile No.
        </Typography>
        <TextField
          name="mobileno"
          value={values.mobileno}
          onChange={handleChange}
          variant="standard"
          className="full-name-text"
          placeholder="Please enter user name"
          fullWidth
        />

        <InputLabel className="username-typo">Designation</InputLabel>
        <FormControl variant="standard" fullWidth>
          <Select
            name="designation"
            value={values.designation}
            onChange={handleChange}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            className="full-name-text"
          >
            <MenuItem value=""  sx={{display:"none"}}>Select Designation</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <InputLabel className="username-typo">District</InputLabel>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Select
            name="district"
            value={values.district}
            onChange={handleChange}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            className="full-name-text"
          >
            <MenuItem value=""  sx={{display:"none"}}>Select District</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <InputLabel className="username-typo">Block</InputLabel>
        <FormControl variant="standard" fullWidth>
          <Select
            name="block"
            value={values.block}
            onChange={handleChange}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            className="full-name-text"
          >
            <MenuItem value="" sx={{display:"none",color: "rgba(0, 0, 0, 0.4)"}}>Select Block</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="standard" className="username-typo">
          Create Password
        </Typography>
        <TextField
          name="createpassword"
          value={values.createpassword}
          onChange={handleChange}
          variant="standard"
          className="full-name-text"
          placeholder="Please enter user name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={styles.iconButton}
                  onClick={handlerPasswordVisibility}
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? "text" : "password"}
          fullWidth
        />
        <Typography variant="standard" className="username-typo">
          Confirm Password
        </Typography>
        <TextField
          name="confirmpasswod"
          value={values.confirmpasswod}
          onChange={handleChange}
          variant="standard"
          placeholder="Please enter password"
          className="full-name-text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={styles.iconButton}
                  onClick={handlerPasswordVisibility}
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? "text" : "password"}
          fullWidth
        />

        {/* <InputLabel className="username-typo">Example</InputLabel>
  <FormControl variant="standard" sx={{ width: "100%" }}>
    
  <Select
    className="full-name-text"
    value={designation}
    onChange={handleChangeItem}
    displayEmpty
    inputProps={{ "aria-label": "Without label" }}
    InputLabelProps={{ shrink: false }}
  >
    <MenuItem sx={{display:"none"}}>
      Select Designation
    </MenuItem>

    <MenuItem value="Garhwal">Garhwal</MenuItem>
    <MenuItem value="How are you">How are you</MenuItem>
    <MenuItem value="Tehri">Tehri</MenuItem>
    <MenuItem value="Garhwal">Garhwal</MenuItem>
  </Select>
</FormControl> */}

        <Box textAlign="center">
          <Button
          type="submit"
            variant="contained"
            sx={{
              marginTop: "89px",
              borderRadius: "20px",
              width: "205px",
              bgcolor: "#B74E48",
              marginBottom: "36px",
              height: "40px",
              fontSize: "22px",
            }}
          >
            Sign Up
          </Button>

          <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
            Create an account? <span>Sign In</span>
          </Typography>
        </Box>
      </div>
    </div>
    </form>
  );
};

export default SignUp;
