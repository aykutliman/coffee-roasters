import { AppBar, Toolbar, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#202A2B",
        boxShadow: "none",
        padding: { xs: "0.5rem", sm: "1rem", md: "1rem 3rem" },
        margin: { xs: "1rem 0.5rem", sm: "2rem 1rem", md: "4rem" },
        width: "auto",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          gap: { xs: 2, sm: 3, md: 0, lg: 0 },
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "auto", lg: "auto" },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            },
          }}
        >
          <Logo color="white" />
        </Box>

        <NavigationButtons color="white" isFooter={true} />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", sm: "100%", md: "auto", lg: "auto" },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            },
          }}
        >
          <InstagramIcon sx={{ color: "white", cursor: "pointer" }} />
          <TwitterIcon sx={{ color: "white", cursor: "pointer" }} />
          <FacebookIcon sx={{ color: "white", cursor: "pointer" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
