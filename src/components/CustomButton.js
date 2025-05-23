import { Button } from "@mui/material";

function CustomButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "DarkCyan",
        width: "fit-content",
        mt: props.mt || 4,
        fontFamily: "Fraunces",
        fontWeight: { xs: 200, sm: 200, md: 400, lg: 400 },
        fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem", lg: "1.25rem" },
        "&:hover": {
          backgroundColor: "#156D6A",
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
