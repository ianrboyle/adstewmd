import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  areDermalFillersRightForMeBody,
  areDermalFillersRightForMeTitle,
  availableDermalFillersListItems,
  availableDermalFillersMainBody,
  availableDermalFillersSubtext,
  availableDermalFillersTitle,
  benefitsOfDermalFillersListItems,
  benefitsOfDermalFillersMainBody,
  benefitsOfDermalFillersSubtext,
  benefitsOfDermalFillersTitle,
  dermalFillersMainText,
  dermalFillersMainTitle,
  whatAreDermalFillersBody,
  whatAreDermalFillersTitle,
  whenNoticeResultsDermalFillersBody,
  whenNoticeResultsDermalFillersTitle,
} from "../../../constants/treatments-and-services/injectables/dermal-fillers";
import { PageType } from "../../../constants/enums";

export default function DermalFillers() {
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
        initialDescription={dermalFillersMainText}
        initialDescriptionTitle={dermalFillersMainTitle}
        sections={[
          { title: whatAreDermalFillersTitle, body: whatAreDermalFillersBody },
          {
            title: availableDermalFillersTitle,
            body: availableDermalFillersMainBody,
            listItems: availableDermalFillersListItems,
            isList: true,
            subText: availableDermalFillersSubtext,
          },
          {
            title: benefitsOfDermalFillersTitle,
            body: benefitsOfDermalFillersMainBody,
            listItems: benefitsOfDermalFillersListItems,
            isList: true,
            subText: benefitsOfDermalFillersSubtext,
          },
          { title: areDermalFillersRightForMeTitle, body: areDermalFillersRightForMeBody },
          { title: whenNoticeResultsDermalFillersTitle, body: whenNoticeResultsDermalFillersBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
