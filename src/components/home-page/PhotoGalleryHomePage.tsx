import { Box, Button, Typography } from "@mui/material";
import OverlayComponent from "../Overlay";
import FadeUpAnimation from "../animations/FadeUpAnimation";
import Link from "next/link";
export default function PhotoGalleryHomePage() {
  return (
    <OverlayComponent
      backgroundImage="/photo-gallery.png"
      altText="background image"
      backgroundColor="rgba(0, 0, 0, 0.0)"
      borderRadius={{ xs: "0 0 0 0", md: "0 0 0 0" }}
      minHeight={{
        xs: "500px",
        sm: "700px",
        md: "900px",
        lg: "900px",
      }}
    >
      <>
        <FadeUpAnimation>
          <Box
            sx={{
              width: { sm: "100%", md: "100%" },
              position: "absolute",
              maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "40%" },
              right: { md: "auto", lg: 0 },
              height: "100%",
              backgroundColor: {
                xs: "rgba(245, 242, 242, 0.6)",
                sm: "rgba(245, 242, 242, 0.6)",

                md: "rgba(245, 242, 242, 0.6)",
                lg: "transparent",
              },
              p: 4,
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "1.5rem" },
                color: "text.secondary",
                fontWeight: "300",
                whiteSpace: "normal",
                overflow: "hidden",
                padding: 1,
                textAlign: "left",
              }}
            >
              BEFORE & AFTER
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "2.5rem" },
                color: "black",
                fontWeight: "300",
                whiteSpace: "normal",
                overflow: "hidden",
                padding: 1,
                textAlign: "left",
              }}
            >
              Photo Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontWeight: "400",
                whiteSpace: "normal",
                overflow: "hidden",
                padding: 1,
                textAlign: "left",
              }}
            >
              View our gallery of patient results for all of our state of the art procedures
            </Typography>
            <Link href="/photo-gallery">
              <Button sx={{ display: "flex", justifyContent: "flex-start" }}>View Gallery</Button>
            </Link>
          </Box>
        </FadeUpAnimation>
      </>
    </OverlayComponent>
  );
}
