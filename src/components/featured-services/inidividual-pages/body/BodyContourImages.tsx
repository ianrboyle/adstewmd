import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BodyContourImage from "./BodyContourImage";

export default function FeaturedServiceBodyContourImages() {
  return (
    <Box sx={{ p: 2, mb: "2rem" }}>
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
            link="body/cutera-laser-vein-treatment"
            imageSrc="/featured-services/body/cutera.png"
            altText="cutera"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
