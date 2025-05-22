import { Box } from "@mui/material";

function SectionContainer({ children, ...props }) {
  return (
    <Box
      sx={{
        position: "relative",
        padding: { xs: "3rem 1rem", sm: "6rem 3rem" },
        margin: { xs: "0.5rem 1rem", sm: "1rem 3rem" },
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "center", md: "center", lg: "center" },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default SectionContainer;
