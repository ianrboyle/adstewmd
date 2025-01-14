import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function WhatWeDo() {
  return (
    <Box
      sx={{
        textAlign: "left",
        padding: "0rem",
        lineHeight: "1rem",
        marginTop: " 5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "80%", md: "80%", lg: "80%", xl: "70%" },
              height: { xs: "50vh", sm: "55vh", md: "75vh", lg: "55vh", xl: "55vh" },
              border: "1px solid white",
              backgroundColor: "secondary.main",
              ml: { sm: "10%", md: "5%", lg: "0%", xl: "30%" },
              paddingLeft: { xs: "1rem", sm: "3.5rem" },
              paddingRight: { xs: "1rem", sm: "3.5rem" },
              paddingTop: "2.5rem",
              borderRadius: "0 0 10rem 0",
            }}
          >
            <Typography variant="h3" sx={{ color: "text.primary", marginTop: { sm: "1.5rem", md: "0" } }}>
              WHAT WE DO
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.primary", whiteSpace: "normal", overflow: "hidden", mt: "1rem" }}
            >
              We Provide Outstanding Dermatology Care, Exceeding Our Patients’ Expectations While Addressing Their Skin
              Care Needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", whiteSpace: "normal", overflow: "hidden", mt: "1rem" }}
            >
              Highly trained providers treat wrinkles, skin cancer, pre-cancers, and unwanted facial or body hair, as
              well as acne, brown spots, scarring, visible veins, rashes, warts, and other skin conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
