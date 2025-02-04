import React from "react";
import OverlayComponent from "../Overlay";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "./FeaturedServiceCard";
import AssociationsAndSocieties from "./AssociationsAndSocieties";
import { CardImageProps } from "../../interfaces/card-image-props";
import FadeUpAnimation from "../animations/FadeUpAnimation";

export default function FeaturedServices() {
  const featuredServiceImageData: CardImageProps[] = [
    {
      title: "Neurotoxins",
      src: "/featured-services/neurotoxins.png",
      link: "injectables/botox",
      altText: "Neurotoxins",
    },
    {
      title: "Fillers",
      src: "/featured-services/injection.png",
      link: "injectables/fillers",
      altText: "fillers",
    },
    {
      title: "Body Contouring",
      src: "/featured-services/body/body-contour.png",
      link: "body",
      altText: "Body Contouring",
    },
    {
      title: "Laser Hair Removal",
      src: "/featured-services/laser.png",
      link: "laser-hair-removal",
      altText: "Lasers",
    },
  ];
  return (
    <OverlayComponent
      backgroundImage="/featured-services/featured-services.png"
      altText="Descriptive Alt Text"
      backgroundColor="rgba(50, 20, 80, 0.7)"
      borderRadius={{ xs: "10rem 0 0 0", md: "20rem 0 0 0" }}
    >
      <>
        <FadeUpAnimation>
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
              {featuredServiceImageData.map((fs, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FeaturedServiceCard imageProps={fs} textColor="white" />
                </Grid>
              ))}

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
        </FadeUpAnimation>
      </>
    </OverlayComponent>
  );
}
