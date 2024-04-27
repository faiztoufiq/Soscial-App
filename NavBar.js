import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { InputBase } from "@mui/material";
import { styled } from "@mui/system";
import { Diversity3, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius || "4px", // Provide a fallback value
  width: "40%",
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social App
        </Typography>
        <Diversity3 sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
            <Notifications color="action" />
          </Badge>

          <Avatar
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1712415677~exp=1712416277~hmac=affaedd1a872094d147847ba4080a95013d473cd87a080e0af88336a4aef1fec"
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(!open)} // Toggle the menu open/close
          />
        </Icon>
        <UserBox onClick={() => setOpen(!open)}>
          {" "}
          {/* Toggle the menu open/close */}
          <Avatar
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1712415677~exp=1712416277~hmac=affaedd1a872094d147847ba4080a95013d473cd87a080e0af88336a4aef1fec"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="body1">faiz</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose} // Close the menu when clicked outside
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
