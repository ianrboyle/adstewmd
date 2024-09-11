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
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          // alignItems: "center",
          color: "black",
          fontSize: "24px",
          fontWeight: "bold",
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={8}>
            <FeaturedServices />
          </Grid>
          <Grid size={4}>
            <FeaturedServices />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
