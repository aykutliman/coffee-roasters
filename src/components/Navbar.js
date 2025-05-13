import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: { sm: "1rem", md: "1rem 3rem" },
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { sm: "column", md: "row" },
          gap: { sm: 2, md: 0 },
          alignItems: "center",
          justifyContent: { sm: "center", md: "space-between" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: { sm: "space-between", md: "flex-start" },
          }}
        >
          <Logo />

          <IconButton
            sx={{
              display: { sm: "flex", md: "none" },
              color: "black",
            }}
            component="a"
            href="#menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <NavigationButtons />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
