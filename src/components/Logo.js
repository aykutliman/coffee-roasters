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
        src="/images/icon.jpg"
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
          fontWeight: 900,
        }}
      >
        coffeeroasters
      </Typography>
    </Box>
  );
}

export default Logo;
