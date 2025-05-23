import { Box, Typography } from "@mui/material";

function Logo({ color = "textPrimary", ...props }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/icon.jpg"}
        alt="coffeeroasters logo"
        style={{
          height: "40px",
          width: "40px",
          marginRight: "16px",
          borderRadius: "30px",
        }}
      />
      <Typography
        variant="h5"
        component="h5"
        color={color}
        sx={{
          fontFamily: "Fraunces",
          fontWeight: { xs: 400, sm: 400, md: 900, lg: 900 },
        }}
      >
        coffeeroasters
      </Typography>
    </Box>
  );
}

export default Logo;
