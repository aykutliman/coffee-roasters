import { Box } from "@mui/material";
import CustomTypography from "./CustomTypography";

function FeatureCard({ image, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "column" },
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#1A8C89",
        borderRadius: "12px",
        width: { xs: "15rem", sm: "20rem", md: "33rem", lg: "20rem" },
        height: { xs: "15rem", sm: "20rem", md: "10rem", lg: "20rem" },
        padding: "1rem",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "6rem", sm: "8rem" },
          height: { xs: "6rem", sm: "8rem" },
          borderRadius: "20px",
        }}
      />
      <Box
        sx={{
          ml: {
            xs: 0,
            sm: 0,
            md: 2,
            lg: 0,
          },
        }}
      >
        <CustomTypography variant="h5" isTitle color="white" sx={{ mt: 2 }}>
          {title}
        </CustomTypography>
        <CustomTypography variant="p" color="white" sx={{ mt: 1 }}>
          {description}
        </CustomTypography>
      </Box>
    </Box>
  );
}

export default FeatureCard;
