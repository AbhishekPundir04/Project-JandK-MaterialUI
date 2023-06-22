import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../../assets/sliderImg1.svg";
import "./signin.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const styles = {
  iconButton: {
    maxWidth: "25px",
    color: "black",
  },
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlerPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [sliderImg1, sliderImg1, sliderImg1, sliderImg1];

  return (
    <form>
      <Grid container className="main-grid">
        <Grid item xs={8} lg={5} padding={5}>
          <Box
            component={"div"}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Slider {...settings}>
              {images.map((imageUrl, index) => (
                <div>
                  <img
                    key={index}
                    src={imageUrl}
                    alt="img"
                    className="slider-img1"
                    width="100%"
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid item lg={1} className="divider">
          <Divider
            className="divider"
            orientation="vertical"
            variant="middle"
            sx={{
              height: "714px",
              margin: "29px 0px",
              border: "2px dashed #000",
              width: "2px",
            }}
          />
        </Grid>
        <Grid xs={7} lg={5} padding={5}>
          <Box p={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "57px",
                fontSize: "22px",
                height: "35px",
                color: "#000000",
                lineHeight: "33px",
              }}
            >
              Sign In
            </Typography>
            <Typography
              sx={{
                marginBottom: "32px",
                fontWeight: "700",
                fontSize: "22px",
              }}
            >
              Welcome Back!
            </Typography>
            <Typography
              sx={{ marginBottom: "20px", fontWeight: "500", color: "#000000" }}
            >
              Email Address
            </Typography>
            <TextField
              placeholder="Please enter your Email Add  ress"
              variant="standard"
              fullWidth
            />
            <Typography
              sx={{
                marginTop: "50px",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              Password
            </Typography>
            <TextField
              variant="standard"
              placeholder="Please enter your Password"
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
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Typography
                variant="text"
                sx={{
                  marginTop: "36px",
                  textDecorationLine: "underline",
                  color: "#607163",
                }}
              >
                Forget Password ?
              </Typography>
            </Box>
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{
                  marginTop: "93px",
                  borderRadius: "20px",
                  width: "205px",
                  bgcolor: "#B74E48",
                  marginBottom: "36px",
                  height: "40px",
                  fontSize: "22px",
                }}
              >
                Sign In
              </Button>

              <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                Create an account? <span>Sign Up</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignIn;
