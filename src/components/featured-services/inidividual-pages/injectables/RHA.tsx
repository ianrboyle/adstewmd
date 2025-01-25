import { Box, Divider, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import { CurrentPage } from "../../../../constants/enums";
import Grid from "@mui/material/Grid2";
import DividerWithContactButtons from "../individual-page-components/DividerWithContactButtons";
import FeaturedServicesAccordian from "../Accordian";
import { rhaAccordianContent, rhaAccordianTitle } from "../../../../constants/featured-services/injectables/rha";
export default function RHA() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/fillers-long.png"
        altText="botox"
        objectPosition="center 0%"
      />
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
                  fontSize: { xs: "2rem", md: "2rem" },
                  fontWeight: "400",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                RHA
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
                The RHA® Collection is a brand-new filler by Revance® designed exclusively for dynamic facial movement
                and natural-looking results. Board-certified dermatologist Adrienne Stewart, MD, offers the entire RHA
                Collection at Aesthetic Surgery and Dermatology of Cherry Creek in the Cherry Creek neighborhood of
                Denver, Colorado. Call or schedule an appointment online today to learn more about this unique filler.
              </Typography>
              <DividerWithContactButtons />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2rem" },
                  fontWeight: "400",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                What is the RHA Collection?
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
                The RHA Collection is the only dermal filler FDA-approved to target dynamic wrinkles. With a unique
                hyaluronic acid formulation, RHA adapts to your facial movements. The filler’s resilient hyaluronic acid
                (HA) chemically mimics the HA found in your body.
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
                RHA lasts longer than many traditional fillers and stretches with your skin to deliver natural-looking
                results.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2rem" },
                  fontWeight: "400",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                How is the RHA Collection different from traditional fillers?
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
                Conventional fillers, like Juvéderm® and Restylane®, target static wrinkles that develop from volume
                loss. The RHA Collection is the first and only filler to treat dynamic wrinkles, which form after
                repeated facial expressions. Before the RHA Collection’s launch, neuromodulators like Botox® were the
                only injectable medications available to address dynamic lines.
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
                With the ability to address static and dynamic wrinkles, RHA fillers adapt to your skin’s movement while
                providing long-lasting results.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2rem" },
                  fontWeight: "400",
                  color: "text.secondary",
                }}
              >
                The RHA Collection includes four types of fillers:
              </Typography>
            </Box>
            <FeaturedServicesAccordian title={rhaAccordianTitle} content={rhaAccordianContent} />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2rem" },
                  fontWeight: "400",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                What can I expect from the RHA Collection?
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
                RHA fillers last 9-18 months, longer than many other brands, but the exact time depends on your age,
                activity level, and metabolism.
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
                Call Aesthetic Surgery & Dermatology today or schedule an appointment online to learn more about the
                benefits of the RHA Collection.
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
          <FeaturedServicesImageColumn currentPage={CurrentPage.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
