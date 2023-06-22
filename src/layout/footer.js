import { Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.scss";
import LinkFooter from "../components/allpages/Links/links";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const linksFooter = [
    { title: "Deparment of Panchayat J&K", route: "/deparmentofpanchayat" },
    { title: "Gov of J&K", route: "/govofjandk" },
  ];

  const termsAndConditionFooter = [
    { title: "Copyright Policy" },
    { title: "HyperLinking Policy" },
    { title: "Screen Reader Access" },
  ];

  const visitorFooter = [
    { title: "Last Updated: 28-04-2023" },
    { title: "No. of visitors" },
    { title: "Contacts" },
  ];

  return (
    <Grid container className="footer-main-grid">
      <Grid lg={3}>
        <div className="link-wrapper">
          <div className="links-div">Links</div>
        </div>
        <LinkFooter
          linkList={linksFooter}
          linkAction={(route) => {
            navigate(route);
          }}
          style={{ alignSelf: "center"}}
        />
      </Grid>
      <Grid lg={6}>
        <div className="link-wrapper">
          <div className="links-div">Terms and Conditions</div>
        </div>
        <div className="terms-condition">
        <LinkFooter
          linkList={termsAndConditionFooter}
          linkAction={(route) => {
            navigate(route);
          }}
          style={{ alignSelf: "center"}}
        />
        </div>
        <div>
          <Typography
            sx={{ marginTop: "26px", textAlign: "center", color: "white" }}
          >
            Web Application is designed and hosted by Jammu and Kashmir
            e-Governance Agency (JakeGA)
          </Typography>
          <Typography sx={{ textAlign: "center", color: "white" }}>
            Contents are owned and managed by the Block Development Officer ,
            J&K
          </Typography>
        </div>
      </Grid>
      <Grid lg={3}>
        <div className="link-wrapper">
          <div className="links-div">Visitors</div>
        </div>
        <LinkFooter
          linkList={visitorFooter}
          linkAction={(route) => {
            navigate(route);
          }}
          style={{ alignSelf: "center"}}
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
