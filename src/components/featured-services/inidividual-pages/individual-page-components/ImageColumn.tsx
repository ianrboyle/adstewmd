import { Box, Typography, Divider } from "@mui/material";
import FeaturedServicesImageWithAnimation from "./ImageWithAnimation";
import { PageType } from "../../../../constants/enums";

interface ImageColumnProps {
  currentPage: PageType;
}
export default function FeaturedServicesImageColumn({ currentPage }: ImageColumnProps) {
  return (
    <Box
      sx={{
        width: { md: "50%", lg: "100%", xl: "85%" },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2rem", md: "2.25rem" },
            color: "black",
            whiteSpace: "normal",
            overflow: "hidden",
            mt: "1rem",
            textAlign: { md: "center", lg: "left" },
          }}
        >
          Our Featured Services
        </Typography>

        <Divider
          sx={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: "secondary.main",
            height: 2,
          }}
          variant="middle"
        />
      </Box>
      {currentPage !== PageType.botox && (
        <FeaturedServicesImageWithAnimation
          text="NEUROTOXINS"
          link="injectables/botox"
          imageSrc="/featured-services/neurotoxins2.png"
          altText="botox"
        />
      )}
      {currentPage !== PageType.fillers && (
        <FeaturedServicesImageWithAnimation
          text="FILLERS"
          link="injectables/fillers"
          imageSrc="/featured-services/fillers2.png"
          altText="fillers"
        />
      )}
      {currentPage !== PageType.body && (
        <FeaturedServicesImageWithAnimation
          text="BODY CONTOURING"
          link="body"
          imageSrc="/featured-services/body/body-contour2.png"
          altText="body contouring"
        />
      )}

      {currentPage !== PageType.laser && (
        <FeaturedServicesImageWithAnimation
          text="LASERS"
          link="laser-hair-removal"
          imageSrc="/featured-services/lasers2.png"
          altText="lasers"
        />
      )}
    </Box>
  );
}
