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
