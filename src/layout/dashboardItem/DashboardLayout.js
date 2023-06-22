import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import Header from "../header";
import Footer from "../footer";
const DashboardLayout = (props) => {
  return (
    <div>
      <Box>
        <CssBaseline />
          <Header />
        <Box>
          <Toolbar />
          {props.children}
        </Box>
        <Footer/>
      </Box>
    </div>
  );
};

export default DashboardLayout;
