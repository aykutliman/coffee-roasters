import { Container, Grid, Box } from "@mui/material";
import FeatureCard from "./FeatureCard";
import CustomTypography from "./CustomTypography";

function FeatureSection() {
  return (
    <div style={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: { sm: "2rem 1rem", md: "2rem 1rem", lg: "6rem 3rem" },
          margin: "1rem 3rem",
          borderRadius: "10px",
          backgroundColor: "#202A2B",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          height: { sm: "50%", md: "60%", lg: "50vh" },
          zIndex: 0,
        }}
      >
        <CustomTypography variant="h4" isTitle color="white" sx={{ mt: 2 }}>
          Why choose us?
        </CustomTypography>
        <CustomTypography
          variant="h6"
          color="white"
          sx={{
            mt: 4,
            width: { sm: "100%", md: "40rem", lg: "40rem" },
            mx: "auto",
          }}
        >
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </CustomTypography>
      </Box>

      <Container
        sx={{
          position: "relative",
          paddingTop: { sm: "17rem", md: "17rem", lg: "25rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={12} md={6} lg={3}>
            <FeatureCard
              image="/images/bean.jpg"
              title="Best quality"
              description="Discover an endless variety of the world's best artisan coffee from each of our roasters."
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <FeatureCard
              image="/images/gift.jpg"
              title="Exclusive benefits"
              description="Special offers and swag when you subscribe, including 30% off your first shipment."
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <FeatureCard
              image="/images/truck.jpg"
              title="Free shipping"
              description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FeatureSection;
