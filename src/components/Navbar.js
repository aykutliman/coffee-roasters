import { AppBar, Toolbar, Box, IconButton, Drawer, ButtonGroup, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = ["HOME", "ABOUT US", "CREATE YOUR PLAN"];

  const buttonStyle = {
    color: "black",
    whiteSpace: "nowrap",
    padding: "6px 12px",
    width: "auto",
  };

  const drawer = (
    <ButtonGroup
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 4,
        gap: 2,
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item}
          variant="h5"
          onClick={handleClick}
          sx={buttonStyle}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: { xs: "0.5rem", sm: "1rem", md: "1rem 3rem" },
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 1, sm: 2, md: 0 },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: { xs: "space-between", sm: "space-between", md: "flex-start" },
          }}
        >
          <Logo />

          <IconButton
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              color: "black",
            }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <NavigationButtons />
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleClick}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: "100%",
            backgroundColor: "#FEFCF7",
            padding: "2rem",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
