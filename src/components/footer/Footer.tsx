import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";

import LeftFooter from "./LeftFooter";
import CenterFooter from "./CenterFooter";
import RightFooter from "./RightFooter";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";

const links = ["Accessibility", "Terms of Use", "Sitemap"];
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Typography>
            © Copyright 2025 Aesthetic Surgery & Dermatology of Cherry Creek | Design and Development by Ian Boyle
          </Typography>
          <Divider orientation="vertical" sx={{ color: "white" }} variant="middle" flexItem />
          {links.map((link, index) => (
            <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} key={index} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {link}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </footer>
  );
}
