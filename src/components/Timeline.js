import { Box, Grid } from "@mui/material";
import HiwCard from "./HiwCard";

function Timeline({ items }) {
  return (
    <Grid
      container
      spacing={{ sm: 3, md: 3, lg: 8 }}
      justifyContent={{ sm: "center", md: "flex-start" }}
      sx={{ ml: 0, pl: 0, position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          width: { md: "40rem", lg: "45rem" },
          height: "2px",
          backgroundColor: "#FFDFB9",
          display: { sm: "none", md: "block" },
          zIndex: 0,
        }}
      />

      {items.map((item, index) => (
        <Grid
          item
          sm={12}
          md={12}
          lg={4}
          key={index}
          sx={{
            pl: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: { sm: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid #0E8A7B",
              backgroundColor: "white",
              margin: "0 0 1rem",
              position: "relative",
              zIndex: 1,
              display: { sm: "none", md: "block" },
            }}
          />
          <HiwCard
            number={item.number}
            title={item.title}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Timeline;
