import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  doesSculptraCauseSideEffectsBody,
  doesSculptraCauseSideEffectsTitle,
  resultsOfSculptraListItems,
  resultsOfSculptraMainBody,
  resultsOfSculptraSubtext,
  resultsOfSculptraTitle,
  sculptraMainText,
  sculptraMainTitle,
  whatIsSculptraBody,
  whatIsSculptraTitle,
} from "../../../../constants/featured-services/injectables/scultpra";
import { CurrentPage } from "../../../../constants/enums";

export default function Sculptra() {
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
        initialDescription={sculptraMainText}
        initialDescriptionTitle={sculptraMainTitle}
        sections={[
          { title: whatIsSculptraTitle, body: whatIsSculptraBody },
          {
            title: resultsOfSculptraTitle,
            body: resultsOfSculptraMainBody,
            listItems: resultsOfSculptraListItems,
            isList: true,
            subText: resultsOfSculptraSubtext,
          },

          { title: doesSculptraCauseSideEffectsTitle, body: doesSculptraCauseSideEffectsBody },
        ]}
        currentPage={CurrentPage.genericPage}
      />
    </Box>
  );
}
