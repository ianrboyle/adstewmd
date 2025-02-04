import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
export default function AdrienneStewartMD() {
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
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "500",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                Meet Dr. Adrienne Stewart, Board-Certified Dermatologist
              </Typography>
              <Grid container>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                  <Box
                    sx={{
                      height: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
                      width: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
                    }}
                  >
                    <Image
                      src="/providers/Adrienne.png"
                      alt="Adrienne Stewart Md"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      height={300}
                      width={200}
                      priority
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8, lg: 6 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      whiteSpace: "normal",
                      overflow: "hidden",
                      mb: "1rem",
                    }}
                  >
                    Adrienne Stewart, MD, is a board-certified dermatologist at Aesthetic Surgery and Dermatology of
                    Cherry Creek in Denver, Colorado. She’s passionate about helping patients feel comfortable in their
                    skin. She has more than 29 years of medical and cosmetic dermatology experience and stays abreast
                    with the latest advances in technologies and proven treatments.
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
                    Dr. Stewart has over 25 years of experience completing injections. She taught cosmetic dermatology
                    injection techniques at the University of Colorado in Denver for years and regularly takes
                    continuing cadaver classes on injection techniques and theory.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Dr. Stewart attends yearly classes, studying the facial muscles and how to best combat common signs of
                aging.
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
                Dr. Stewart is passionate about giving back to her community and teaching next-generation
                dermatologists. She enjoys improving her patients’ lives by improving their skin health, appearance, and
                self-confidence. Dr. Stewart develops strong, long-lasting interpersonal relationships with her
                patients.
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
                She earned her bachelor’s and medical degrees at Tulane University in New Orleans, Louisiana. She also
                completed an internship and residency in dermatology at Tulane Charity Hospital, where she was a chief
                resident.
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
                Dr. Stewart is a clinical assistant professor at the University of Colorado and a clinical instructor
                for internal medicine residents at St. Joseph Hospital in Denver.
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
                She is also a national Botox® trainer and fellow of the American Academy of Dermatology. Dr. Stewart is
                a member of numerous professional organizations, including the Women’s Dermatologic Society, Colorado
                Medical Society, Colorado Dermatologic Society, Denver Medical Society, and the American Society of
                Cosmetic Dermatology and Aesthetic Surgery.
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
                She has been featured on numerous media programs and in publications, including WB, CBC, ABC, NBC, and
                Fox News, as well as Elle Magazine, Vogue Magazine, Bloom, and 5280 Magazine, which awarded her Top
                Dermatologist. She also regularly presents at prestigious medical seminars.
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
                In her free time, Dr. Stewart loves gardening, spending time with her husband and children, and cheering
                on the Nuggets, Avalanche, and Broncos.
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
                Dr. Stewart welcomes new and existing patients to Aesthetic Surgery and Dermatology of Cherry Creek and
                looks forward to maximizing their skin’s health.
              </Typography>
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
