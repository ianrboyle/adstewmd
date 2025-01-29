import { Box, Divider, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import { PageType } from "../../../../constants/enums";
import Grid from "@mui/material/Grid2";
import DividerWithContactButtons from "../individual-page-components/DividerWithContactButtons";
import FeaturedServicesAccordian from "../Accordian";
import {
  rhaAccordianContent,
  rhaAccordianTitle,
  rhaMainTitle,
  rhaMainText,
  whatIsRhaBody,
  whatIsRhaTitle,
  howIsRhaDifferentTitle,
  howIsRhaDifferentBody,
  whatToExpectRhaTitle,
  whatToExpectRhaBody,
} from "../../../../constants/featured-services/injectables/rha";
import FeaturedServiceDescriptionPageHeading from "../individual-page-components/DescriptionPageHeading";
import FeaturedServiceDescription from "../individual-page-components/Description";
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
            <FeaturedServiceDescriptionPageHeading title={rhaMainTitle} body={[rhaMainText]} />

            <DividerWithContactButtons />
            <FeaturedServiceDescription title={whatIsRhaTitle} body={whatIsRhaBody} />
            <FeaturedServiceDescription title={howIsRhaDifferentTitle} body={howIsRhaDifferentBody} />

            <FeaturedServicesAccordian title={rhaAccordianTitle} content={rhaAccordianContent} />

            <FeaturedServiceDescription title={whatToExpectRhaTitle} body={whatToExpectRhaBody} />
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
