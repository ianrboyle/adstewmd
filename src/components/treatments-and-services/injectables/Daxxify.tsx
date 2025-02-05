import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import { PageType } from "../../../constants/enums";
import {
  daxxifyMainText,
  daxxifyMainTitle,
  whatIsDaxxifyTitle,
  whatIsDaxxifyBody,
  howIsDaxxifyDifferentTitle,
  howIsDaxxifyDifferentBody,
  whatDoesDaxxifyAddressTitle,
  whatDoesDaxxifyAddressBody,
  whatCanIExpectDaxxifyTitle,
  whatCanIExpectDaxxifyBody,
  howLongDoesDaxxifyLastTitle,
  howLongDoesDaxxifyLastBody,
} from "../../../constants/treatments-and-services/injectables/daxxify";

export default function Daxxify() {
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
        initialDescription={daxxifyMainText}
        initialDescriptionTitle={daxxifyMainTitle}
        sections={[
          { title: whatIsDaxxifyTitle, body: whatIsDaxxifyBody },
          { title: howIsDaxxifyDifferentTitle, body: howIsDaxxifyDifferentBody },
          { title: whatDoesDaxxifyAddressTitle, body: whatDoesDaxxifyAddressBody },
          { title: whatCanIExpectDaxxifyTitle, body: whatCanIExpectDaxxifyBody },
          { title: howLongDoesDaxxifyLastTitle, body: howLongDoesDaxxifyLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
