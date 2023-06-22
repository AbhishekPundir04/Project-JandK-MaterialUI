import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

const AdminDashboardLayout = (props) => {
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

export default AdminDashboardLayout;
