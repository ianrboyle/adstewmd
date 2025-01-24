import { Box, Divider } from "@mui/material";
import FeaturedServiceBackgroundImage from "../../individual-page-components/BackgroundImage";
import { FeaturedServicesPages } from "../../../../../constants/enums";
import {
  whatIsCoolSculptTitle,
  whatIsCoolSculptBody,
  coolSculptResultsTitle,
  coolSculptResultsMain,
  coolSculptResultsList,
  coolSculptResultsSubtext,
  seeResultsTitle,
  seeResultsBody,
  goodCandidateTitle,
  goodCandidateBody,
} from "../../../../../constants/featured-services/coolsculpting";
import FeaturedServiceDescription from "../../individual-page-components/Description";
import FeaturedServiceDescriptionPageHeading from "../../individual-page-components/DescriptionPageHeading";
import FeaturedServiceDescriptionWithList from "../../individual-page-components/DescriptionWithList";
import DividerWithContactButtons from "../../individual-page-components/DividerWithContactButtons";
import FeaturedServicesImageColumn from "../../individual-page-components/ImageColumn";

import Grid from "@mui/material/Grid2";
import EmsculptImages from "./EmsculptImages";
import EmsculptAbilitiesAccordian from "./EmsculptAbilitiesAccordian";
import {
  emsculptTitle,
  ecsculptMain,
  whatIsEmsculptTitle,
  whatIsEmsculptBody,
  howManyEmsculptTreatmentsTitle,
  howManyEmsculptTreatmentsBody,
} from "../../../../../constants/featured-services/emsculpt";

export default function Emsculpt() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/body/body-contour3.png"
        altText="botox"
        objectPosition="center 65%"
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
            <FeaturedServiceDescriptionPageHeading title={emsculptTitle} body={[ecsculptMain]} />
            <DividerWithContactButtons />
            <FeaturedServiceDescription title={whatIsEmsculptTitle} body={whatIsEmsculptBody} />
            <EmsculptAbilitiesAccordian />
            <FeaturedServiceDescription title={howManyEmsculptTreatmentsTitle} body={howManyEmsculptTreatmentsBody} />
            <EmsculptImages />
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
          <FeaturedServicesImageColumn currentPage={FeaturedServicesPages.coolSculpt} />
        </Grid>
      </Grid>
    </Box>
  );
}
