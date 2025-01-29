import { Box } from "@mui/material";
import { PageType } from "../../../constants/enums";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  voluxMainText,
  voluxMainTitle,
  whatIsVoluxTitle,
  whatIsVoluxBody,
  howDoesVoluxWorkTitle,
  howDoesVoluxWorkBody,
  whatDoesVoluxAddressTitle,
  whatDoesVoluxAddressMainBody,
  howToPrepareVoluxTitle,
  howToPrepareVoluxBody,
  whatCanIExpectVoluxTitle,
  whatCanIExpectVoluxBody,
  howLongDoesVoluxLastTitle,
  howLongDoesVoluxLastBody,
} from "../../../constants/featured-services/injectables/volux";

export default function Volux() {
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
        initialDescription={voluxMainText}
        initialDescriptionTitle={voluxMainTitle}
        sections={[
          { title: whatIsVoluxTitle, body: whatIsVoluxBody },
          { title: howDoesVoluxWorkTitle, body: howDoesVoluxWorkBody },
          {
            title: whatDoesVoluxAddressTitle,
            body: whatDoesVoluxAddressMainBody,
          },
          { title: howToPrepareVoluxTitle, body: howToPrepareVoluxBody },
          { title: whatCanIExpectVoluxTitle, body: whatCanIExpectVoluxBody },
          { title: howLongDoesVoluxLastTitle, body: howLongDoesVoluxLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
