import React from "react";
import OverlayComponent from "../Overlay";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "./FeaturedServiceCard";
import AssociationsAndSocieties from "./AssociationsAndSocieties";
export default function FeaturedServices() {
  return (
    <OverlayComponent
      backgroundImage="/featured-services.png"
      altText="Descriptive Alt Text"
      backgroundColor="rgba(50, 20, 80, 0.7)"
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
        <Box justifyContent="center" display="flex">
          <Grid
            container
            spacing={2}
            sx={{ mt: "1rem", mb: "2rem", width: { sm: "100%", md: "80%", lg: "100%", xl: "80%" } }}
          >
            <Divider
              sx={{
                width: "100%",
                backgroundColor: "white",
                mb: "1rem",
                ml: "auto",
              }}
              variant="middle"
            />
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
            >
              <FeaturedServiceCard title="Neurotoxins" imageSrc="/neurotoxins.png" />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FeaturedServiceCard title="Fillers" imageSrc="/injection.png" />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FeaturedServiceCard title="Body Contouring" imageSrc="/body-contour.png" />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FeaturedServiceCard title="Lasers" imageSrc="/laser.png" />
            </Grid>
            <Divider
              sx={{
                width: "100%",
                backgroundColor: "white",
                mt: "1rem",
                ml: "auto",
              }}
              variant="middle"
            />
          </Grid>
        </Box>
        <AssociationsAndSocieties />
      </>
    </OverlayComponent>
  );
}
