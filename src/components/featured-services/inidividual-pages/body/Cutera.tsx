import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import { cuteraTitle } from "../../../../constants/treatments-and-services/body/body-contouring";
import {
  cuteraMain,
  whatDoesCuteraTreatListItems,
  whatDoesCuteraTreatMainBody,
  whatDoesCuteraTreatSubtext,
  whatDoesCuteraTreatTitle,
  whatIsCuteraBody,
  whatIsCuteraTitle,
  whatToExpectCuteraBody,
  whatToExpectCuteraTitle,
} from "../../../../constants/treatments-and-services/body/cutera";
import { PageType } from "../../../../constants/enums";

export default function Cutera() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/body/body-contour3.png"
        altText="botox"
        objectPosition="center 65%"
      />

      <FeaturedServicePage
        initialDescription={cuteraMain}
        initialDescriptionTitle={cuteraTitle}
        sections={[
          { title: whatIsCuteraTitle, body: whatIsCuteraBody },
          {
            title: whatDoesCuteraTreatTitle,
            body: whatDoesCuteraTreatMainBody,
            listItems: whatDoesCuteraTreatListItems,
            isList: true,
            subText: whatDoesCuteraTreatSubtext,
          },
          {
            title: whatToExpectCuteraTitle,
            body: whatToExpectCuteraBody,
          },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
