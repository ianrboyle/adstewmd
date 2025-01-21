import { Box, Typography, Divider, Button } from "@mui/material";
import FeaturedServiceDescription from "../Description";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../ImageColumn";
import { FeaturedServicesPages } from "../../../constants/enums";
import FeaturedServiceDescriptionPageHeading from "../DescriptionPageHeading";
import DividerWithContactButtons from "../DividerWithContactButtons";
const botoxServices =
  " If you’re ready to reduce lines and wrinkles using simple cosmetic injections, see the specialists at Aesthetic Surgery and Dermatology of Cherry Creek in Denver, Colorado. Board-certified dermatologist Adrienne Stewart, MD, offers Botox®, Dysport®, Daxxify™, and Jeuveau® injections to take years off your appearance without pain or downtime. Call the office to learn more, or use the online booking feature today.";

const botoxServicesTitle = "Botox services offered in Cherry Creek, Denver, CO";
const botoxPageHeadingTitle = "Botox In Denver, CO";
const botoxPageHeadingSubTitle =
  " Botox offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area";
export default function BotoxFeaturedServicesPage() {
  return (
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
          <FeaturedServiceDescriptionPageHeading title={botoxPageHeadingTitle} subtitle={botoxPageHeadingSubTitle} />

          <FeaturedServiceDescription title={botoxServicesTitle} body={[botoxServices]} />

          <DividerWithContactButtons />
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
        <FeaturedServicesImageColumn currentPage={FeaturedServicesPages.botox} />
      </Grid>
    </Grid>
  );
}
