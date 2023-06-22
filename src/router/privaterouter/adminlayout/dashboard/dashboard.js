  import React from "react";
  import Box from "@mui/material/Box";
  import CssBaseline from "@mui/material/CssBaseline";
  import List from "@mui/material/List";
  import ListItem from "@mui/material/ListItem";
  import ListItemButton from "@mui/material/ListItemButton";
  import ListItemIcon from "@mui/material/ListItemIcon";
  import ListItemText from "@mui/material/ListItemText";
  import { Chat, Dashboard, Dehaze} from "@mui/icons-material";
  import { Drawer } from "@mui/material";

  function Sidebar() {


    return (
      <Box>
        <CssBaseline />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard"  />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dehaze />
              </ListItemIcon>
              <ListItemText primary="Manage Panchayat"  />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Chat/>
              </ListItemIcon>
              <ListItemText primary="FAQ'S"  />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  }

  const AppDrawer = (props) => {
    return (
      <Drawer variant="temporary">
         <Sidebar />
      </Drawer>
     
    );
  };

  export default AppDrawer;

  