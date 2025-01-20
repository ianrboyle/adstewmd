import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../../../components/featured-services/Description";
import FeaturedServiceBackgroundImage from "../../../components/featured-services/BackgroundImage";
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
      <Grid container spacing={0}>
        <Grid size={{ md: 12, lg: 8 }}>
          <Box
            sx={{
              ml: { md: "2rem", lg: "3rem", xl: "6rem" },
              width: { sm: "100%", md: "95%", xl: "90%" },
              border: "1px solid black",
              p: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", md: "2.25rem" },
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                }}
              >
                Botox In Denver, CO
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.5rem",
                  color: "text.secondary",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                  lineHeight: "1.25",
                }}
              >
                Botox offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area
              </Typography>
            </Box>
            <FeaturedServiceDescription title={botoxServicesTitle} body={[botoxServices]} />
            <Box sx={{ p: 2 }}>
              <Divider
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  backgroundColor: "#e0e0e0",
                }}
                variant="middle"
              />
            </Box>
            <Box sx={{ p: 2, justifyContent: "left", display: "flex" }}>
              <Button sx={{ mr: "2.5rem" }}>Book Online</Button>
              <Button>303-333-6060</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
