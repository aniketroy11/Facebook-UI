import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  Home,
  Settings,
  AccountBox,
  GroupAdd,
  Person,
  Article,
  ModeNight,
  LocalGroceryStoreOutlined,
} from "@mui/icons-material";

const Sidebar = ({setMode,mode}) => {
  return (
    <Box flex={1} p={1} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <LocalGroceryStoreOutlined />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <GroupAdd />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onClick={()=>setMode(mode==="light" ? "dark":"light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
