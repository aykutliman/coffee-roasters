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
        fontWeight: 400,
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
