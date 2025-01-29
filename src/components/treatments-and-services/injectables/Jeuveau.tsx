import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  howDoesJeuveauWorkBody,
  howDoesJeuveauWorkTitle,
  howIsJeuveauDifferentBody,
  howIsJeuveauDifferentTitle,
  howLongDoesJeuveauLastBody,
  howLongDoesJeuveauLastTitle,
  jeuveauMainText,
  jeuveauMainTitle,
  whatCanIExpectJeuveauBody,
  whatCanIExpectJeuveauTitle,
  whatDoesJeuveauAddressBody,
  whatDoesJeuveauAddressTitle,
  whatIsJeuveauBody,
  whatIsJeuveauTitle,
} from "../../../constants/featured-services/injectables/jeuveau";
import { PageType } from "../../../constants/enums";

export default function Jeuveau() {
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
        initialDescription={jeuveauMainText}
        initialDescriptionTitle={jeuveauMainTitle}
        sections={[
          { title: whatIsJeuveauTitle, body: whatIsJeuveauBody },
          {
            title: howDoesJeuveauWorkTitle,
            body: howDoesJeuveauWorkBody,
          },
          { title: howIsJeuveauDifferentTitle, body: howIsJeuveauDifferentBody },
          { title: whatDoesJeuveauAddressTitle, body: whatDoesJeuveauAddressBody },
          { title: whatCanIExpectJeuveauTitle, body: whatCanIExpectJeuveauBody },
          { title: howLongDoesJeuveauLastTitle, body: howLongDoesJeuveauLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
