import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../../../components/featured-services/Description";
import FeaturedServiceBackgroundImage from "../../../components/featured-services/BackgroundImage";
import BotoxFeaturedServicesPage from "../../../components/featured-services/inidividual-pages/BotoxPage";
const botoxServices =
  " If you’re ready to reduce lines and wrinkles using simple cosmetic injections, see the specialists at Aesthetic Surgery and Dermatology of Cherry Creek in Denver, Colorado. Board-certified dermatologist Adrienne Stewart, MD, offers Botox®, Dysport®, Daxxify™, and Jeuveau® injections to take years off your appearance without pain or downtime. Call the office to learn more, or use the online booking feature today.";

const botoxServicesTitle = "Botox services offered in Cherry Creek, Denver, CO";

export default function Botox() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage imageSrc="/featured-services/botox-long.png" altText="botox" />
      <BotoxFeaturedServicesPage />
    </Box>
  );
}
