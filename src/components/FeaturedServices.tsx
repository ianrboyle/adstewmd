import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "./FeaturedServiceCard";
export default function FeaturedServices() {
  return (
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
          size={3}
        >
          <FeaturedServiceCard title="title 1" imageSrc="/porsche@2x.png" />
        </Grid>
        <Grid
          size={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServiceCard title="title 2" imageSrc="/porsche@2x.png" />
        </Grid>
        <Grid
          size={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServiceCard title="title 3" imageSrc="/porsche@2x.png" />
        </Grid>
        <Grid
          size={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServiceCard title="title 4" imageSrc="/porsche@2x.png" />
        </Grid>
      </Grid>
    </Box>
  );
}
