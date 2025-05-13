import { Box } from "@mui/material";

function SectionContainer({ children, ...props }) {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "6rem 3rem",
        margin: "1rem 3rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: { sm: "center", md: "center", lg: "center" },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default SectionContainer;
