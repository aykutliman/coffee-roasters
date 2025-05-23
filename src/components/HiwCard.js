import { Typography, Box } from "@mui/material";

function HiwCard({ number, title, description }) {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: { xs: "center", sm: "center", md: "flex-start" }
    }}>
      <Typography
        variant="h2"
        sx={{
          color: "#FFDFB9",
          fontSize: { xs: "4rem", sm: "6rem" },
          fontWeight: 700,
          mb: 2,
          textAlign: { xs: "center", sm: "center", md: "left" },
          fontFamily: "Fraunces",
          fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: { xs: "center", sm: "center", md: "left" },
          fontFamily: "Fraunces",
          fontWeight: { xs: 400, sm: 400, md: 900, lg: 900 },
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          width: { xs: "100%", sm: "100%", md: "300px" },
          textAlign: { xs: "center", sm: "center", md: "left" },
          fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem", lg: "1rem" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default HiwCard;
