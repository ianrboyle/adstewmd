import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import {
  bodyContourMain,
  bodyTitle,
  coolSculpt,
  coolSculpTitle,
  cutera,
  cuteraTitle,
  emsculpt,
  emsculptTitle,
  laser,
  laserTitle,
  vanquish,
  vanquishTitle,
} from "../../../../constants/featured-services/body-contouring";
import { FeaturedServicesPages } from "../../../../constants/enums";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import FeaturedServiceDescriptionWithImage from "./BodyContourImages";

export default function BodyContouringFeaturedServicesPageContent() {
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
        initialDescription={bodyContourMain}
        initialDescriptionTitle={bodyTitle}
        sections={[
          {
            title: coolSculpTitle,
            body: coolSculpt,
          },
          {
            title: vanquishTitle,
            body: vanquish,
          },
          {
            title: emsculptTitle,
            body: emsculpt,
          },
          {
            title: laserTitle,
            body: laser,
          },
          {
            title: cuteraTitle,
            body: cutera,
          },
          // { title: fillerResultsTitle, body: fillerResultsBody },
        ]}
        currentPage={FeaturedServicesPages.body}
      />
    </Box>
  );
}
