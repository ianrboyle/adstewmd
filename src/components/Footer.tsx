import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import { IconButton, Typography } from "@mui/material";
import LogoImage from "./LogoImage";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          lineHeight: "1rem",
          backgroundColor: "#28044C",
        }}
      >
        <Grid container>
          <Grid size={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "30vh",
                border: "1px solid white",
              }}
            >
              <LogoImage />
              <Box>
                <IconButton color="secondary" aria-label="add an alarm">
                  <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "30vh",
                border: "1px solid white",
              }}
            ></Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "30vh",
                border: "1px solid white",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
