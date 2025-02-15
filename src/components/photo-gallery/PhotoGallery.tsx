import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import PhotoGalleryImages from "./PhotoGalleryImages";
import { beforeAndAfterImages } from "../../constants/photo-gallery/before-and-after-images";
export default function PhotoGallery() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "35vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="about us"
          src="/why-choose-us.png"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
          }}
        />
      </Box>
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
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "500",
                  color: "text.secondary",
                }}
              >
                Before and After Photo Gallery
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  fontWeight: "300",
                  color: "black",
                  mb: "1rem",
                }}
              >
                Individual results may vary.
              </Typography>
            </Box>
            <PhotoGalleryImages imageProps={beforeAndAfterImages} />
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
