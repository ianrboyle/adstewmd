import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FadeUpAnimation from "../animations/FadeUpAnimation";
export default function WhatWeDo() {
  return (
    <FadeUpAnimation>
      <Box
        sx={{
          textAlign: "left",
          padding: "0rem",
          marginTop: { sm: "0rem", md: "5rem" },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { lg: "100%", xl: "80%" },
                height: "auto",

                backgroundColor: "secondary.main",
                ml: { sm: "5%", md: "5%", lg: "5%", xl: "30%" },
                mr: { sm: "5%", md: "0" },
                mt: { sm: "5%", md: "0" },
                paddingLeft: { xs: "1rem", sm: "3.5rem" },
                paddingRight: { xs: "1rem", sm: "3.5rem" },
                paddingTop: "2rem",
                borderRadius: "0 0 10rem 0",
              }}
            >
              <Typography variant="h3" sx={{ color: "text.primary", marginTop: { sm: "1.5rem", md: "0rem" } }}>
                WHAT WE DO
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.primary", whiteSpace: "normal", overflow: "hidden", mt: "1rem" }}
              >
                We Provide Outstanding Dermatology Care, Exceeding Our Patients’ Expectations While Addressing Their
                Skin Care Needs.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                  mb: "3rem",
                  fontWeight: "400",
                }}
              >
                Highly trained providers treat wrinkles, skin cancer, pre-cancers, and unwanted facial or body hair, as
                well as acne, brown spots, scarring, visible veins, rashes, warts, and other skin conditions.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", md: "100%", lg: "auto%" },
                height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
                ml: { md: "5%", lg: "0%", xl: "10%" },
                paddingLeft: { xs: "1rem", sm: "3.5rem" },
                paddingRight: { xs: "1rem", sm: "3.5rem", xl: "10rem" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                }}
              >
                Welcome to Aesthetic Surgery and Dermatology of Cherry Creek
              </Typography>
              <Typography variant="h2" sx={{ color: "text.secondary", mt: "1.5rem" }}>
                The Office of Dr. Adrienne Stewart
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "black", whiteSpace: "normal", overflow: "hidden", mt: "1rem", fontWeight: "400" }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek is a cutting-edge aesthetic dermatology practice in
                Denver, Colorado, founded by board-certified dermatologist Adrienne Stewart, MD, and medical
                aesthetician Willa Roberts. They use state-of-the-art modalities and technologies during conservative
                applications. Dr. Stewart performs all of the injections herself in her office.
              </Typography>
              <Button sx={{ width: { xs: "50%", sm: "40%", md: "30%" }, mt: "1rem", mb: "1rem" }}>Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FadeUpAnimation>
  );
}
