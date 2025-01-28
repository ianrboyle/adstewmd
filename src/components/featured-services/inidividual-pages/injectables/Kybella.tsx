import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  afterKybellaBody,
  afterKybellaTitle,
  benefitsOfKybellaMainBody,
  benefitsOfKybellaTitle,
  isKybellaRightForMeBody,
  isKybellaRightForMeTitle,
  kybellaMainText,
  kybellaMainTitle,
  whatCanIExpectKybellaBody,
  whatCanIExpectKybellaTitle,
  whatIsKybellaBody,
  whatIsKybellaTitle,
} from "../../../../constants/featured-services/injectables/kybella";
import { PageType } from "../../../../constants/enums";

export default function Kybella() {
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
        initialDescription={kybellaMainText}
        initialDescriptionTitle={kybellaMainTitle}
        sections={[
          { title: whatIsKybellaTitle, body: whatIsKybellaBody },

          { title: benefitsOfKybellaTitle, body: benefitsOfKybellaMainBody },
          { title: isKybellaRightForMeTitle, body: isKybellaRightForMeBody },
          { title: whatCanIExpectKybellaTitle, body: whatCanIExpectKybellaBody },
          { title: afterKybellaTitle, body: afterKybellaBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
