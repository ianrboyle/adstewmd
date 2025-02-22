import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../../../components/treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../../constants/enums";
export default function AccessibilityPage() {
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
          // height: { xs: "125px", sm: "175px", md: "200px", lg: "35vh" },
          height: "35vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="about us"
          src="/about-us.png"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
      </Box>
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
          }}
        >
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  fontWeight: "300",
                  color: "black",
                  mb: "1rem",
                }}
              >
                Accessibility Statement
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                General
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery & Dermatology of Cherry Creek strives to ensure that its services are accessible to
                people with disabilities. Aesthetic Surgery & Dermatology of Cherry Creek has invested a significant
                amount of resources to help ensure that its website is made easier to use and more accessible for people
                with disabilities, with the strong belief that every person has the right to live with dignity,
                equality, comfort and independence.
              </Typography>
              {/* <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                Accessibility on Aesthetic Surgery & Dermatology of Cherry Creek
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery & Dermatology of Cherry Creek makes available an accessibility the Aesthetic Surgery &
                Dermatology of Cherry Creek Accessibility Widget that is powered by a dedicated accessibility server.
                The software allows the site to improve its compliance with the Web Content Accessibility Guidelines
                (WCAG 2.0).
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                Enabling the Accessibility Menu
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery & Dermatology of Cherry Creek's accessibility menu can be enabled by clicking the
                accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu,
                please wait a moment for the accessibility menu to load in its entirety.
              </Typography> */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                Disclaimer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery & Dermatology of Cherry Creek continues its efforts to constantly improve the
                accessibility of its site and services in the belief that it is our collective moral obligation to allow
                seamless, accessible and unhindered use also for those of us with disabilities.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Despite our efforts to make all pages and content on Aesthetic Surgery & Dermatology of Cherry Creek
                fully accessible, some content may not have yet been fully adapted to the strictest accessibility
                standards. This may be a result of not having found or identified the most appropriate technological
                solution.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                Here For You
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                If you are experiencing difficulty with any content on Aesthetic Surgery & Dermatology of Cherry Creek
                website, widget, any of its services or require assistance with any part of our site or software, please
                contact us during normal business hours as detailed below and we will be happy to assist.
              </Typography>

              {/* <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "300",
                  color: "text.secondary",
                }}
              >
                Contacting Us
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                If you wish to report a problem, have any questions or need assistance, please click here to contact
                Aesthetic Surgery & Dermatology of Cherry Creek Customer Support.
              </Typography> */}
            </Box>
          </Box>
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
