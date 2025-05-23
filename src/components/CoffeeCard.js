import { Box } from "@mui/material";
import CustomTypography from "./CustomTypography";

function CoffeeCard({ image, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "column" },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "8rem", sm: "10rem" },
          height: { xs: "8rem", sm: "10rem" },
          borderRadius: "20px",
        }}
      />
      <Box
        sx={{
          ml: {
            xs: 0,
            sm: 0,
            md: 10,
            lg: 0,
          },
        }}
      >
        <CustomTypography variant="h4" isTitle sx={{ mt: 4 }}   
        fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "2.5rem" }}>
          {title}
        </CustomTypography>
        <CustomTypography variant="h5" sx={{ width: { xs: "100%", sm: "250px" }, mt: 2 }}
          fontSize={{ xs: "1rem", sm: "1rem", md: "1.25rem", lg: "1.25rem" }}>
          {description}
        </CustomTypography>
      </Box>
    </Box>
  );
}

export default CoffeeCard;
