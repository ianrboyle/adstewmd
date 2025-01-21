import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../Description";
import FeaturedServiceDescriptionPageHeading from "../DescriptionPageHeading";
import FeaturedServiceDescriptionWithList from "../DescriptionWithList";
import FillerTypes from "../FillerTypes";
import DividerWithContactButtons from "../DividerWithContactButtons";
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
import FeaturedServicesImageColumn from "../ImageColumn";
import { FeaturedServicesPages } from "../../../constants/enums";

export default function FillersFeaturedServicePage() {
  return (
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
        <FeaturedServicesImageColumn currentPage={FeaturedServicesPages.fillers} />
      </Grid>
    </Grid>
  );
}
