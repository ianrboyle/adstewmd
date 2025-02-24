import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import { bodyContourMain, bodyTitle } from "../../../constants/treatments-and-services/body/body-contouring";
import { PageType } from "../../../constants/enums";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";

export default function BodyContour() {
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
        currentPage={PageType.body}
      />
    </Box>
  );
}
