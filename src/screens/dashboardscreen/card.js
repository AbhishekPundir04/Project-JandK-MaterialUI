import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.scss";

export default function DashboardCard({ number, title, images }) {
  return (
    <div className="main-div">
      <Card className="card-class">
        <CardContent>
          <Typography variant="h6" className="images-typo">
            {images && <img src={images} alt="Icons" />}
          </Typography>
          <Typography variant="h3" className="number-typo">
            {number}
          </Typography>
          <Typography className="title-typo"> {title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
