import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import { PageType } from "../../../constants/enums";
import {
  benefitsOfLaserResurfacingListItems,
  benefitsOfLaserResurfacingMainBody,
  benefitsOfLaserResurfacingSubtext,
  benefitsOfLaserResurfacingTitle,
  isLaserResurfacingRightForMeBody,
  isLaserResurfacingRightForMeTitle,
  laserResurfacingMainText,
  laserResurfacingMainTitle,
  whatIsLaserResurfacingBody,
  whatIsLaserResurfacingTitle,
} from "../../../constants/treatments-and-services/face/laser-resurfacing";

export default function LaserResurfacing() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/laser-resurfacing-small.png"
        altText="fraxel"
        objectPosition="center 50%"
      />
      <FeaturedServicePage
        initialDescription={laserResurfacingMainText}
        initialDescriptionTitle={laserResurfacingMainTitle}
        sections={[
          { title: whatIsLaserResurfacingTitle, body: whatIsLaserResurfacingBody },
          {
            title: benefitsOfLaserResurfacingTitle,
            body: benefitsOfLaserResurfacingMainBody,
            listItems: benefitsOfLaserResurfacingListItems,
            isList: true,
            subText: benefitsOfLaserResurfacingSubtext,
          },

          { title: isLaserResurfacingRightForMeTitle, body: isLaserResurfacingRightForMeBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
