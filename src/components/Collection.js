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
          top: { sm: "1rem", md: "3rem", lg: "4rem" },
          color: "rgba(0,0,0,0.05)",
          fontSize: { sm: "3rem", md: "7rem" },
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
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: "1200px" }}
        >
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CoffeeCard
              image="/images/coffee.jpg"
              title="Gran Espresso"
              description="Light and flavorful blend with cocoa and black pepper for an intense experience."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CoffeeCard
              image="/images/coffee.jpg"
              title="Planalto"
              description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CoffeeCard
              image="/images/coffee.jpg"
              title="Piccollo"
              description="Mild and smooth blend featuring notes of toasted almond and dried cherry."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CoffeeCard
              image="/images/coffee.jpg"
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
