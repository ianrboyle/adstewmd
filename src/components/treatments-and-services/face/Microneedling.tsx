import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import { PageType } from "../../../constants/enums";
import {
  afterMicroneedlingListItems,
  afterMicroneedlingMainBody,
  afterMicroneedlingSubtext,
  afterMicroneedlingTitle,
  isMicroneedlingRightForMeBody,
  isMicroneedlingRightForMeTitle,
  microneedlingBenefitsListItems,
  microneedlingBenefitsMainBody,
  microneedlingBenefitsSubtext,
  microneedlingBenefitsTitle,
  microneedlingMainText,
  microneedlingMainTitle,
  whatCanIExpectMicroneedlingBody,
  whatCanIExpectMicroneedlingTitle,
  whatIsMicroneedlingBody,
  whatIsMicroneedlingTitle,
} from "../../../constants/treatments-and-services/face/microneedling";

export default function Microneedling() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/microneedling.png"
        altText="fraxel"
        objectPosition="center 10%"
      />
      <FeaturedServicePage
        initialDescription={microneedlingMainText}
        initialDescriptionTitle={microneedlingMainTitle}
        sections={[
          { title: whatIsMicroneedlingTitle, body: whatIsMicroneedlingBody },
          {
            title: microneedlingBenefitsTitle,
            body: microneedlingBenefitsMainBody,
            listItems: microneedlingBenefitsListItems,
            isList: true,
            subText: microneedlingBenefitsSubtext,
          },
          { title: isMicroneedlingRightForMeTitle, body: isMicroneedlingRightForMeBody },
          { title: whatCanIExpectMicroneedlingTitle, body: whatCanIExpectMicroneedlingBody },
          {
            title: afterMicroneedlingTitle,
            body: afterMicroneedlingMainBody,
            listItems: afterMicroneedlingListItems,
            isList: true,
            subText: afterMicroneedlingSubtext,
          },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
