import { Box, Divider, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import { PageType } from "../../../constants/enums";
import { faceImages } from "../../../constants/featured-services/face/face";
import FeaturedServicesSmallImagesGrid from "../individual-page-components/SmallImagesGrid";
export default function FaceProcedures() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/botox-long.png"
        altText="fraxel"
        objectPosition="center 50%"
      />
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          size={{ md: 12, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2rem", md: "2.25rem" },
                color: "text.secondary",
                whiteSpace: "normal",
                overflow: "hidden",
                mt: "1rem",
                mb: "1rem",
                p: 2,
              }}
            >
              All Face Procedures and Treatments
            </Typography>
            <FeaturedServicesSmallImagesGrid showTitle={false} imageProps={faceImages} />
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: "-1px", display: { xs: "none", lg: "block" } }}
        />
        <Grid
          size={{ md: 12, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServicesImageColumn currentPage={PageType.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
