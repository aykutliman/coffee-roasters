import { ButtonGroup, Button } from "@mui/material";

function NavigationButtons({ color = "black", isFooter = false, ...props }) {
  const buttonStyle = {
    color: color,
    whiteSpace: "nowrap",
    padding: "6px 12px",
    width: isFooter ? { sm: "100%", md: "auto", lg: "auto" } : "auto",
  };

  return (
    <ButtonGroup
      sx={{
        display: { sm: isFooter ? "flex" : "none", md: "flex" },
        flexDirection: { sm: isFooter ? "column" : "row", md: "row" },
        alignItems: "center",
        width: isFooter ? { sm: "100%", md: "auto", lg: "auto" } : "auto",
        ...props.sx,
      }}
    >
      <Button variant="h5" sx={buttonStyle}>
        HOME
      </Button>
      <Button variant="h5" sx={buttonStyle}>
        ABOUT US
      </Button>
      <Button variant="h5" sx={buttonStyle}>
        CREATE YOUR PLAN
      </Button>
    </ButtonGroup>
  );
}

export default NavigationButtons;
