import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 559,
  height: 249,
  bgcolor: "#FFFFFF",
  borderRadius: "31px",
  boxShadow: 24,
  p: 2,
};

export default function TransitionsModal(props) {
  const navigate = useNavigate("");
  const okClickHandler = () => {
    navigate("/changepassword");
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props?.isOpen}
      onClose={props?.handleOpen}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props?.isOpen}>
        <Box sx={style}>
          <IconButton
            onClick={props?.handleOpen}
            sx={{
              color: "#000",
              background:"white",
              border:"1px solid grey",
              position: "absolute",
              top: "-10px",
              right: "-5px",

              "&:hover": {backgroundColor:"white"}
            }}
          >
            <CloseIcon />
          </IconButton>
          <div style={{ padding: "20px" }}>
            <CheckCircleOutlineIcon />
          </div>
          {/* {props?.title &&
          <Typography sx={{ textAlign: "center" }} variant="h6" component="h2">
            
            {props.title}
          </Typography>
           } */}  
          <Typography sx={{ textAlign: "center" }} variant="h6" component="h2">
            {props?.title?props.title : "Your password has been changed successfully"}
          </Typography>
        
          <Button
            onClick={okClickHandler}
            variant="contained"
            sx={{ bgcolor: "#607163", borderRadius: "8px", marginTop: "40px", width:"10%",marginRight:"8px"}}
          >
            Ok
          </Button>
          <Button onClick={props?.handleOpen} variant="contained" sx={{ bgcolor: "#607163", borderRadius: "8px", marginTop: "40px",width:"10%" }} >
          Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
