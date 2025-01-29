import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import { PageType } from "../../../constants/enums";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  howDoesItWorkBody,
  howDoesItWorkTitle,
  howToPrepareBody,
  howToPrepareTitle,
  laserHairRemovalBenefitsList,
  laserHairRemovalBenefitsMainBody,
  laserHairRemovalBenefitsTitle,
  pageHeadingBody,
  pageHeadingTitle,
  whatHappensAfterBody,
  whatHappensAfterTitle,
  whatHappensDuringBody,
  whatHappensDuringTitle,
  whatIsLaserHairRemovalList,
  whatIsLaserHairRemovalMainBody,
  WhatIsLaserHairRemovalSubtext,
  whatIsLaserHairRemovalTitle,
  whyChooseASDBody,
  whyChooseASDTitle,
} from "../../../constants/featured-services/laser-hair-removal";

export default function LaserHairRemovalPage() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/laser-hair-removal.png"
        altText="botox"
        objectPosition="center 50%"
      />

      <FeaturedServicePage
        initialDescription={pageHeadingBody}
        initialDescriptionTitle={pageHeadingTitle}
        sections={[
          {
            title: whatIsLaserHairRemovalTitle,
            body: whatIsLaserHairRemovalMainBody,
            listItems: whatIsLaserHairRemovalList,
            isList: true,
            subText: WhatIsLaserHairRemovalSubtext,
          },
          // { title: fillerResultsTitle, body: fillerResultsBody },
          {
            title: laserHairRemovalBenefitsTitle,
            body: laserHairRemovalBenefitsMainBody,
            isList: true,
            listItems: laserHairRemovalBenefitsList,
          },
          { title: howDoesItWorkTitle, body: howDoesItWorkBody },
          { title: howToPrepareTitle, body: howToPrepareBody },
          { title: whatHappensDuringTitle, body: whatHappensDuringBody },
          { title: whatHappensAfterTitle, body: whatHappensAfterBody },
          { title: whyChooseASDTitle, body: whyChooseASDBody },
        ]}
        currentPage={PageType.laser}
      />
    </Box>
  );
}
