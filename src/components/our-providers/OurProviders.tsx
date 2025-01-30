import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceCard from "../featured-services/FeaturedServiceCard";
import ProvidersCarousel from "./ProvidersCarousel";
import { ImageProps } from "../../interfaces/featured-services-image-props";
const data = [
  { image: "/featured-services/laser.png" },
  { image: "/featured-services/neurotoxins.png" },
  { image: "/featured-services/injection.png" },
  { image: "/featured-services/body/body-contour.png" },
];

const providerImageData: ImageProps[] = [
  {
    text: "Adrienne Stewart, MD",
    link: "adrienne-stewart-md",
    altText: "Adrienne Stewart MD",
    src: "/providers/Adrienne.png",
  },
  {
    text: "Adrienne Stewart, MD",
    link: "adrienne-stewart-mg",
    altText: "Adrienne Stewart MD",
    src: "/providers/Adrienne.png",
  },
  {
    text: "Adrienne Stewart, MD",
    link: "adrienne-stewart-mg",
    altText: "Adrienne Stewart MD",
    src: "/providers/Adrienne.png",
  },
  {
    text: "Adrienne Stewart, MD",
    link: "adrienne-stewart-mg",
    altText: "Adrienne Stewart MD",
    src: "/providers/Adrienne.png",
  },
];
export default function OurProviders() {
  return (
    <Box
      sx={{
        textAlign: "left",
        padding: 2,
        marginTop: { sm: "0rem", md: "5rem" },
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          ml: { xs: "0", sm: "0", md: "10rem" },
          mt: 0,
          width: { xs: "100%", sm: "100%", md: "50%" },
        }}
      >
        <Typography variant="h1" sx={{ typography: { xs: "h4", md: "h1" }, color: "#301b40" }}>
          Meet Our Highly Trained Providers
        </Typography>
      </Box>
      <Box justifyContent="center" display="flex">
        <Grid container spacing={2} sx={{ width: { sm: "100%", md: "80%", lg: "100%", xl: "80%" } }}>
          {providerImageData.map((provider, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              key={index}
            >
              <FeaturedServiceCard title={provider.text} imageSrc={provider.src} link={provider.link} />
            </Grid>
          ))}
        </Grid>
      </Box>{" "}
    </Box>
  );
}
