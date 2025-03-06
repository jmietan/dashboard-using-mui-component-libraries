import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import AccountCircle from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

      
        <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
          <Typography variant="h6" component="div">
            Responses
          </Typography>
          <Typography variant="h6" component="div">
            Interviews
          </Typography>
        </Box>

        <div>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
          </IconButton> 

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;