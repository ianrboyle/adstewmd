import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import { PageType } from "../../../constants/enums";
import {
  afterDiamondGlowBody,
  afterDiamondGlowTitle,
  benefitsOfDiamondGlowListItems,
  benefitsOfDiamondGlowMainBody,
  benefitsOfDiamondGlowTitle,
  diamondGlowMainText,
  diamondGlowMainTitle,
  isDiamondGlowRightForMeBody,
  isDiamondGlowRightForMeTitle,
  whatCanIExpectDiamondGlowBody,
  whatCanIExpectDiamondGlowTitle,
  whatIsDiamondGlowBody,
  whatIsDiamondGlowTitle,
} from "../../../constants/featured-services/face/diamond-glow";

export default function DiamondGlow() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/chemical-peel.png"
        altText="fraxel"
        objectPosition="center 40%"
      />
      <FeaturedServicePage
        initialDescription={diamondGlowMainText}
        initialDescriptionTitle={diamondGlowMainTitle}
        sections={[
          { title: whatIsDiamondGlowTitle, body: whatIsDiamondGlowBody },
          {
            title: benefitsOfDiamondGlowTitle,
            body: benefitsOfDiamondGlowMainBody,
            listItems: benefitsOfDiamondGlowListItems,
            isList: true,
          },

          { title: isDiamondGlowRightForMeTitle, body: isDiamondGlowRightForMeBody },
          { title: whatCanIExpectDiamondGlowTitle, body: whatCanIExpectDiamondGlowBody },
          { title: afterDiamondGlowTitle, body: afterDiamondGlowBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
