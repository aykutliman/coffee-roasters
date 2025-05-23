import { ButtonGroup, Button } from "@mui/material";

function NavigationButtons({ color = "black", isFooter = false, ...props }) {
  const buttonStyle = {
    color: color,
    whiteSpace: "nowrap",
    padding: "6px 12px",
    width: isFooter ? { xs: "100%", sm: "100%", md: "auto", lg: "auto" } : "auto",
  };

  return (
    <ButtonGroup
      sx={{
        display: { xs: isFooter ? "flex" : "none", sm: isFooter ? "flex" : "none", md: "flex" },
        flexDirection: { xs: isFooter ? "column" : "row", sm: isFooter ? "column" : "row", md: "row" },
        alignItems: "center",
        width: isFooter ? { xs: "100%", sm: "100%", md: "auto", lg: "auto" } : "auto",
        ...props.sx,
      }}
    >
      <Button variant="h5" sx={buttonStyle}
      fontSize={{ xs: "1rem", sm: "1rem", md: "1.25rem", lg: "1.25rem" }}
      >
        HOME
      </Button>
      <Button variant="h5" sx={buttonStyle}
      fontSize={{ xs: "1rem", sm: "1rem", md: "1.25rem", lg: "1.25rem" }}
      >
        ABOUT US
      </Button>
      <Button variant="h5" sx={buttonStyle}
      fontSize={{ xs: "1rem", sm: "1rem", md: "1.25rem", lg: "1.25rem" }}
      >
        CREATE YOUR PLAN
      </Button>
    </ButtonGroup>
  );
}

export default NavigationButtons;
