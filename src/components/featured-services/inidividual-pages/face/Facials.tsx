import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  facialBenefitsListItems,
  facialBenefitsMainBody,
  facialBenefitsSubtext,
  facialBenefitsTitle,
  facialsMainText,
  facialsMainTitle,
  typeOfSkinFacialsListItems,
  typeOfSkinFacialsMainBody,
  typeOfSkinFacialsSubtext,
  typeOfSkinFacialsTitle,
  whatAreFacialsBody,
  whatAreFacialsTitle,
  whatCanIExpectFacialsBody,
  whatCanIExpectFacialsTitle,
} from "../../../../constants/featured-services/face/facials";
import { PageType } from "../../../../constants/enums";

export default function Facials() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/facials.png"
        altText="fraxel"
        objectPosition="center 40%"
      />
      <FeaturedServicePage
        initialDescription={facialsMainText}
        initialDescriptionTitle={facialsMainTitle}
        sections={[
          { title: whatAreFacialsTitle, body: whatAreFacialsBody },
          {
            title: facialBenefitsTitle,
            body: facialBenefitsMainBody,
            listItems: facialBenefitsListItems,
            isList: true,
            subText: facialBenefitsSubtext,
          },
          {
            title: typeOfSkinFacialsTitle,
            body: typeOfSkinFacialsMainBody,
            listItems: typeOfSkinFacialsListItems,
            isList: true,
            subText: typeOfSkinFacialsSubtext,
          },
          { title: whatCanIExpectFacialsTitle, body: whatCanIExpectFacialsBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
