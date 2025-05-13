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
        fontWeight: isTitle ? 900 : 400,
        textAlign: { sm: "center", md: "center", lg: "center" },
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
