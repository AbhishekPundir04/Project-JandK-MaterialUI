import React from "react";
import DashboardCard from "./card";
import dashboardicons from "../../assets/dashboardimages/dashboardicons.svg";
import folderIcon from "../../assets/dashboardimages/folderIcon.svg";
import rejectIcon from "../../assets/dashboardimages/rejectIcon.svg";
import pendingIcon from "../../assets/dashboardimages/pendingIcon.svg";
import rightIcon from "../../assets/dashboardimages/rightIcon.svg";
import { Box, Grid } from "@mui/material";

const DashboardScreen = () => {
  const cardData = [
    {
      number: 190,
      title: "Total Number of Request Received",
      images: folderIcon,
    },
    {
      number: 50,
      title: "Total Number of Request Approved",
      images: pendingIcon,
    },
    { number: 5, title: "Total Number of Request Rejected", images: rightIcon },
    {
      number: 1,
      title: "Total Number of Request Rejected",
      images: rejectIcon,
    },
  ];

  return (
    <Box>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={6}  sx={{ width: "40%" }}>
          <DashboardCard
            number={40}
            title={"MY PANCHAYAT"}
            images={dashboardicons}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {cardData.slice(0, 2).map((card, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Box sx={{ margin: "20px 0" }}>
              <DashboardCard
                number={card.number}
                title={card.title}
                images={card.images}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {cardData.slice(2).map((card, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Box sx={{ margin: "20px 0" }}>
              <DashboardCard
                number={card.number}
                title={card.title}
                images={card.images}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardScreen;
