import { Typography } from "@mui/material";

function CustomTypography({
  children,
  variant = "h5",
  isTitle = false,
  ...props
}) {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "Fraunces",
        fontWeight: isTitle
          ? { xs: 900, sm: 900, md: 400, lg: 400 }
          : { xs: 200, sm: 200, md: 400, lg: 400 },
        textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
        mb: props.mb || 2,
        color: props.color || "inherit",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default CustomTypography;
