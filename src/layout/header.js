import {
  Avatar,
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
          <Avatar
            sx={{ marginLeft: "36px", width: "45px", height: "45px" }}
            src="/broken-image.jpg"
            onClick={handleClick}
          />
          <div style={{ borderRadius: "24px" }}>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "55%",
                horizontal: "50%",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                sx={{
                  height: "50px",
                  padding: "20px",
                  width: "200px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#607163",
                    color: "#FFFFFF",
                    margin: "6px",
                   
                  },
                }}
                className="menu-item"
              >
                Profile
              </MenuItem>
              <MenuItem
                sx={{
                  height: "50px",
                  width: "200px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#607163",
                    color: "#FFFFFF",
                    margin: "6px",
                    
                  },
                }}
                className="menu-item"
              >
                My account
              </MenuItem>
              <MenuItem
                sx={{
                  height: "50px",
                  width: "200px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#607163",
                    color: "#FFFFFF",
                    margin: "6px",
                  },
                }}
                className="menu-item"
              >
                Logout
              </MenuItem>
            </Menu>
          </div>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
