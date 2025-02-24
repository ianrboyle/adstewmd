import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  howDoesRestylaneWorkBody,
  howDoesRestylaneWorkTitle,
  howLongDoesRestylaneLastBody,
  howLongDoesRestylaneLastTitle,
  howToPrepareRestylaneBody,
  howToPrepareRestylaneTitle,
  restylaneMainText,
  restylaneMainTitle,
  whatCanIExpectRestylaneBody,
  whatCanIExpectRestylaneTitle,
  whatDoesRestylaneAddressListItems,
  whatDoesRestylaneAddressMainBody,
  whatDoesRestylaneAddressSubtext,
  whatDoesRestylaneAddressTitle,
  whatIsRestylaneBody,
  whatIsRestylaneTitle,
} from "../../../constants/treatments-and-services/injectables/restylane";
import { PageType } from "../../../constants/enums";

export default function Restylane() {
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
        initialDescription={restylaneMainText}
        initialDescriptionTitle={restylaneMainTitle}
        sections={[
          { title: whatIsRestylaneTitle, body: whatIsRestylaneBody },
          { title: howDoesRestylaneWorkTitle, body: howDoesRestylaneWorkBody },
          {
            title: whatDoesRestylaneAddressTitle,
            body: whatDoesRestylaneAddressMainBody,
            listItems: whatDoesRestylaneAddressListItems,
            isList: true,
            subText: whatDoesRestylaneAddressSubtext,
          },
          { title: howToPrepareRestylaneTitle, body: howToPrepareRestylaneBody },
          { title: whatCanIExpectRestylaneTitle, body: whatCanIExpectRestylaneBody },
          { title: howLongDoesRestylaneLastTitle, body: howLongDoesRestylaneLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
