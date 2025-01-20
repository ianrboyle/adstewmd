import { Box, Divider, Link, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../../../components/featured-services/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../../../components/featured-services/Description";
import FeaturedServiceDescriptionPageHeading from "../../../components/featured-services/DescriptionPageHeading";
import FeaturedServiceDescriptionWithList from "../../../components/featured-services/DescriptionWithList";
import FillerTypes from "../../../components/featured-services/FillerTypes";
import DividerWithContactButtons from "../../../components/featured-services/DividerWithContactButtons";
import {
  pageHeadingTitle,
  pageHeadingSubtitle,
  fillersServicesTitle,
  fillersServices,
  whatAreFillersTitle,
  whatAreFillersText,
  fillerResultsTitle,
  fillerResultsBody,
  fillersListMainText,
  fillersListSubText,
  whatFillersCanDo,
  resultsLastTitle,
  resultsLastBody,
  howFillersFeelTitle,
  howFillersFeelBody,
} from "../../../constants/featured-services";
import Image from "next/image";

export default function Fillers() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage imageSrc="/featured-services/botox-long.png" altText="botox" />

      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center", // Center items horizontallyd
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
            <FeaturedServiceDescriptionPageHeading title={pageHeadingTitle} subtitle={pageHeadingSubtitle} />
            <FeaturedServiceDescription title={fillersServicesTitle} body={[fillersServices]} />
            <DividerWithContactButtons />
            <FeaturedServiceDescription title={whatAreFillersTitle} body={whatAreFillersText} />
            <FeaturedServiceDescription title={fillerResultsTitle} body={fillerResultsBody} />
            <FeaturedServiceDescriptionWithList
              mainText={fillersListMainText}
              subText={fillersListSubText}
              listItems={whatFillersCanDo}
            />
            <FeaturedServiceDescription title={resultsLastTitle} body={resultsLastBody} />
            <FeaturedServiceDescription title={howFillersFeelTitle} body={howFillersFeelBody} />
            <FillerTypes />
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
          <Box
            sx={{
              minHeight: "200px",
              border: "1px solid black",
              width: { md: "100%", lg: "100%", xl: "85%" },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", md: "2.25rem" },
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                }}
              >
                Our Featured Services
              </Typography>

              <Divider
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  backgroundColor: "secondary.main",
                  height: 2,
                }}
                variant="middle"
              />
            </Box>
            <Link href={`/services/botox`} style={{ display: "flex", width: "fit-content" }}>
              <Box
                sx={{
                  borderRadius: "0 0 2rem 0",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  },
                  "&:hover": {
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <Image
                  src="/featured-services/neurotoxins2.png"
                  alt="neurotoxins"
                  priority={false}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  width={400}
                  height={400}
                />
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
