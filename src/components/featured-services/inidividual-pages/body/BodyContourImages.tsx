import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BodyContourImage from "./BodyContourImage";
interface ImageProps {
  imgSrc: string;
  imgTitle: string;
  altText: string;
  link: string;
}
interface FeaturedServiceDescriptionProps {
  title: string;
  body: string[]; // Accepts either a single string or an array of paragraphs
  imageProps: ImageProps;
}

export default function FeaturedServiceBodyContourImages({ title, body, imageProps }: FeaturedServiceDescriptionProps) {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
          <BodyContourImage
            text="LASER HAIR REMOVAL"
            link="laser-hair-removal"
            imageSrc="/featured-services/body/laser-hair-removal2.png"
            altText="laser hair removal"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
          <BodyContourImage
            text="COOLSCULPTING ELITE"
            link="body/coolsculpting"
            imageSrc="/featured-services/body/cool-sculpt.png"
            altText="coolsculpting"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
          <BodyContourImage
            text="EMSCULPT NEO"
            link="body/emsculpt"
            imageSrc="/featured-services/body/emsculpt.png"
            altText="emsculpt"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
          <BodyContourImage
            text="VANQUISH"
            link="body/vanquish"
            imageSrc="/featured-services/body/vanquish.png"
            altText="vanquish"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
          <BodyContourImage
            text="CUTERA LASER VEIN TREATMENT"
            link="body/cutera"
            imageSrc="/featured-services/body/cutera.png"
            altText="cutera"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
