import { Container, Grid } from "@mui/material";
import CoffeeCard from "./CoffeeCard";
import CustomTypography from "./CustomTypography";
import SectionContainer from "./SectionContainer";

function Collection() {
  return (
    <SectionContainer
      sx={{
        overflow: "hidden",
      }}
    >
      <CustomTypography
        variant="h1"
        isTitle
        sx={{
          position: "absolute",
          top: { xs: "1rem", sm: "1rem", md: "3rem", lg: "4rem" },
          color: "rgba(0,0,0,0.05)",
          fontSize: { xs: "3rem", sm: "3rem", md: "7rem" },
          whiteSpace: "nowrap",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        our collection
      </CustomTypography>

      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <CoffeeCard
              image={process.env.PUBLIC_URL + "/images/coffee.jpg"}
              title="Gran Espresso"
              description="Light and flavorful blend with cocoa and black pepper for an intense experience."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <CoffeeCard
              image={process.env.PUBLIC_URL + "/images/coffee.jpg"}
              title="Planalto"
              description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <CoffeeCard
              image={process.env.PUBLIC_URL + "/images/coffee.jpg"}
              title="Piccollo"
              description="Mild and smooth blend featuring notes of toasted almond and dried cherry."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <CoffeeCard
              image={process.env.PUBLIC_URL + "/images/coffee.jpg"}
              title="Danche"
              description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
            />
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

export default Collection;
