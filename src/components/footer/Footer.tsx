import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";

import LeftFooter from "./LeftFooter";
import CenterFooter from "./CenterFooter";
import RightFooter from "./RightFooter";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";
import { lowerFooterLinks } from "../../constants/nav-items";

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
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4, sm: 12 }}>
            <LeftFooter />
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 12 }}>
            <CenterFooter />
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 12 }}>
            <RightFooter />
          </Grid>
        </Grid>
        <Divider
          flexItem
          sx={{
            backgroundColor: "white",
            width: "100%",
            margin: "0 auto",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Typography sx={{ fontSize: ".85rem" }}>
                  © Copyright 2025 Aesthetic Surgery & Dermatology of Cherry Creek | Design and Development by Ian Boyle
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "center", md: "flex-end" },
                  gap: "1rem",
                }}
              >
                {lowerFooterLinks.map((link, index) => (
                  <Link href={link.link} key={index} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontSize: ".85rem",
                        color: "white",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </footer>
  );
}
