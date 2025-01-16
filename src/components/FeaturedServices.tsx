import React from "react";
import OverlayComponent from "./Overlay";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "./FeaturedServiceCard";
export default function FeaturedServices() {
  return (
    <OverlayComponent
      backgroundImage="/featured-services.png"
      altText="Descriptive Alt Text"
      backgroundColor="rgba(50, 20, 80, 0.6)"
      borderRadius={{ xs: "10rem 0 0 0", md: "20rem 0 0 0" }}
    >
      <>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "white",
            p: 2,
          }}
        >
          <Box sx={{ textAlign: "left", ml: { xs: "0", sm: "0", md: "8rem" }, mt: "3rem" }}>
            <Typography variant="h1" sx={{ typography: { xs: "h4", md: "h1" } }}>
              Our Featured Services
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: { xs: "100%", sm: "100%", md: "80%" } }}>
              The dermatology experts offer effective, safe, affordable solutions for all skin care concerns.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mt: "2rem", mb: "2rem" }}>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: "white",
              margin: "auto",
            }}
            variant="middle"
          />
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <FeaturedServiceCard title="title 1" imageSrc="/porsche@2x.png" />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeaturedServiceCard title="title 2" imageSrc="/porsche@2x.png" />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeaturedServiceCard title="title 3" imageSrc="/porsche@2x.png" />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeaturedServiceCard title="title 4" imageSrc="/porsche@2x.png" />
          </Grid>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: "white",
              margin: "auto",
            }}
            variant="middle"
          />
        </Grid>
      </>
    </OverlayComponent>
  );
}
