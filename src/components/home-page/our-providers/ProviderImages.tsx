"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "../featured-services-home-page/FeaturedServiceCard";
import { CardImageProps } from "../../../interfaces/card-image-props";
import ImageCarousel from "../../animations/ImageCarousel";
import willaInfo from "../../../constants/our-providers/willa-roberts";
import { providerImageData } from "../../../constants/our-providers/image-data";

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
