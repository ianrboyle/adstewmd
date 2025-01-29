import { Box } from "@mui/material";
import { PageType } from "../../../constants/enums";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  whatAreChemicalPeelsBody,
  chemicalPeelsMainText,
  chemicalPeelsMainTitle,
  whatAreChemicalPeelsTitle,
  chemicalPeelBenefitsTitle,
  chemicalPeelBenefitsMainBody,
  chemicalPeelBenefitsListItems,
  chemicalPeelBenefitsSubtext,
  areChemicalPeelsRightForMeTitle,
  areChemicalPeelsRightForMeBody,
  afterChemicalPeelsTitle,
  afterChemicalPeelsBody,
  whyASDTitle,
  whyASDBody,
} from "../../../constants/treatments-and-services/face/chemical-peels";

export default function ChemicalPeels() {
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
        initialDescription={chemicalPeelsMainText}
        initialDescriptionTitle={chemicalPeelsMainTitle}
        sections={[
          { title: whatAreChemicalPeelsTitle, body: whatAreChemicalPeelsBody },
          {
            title: chemicalPeelBenefitsTitle,
            body: chemicalPeelBenefitsMainBody,
            listItems: chemicalPeelBenefitsListItems,
            isList: true,
            subText: chemicalPeelBenefitsSubtext,
          },

          { title: areChemicalPeelsRightForMeTitle, body: areChemicalPeelsRightForMeBody },
          { title: afterChemicalPeelsTitle, body: afterChemicalPeelsBody },
          { title: whyASDTitle, body: whyASDBody },
        ]}
        currentPage={PageType.chemicalPeels}
      />
    </Box>
  );
}
