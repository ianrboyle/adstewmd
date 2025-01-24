import { Box } from "@mui/material";
import { FeaturedServicesPages } from "../../../../../constants/enums";
import FeaturedServiceBackgroundImage from "../../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../../individual-page-components/FeaturedServicesPage";
import {
  vanquishMainText,
  vanquishResultsListItems,
  vanquishResultsMainText,
  vanquishResultsSubtext,
  vanquishResultsTitle,
  whatIsVanquishBody,
  whatIsVanquishTitle,
  vanquishTitle,
} from "../../../../../constants/featured-services/vanquish";

export default function Vanquish() {
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

      <FeaturedServicePage
        initialDescription={vanquishMainText}
        initialDescriptionTitle={vanquishTitle}
        sections={[
          { title: whatIsVanquishTitle, body: whatIsVanquishBody },
          {
            title: vanquishResultsTitle,
            body: vanquishResultsMainText,
            listItems: vanquishResultsListItems,
            isList: true,
            subText: vanquishResultsSubtext,
          },
        ]}
        currentPage={FeaturedServicesPages.vanquish}
      />
    </Box>
  );
}
