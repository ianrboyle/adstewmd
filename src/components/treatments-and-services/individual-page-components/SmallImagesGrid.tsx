import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServicesSmallImageWithAnimation from "./SmallImageWithAnimation";
import { CardImageProps } from "../../../interfaces/card-image-props";

interface SmallImageProps {
  imageProps: CardImageProps[];
  showTitle: boolean;
}

export default function FeaturedServicesSmallImagesGrid({ imageProps, showTitle = true }: SmallImageProps) {
  return (
    <Box sx={{ p: 2, mb: "2rem" }}>
      {showTitle && (
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "2rem", md: "1.75rem" },
            fontWeight: "400",
            color: "text.secondary",
            mb: "1rem",
          }}
        >
          Our Products:
        </Typography>
      )}

      <Grid container spacing={4}>
        {imageProps.map((image, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <FeaturedServicesSmallImageWithAnimation
              text={image.title}
              link={image.link}
              imageSrc={image.src}
              altText={image.altText}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
