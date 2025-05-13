import { Typography, Box } from "@mui/material";

function HiwCard({ number, title, description }) {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: {  sm: "center", md: "flex-start" }
    }}>
      <Typography
        variant="h2"
        sx={{
          color: "#FFDFB9",
          fontSize: "6rem",
          fontWeight: 700,
          mb: 2,
          textAlign: {  sm: "center", md: "left" },
          fontFamily: "Fraunces",
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: {  sm: "center", md: "left" },
          fontFamily: "Fraunces",
          fontWeight: 900,
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          width: {  sm: "100%", md: "300px" },
          textAlign: {  sm: "center", md: "left" }
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default HiwCard;
