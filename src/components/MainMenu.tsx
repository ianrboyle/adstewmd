import { Box } from "@mui/material";
import React from "react";
import FeaturedServices from "./FeaturedServices";
import Grid from "@mui/material/Grid2";
import BackgroundImage from "./BackgroundImage";

export default function MainMenu() {
  return (
    <Box>
      <BackgroundImage />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          height: "50%",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            size={8}
          >
            <FeaturedServices />
          </Grid>
          <Grid
            size={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeaturedServices />
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeaturedServices />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
