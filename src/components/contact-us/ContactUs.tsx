import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import { ContactUsForm } from "../ContactUsForm";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "35vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="about us"
          src="/contact-us.png"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
      </Box>
      <Typography
        variant="h1"
        sx={{ color: "black", fontWeight: "300", fontSize: "2rem", paddingLeft: "4rem", paddingTop: "1rem" }}
      >
        Contact Us
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          size={{ md: 12, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Grid container spacing={1} sx={{ marginTop: "2rem" }}>
            <Grid
              size={{ sm: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{ color: "text.secondary", fontWeight: "300", fontSize: "1.75rem", marginBottom: "1rem" }}
                >
                  Aesthetic Surgery & Dermatology of Cherry Creek
                </Typography>
                <Link
                  href="https://www.google.com/maps?q=3300+E+1st+Ave+%23400,+Denver,+CO+80206"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    3300 E 1st Ave #400 <br /> Denver, CO 80206
                  </Typography>
                </Link>
                <Typography
                  component="a"
                  href="tel:3033336060"
                  sx={{
                    textDecoration: "none",
                    color: "text.secondary",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  303-333-6060
                </Typography>

                <Box
                  sx={{
                    height: { xs: "350px", sm: "350px", md: "300px", lg: "300px" },
                    width: "100%",
                    marginTop: "1rem",
                    overflow: "hidden", // Ensures any excess part of the image is cropped
                  }}
                >
                  <Link
                    href="https://www.google.com/maps?q=3300+E+1st+Ave+%23400,+Denver,+CO+80206"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Image
                      src="/map-location2.png"
                      alt="Map Location"
                      sizes="100vw"
                      width={600} // Double the original size
                      height={600} // Double the original size
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <ContactUsForm />
            </Grid>
          </Grid>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: "-1px", display: { xs: "none", lg: "block" } }}
        />
        <Grid
          size={{ md: 12, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServicesImageColumn currentPage={PageType.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
