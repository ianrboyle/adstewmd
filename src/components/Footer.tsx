import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import { IconButton, Typography } from "@mui/material";
import LogoImage from "./LogoImage";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
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
              <LogoImage logoColor="white" />
              <Box>
                <IconButton
                  color="secondary"
                  aria-label="go to facebook"
                  sx={{
                    color: "white",
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="go to instagram"
                  sx={{
                    color: "white",
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="get directions"
                  sx={{
                    color: "white",
                  }}
                >
                  <MapIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  aria-label="hours of operation"
                  sx={{
                    color: "white",
                  }}
                >
                  <AccessTimeIcon />
                  <Typography
                    sx={{
                      color: "white",
                      paddingLeft: "5px",
                    }}
                  >
                    Monday to Friday: 830am - 5:00pm
                  </Typography>
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 12 }}>
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
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Contact Us
              </Typography>
              <Divider
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: "white",
                  width: "75%",
                  margin: "0 auto",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                aria-hidden="true"
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  {/* Left Box - 40% */}
                  <Grid size={{ xs: 5, md: 5, lg: 5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginLeft: "1rem",
                      }}
                    >
                      <Typography sx={{ color: "white", textAlign: "left" }}>Location:</Typography>
                      <Typography sx={{ color: "white", textAlign: "left" }}>
                        3300 E 1st Ave #400 Denver, CO 80206
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 7, md: 7, lg: 7 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ color: "white" }}>303-333-6060</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Divider
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: "white",
                  width: "75%",
                  margin: "0 auto",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                aria-hidden="true"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 12 }}>
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
