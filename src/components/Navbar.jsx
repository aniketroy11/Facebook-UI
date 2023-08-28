import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import { Animation, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: "10px",
}));

const Icon = styled(Box)(({ theme }) => ({
    display:"none",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const User = styled(Box)(({theme})=>({
    display:"block",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
}))


const Navbar = () => {

    const [open , setOpen] = useState(false);

    const switchMode = ()=>{
        setOpen((prev)=>!prev);
    }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Aniket
        </Typography>
        <Animation sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
          <Avatar
            onClick={switchMode}
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
            sx={{width:30,height:30}}
          />
        </Icon>
        <User>
        <Avatar
            onClick={switchMode}
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
            sx={{width:30,height:30}}
          />
        </User>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={switchMode}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
