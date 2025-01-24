import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import { bodyContourMain, bodyTitle } from "../../../../constants/featured-services/body-contouring";
import { FeaturedServicesPages } from "../../../../constants/enums";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";

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
        sections={[]}
        currentPage={FeaturedServicesPages.body}
      />
    </Box>
  );
}
