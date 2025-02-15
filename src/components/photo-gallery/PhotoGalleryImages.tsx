import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CardImageProps } from "../../interfaces/card-image-props";
import BeforeAndAfterImageWithAnimation from "./BeforeAndAfterImageWithAnimation";

interface SmallImageProps {
  imageProps: CardImageProps[];
}

export default function PhotoGalleryImages({ imageProps }: SmallImageProps) {
  return (
    <Box sx={{ p: 2, mb: "2rem" }}>
      <Grid container spacing={4}>
        {imageProps.map((image, index) => (
          <Grid key={index} size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <BeforeAndAfterImageWithAnimation imageProps={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
