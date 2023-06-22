import {
  Avatar,
  Box,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./header.scss";
import emblemlogo from "../assets/headlogo.svg";
import { Search } from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Grid container spacing={2} className="header-main-grid">
        <Grid item xs={6} className="header-frist-grid">
          <img src={emblemlogo} alt="logo" className="header-emblem-logo" />
          <div className="header-div">
            <Typography className="header-first-typo">
              Block Development Officer
            </Typography>
            <Typography className="header-second-typo">
              Department J&K
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} className="header-second-grid">
          <TextField
            className="header-search"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Box>
            <Avatar
              sx={{ marginLeft: "36px", width: "38px", height: "38px" }}
              src="/broken-image.jpg"
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}

            >
              <MenuItem className="menu-item">Profile</MenuItem>
              <MenuItem className="menu-item">My account</MenuItem>
              <MenuItem className="menu-item">Logout</MenuItem>
            </Menu>
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
