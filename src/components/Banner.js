import { Box } from "@mui/material";
import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";

function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "7rem 3rem",
        margin: "1rem 3rem",
        borderRadius: "10px",
      }}
    >
      <CustomTypography
        variant="h2"
        isTitle
        color="white"
        sx={{
          width: "400px",
        }}
      >
        Great coffee made simple.
      </CustomTypography>

      <CustomTypography
        variant="h6"
        color="white"
        sx={{
          mt: 4,
          width: { sm: "100%", md: "400px", lg: "400px" },
        }}
      >
        Start your mornings with the world's best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </CustomTypography>

      <CustomButton>Create your plan</CustomButton>
    </Box>
  );
}

export default Banner;
