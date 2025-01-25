import { Box } from "@mui/material";

import { CurrentPage } from "../../../../../constants/enums";
import FeaturedServicePage from "../../individual-page-components/FeaturedServicesPage";
import FeaturedServiceBackgroundImage from "../../individual-page-components/BackgroundImage";
import {
  fillersServices,
  fillersServicesTitle,
  whatAreFillersTitle,
  whatAreFillersText,
  fillerResultsTitle,
  fillerResultsBody,
  fillersListSubText,
  whatFillersCanDo,
  resultsLastTitle,
  resultsLastBody,
  howFillersFeelTitle,
  howFillersFeelBody,
} from "../../../../../constants/featured-services/injectables/fillers";

export default function Fillers() {
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
      <FeaturedServicePage
        initialDescription={fillersServices}
        initialDescriptionTitle={fillersServicesTitle}
        sections={[
          { title: whatAreFillersTitle, body: whatAreFillersText },
          // { title: fillerResultsTitle, body: fillerResultsBody },
          {
            title: fillerResultsTitle,
            body: fillerResultsBody,
            subText: fillersListSubText,
            isList: true,
            listItems: whatFillersCanDo,
          },
          { title: resultsLastTitle, body: resultsLastBody },
          { title: howFillersFeelTitle, body: howFillersFeelBody },
        ]}
        currentPage={CurrentPage.fillers}
      />
    </Box>
  );
}
