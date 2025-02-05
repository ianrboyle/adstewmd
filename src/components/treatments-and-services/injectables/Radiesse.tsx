import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  howIsRadiesseDifferentBody,
  howIsRadiesseDifferentTitle,
  howLongDoesRadiesseLastBody,
  howLongDoesRadiesseLastTitle,
  howToPrepareRadiesseBody,
  howToPrepareRadiesseTitle,
  radiesseMainText,
  radiesseMainTitle,
  whatCanIExpectRadiesseBody,
  whatCanIExpectRadiesseTitle,
  whatDoesRadiesseAddressListItems,
  whatDoesRadiesseAddressMainBody,
  whatDoesRadiesseAddressSubtext,
  whatDoesRadiesseAddressTitle,
  whatIsRadiesseBody,
  whatIsRadiesseTitle,
} from "../../../constants/treatments-and-services/injectables/radiesse";
import { PageType } from "../../../constants/enums";

export default function Radiesse() {
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
        objectPosition="center 50%"
      />
      <FeaturedServicePage
        initialDescription={radiesseMainText}
        initialDescriptionTitle={radiesseMainTitle}
        sections={[
          { title: whatIsRadiesseTitle, body: whatIsRadiesseBody },
          { title: howIsRadiesseDifferentTitle, body: howIsRadiesseDifferentBody },
          {
            title: whatDoesRadiesseAddressTitle,
            body: whatDoesRadiesseAddressMainBody,
            listItems: whatDoesRadiesseAddressListItems,
            isList: true,
            subText: whatDoesRadiesseAddressSubtext,
          },
          { title: howToPrepareRadiesseTitle, body: howToPrepareRadiesseBody },
          { title: whatCanIExpectRadiesseTitle, body: whatCanIExpectRadiesseBody },
          { title: howLongDoesRadiesseLastTitle, body: howLongDoesRadiesseLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
