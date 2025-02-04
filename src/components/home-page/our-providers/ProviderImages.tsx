"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "../featured-services-home-page/FeaturedServiceCard";
import { CardImageProps } from "../../../interfaces/card-image-props";
import ImageCarousel from "../../animations/ImageCarousel";
import { willaImageProps } from "../../../constants/our-providers/willa-roberts";

const data = [
  { image: "/featured-services/laser.png" },
  { image: "/featured-services/neurotoxins.png" },
  { image: "/featured-services/injection.png" },
  { image: "/featured-services/body/body-contour.png" },
];

const providerImageData: CardImageProps[] = [
  {
    title: "Adrienne Stewart, MD",
    link: "adrienne-stewart-md",
    altText: "Adrienne Stewart MD",
    src: "/providers/Adrienne.png",
    text: "Founder / Board Certified Dermatologist",
  },
  willaImageProps,
  {
    title: "Jodi Payne",
    link: "jodi-payne",
    altText: "Jodi Payne",
    src: "/providers/Jodi.png",
    text: "Master Coolsculpting Provider / Laser Technician / LMT",
  },
  {
    title: "Mia Kallevik",
    link: "mia-kallevik",
    altText: "Mia Kallevik MA",
    src: "/providers/Mia.png",
    text: "Medical Assistant",
  },
];
export default function ProviderImages() {
  const isLargeScreen = useMediaQuery("(min-width:900px)");
  return (
    <Box justifyContent="center" display="flex" sx={{ p: isLargeScreen ? 2 : 0 }}>
      {isLargeScreen ? (
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 4, lg: 2 }}
          sx={{ width: { sm: "100%", md: "80%", lg: "100%", xl: "80%" } }}
        >
          {providerImageData.map((provider, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              key={index}
            >
              <FeaturedServiceCard imageProps={provider} textColor="black" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <ImageCarousel images={providerImageData} />
      )}
    </Box>
  );
}
